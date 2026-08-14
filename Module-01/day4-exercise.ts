// Slide 1 Nomor 1 : Dapatkan nilai terendah, tertinggi, dan nilai rata-rata pada array (dengan atau tanpa sort())
// e.g: arr = [12, 5, 23, 18, 4, 45, 32] → {lowest : 4, highest: 45, average: 19.8xxx}

// 1.1 Tanpa Sort()
// function sortArr(arr: number[]) {
//   let total = 0; // untuk menghitung average
//   const resultSortArr = [...arr]; // bisa juga pake cara baru [...arr];

//   // konsep sederhana bubble Sort
//   for (let i = 0; i < arr.length; i++) {
//     total += resultSortArr[i];
//     for (let j = 0; j < arr.length - 1; j++) {
//       if (resultSortArr[j] <= resultSortArr[j + 1]) continue;
//     const temp = resultSortArr[j];
//     resultSortArr[j] = resultSortArr[j + 1];
//     resultSortArr[j + 1] = temp;
//     }
//   }
//   const lowest = resultSortArr[0];
//   const highest = resultSortArr[resultSortArr.length - 1];
//   const average = total / resultSortArr.length;
//   return {resultSortArr,lowest,highest,average};
// }
// const angka = [12, 5, 23, 18, 4, 45, 32];
// const result = sortArr(angka);
// // console.log("Urutan angka: ", sortArr(angka));

// console.log("Urutan angka : ", result.resultSortArr);
// console.log("Terendah: ", result.lowest);
// console.log("Tertinggi: ", result.highest);
// console.log("Rata-rata : ", result.average);

// 1.2 Deengan method Sort()
// const arr = [12, 5, 23, 18, 4, 45, 32];

// function sortArr(arr: number[]) {
//   const sortir = arr.sort((a, b) => a - b);
//   const lowest = sortir[0];
//   const highest = sortir[sortir.length - 1];
//   const sum = sortir.reduce((i, current) => i + current, 0);
//   const average = sum / sortir.length;
//   return { sortir, lowest, highest, sum, average };
// }

// const angka = [12, 5, 23, 18, 4, 45, 32];
// const result = sortArr(angka);
// console.log("Sortir: ", result.sortir);
// console.log("lowest: ", result.lowest);
// console.log("highest: ", result.highest);
// console.log("Total: ", result.sum);
// console.log("Rata-rata: ", result.average);

// Slide 1 Nomor 2 : Membuat fungsi penggabungan array kata menjadi string kesatuan utuh yg mana setiap kata dipisah akhir (,) juga (, dan) untuk array terakhir. 
// e.g: arr = ["apple", "banana", "cherry", "date"] → “apple,banana,cherry, and date”

  // function gabungKata (arr: string[]): string {
  //   const kata = arr.slice(0,-1).join(", "); // penggabungan seluruh kata selain index akhir
  //   const kataAkhir = arr[arr.length-1];
    
  //   return `${kata}, and ${kataAkhir}` ;
  // }
  
  // const kata = ["apple", "banana", "cherry", "date"]
  // console.log(gabungKata(kata));

// Slide 1 Nomor 3 : Mencari angka terkecil KEDUA di array number
// e.g numbers = [5, 3, 1, 7, 2, 6] → 2
  function getSecondSmallestSort(arr:number[]): number {

    let smallest = Infinity;
    let secondSmallest = Infinity;

    for (const i of arr) {
      if (i < smallest) {
        secondSmallest = smallest;
        smallest = i;
      } else if (i > smallest && i < secondSmallest) {
        secondSmallest = i;
      }
    }
    return secondSmallest === Infinity ? null : secondSmallest;
  }

  const numbers = [5, 3, 1, 7, 2, 6];
  console.log(getSecondSmallestSort(numbers));

  // Slide 1 Nomor 4 : menghitung jumlah setiap nilai di posisi yg sama dari 2 array integer. Length = 3

// function sum2Arr(arr1: number[], arr2: number[]): number[] {
//   // const total: number[] = [];
//   // for (let i = 0; i < arr1.length; i++) {
//   //   // total.push(arr1[i] + arr2[i]);
//   //   total.push(arr1[i]! + arr2[i]!); // (!) pake prinsip Non-Null Assertion Operator krn pengaturan tsconfig.json
//   // }
//   // return total;

//   return arr1.map((val, i) => val + (arr2[i] ?? 0)); // pake ?? 0 krn berfungsi sbg Nullish Coaceliscing Operator,
// }

// const arr1: number[] = [1, 2, 3];
// const arr2: number[] = [3, 2, 1];

// const result: number[] = sum2Arr(arr1, arr2);
// console.log(arr1, "+", arr2, "-->", result);
