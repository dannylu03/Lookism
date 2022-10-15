import Card from "../models/card.model.js";
import User from "../models/user.model.js";

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
    const tags = req.body.tags

    const cardExists = await Card.findOne({name})

    if(cardExists){
        res.status(400).json("Card already exists")
    }

    const card = await Card.create({
        name,
        img,
        clothinglist,
        user: req.user.id,
        tags
    })

    try {
        res.status(200).json(card)

    } catch{
        res.status(400).json('Invalid card data')
    }
}

export const getCardId = async (req, res) => {
    try {
        const card = await Card.find({user: req.user.id})

        res.status(200).json(card);
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const deleteCard = async (req, res) => {
    const card = await Card.findById(req.params.id)

    if (!card) {
      res.status(400)
      throw new Error('Goal not found')
    }
  
    const user = await User.findById(req.user.id)
  
    // Check for user
    if (!user) {
      res.status(401).json('User not found')
    }
  
    if (card.user.toString() !== req.user.id) {
      res.status(401).json('User not authorized')
    }

    await card.remove()

    res.status(200).json({ id: req.params.id})
  

    
}
export const updateCard = async (req, res) => {

    const card = await Card.findById(req.params.id)

    if (!card) {
      res.status(400)
      throw new Error('Card not found')
    }

    const user = await User.findById(req.user.id)
  
    // Check for user
    if (!user) {
      res.status(401).json('User not found')
    }
  
    if (card.user.toString() !== req.user.id) {
      res.status(401).json('User not authorized')
    }
  
    const updatedCard = await Card.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })

    res.status(200).json(updatedCard)

    
}

 