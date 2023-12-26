const fs = require('fs');
const crypto = require('crypto');

const packageJsonPath = './package.json';
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

fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
console.log(`Version updated to ${newVersion}`);
