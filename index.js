// Write your solution here!

const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
  //   let cat = ["Milo", "Otis", "Garfield"];

  cats.push(name);
  return cats;
}
const update = destructivelyAppendCat("Ralph");
console.log(update);
//====================

function destructivelyPrependCat(name) {
  cats.unshift(name);
  return cats;
}
const update1 = destructivelyPrependCat("Mittens");
console.log(update1);
//====================

function destructivelyRemoveLastCat() {
  cats.pop();
  return cats;
}

const update3 = destructivelyRemoveLastCat();
console.log(update3);
//====================

function destructivelyRemoveFirstCat() {
  cats.shift();
  return cats;
}

const update2 = destructivelyRemoveFirstCat();
console.log(update2);

//====================
function appendCat(name) {
  const newCats = cats.concat(name);
  return newCats;
}

const update4 = appendCat("Mittens");
console.log(update4);

//====================
function prependCat(name) {
  const newCats2 = [name, ...cats];
  return newCats2;
}

const update5 = prependCat("Mittens");
console.log(update5);

//====================
// function removeLastCat1() {
//   const newCats3 = cats.slice();
//   return newCats3;
// }

// const update66 = removeLastCat1();
// console.log(update66);

function removeLastCat() {
  let newCats4 = cats.slice(0, -1);
  return newCats4;
}

let update6 = removeLastCat();
console.log(update6);
//====================
function removeFirstCat() {
  const newCats5 = cats.slice(1);
  return newCats5;
}

const update7 = removeFirstCat();
console.log(update7);
