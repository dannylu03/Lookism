import { PythonShell } from "python-shell";

let options = {
  args: [["0", "2"]],
};

let output = [];

PythonShell.run("script_test.py", options, (err, res) => {
  if (err) console.log(err);
  if (res) {
    console.log(res);
    output.push(res);
  }
});
