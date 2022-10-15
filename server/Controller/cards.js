import Card from "../models/card.model.js";

export const getCards = async (req, res) => {
    try {
        const cards = await Card.find();

        res.status(200).json(cards);
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const createCard = async (req, res) => {
    const card = req.body;

    const newCard = new Card(card);
    try {
        await newCard.save();

        res.status(201).json(newCard);
    } catch (err) {
        res.status(409).json({ message: err.message })
    }
}

export const getCardId = async (req, res) => {
    try {
        const card = await Card.findById(req.params.id)

        res.status(200).json(card);
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const deleteCard = async (req, res) => {
    try {
        const card = await Card.findByIdAndDelete(req.params.id)
        
        res.status(200).json(card);
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const updateCard = async (req, res) => {

    try{

        const updatedUser = await Card.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        })
        
        res.status(200).json(updatedUser)
    } catch(error){
        res.status(404).json({ message: error.message })
    }

    
}

 