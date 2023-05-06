const ages =[13, 18, 20, 33, 40];
const ages2 = [23, 43, 56, 44, 22, 21, 34];
const seniorAge = [45, 55, 44, 57, 58, 90];
const allAges = ages.concat(ages2).concat(seniorAge).concat([9]);
const allAges2 = [...ages, ...ages2, ...seniorAge,5];
console.log(allAges2);

const business = 650;
const minnister = 540;
const sochib = 230;

// const maximum = Math.max(business, minnister, sochib)
const takaPoisa = [660, 540, 230];
const max = Math.max(...takaPoisa);
console.log(max);
// console.log(maximum);