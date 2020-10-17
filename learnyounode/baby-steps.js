let currentIndex = 2,
number = process.argv[currentIndex],
argumentAmount = process.argv.length,
summa = 0;

while(currentIndex != argumentAmount){
  number = process.argv[currentIndex];
  summa = summa + Number(number);
  currentIndex++;
}

console.log(summa)