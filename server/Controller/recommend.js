import { PythonShell } from "python-shell";
import CardData from "../models/cardsdata.model.js";
import asyncHandler from "express-async-handler";

export const recommendOutfits = async (req, res) => {
  // Give me 5 indices to work with which the user likes
  // Feed those to the script as an option argument
  // Generate the next top 5 outfits as a response back
  let options = {};

  let pyshell = new PythonShell("my_script.py");
  pyshell.run("server/app.py");
};

export const createData = asyncHandler (async (req, res)=>{
  const data = req.body.data;

  const carddata = await CardData.create({
    data
  });

  try {
    res.status(200).json(carddata);
  } catch {
    res.status(400).json("Invalid card data");
  }

})
