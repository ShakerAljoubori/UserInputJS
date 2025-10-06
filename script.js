let username; //we defined a variable named username

document.getElementById("btn").onclick = function(){
    username = document.getElementById("name").value;
    document.getElementById("intro").textContent = "Welcome " + username + "!"
    //we specificed the intro and replaced it with the user input
}