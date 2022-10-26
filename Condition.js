let username = prompt(`Enter your name: `);
let genName = 'User';
let msg = function() {
    return confirm(`Hey ${username || genName}, Are you leaving now?`);
}

let newMsg = msg();

if (newMsg == true) {
    alert(`Bye now ${username || genName}`)
} else {
    alert(`Let's continue the Journey`)
}


/* 
    Now My Code Exercise Worked ✔, A Simple Confirm and Alert Approval 
    Message That Ask A User If He/She Is Ready To Leave The Web
    Application 😮. And Adding a Functionality For Incase The User Doesn't
    Input His/Her Name 🤩.
    Made With ❤ By Me David Mesoma Chigozie. Please Star It 👍. Thanks 😎.
*/