const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const { exec } = require('child_process'); // Import exec from child_process

// Correctly resolve the path to package.json
const packageJsonPath = path.join(__dirname, '..', 'package.json');
const packageJson = require(packageJsonPath);

// Function to generate a short hash
function generateHash() {
  return crypto.randomBytes(6).toString('hex');
}

// Extract the numbered version and append the hash
const currentVersionParts = packageJson.version.split('-')[0];
const hash = generateHash();
const newVersion = `${currentVersionParts}-${hash}`;

packageJson.version = newVersion;

// Write the updated package.json back to file
fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
console.log(`Version updated to ${newVersion}`);

exec("npm run build && npm publish --registry http://localhost:4873", (error, stdout, stderr) => {
  if (error) {
    console.error(`Error executing publish to Verdaccio: ${error}`);
    return;
  }
  if (stderr) {
    console.error(`Error while publishing to Verdaccio: ${stderr}`);
    return;
  }
  console.log(`Verdaccio published: ${stdout}`);
});
