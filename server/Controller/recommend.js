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
