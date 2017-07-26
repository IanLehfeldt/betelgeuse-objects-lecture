console.log('Script.js has been sourced in!!');
var canin = {
        name: 'Canin',
        favoriteAnimal: 'Uniflitten'
    };

var caninTwin = canin;

// [name, favoriteAnimal]
var people = [
   canin, 
    {
        name:'Charly',
        favoriteAnimal:'Angler Fish'
    }, 
    {
        name:'Bobby', 
        favoriteAnimal:'Liger'
    },
    {
        name:'Luke',
        favoriteAnimal:'Killer Whale'
    }
];
//

// console.log('Canin the variable before potato salad', canin);
// console.log('Canin in the array before potato salad', people[0]);

// people[0].favoriteAnimal = 'potato salad';
// caninTwin = {
//     name: canin.name,
//     favoriteAnimal: canin.favoriteAnimal
// }

// caninTwin.favoriteAnimal = 'dolphin';

// console.log('Canin the variable after potato salad', canin);
// console.log('Canin in the array after potato salad', people[0]);
// console.log('Canin\'s Twin\'s', caninTwin);

// //Example of BY REFERENCE. As long as you change the property of an object, it'll affect all reference in the object
// // 

console.log(people);

//{person}'s favorite animal is the {favoriteAnimal}
//log for Canin's favorite animal is the Uniflitten

for (var i = 0; i < people.length; i++){
    var person = people[i];
    console.log( person.name + '\'s favorite animal is the ' + person.favoriteAnimal );
}