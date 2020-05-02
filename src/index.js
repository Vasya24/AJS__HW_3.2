let chars = [
    {name: 'мечник', health: 10},
    {name: 'маг', health: 100},
    {name: 'лучник', health: 80},
];

chars.sort(function(a, b) {
   return b.health - a.health
})

export default chars