// Membuat array nums dan target, yang menghasilkan dua elemen dari total penjumlahan yang sesuai dengan nilai target
// e.g: input: nums = [2,7,11,15], target = 9,
// maka outputnya adalah: [0, 1]

// LEVEL : Easy 

function twoSum(nums: number[], target: number): number[] {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) return [i, j];
    }
  }
  return [];
}

const input = [2, 7, 11, 15];
const target = 9;
console.log(twoSum(input, target));


// solusi ke-2 saran claude.ai yang lebih efisien

// function twoSum(nums: number[], target: number): number[] {
//   // Edge case 1: array kosong atau bukan array
//   if (!Array.isArray(nums) || nums.length === 0) {
//     throw new Error("Input 'nums' harus berupa array dan tidak boleh kosong");
//   }

//   // Edge case 2: array kurang dari 2 elemen
//   // (tidak mungkin ada 2 angka yang dijumlahkan)
//   if (nums.length < 2) {
//     throw new Error("Array 'nums' minimal harus punya 2 elemen");
//   }

//   // Edge case 3: elemen array bukan angka valid (NaN, null, dll)
//   for (let i = 0; i < nums.length; i++) {
//     if (typeof nums[i] !== "number" || Number.isNaN(nums[i])) {
//       throw new TypeError(
//         `Elemen di indeks ${i} bukan angka valid: ${nums[i]}`,
//       );
//     }
//   }

//   // Edge case 4: target tidak valid
//   if (typeof target !== "number" || Number.isNaN(target)) {
//     throw new TypeError("Target harus berupa angka valid");
//   }

//   const seen = new Map<number, number>();

//   for (let i = 0; i < nums.length; i++) {
//     const complement = target - nums[i];

//     if (seen.has(complement)) {
//       return [seen.get(complement)!, i];
//     }

//     seen.set(nums[i], i);
//   }

//   // Edge case 5: tidak ditemukan solusi
//   // (soal LeetCode menjamin selalu ada solusi, tapi di dunia nyata
//   // input bisa saja tidak sesuai ekspektasi)
//   throw new Error(
//     `Tidak ditemukan dua angka yang jumlahnya sama dengan ${target}`,
//   );
// }
