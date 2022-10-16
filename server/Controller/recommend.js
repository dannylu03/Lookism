import CardData from "../models/cardsdata.model.js";
import asyncHandler from "express-async-handler";

export const recommendOutfits = async (req, res) => {
  var dataToSend;

  const python = spawn("python3", ["server/app.py"]);

  // Get data from script
  python.stout.on("data", function (data) {
    dataToSend = data.toString();
  });

  python.on("exit", (code) => {
    res.sendFile(`${__dirname}/public/result.html`);
  });
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
