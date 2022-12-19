//****************Meal generator

//Array to store meals
let breakfast = [
    'Bagel with smoked salmon and cream cheese',
    'Fruit Salad',
    'English breakfast',
    'Toast with butter',
    'Weetabix'
]

let lunch = [
    'Ham and cheese baguette',
    'Sushi',
    'Caesar salad',
    'Tonkotsu Ramen',
    'Pesto Mozzarella Panini'
]

let dinner = [
    'Steak and frites',
    'Chicken and chorizo pizza',
    'Special Chow Mein',
    'Chicken Gyros'
]

//Generate a random number
function randMeal (arr){
    let x = Math.floor(Math.random()*arr.length);
    return arr[x];
}

let message = "Here is your meal plan for today. Breakfast: " + randMeal(breakfast) + ".  Lunch: " + randMeal(lunch) + ". Dinner: " + randMeal(dinner);

console.log(message);

//Output the message


