/*
Given an array, return true if there are more odd numbers than even numbers, otherwise return false.
*/
function oddeven(lst){
  let odd = 0
  let even = 0

  lst.forEach(num => num%2==0 ? even++ : odd++)
  return odd > even
}
/*
Write a function that converts hours into seconds.
*/
function howManySeconds(hours) {
  return hours * 3600
}

/*
Write a function that takes the base and height of a triangle and return its area.
*/
function triArea(base, height) {
  return (base * height) / 2
}
/*
Create a function that takes two numbers as arguments and return their sum.
*/

function addition(a, b) {
  return a + b;
}
/*
Write a function that takes an integer minutes and converts it to seconds.
*/
function convert(minutes) {
  return minutes * 60
}
/*
Given an n-sided regular polygon n, return the total sum of internal angles (in degrees).
*/
function sumPolygon(n){
  return (n - 2) * 180
}








