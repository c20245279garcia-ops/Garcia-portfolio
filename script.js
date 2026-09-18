console.log ("Hello, World!");
console.log ("From script.js file.");

const myName= "franz Garcia";
let age = 20;


console.log(`Name : ${myName}`);
console.log(`age : ${age}years old`);

function greet (greetings,name=[]){
    if(Array.isArray(name)){
        name = name.join(",");
        return `${greetings} welcome, ${name}`;
    }
}
console.log(greet("welcome",["franz","cake","chocomoist","yemacake","brownies"]));

const heading = document.querySelector("h1");
heading.textContent = "Franz Garcia";
heading.style.color = "lightblue";
heading.style.backgroundColor = "white";
heading.style.fontSize = "60px";
console.log(heading);

heading.addEventListener("click",function(){
    heading.style.color= "white";
    console.log("Heading was clicked!");
});
    const contactHeading = document.query("#contact h2");
    console.log(contactHeading);

    const serviceHeading = document.querySelector("#services h2");
    console.log(serviceHeading);

    const toggleButton = document.querySelector ("#switch");
    const bodu = document.querySelector("body");
    let isOff= false;

    toggleButton.addEventListener("click",function(){
        isOff= !isOff;

        if(isOff){
            body.style.backgroundColor = "lightblue";
            body.style.color = "white";
        } else{
            body.style.backgroundColor = "white";
            body.style.color = "lightblue";
        }
    })