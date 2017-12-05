// The spreadsheet consists of rows of apparently-random numbers. To make sure 
// the recovery process is on the right track, they need you to calculate the spreadsheet's checksum. 
// For each row, determine the difference between the largest value and the smallest value; 
// the checksum is the sum of all of these differences.

// For example, given the following spreadsheet:
//
// 5 1 9 5
// 7 5 3
// 2 4 6 8
//
// The first row's largest and smallest values are 9 and 1, and their difference is 8.
// The second row's largest and smallest values are 7 and 3, and their difference is 4.
// The third row's difference is 6.
// In this example, the spreadsheet's checksum would be 8 + 4 + 6 = 18.

const f = (array) => array.reduce((a, c) => 
                            [Math.min(c, a[0]), Math.max(c, a[1])], 
                            [Number.MAX_VALUE, Number.MIN_VALUE])
                          .reduce((min, max) => max - min)

// console.log(
//   f([5, 1, 9, 5]),
//   f([7, 5, 3]),
//   f([2, 4, 6, 8])
// )

const g = (m) => m.reduce((x, y, z)=>{
  console.log(y)
})

console.log(
  g([
    [5, 1, 9, 5],
    [7, 5, 3],
    [2, 4, 6, 8]
  ])
)

// f([1,2,3,4,5])
