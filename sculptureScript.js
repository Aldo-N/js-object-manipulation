const sculptureList = require('./data.js'); // import data.js

/* const element = sculptureList[1] // <---- comment out this line in your solution!


// this following snippet is just to show how to iterate an object's keys
// comment this out in your solution!
for (const key in element){
    console.log(`${key}: ${element[key].length}`)
} */

const sculptureListLengths = {
    name: null,
    artist: null,
    description: null,
    url: null,
    alt: null

};

const sculptureArr = []

let counter = 0;

objectAssignment(counter);

function objectAssignment(idx) {


    for (const item of sculptureList) {
        //let sculpture = {};

        sculpture = Object.assign({}, sculptureList[idx]);

        sculptureArr.push(sculpture);

        console.log(`{\n\nname: ${sculptureArr[idx].name.length},\n\nartist: ${sculptureArr[idx].artist.length},\n`)
        console.log(`description: ${sculptureArr[idx].description.length},\n\nurl: ${sculptureArr[idx].url.length},\n`)
        console.log(`alt: ${sculptureArr[idx].alt.length}\n\n}`)


        idx += 1
    }

}




