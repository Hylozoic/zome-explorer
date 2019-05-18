require('dotenv').config()
const fs = require('fs');
const dnaDestination = 'src/dna/dna-metadata.json'

var dnaPath = process.argv[2] || process.env.DNA_FILE_PATH

if (!dnaPath) {
  // try and find path to dna in parent folder
  dnaPath = '/path/to/dna/yar'
}

const dnaFile = fs.readFileSync(dnaPath, "utf8");

const dnaJson = JSON.parse(dnaFile)

// strip code from json
const dnaMetadata = JSON.stringify(dnaJson, (k, v) => (k === 'code') ? undefined : v)

fs.writeFileSync(dnaDestination, dnaMetadata, 'utf8')
