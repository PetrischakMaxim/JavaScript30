const dogs = [{
    name: 'Snickers',
    age: 2
}, {
    name: 'hugo',
    age: 8
}];
const p = document.querySelector('p');

function makeGreen() {

    p.style.color = '#BADA55';
    p.style.fontSize = '50px';
}

// Regular
console.log('hello');

// Interpolated
console.log('hello I am a %s string!', 'cat');

// Styled
console.log('%c hello', 'font-size: 20px');
// warning!
console.warn('no!')
// Error :|
console.error('no!')
// Info
console.info('Some info!');
// Testing
console.assert(1 === 2, 'false');
// clearing
//console.clear();

// Viewing DOM Elements
console.log(p);
console.dir(p);
// Grouping together

dogs.forEach(dog => {
    console.group(`${dog.name}`);
    console.groupEnd(`${dog.name}`);
});

// counting
console.count('Wes');

// timing
console.time('fetching data');
fetch('https://api.github.com/users/wesbos')
    .then(data => data.json())
    .then(data => {
        console.timeEnd('fetching data');
        console.log(data);
    });

// table //#endregion
console.table(dogs);
