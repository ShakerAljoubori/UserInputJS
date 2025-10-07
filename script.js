let username; //we defined a variable named username

document.getElementById("btn").onclick = function(){
    username = document.getElementById("name").value;
    if (isNaN(username)) //if username is not a number
     {
        document.getElementById("intro").textContent = "Welcome " + username + "!"
        //we specificed the intro and replaced it with the user input
    }
    else 
    {
        window.alert("Numbers are not allowed");
    }
    }