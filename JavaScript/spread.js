const str = 'Hello';
console.log([...str]); //[ 'H', 'e', 'l', 'l', 'o' ]

const arr = ['Hi','Hey'];
console.log([...arr]);//[ 'Hi', 'Hey' ]

console.log([...str,...arr]);
// [
//     'H',   'e', 'l',
//     'l',   'o', 'Hi',
//     'Hey'
//   ]