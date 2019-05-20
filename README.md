# Zome Explorer

Zome explorer is a gui tool for examining and calling running zomes in a [Holochain](https://github.com/holochain/holochain-rust) conductor.

![example of running gui](https://user-images.githubusercontent.com/891124/57994798-1ba76780-7a7c-11e9-8d0d-2fbec039b923.png)

## Installation

Clone the repo with

`git clone https://github.com/Hylozoic/zome-explorer.git`

then

```
cd zome-explorer
yarn install
```

## Configuration

Create a .env file in the project root with the following values

```
DNA_FILE_PATH=/path/to/dna.json
REACT_APP_ZOME_WEBSOCKET_URL=ws://localhost:[yourport]
```

Find the dna.json in the dna folder of your holochain project, once you've built it.
To get the websocket url, add the following to your conductor config, replacing \[yourport\] with a port number and \[yourinstanceid\] with the instance id specified elsewhere in the conductor config

```
[[interfaces]]
id = "websocket_interface"

    [[interfaces.instances]]
    id = [yourinstanceid]

    [interfaces.driver]
    type = "websocket"
    port = [yourport]
```

### load the dna
Run

`npm run load-dna`

to copy the dna of your project into zome-explorer. (it removes the code from the copies, because we don't need the code, making everything run faster).

Running

`npm run autoload-dna`

instead will watch for changes to the dna in the Holochain project and is better if you're making changes to the Holochain project.

### Start the gui

Finally

`npm start`

will start the app, and serve it on localhost:3000, or the nearest available port. 

## Usage

In the GUI, you provide the instance id of your running dna instance, which you can find in your conductor config.
Now you can look at the zomes listed on the left. Click on a zome to see all public functions of that zome, together with function signature. Enter JSON in the textarea and hit call to call a given function. The JSON should match the structure of the expected inputs.

A history of all function calls in this session is maintained in the right column, so you can easily use results of one call in the next.

Enjoy!
