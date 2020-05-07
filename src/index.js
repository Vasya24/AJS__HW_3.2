let chars = [
    {name: 'мечник', health: 10},
    {name: 'маг', health: 100},
    {name: 'лучник', health: 80},
];

let sorting = chars.sort(function(a, b) {
   return b.health - a.health
})

// function healthCheck(chars) {
// for (let i=0; i<chars.length; i++) {
//     if (chars[i].health == 100) {
//         console.log('The healthiest guy')
//     };
//     if (chars[i].health == 80) {
//         console.log('Just a scratch')
//     };
//     if (chars[i].health == 10) {
//         console.log('Call a doctor!')
//     }
// }
// }
export { chars, sorting }