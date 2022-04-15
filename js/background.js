const images = [
    "1.jpg",
    "2.jpg",
    "3.jpg"
];


const chosenImage = images[Math.floor(Math.random() * images.length)];
// console.log(Math.floor(Math.random() * 3));

const background = document.createElement("img");

background.src=`/img/${chosenImage}`;

document.body.appendChild(background);