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

    const name = req.body.name
    const img = req.body.img
    const clothinglist = req.body.clothinglist
    const user = req.body.user
    const tags = req.body.tags

    const cardExists = await Card.findOne({name})

    if(cardExists){
        res.status(400).json("Card already exists")
    }

    const card = await Card.create({
        name,
        img,
        clothinglist,
        user,
        tags
    })

    if (card) {
        res.status(201).json({
        _id: card.id,
        name: card.name,
        img: card.img,
        clothinglist: card.clotheslist,
        user: card.user,
        tags: card.tags
        
        })
    } else {
        res.status(400).json('Invalid card data')
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

 