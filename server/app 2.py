from cProfile import label
import json
from random import sample
import pandas as pd
import numpy as np

from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
from sklearn.decomposition import TruncatedSVD
from nltk.corpus import stopwords
from gensim.models.doc2vec import TaggedDocument
from gensim.models import Doc2Vec

""" Model Steps:
1. Create container of keywords from input data - list of words to characterize the items. 
2. Convert data into feature vector (TF-DIF/Count Vectorizer algorithm). The result is a vector matrix
   with items as records and features as columns. 
3. Assign similarity scores through pairwise comparisons. (Cosine Similarity)
4. With similarity scores, return most similar items by sorting data by similarity scores.  

"""
user_data = """
{
    "id1": { "tags": ["streetwear", "korean"]},
    "id2": { "tags": ["idklol", "stuff"] },

}
"""

outfit_data = """
{
    "0": { "tags": ["streetwear", "korean"]},
    "1": { "tags": ["idklol", "stuff"] },

}
"""


def flatten_list(arr):
    flattened_array = []

    for tag in arr:
        if type(tag) is list:
            for item in tag:
                flattened_array.append(item)
        else:
            flattened_array.append(tag)

    return flattened_array


def vectorize(df):
    # Outfits with less tags have a lower probability of being recommended later.
    # Recommendors produce better results if length of description is somewhat balanced
    # Add tag length to the dataframe
    # df["outfit_id"] = [str(i) for i in range(df.shape[0])]
    df["id"] = [str(i) for i in range(df.shape[0])]
    df["outfit_id"] = [str(i) for i in range(df.shape[0])]
    df = df.set_index(df["id"].str.strip().replace(", ", "").astype(int))
    df["tag_length"] = df["tags"].apply(lambda x: len(x))
    tags = []
    print(df)

    for index, row in df.iterrows():
        # print(index, row["tags"])
        tags.append(row["tags"])

    tags = flatten_list(tags)

    # Create vector matrix
    # Approach: TFidf Vectorizer - Frequency-Inverse Document Frequency
    # Considers overall word frequencies and weighs the general importance of words when spanning the vectors
    # Determines which words are more important than others to improve model performance
    tfidf = TfidfVectorizer(max_features=5000, analyzer="word")
    vectorized_data = tfidf.fit_transform(tags)
    count_matrix = pd.DataFrame(vectorized_data.toarray(), index=tags)
    # print(df)
    # print(tfidf.get_feature_names_out())
    svd = TruncatedSVD(n_components=4)
    reducted_data = svd.fit_transform(count_matrix)
    return count_matrix, df


def get_recommendations(df, outfit_id, cosine_sim):
    print(df.id)
    outfit_index = df[df.index == outfit_id].outfit_id.values[0]
    n = 3
    sim_scores = sorted(
        list(enumerate(cosine_sim[int(outfit_index)])), key=lambda x: x[1], reverse=True
    )[1 : n + 1]

    print(cosine_sim)
    outfit_indices = [i[0] for i in sim_scores]
    scores = [i[1] for i in sim_scores]
    print(sim_scores)

    print(outfit_indices)

    top_outfits_df = pd.DataFrame(df.loc[outfit_indices]["outfit_id"])
    top_outfits_df["sim_scores"] = scores

    print("s")
    print(scores)
    print(outfit_index)


def calculate_similarity_score(count_matrix):
    similarity = cosine_similarity(count_matrix)
    return similarity


def preprocess(df):
    df["id"] = [str(i) for i in range(df.shape[0])]
    labeled = []

    for index, row in df.iterrows():
        labeled.append(row["tags"], df[df.index == index].id)


def train_lookism_model(data):
    model = Doc2Vec(dm=1, min_count=1, window=10, size=150, sample=1e-4, negative=10)
    model.build_vocab(data)

    for epoch in range(20):
        model.train(data, epochs=model.iter, total_examples=model.corpus_count)
        print(f"Epoch {epoch}")

    return model


if __name__ == "__main__":
    user_df = pd.read_json(user_data, orient="index")
    db_df = pd.read_json(outfit_data, orient="index")

    # print(db_df)

    count_matrix, updated_df = vectorize(db_df)
    similarity_scores = calculate_similarity_score(count_matrix)

    recommended_outfits = get_recommendations(updated_df, 1, similarity_scores)
    print(recommended_outfits)

    # labeled questions = preprocess(df)
    # model = train_lookism_model(labeled_questions)
