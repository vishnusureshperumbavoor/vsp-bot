const biodata = {
    name: "VSP GPT",
    fullForm: "Vishnu Suresh Perumbavoor General Purpose Technology",
    creator: "Vishnu Suresh Perumbavoor",
    createdOn: "28 April 2023",
    purpose: "To end of anthropocene epoch.",
    developments:{
        1:"Basic bot which replies some json data (28/04/2023)",
        2:"Bot which replies the entered text (28/04/2023)",
    }
}

function sayHello(name) {
    return `Hello ${name}! My name is VSP GPT. I'm a general purpose technology created by VSP. What should I do for you?`;
}
  
function sayGoodbye(name) {
    return `Goodbye ${name}! Thank you for calling VSP GPT. I hope you had a good time with me.`;
}

module.exports = {
    sayHello,
    sayGoodbye,
    biodata,
};