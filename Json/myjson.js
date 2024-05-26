// JSON (JavaScript Object Notation) is a lightweight data-interchange format.
//   Easy for machines to parse and generate.
//   Can convert any JavaScript object into JSON, and send JSON to the server.
//   Natively supported by all modern browsers
//   A text format that is completely language independent.
//
//     JSON values
// number (integer or floating point)
// string (double quotes)
// boolean ( ture or false)
// array (square brackets)
// object (curly braces)
// null

const jsonString = `
 {
  "window": {
        "title": "Sample Widget",
        "width": 500,
        "height": 500
    },
    "image": {
        "src": "images/logo.png",
        "coords": [250, 150, 350, 400],
        "alignment": "center"
    },
    "messages": [
        { "text": "Save", "offset": [10, 30] },
        { "text": "Help", "offset": [0, 50] },
        { "text": "Quit", "offset": [30, 10] },
        { "text": "Quit", "offset": [30, 60] }
    ],
    "debug": true,
    "hi": null
 }
`;
const obj = JSON.parse(jsonString);
console.log(obj.messages.length); //4
console.log(obj.messages);
console.log(obj.messages.at(-1));
//{ text: 'Quit', offset: [ 30, 60 ] }