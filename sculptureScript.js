const sculptureList = require('./data.js'); // import data.js

/* const element = sculptureList[1] // <---- comment out this line in your solution!


// this following snippet is just to show how to iterate an object's keys
// comment this out in your solution!
for (const key in element){
    console.log(`${key}: ${element[key].length}`)
} */

let sculptureListLengths = {
    name:'',
    artist:'',
    description:'',
    url:'',
    alt:''

};

const sculptureArr = []

let counter = 0;
let counterTwo = 0;

objectAssignment(counter);

function  objectAssignment(idx) {
    for (const item in sculptureList) {
        var sculpture = Object.create(sculptureListLengths);

        Object.assign(sculpture, item);
        /*sculpture.name = sculptureList.name;
        sculpture.artist = sculptureList.artist;
        sculpture.description = sculptureList.description;
        sculpture.url = sculptureList.url;
        sculpture.alt = sculptureList.alt;*/

        sculptureArr.push(sculpture);

        

        counter += 1
    }

}

objectPrinting(counterTwo);

function objectPrinting (idx) {

    for (const key of sculptureArr) {

            console.log(`${key}: ${sculptureArr[key].length()}`)

        
    }


}


