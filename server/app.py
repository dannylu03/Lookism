from cProfile import label
import csv
import pandas as pd
import numpy as np
import re

from gensim import utils
from gensim.models.doc2vec import TaggedDocument
from gensim.models import Doc2Vec
from sklearn.decomposition import TruncatedSVD

from sklearn.metrics.pairwise import cosine_similarity
from sklearn.metrics import accuracy_score
from sklearn.feature_extraction.text import CountVectorizer, TfidfVectorizer
from nltk.corpus import stopwords


# def preprocess(df):
#     df["id"] = [str(i) for i in range(df.shape[0])]
#     labeled_data = []

#     for index, row in df.iterrows():
#         labeled_data.append(TaggedDocument(row["tags"], df[df.index == index].id))

#     return labeled_data


# def train_lookism_model(labled_data):
#     model = Doc2Vec(dm=1, min_count=1, window=10, size=150, sample=1e-4, negative=10)
#     model.build_vocab(labeled_data)

#     for epoch in range(20):
#         model.train(labeled_data, epochs=model.iter, total_examples=model.corpus_count)
#         print(f"Epoch {epoch}")

#     return model


def vectorize(df):
    # stop = list(stopwords.words("english"))

    tfidf = TfidfVectorizer(max_features=5000, analyzer="word")
    vectorized_data = tfidf.fit_transform(df["tags"])
    count_matrix = pd.DataFrame(
        vectorized_data.toarray(), index=df["tags"].index.tolist()
    )
    print(vectorized_data)
    print(count_matrix)
    print(tfidf.get_feature_names_out())

    svd = TruncatedSVD(n_components=6)
    reduced_data = svd.fit_transform(count_matrix)

    similarity = cosine_similarity(reduced_data)
    print(similarity)

    return similarity

    # # Outfits with less tags have a lower probability of being recommended later.
    # # Recommendors produce better results if length of description is somewhat balanced
    # # Add tag length to the dataframe
    # # df["outfit_id"] = [str(i) for i in range(df.shape[0])]
    # df["id"] = [str(i) for i in range(df.shape[0])]
    # df["outfit_id"] = [str(i) for i in range(df.shape[0])]
    # df = df.set_index(df["id"].str.strip().replace(", ", "").astype(int))
    # df["tag_length"] = df["tags"].apply(lambda x: len(x))
    # tags = []
    # print(df)

    # for index, row in df.iterrows():
    #     # print(index, row["tags"])
    #     tags.append(row["tags"])

    # tags = flatten_list(tags)

    # # Create vector matrix
    # # Approach: TFidf Vectorizer - Frequency-Inverse Document Frequency
    # # Considers overall word frequencies and weighs the general importance of words when spanning the vectors
    # # Determines which words are more important than others to improve model performance
    # tfidf = TfidfVectorizer(max_features=5000, analyzer="word")
    # vectorized_data = tfidf.fit_transform(tags)
    # count_matrix = pd.DataFrame(vectorized_data.toarray(), index=tags)
    # # print(df)
    # # print(tfidf.get_feature_names_out())
    # svd = TruncatedSVD(n_components=4)
    # reducted_data = svd.fit_transform(count_matrix)
    # return count_matrix, df


def get_recommendations(df, outfit_id, cosine_sim):
    outfit_index = df[df.outfit_id == outfit_id].index.values[0]
    print(outfit_index)

    n = 15
    sim_scores_all = sorted(
        list(enumerate(cosine_sim[outfit_index])), key=lambda x: x[1], reverse=True
    )

    if n > 0:
        sim_scores_all = sim_scores_all[1 : n + 1]

    print(sim_scores_all)
    outfit_indices = [i[0] for i in sim_scores_all]
    scores = [i[1] for i in sim_scores_all]

    top_outfits_df = pd.DataFrame(df.iloc[outfit_indices]["outfit_id"])
    top_outfits_df["sim_scores"] = scores
    top_outfits_df["ranking"] = range(1, len(top_outfits_df) + 1)
    print(outfit_indices)
    print(scores)

    return top_outfits_df, sim_scores_all


def calculate_similarity_score(count_matrix):
    similarity = cosine_similarity(count_matrix)
    return similarity


def preprocess(df):
    df["id"] = [str(i) for i in range(df.shape[0])]
    # labeled = []

    # for index, row in df.iterrows():
    #     labeled.append(row["tags"], df[df.index == index].id)


def train_lookism_model(data):
    model = Doc2Vec(dm=1, min_count=1, window=10, size=150, sample=1e-4, negative=10)
    model.build_vocab(data)

    for epoch in range(20):
        model.train(data, epochs=model.iter, total_examples=model.corpus_count)
        print(f"Epoch {epoch}")

    return model


def create_csv():
    header = ["outfit_id", "tags"]

    data = [
        {"outfit_id": 0, "tags": "streetwear, korean, smt"},
        {"outfit_id": 1, "tags": "sss, anything, smt, boobs"},
        {"outfit_id": 2, "tags": "asdasd, emo, korean, boobs"},
        {"outfit_id": 3, "tags": "sss, anything, smt, streetwear"},
        {"outfit_id": 4, "tags": "sss, anything, smt, boobs"},
    ]

    with open("server/data.csv", "w") as file:
        writer = csv.DictWriter(file, fieldnames=header)
        writer.writeheader()
        writer.writerows(data)


if __name__ == "__main__":
    create_csv()
    db_df = pd.read_csv("server/data.csv")
    print(db_df)

    preprocess(db_df)
    similarity = vectorize(db_df)
    # get_recommendations(db_df, )

    outfits_liked = ["0", "2"]
    print(db_df)
    user_scores = pd.DataFrame(db_df["outfit_id"])
    user_scores["sim_scores"] = 0.0

    for outfit_id in outfits_liked:
        top_outfits_df, _ = get_recommendations(db_df, int(outfit_id), similarity)
        user_scores = (
            pd.concat([user_scores, top_outfits_df[["outfit_id", "sim_scores"]]])
            .groupby(["outfit_id"], as_index=False)
            .sum({"sim_scores"})
        )

    top_outfits_per_user_df = user_scores.sort_values(by="sim_scores", ascending=False)[
        1:20
    ]
    print(top_outfits_per_user_df)
