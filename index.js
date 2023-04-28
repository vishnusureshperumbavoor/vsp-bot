const biodata = {
    name: "VSP Bot",
    creator: "Vishnu Suresh Perumbavoor",
    createdOn: "28 April 2023",
    purpose: "We are witnessing the end of anthropocene epoch. This automated bot is created to take advantage of this technological revolution.",
    developments:{
        1:"Basic bot which replies some json data (28/04/2023)",
        2:"Bot which replies the entered text (28/04/2023)",
    }
}

function sayHello(name) {
    return `Hello ${name}! My name is VSP Bot. Created by VSP. What should I do for you?`;
}
  
function sayGoodbye(name) {
    return `Goodbye ${name}! Thank you for calling VSP Bot. I hope you had a good time with me.`;
}
  
module.exports = {
    sayHello,
    sayGoodbye,
    biodata,
};