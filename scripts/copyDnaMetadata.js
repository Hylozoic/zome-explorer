require('dotenv').config()
const fs = require('fs');
const dnaDestination = 'src/dna/dna-metadata.json'

var dnaPath = process.argv[2] || process.env.DNA_FILE_PATH

if (!dnaPath) {
  console.error('please provide path to dna.json as first command line arg or as DNA_FILE_PATH in .env')
}

const dnaFile = fs.readFileSync(dnaPath, "utf8");

const dnaJson = JSON.parse(dnaFile)

// strip code from json
// FIXME: this is very naive. It just strips any field with the key 'code', so it
// will hide zomes, functions, and inputs called 'code'.
const dnaMetadata = JSON.stringify(dnaJson, (k, v) => (k === 'code') ? undefined : v)

fs.writeFileSync(dnaDestination, dnaMetadata, 'utf8')
