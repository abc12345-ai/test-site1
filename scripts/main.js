let myImage = document.querySelector('img');

// myImage.onclick = function(){
//     let mySrc = myImage.getAttribute('src');

//     if (mySrc === 'images/firefox-icon.png') {
//         myImage.setAttribute('src', 'images/firefox2.jpg')
//     } else {
//         myImage.setAttribute('src', 'images/firefox-icon.png')
//     }
// } NOTE above code was given in tutorial but you can also just do what I did below?

myImage.onclick = function(){
    let mySrc = myImage.getAttribute('src');

    if (mySrc === 'images/firefox-icon.png') {
        myImage.src = 'images/firefox2.jpg';
    } else {
        myImage.src = 'images/firefox-icon.png';
    }
}

myButton = document.querySelector('button');
myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('What is your name?');

    if (!myName){
        setUserName(); //if you've indadvertently entered null or "" falsy value will cause the function to run again
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Mozilla is cool, ' + myName;
    }
}

if (!localStorage.getItem('name')) { //note the expression in if condition can return null if the key value pair doesn't exist in storage. Null is one of the only falsy values and therefore !null will give true and execute the code to ask for user name 
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, ' + storedName;
} 
// We could call this initialization code, as it structures the app when it first loads.

myButton.onclick = function() {
    setUserName(); //I'm assuming that if 'name' data already exists in localStorage, it will just be overwritten by the .setItem() in called/invoked function 
    //note that pressing cancel passes in a null value to localStorage.setItem(). When page reloads, if conditional statement code (setUserName()) does not actually execute - even though null is a falsy value.
    //Maybe what happens is that localStorage.getItem() on the refresh returns string "null" which is truthy, so doesn't ask for name again
    //by reverse engineering - perhaps inside setUserName() the localStorage.setItem() co-erced null into a string in the key value pair
    //whereas when you press ok it cannot store anything - just empty string is passed in so when the page is reloaded null falsy is returned and you are prompted for input
}

//when you press ok, it sets myName = ""
//what happens then inside if conditional block?
//because localStorage.getItem('name') will bring null falsy value and !null should execute the if condition code?
//I'm guessing this doesn't happen and setUserName() doesn't run again because it is initilization code that just runs sequentially when app first loads...
//and a piece of code only runs again if event handler property is activated or a function is invoked directly
