function isPrime(num)
{
  //checking if number is 1 or not
  if (num===1)
  {
    return false;
  }
  //checking if number is 2 or not
  else if(num=== 2)
  {
    return true;
  }
  else
  {
    //loop through the number till number whether any number before is divisble or not
    for(var x = 2; x < num; x++)
    {
      if(num % x === 0)
      {
        //return false if not prime
        return false;
      }
    }
    //return true if prime
    return true;
  }
}
console.log(isPrime(92));
console.log(isPrime(13));
