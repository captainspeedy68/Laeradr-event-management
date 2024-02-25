site link- https://event-management-58766.web.app/

Function- 
1. This website handles different types of corporate events
2. Management includes the different types of services given to the organizers
3. One can also buy tickets for ongoing events posted in the website
4. Authentication is provided through different login methods (including direct google login)
5. The website is fully responsive, giving easy access to services. Also one can checkout the gallery of the events in the Gallery page.

QNA-
1. let greeting;
greetign = {};
console.log(greetign); 
ans- A. {}
explanation- the value of greeting is empty object. as the value of greetings is empty the output is empty object. 

2. function sum(a, b) {
  return a + b;
}

sum(1, "2");

ans- c. '12'
explanation- as the type in the second argument is a string the addition is not done mathematically rather the string is naturally added beside the first argument which has the type integer.

3. const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);

ans- A.
explanation- this code just outputs the original food array. This is because the original array wasn't changed.

4. function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());

ans- B. Hi there, undefined
explanation- the function requrest the definition of name variable when called. but here the definition is empty because no argument was passed.this is why the output will include undefined
5. let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);

ans- c. 3
explanation- count increments when there is a true value of num. 0 is considered false value so count is not increased. therefore there is only 3 increments of count