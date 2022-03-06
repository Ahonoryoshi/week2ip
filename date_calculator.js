let c=parseFloat(prompt("Enter the 'FIRST TWO DIGITS' of the year you were born"));
let cRange= Array.from({length:99}, (_, index) => index + 1);
while(cRange.includes(c)===false)
    {
        alert("Please enter a valid number. MUST be an integer, at least 16 and at most 99");
        c=parseFloat(prompt("Enter the 'FIRST TWO DIGITS' of the year you were born"));
    }


let y=parseFloat(prompt("Enter the 'LAST TWO DIGITS' of the year youy were born"));
let yRange=Array.from({length:99}, (_, index) => index + 1);
while(cRange.includes(y)===false)
    {
        alert("Please enter a valid year. MUST be an integer, at least 0 and at most 99");
        y=parseFloat(prompt("Enter the 'LAST TWO DIGITS' of the year youy were born"));
    }


let m=parseFloat(prompt("Enter the 'MONTH' number you were born"));
let mRange=Array.from({length:12}, (_, index) => index + 1);
while(cRange.includes(y)===false)
    {
        alert("Please enter a valid month. MUST be an integer, at least 1 and at most 12");
        m=parseFloat(prompt("Enter the 'MONTH' number you were born"));
    }


let N=31
let dayRange= Array.from({length:N}, (_, index) => index + 1);
let longMonths=[1,3,5,7,8,10,12];
let shortMonths=[4,6,9,11];
let d=parseFloat(prompt("Enter the 'DATE' of the month you were born: Can be from 1 through 31"));
if (longMonths.includes(m))
    {
        N=31
        dayRange= Array.from({length:N}, (_, index) => index + 1);
        while(dayRange.includes(d)===false)
        {
            alert("Please enter a valid day. MUST be an integer, at least 1 and at most 31")
            d=parseFloat(prompt("Enter the 'DAY' of the month you were born"));
        }
    }
else if(shortMonths.includes(m))
    {
        N=30
        dayRange= Array.from({length:N}, (_, index) => index + 1);
        while(dayRange.includes(d)===false)
        {
            alert("Please enter a valid day. MUST be an integer, at least 1 and at most 30")
            d=parseFloat(prompt("Enter the 'DAY' of the month you were born"));
        }
    }
else
    {
        if (y===0)
            {
                if(c%4===0)
                    {
                        N=29
                        dayRange= Array.from({length:N}, (_, index) => index + 1);
                        while(dayRange.includes(d)===false)
                        {
                            alert("Please enter a valid day. MUST be an integer, at least 1 and at most 29, since it is February")
                            d=parseFloat(prompt("Enter the 'DAY' of the month you were born"));
                        }
                    }
                else
                    {
                        N=28
                        dayRange= Array.from({length:N}, (_, index) => index + 1);
                        while(dayRange.includes(d)===false)
                        {
                            alert("Please enter a valid day. MUST be an integer, at least 1 and at most 28, since it is February in an odinary year")
                            d=parseFloat(prompt("Enter the 'DAY' of the month you were born"));
                        }
                    }
                
            }
        else
            {
            if(y%4===0)
                {
                    N=29
                    dayRange= Array.from({length:N}, (_, index) => index + 1);
                    while(dayRange.includes(d)===false)
                        {
                            alert("Please enter a valid day. MUST be an integer, at least 1 and at most 29, since it is February")
                            d=parseFloat(prompt("Enter the 'DAY' of the month you were born"));
                        }
                }
            else
                {
                    N=28
                    dayRange= Array.from({length:N}, (_, index) => index + 1);
                    while(dayRange.includes(d)===false)
                        {
                            alert("Please enter a valid day. MUST be an integer, at least 1 and at most 28, since it is February in an odinary year")
                            d=parseFloat(prompt("Enter the 'DAY' of the month you were born"));
                        }
                }
        }
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