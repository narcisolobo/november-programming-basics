var name = "Mike";
var phrase = "how are you?";

console.log("Hello, " + name + ", I wanted to ask: " + phrase);
console.log(`Hello, ${name}, I wanted to ask: ${phrase}`);

var hours = new Date().getHours();
if(hours > 17){
    console.log("good evening");
}
console.log(`Date and time is: ${new Date().toTimeString()}`);