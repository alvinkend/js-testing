# js-testing-challenge

# Unit testing

unit testing adalah perangkat lunak verifikasi dan validasi metode di mana seorang programmer tes jika individual unit kode sumber adalah cocok untuk digunakan. Unit adalah bagian tes terkecil dari aplikasi. Dalam pemrograman prosedural unit mungkin fungsi individu atau prosedur.

## TTD

TDD (Test Driven Development) merupakan sebuah metodologi pengembangan sistem dengan mengedepankan testing untuk memastikan bahwa sistem berjalan dengan semestinya.

```
Beberapa proses yang dilakukan selama pengembangan sistem dengan TDD:
● Skenario testing pada setiap komponen.
● Development skenario komponen sampai lulus testing.
● Menyusun semua komponen yang sudah testing.
● Menggabungkan semua testing hingga sistem selesai. 
```

## BDD

BDD (Behavior Driven Test) merupakan kebalikan dari BDD. Metodologi BDD lebih mengedepankan behavior dari suatu sistem dimana hanya berfokus terhadap harapan dari client bahwa sistem berjalan sesuai harapan dari client.

```
Beberapa proses yang dilakukan dalam metodologi BDD:
● Skenario testing pada setiap behavior.
● Memastikan sudah lulus pada behavior test.
● Deployment.
```

## Unit Testing Tools

Tools untuk melakukan testing di JavaScript ada:

● Jest

● Mocha/Chai

● Jasmine

● Ava

● Tape


### Jest

Jest adalah pustaka pengujian JavaScript terbuka dari Facebook. Slogannya adalah "Pengujian JavaScript yang Menyenangkan". 

#### Install Jest

Jest cukup mudah untuk diinstal sendiri. Anda bisa menginstalnya di tempat kosong langsung menggunakan npm atau yarn.
```
yarn add --dev jest
npm install --save-dev jest
```

#### Implementations
Pertama, Buat file sum.js di dalam folder src

```
function sum(a, b) {
  return a + b;
}
module.exports = sum;
```

Lalu buat file sum.test.js

```
const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
```

Lalu tambahkan code berikt pada package.json

```
{
  "scripts": {
    "test": "jest"
  }
}
```

#### Runing Jest

jalankan yarn test atau npm run test dan Jest akan mencetak pesan berikut

```
PASS  ./sum.test.js
✓ adds 1 + 2 to equal 3 (5ms)
```




# Functional Programming Paradigm

Functional programming adalah paradigma pemrograman yang berkutat pada komputasi yang terjadi di dalam fungsi matematis dan menghindari terjadinya perubahan data. Yang dimaksud dengan fungsi matematis sendiri adalah sebuah hubungan antara input yang akan mengembalikan output.

● Hindari penggunaan variable let dan var (mutable variable)

● Hindari perubahan pada sebuah array, object, map maupun set, lebih baik membuat baru.

● Hindari melakukan loop pada function, contoh: total harus pakai reduce() pada sebuah Array.



## Menulis Function

Untuk membuat penulisan kode function di JavaScript yang mengikuti paradigma FP, ada beberapa hal yang harus diperhatikan:

● Function harus bersifat pure, dimana ia akan menerima parameter sebagai input dan mengembalikan nilai, tanpa mengubah       nilai dari variabel manapun.

● Function tidak boleh menggunakan nilai dari variabel yang bukan sebagai parameter.

● Function harus mengembalikan satu nilai untuk setiap input. Function yang mengembalikan kemungkinan nilai untuk satu nilai   input yang sama tidak memenuhi prinsip FP.

```
const multiplyByTwo = (num) => {
  return num * 2;
}

multiplyByTwo(5); // 10
```


## Higher-order Functions

di JavaScript dan di bahasa programming functional ada sebuah konsep yang dinamakan Higher-order function. Higher-order function adalah function yang menerima argumen atau parameter berupa function. Sebelum mendengar higher-order function, mungkin kita pernah mendengar callback di JavaScript. Ya, callback function adalah function yang dikirimkan sebagai parameter ke dalam higher-order function. Contoh paling sederhana dari penerapan higher-order function adalah filter function.

```
// Example 1: Array.prototype.filter
const isEven = (num) => {
  return num % 2 === 0
}

const nums = [1,2,3,4,5,6];

const evenNums = nums.filter(isEven);
console.log(evenNums); // [2,4,6]

// Example 2: Array.prototype.map
const capitalizeWord = (word) => {
  return word[0].toUpperCase() + word.slice(1,word.length);
}

const sentence = "you there. i'm batman!";

const uppercasedSentence = sentence.split(' ').map(capitalizeWord);

console.log(uppercasedSentence); // "You There. I'm Batman!"
```


## Mutability vs Immutability

Immutability adalah sebuah konsep dimana semua variabel, setelah sekali didefinisikan dan diassign sebuah nilai, nilai tersebut tidak boleh digantikan atau berubah. Hal ini memiliki keuntungan dimana kita terhidar dari terjadinya side-effects, dimana satu proses dapat mempengaruhi nilai sebuah variabel secara global dan menyebabkan error yang relatif sulit untuk di debug.

```
// mutable variable
var mutableNumber = 5;
mutableNumber = 7;

// immutable variable
const immutableNumber = 3;
// immutableNumber = 1; // this operation will fetch an error -> TypeError: Assignment to constant variable.

// mutable array
var mutableHobbies = ["Reading"];
mutableHobbies.push("Gaming");

console.log(mutableHobbies); // ["Reading", "Gaming"];

// immutable array (ES5 using concat)
var immutableHobbies = ["Reading"];
var newUpdatedImmutableHobbiesES5 = immutableHobbies.concat("Gaming");

console.log(immutableHobbies); // ["Reading"]
console.log(newUpdatedImmutableHobbiesES5); // ["Reading", "Gaming"];
```


## Currying

Currying adalah sebuah teknik dalam functional programming, dimana sebuah function tidak mengambil semua argumen atau parameter dan digunakan sekaligus, melainkan mengembalikan sebuah function baru yang mengambil parameter kedua, yang kemudian mengembalikan function baru yang mengambil parameter ketiga, dan seterusnya hingga seluruh argument atau parameter digunakan. Pada teknik ini, setiap argumen akan dievaluasikan satu per satu.

```
const myWordsOperation = (firstWord) => (secondWord) => (thirdWord) => {
  return firstWord + ' ' + secondWord + ' ' + thirdWord;
};

console.log(myWordsOperation("John")("Mick")("Johannson"))
```


#### Dan Masih banyak konsep di paradigma functional programming yang menarik untuk kita explore seperti function compositions, functors, applicatives, stream, monoids, monads, dan lain-lain yang lebih complicated.
