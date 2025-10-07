steps explained
1. Define a value for the input (username)
2. Target the button id and apply the onclick property so we can define what it does when we click on it
3. Add a function to the onclick proprty we don't have to name the fucntion hence why () but you can name it if you want.
4. Inside the function, take the username variable you defined and link it to the user input id
5. Don't forget to add the .value property. If you don't add it, it will output the data type (string) and not the actual name
6. target the intro and add the .textcontent property so we'll edit the text of the intro or h1 in html
7. Add the Welcome + (Insert the username variable) + "!" so there\s an exclamation mark at the end*/

optional/updated
8. If you wan't an if/else statement. I made it so that if the user inputs a number it will be invalid and an alert will pop-up saying numbers are not allowed.
9. For this method, you need to add the NaN(username) in the if statement, this checks if the username is not a number then (do the following)
10. Else, then pop-up an alert saying the number isn't allowed.