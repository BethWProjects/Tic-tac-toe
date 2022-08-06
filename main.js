 //file that contains all DOM related JavaScript

//query selectors
var tiles = document.getElementById('tiles')

//data

//event listeners
//event listener for playGame function on click
tiles.addEventListener('click', playGame);

//functions
function playGame(){
    console.log('hello')
}

//function to update the dom using using innerHTML
// function playGame(){
// //innderHTML code to add image on click
// `<table class="game-box">
//   <tbody>
//   <tr class="squares">
//     <td class="square-1"></td>
//     <td class="square-2">${player.id or player.token}</td>
//     <td class="square-3"></td>
//   </tr>
//   <tr>
//     <td class="square-4"></td>
//     <td class="square-5"></td>
//     <td class="square-6"></td>
//   </tr>
//   <tr>
//     <td class="square-7"></td>
//     <td class="square-8"></td>
//     <td class="square-9"></td>
//   </tr>
//   </tbody>
// </table>`
// }
