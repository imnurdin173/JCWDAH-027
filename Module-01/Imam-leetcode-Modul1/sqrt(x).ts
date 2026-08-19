//Sqrt(x) diberikan sebuah angka bulat non-negatif x, dan diminta menghitung dan mengembalikan akar kuadrat dari x
// e.g: input: x = 4, output: 2, nilai dibuat bulat 
// Level: Easy

function mySqrt(x: number): number {

    if (x <= 0) {
        return 0;
    }
        let left:number = 0;
        let right:number = x;
        let ans: number = 0;    

        while (left <= right) {
            const mid = Math.floor(left + (right - left) / 2);
            if (mid * mid === x) {
                return mid;
            } else if (mid * mid < x) {
                ans = mid;
                left = mid + 1;
            } else {
                right = mid -1;           
            }
        }
        return ans;
};

// function mySqrt(x: number): number {
//   let i = 0;
//   while (i * i <= x) {
//     i++;
//   }
//   return i - 1;
// }