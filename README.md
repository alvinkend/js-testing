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
