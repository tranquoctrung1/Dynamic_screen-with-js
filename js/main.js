// Select DOM Element
const time = document.getElementById('time')
const greeting = document.getElementById('greeting')
const name = document.getElementById('name')
const focus = document.getElementById('focus')

// Show time
function ShowTime () { 
    let today = new Date()
    let hour = today.getHours()
    let minute = today.getMinutes()
    let second = today.getSeconds();

    // Set AM or PM
    const AmPm = hour >= 12 ? 'PM' : 'AM';

    // Set 12 format 
    hour = hour % 12 || 12;

    // output time
    time.innerHTML = `${Addzero(hour)}<span>:</span>${Addzero(minute)}<span>:</span>${Addzero(second)} <span>${AmPm}</span>`;
}

//Add zero 
function Addzero (n)
{
    return (parseInt(n,10) < 10 ? '0' : '') + n;
}

// Set Background and Gretting
function SetBackgroundandGretting ()
{
    let body = document.getElementById('body');
    let _gethour = new Date().getHours();

    if(_gethour < 12 )
    {
        greeting.innerHTML= "Good Morning";
        body.style.background = "#dfdfdf url('../img/goodmorning.png') no-repeat center center";
        body.style.backgroundSize= "cover";
        body.style.color = "white";
    }
    else if( _gethour < 18)
    {
        greeting.innerHTML= "Good Afternoon";
        body.style.background = "#dfdfdf url('../img/goodafternoon.png') no-repeat center center";
        body.style.backgroundSize= "cover";
    }
    else
    {
        greeting.innerHTML= "Good Evening";
        body.style.background = "#dfdfdf url('../img/goodevening.png') no-repeat center center";
        body.style.backgroundSize= "cover";
        body.style.color = "white";
    }
}

// Get name 
function Getname ()
{
    // save name into localStorage
    if(localStorage.getItem('name') === null)
    {
        name.innerHTML = "Enter your name";
        name.addEventListener('click', () =>
        {
            name.innerHTML= "";
        })
    }
    else
    {
        name.innerHTML= localStorage.getItem('name')
    }
    name.addEventListener('blur', () =>
    {
        localStorage.setItem('name',name.textContent)
    })
    name.addEventListener('keypress', (e) =>
    {
        if(e.keyCode == 13)
        {
            localStorage.setItem('name',name.textContent);
            name.blur();
        }
    })
}

// Get focus
function Getfocus ()
{
    // save focus into localStorage
    if(localStorage.getItem('focus') === null)
    {
        focus.innerHTML = "Enter your focus";
        focus.addEventListener('click', () =>
        {
            focus.innerHTML= "";
        })
    }
    else
    {
        focus.innerHTML= localStorage.getItem('focus')
    }
    focus.addEventListener('blur', () =>
    {
        localStorage.setItem('focus',focus.textContent)
    })
    focus.addEventListener('keypress', (e) =>
    {
        if(e.keyCode == 13)
        {
            localStorage.setItem('focus',focus.textContent);
            focus.blur();
        }
    })
}

// Run all fuction 
ShowTime();
setInterval(ShowTime,1000);
SetBackgroundandGretting();
Getname();
Getfocus();
