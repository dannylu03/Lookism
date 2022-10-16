import { PythonShell } from "python-shell";

export const addOutfits = async (req, res) => {};

export const recommendOutfits = async (req, res) => {
  // Give me 5 indices to work with which the user likes
  // Feed those to the script as an option argument
  // Generate the next top 5 outfits as a response back
  let options = {};

  let pyshell = new PythonShell("my_script.py");
  pyshell.run("server/app.py");
};
