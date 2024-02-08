let divs = document.querySelectorAll('.div');

// for (let x of divs) {
//     console.log(x.children[0].innerText ); // Accesses the second child element of divs
// }
let x=divs[0].childNodes;
console.log(x[2].innerHtml);

// for (let div of divs) {
//     let x = div.childNodes;
//     console.log(x);
// }