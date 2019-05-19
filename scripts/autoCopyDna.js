require('dotenv').config()
const nodemon =  require('nodemon')

if (!process.env.DNA_FILE_PATH) {
  console.error('please specify a DNA_FILE_PATH in .env')
  process.exit(1)
}

nodemon({
  verbose: true,
  script: 'scripts/copyDnaMetadata.js',
  watch: process.env.DNA_FILE_PATH
})

nodemon.on('start', function () {
  console.log(`Listening for changes to ${process.env.DNA_FILE_PATH}`);
}).on('quit', function () {
  process.exit();
}).on('restart', function () {
  console.log('Rebuilding dna metadata');
});
