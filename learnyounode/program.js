var  arr = process.argv
sum = 0
for (i = 2; i < arr.length; i++) { 
  sum += parseInt(arr[i])
}
console.log(sum)

