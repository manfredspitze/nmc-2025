Yes, you can absolutely use arrow functions when creating JavaScript event listeners! In fact, using arrow functions can make your code more concise and can help maintain the correct `this` context, especially in cases where you want to access properties of the surrounding scope.

### Example of Using Arrow Functions in Event Listeners

Here’s how you can use arrow functions with event listeners in different scenarios:

#### Example 1: Click Event Listener with Arrow Function
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Click Event with Arrow Function</title>
</head>
<body>
    <button id="myButton">Click Me!</button>

    <script>
        const button = document.getElementById('myButton');

        // Using an arrow function for the click event listener
        button.addEventListener('click', () => {
            alert('Button was clicked!');
        });
    </script>
</body>
</html>
```

#### Example 2: Mouse Over Event Listener with Arrow Function
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mouse Over Event with Arrow Function</title>
    <style>
        #myDiv {
            width: 200px;
            height: 200px;
            background-color: lightblue;
            text-align: center;
            line-height: 200px; /* Center text vertically */
        }
    </style>
</head>
<body>
    <div id="myDiv">Hover over me!</div>

    <script>
        const div = document.getElementById('myDiv');

        // Using an arrow function for the mouse over event listener
        div.addEventListener('mouseover', () => {
            div.style.backgroundColor = 'lightgreen';
        });

        // Using an arrow function for the mouse out event listener
        div.addEventListener('mouseout', () => {
            div.style.backgroundColor = 'lightblue';
        });
    </script>
</body>
</html>
```

#### Example 3: Key Press Event Listener with Arrow Function
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Key Press Event with Arrow Function</title>
</head>
<body>
    <input type="text" id="myInput" placeholder="Type something...">

    <script>
        const input = document.getElementById('myInput');

        // Using an arrow function for the key press event listener
        input.addEventListener('keypress', (event) => {
            console.log('Key pressed: ' + event.key);
        });
    </script>
</body>
</html>
```

### Benefits of Using Arrow Functions in Event Listeners
1. **Conciseness**: Arrow functions provide a shorter syntax, making your code cleaner and easier to read.
2. **Lexical `this`**: Arrow functions do not have their own `this` context; they inherit `this` from the surrounding scope. This can be particularly useful if you need to access properties or methods of an object within the event handler.

### Summary
You can definitely use arrow functions when creating event listeners in JavaScript. They offer a more concise syntax and help maintain the correct `this` context, making them a great choice for handling events.