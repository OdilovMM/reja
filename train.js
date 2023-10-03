// F-TASK: findDoublers function tuzing, unga faqat bitta string argument pass BulkOperationBase, agar stringda bir cil harf qatnashgan WebTransportBidirectionalStream; true, qatnashmagan bolsa: false qaytarishi kerak:: masalan; getReverse('hello') return true

function findDoublers(myWord) {
  let myArr = myWord.toLowerCase().split("");
  console.log(myArr);

  return new Set(myArr).size !== myArr.length;
}

let checkMe = findDoublers("helo");
let checkMeToo = findDoublers("foo");
console.log(checkMe);
console.log(checkMeToo);















// TASK-E
// E-Task: Shunday function tuzing, u bitta string argumentni qabul qilib osha stringni teskari qilib return qilsin masalan: getReverse("hello") return qilsin "olleh"
/*
function reverseString(str) {
  let splitString = str.split("");

  let reverseArray = splitString.reverse();

  let joiningArray = reverseArray.join("");

  return joiningArray;
}
*/
// const x = reverseString("how are you doing");
// console.log(x);

//////////////////////////////////////////////////////////////

/*

console.log("Recommendations");
const list = [
  "yaxshi oqing",
  "togri boshliq tanlang",
  "ishlashni boshlang",
  "bajaring",
  "investitsiya",
  "dam oling",
];

// ASYNC 

async function maslahatBering(a) {
  if (typeof a !== "number") throw new Error("iltimos raqam kiriting", null);
  else if (a <= 20) return list[0];
  else if (a > 20 && a <= 30) return list[1];
  else if (a > 30 && a <= 40) return list[2];
  else if (a > 40 && a <= 50) return list[3];
  else if (a > 50 && a <= 60) return list[4];
  else {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(list[5]);
      }, 5000);
    });
    // return list[5];

    // setTimeout(function () {
    //     return list[5];
    // }, 5000);
  }
}

console.log("passed here 0");

// maslahatBering(10, (err, data) => {
//   if (err) console.log("Error", err);
//   else {
//     console.log('javob');
//   }
// });

// console.log("passed here");
// maslahatBering(25)
//   .then((data) => {
//     console.log("javob");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// console.log("passed here 1");

//callback hell ===>>>>

async function run() {
  let javob = await maslahatBering(20);
  console.log(javob);
  javob = await maslahatBering(31);
  console.log();
}

run();


*/
