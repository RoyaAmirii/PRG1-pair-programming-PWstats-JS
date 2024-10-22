const fs = require("fs"); /*This line imports the file system module which provides an API to interact with the 
file system (reading, writing, updating files, etc.). It allows you to read from and write to files.*/

const inputFile = "10000-common-passwords.csv"; /*This defines a constant inputFile that holds the name of the file to be read.
 The file "10000-common-passwords.csv" contains data, in this case, a list of common passwords in CSV 
 (Comma-Separated Values) format. */
const outputFile = "statistics.csv"; /*specifies the name of the file where the output (statistics) will be written to.
 Also be in CSV format.*/
const delimiter = ",";

function deleteExistingOutputFile() {
  if (fs.existsSync(outputFile)) {
    fs.unlinkSync(outputFile);
  }
}

function processData() {
  const data = fs.readFileSync(inputFile, "utf-8");
  const lines = data.split(/\n/);
  let totalPasswordLength = 0; //Let creates the variable
 

  for (let line of lines) {
    const elements = line.split(delimiter);
    const password = elements [0] //elements of the password(uppercase, lowercase, numbers)
    const passwordLength = password.length; //this line calculates the length of the extracted password string
    console.log(elements);
    totalPasswordLength += passwordLength; // Add the password length to the total
  }

}

// Main execution
deleteExistingOutputFile(); 
processData();
