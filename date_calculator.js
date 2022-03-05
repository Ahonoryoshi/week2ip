let c=parseInt(prompt("Enter the 'FIRST TWO DIGITS' of the year you were born"));
while(c<16 || c>99){
    alert("Please enter a valid number. MUST be an integer, at least 16 and at most 99");
    c=parseInt(prompt("Enter the 'FIRST TWO DIGITS' of the year you were born"));
}
let y=parseInt(prompt("Enter the 'LAST TWO DIGITS' of the year youy were born"));
while(y<0 || y>99){
    alert("Please enter a valid year. MUST be an integer, at least 0 and at most 99");
    y=parseInt(prompt("Enter the 'LAST TWO DIGITS' of the year youy were born"));
}
let m=parseInt(prompt("Enter the 'MONTH' number you were born"));
while(m<1 || m>12){
    alert("Please enter a valid month. MUST be an integer, at least 1 and at most 12");
    m=parseInt(prompt("Enter the 'MONTH' number you were born"));
}
let d=parseInt(prompt("Enter the 'DAY' of the month you were born"));
while(d<1 || d>31){
    alert("Please enter a valid day. MUST be an integer, at least 1 and at most 31")
}
