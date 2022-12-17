function factorialize(num) {
  let product = 1; //Set to 1 to allow multiplication of factorial, 0 would negate.
  for (let i = num; i > 0; i--) //Set i to num and multiply all factorials by decriminating i in for loop.
  {
    console.log("Current number being multiplied: ", i);
    product = product * i;
    console.log("current product of factorial: ", product);
  }
  num = product; //Set product to num and return it.
  return num;
}
factorialize(5);
