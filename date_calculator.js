let c=parseInt(prompt("Enter the 'FIRST TWO DIGITS' of the year you were born"));
while(c<16 || c>99)
    {
        alert("Please enter a valid number. MUST be an integer, at least 16 and at most 99");
        c=parseInt(prompt("Enter the 'FIRST TWO DIGITS' of the year you were born"));
    }

let y=parseInt(prompt("Enter the 'LAST TWO DIGITS' of the year youy were born"));
while(y<0 || y>99)
    {
        alert("Please enter a valid year. MUST be an integer, at least 0 and at most 99");
        y=parseInt(prompt("Enter the 'LAST TWO DIGITS' of the year youy were born"));
    }

let m=parseInt(prompt("Enter the 'MONTH' number you were born"));
while(m<1 || m>12)
    {
        alert("Please enter a valid month. MUST be an integer, at least 1 and at most 12");
        m=parseInt(prompt("Enter the 'MONTH' number you were born"));
    }
let longMonths=[1,3,5,7,8,10,12]

let d=parseInt(prompt("Enter the 'DATE' of the month you were born: Can be from 1 through 31"));
while(m)
while(d<1 || d>31)
    {
        alert("Please enter a valid day. MUST be an integer, at least 1 and at most 31")
        d=parseInt(prompt("Enter the 'DAY' of the month you were born"));
    }

let gen=prompt("Are you male or female? Type either 'male' or 'female' without quotes");
while (gen !=="male" && gen !=="female")
    {
        alert("Please enter a valid gender. MUST be either 'male' or 'female' without quotes and in lowercase");
        gen=prompt("Are you male or female? Type either 'male' or 'female' without quotes")
    }
let win=(((d+ Math.floor(2.6*m-0.2) - 2*c + y + Math.floor(c/4) + Math.floor(y/4)+2) % 7)+7)%7;
let nm=""
let dy=""
if (gen==="male")
    {
        if(win===0){nm="Kwasi"; dy="Sunday";}
        else if(win===1){nm="Kwadwo"; dy="Monday";}
        else if(win===2){nm="Kwabena"; dy="Tuesday";}
        else if(win===3){nm="Kwaku"; dy="Wednesday";}
        else if(win===4){nm="Yaw"; dy="Thursday";}
        else if(win===5) {nm="Kofi"; dy="Friday";}
        else{nm="Kwame"; dy="Saturday";}
    }
else
    {
        if(win===0){nm="Akosua"; dy="Sunday";}
        else if(win===1){nm="Adwoa"; dy="Monday";}
        else if(win===2){nm="Abenaa"; dy="Tuesday";}
        else if(win===3){nm="Akua"; dy="Wednesday";}
        else if(win===4){nm="Yaa"; dy="Thursday";}
        else if(win===5){nm="Afua"; dy="Friday";}
        else{nm="Ama"; dy="Saturday";} 
    }
alert("You were born on a " + dy + ", so your name is " + nm + "!");