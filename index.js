// load fake virtual env
require("dotenv").config();

const fs = require('fs');

console.log('-----------');
console.log("Args:", process.argv);
console.log("RAPPI_INPUT_METADATA_PATH:", process.env.RAPPI_INPUT_METADATA_PATH);
console.log("RAPPI_INPUT_DATA_PATH:", process.env.RAPPI_INPUT_DATA_PATH);
console.log("RAPPI_OUTPUT_METADATA_PATH:", process.env.RAPPI_OUTPUT_METADATA_PATH);
console.log("RAPPI_OUTPUT_DATA_PATH:", process.env.RAPPI_OUTPUT_DATA_PATH);
console.log('-----------');

const inpMetadata = require(process.env.RAPPI_INPUT_METADATA_PATH),
      inpData = require(process.env.RAPPI_INPUT_DATA_PATH);
  
console.log('input metadata:', inpMetadata);
console.log("input data:", inpData);

// Changing metadata and data...
const outMetadata = Object.assign(inpMetadata, { ts: Date.now() }),
      outData = [{ ts: Date.now() }].concat(inpData, inpData, inpData);

console.log("output metadata:", outMetadata);
console.log("output data:", outData);

fs.writeFileSync(process.env.RAPPI_OUTPUT_METADATA_PATH, JSON.stringify(outMetadata, null, 2));
fs.writeFileSync(process.env.RAPPI_OUTPUT_DATA_PATH, JSON.stringify(outData, null, 2));


if (process.env.WAIT_TIME) {
  setTimeout(() => {
    console.log("->", "end.......");
  }, parseInt(process.env.WAIT_TIME));
  
  return;
}

console.log('->', 'end...');
