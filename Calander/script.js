const currentDate= document.querySelector(".current-date"),
 dayTag= document.querySelector(".days"),
 preNexticon = document.querySelectorAll(".icon span");

// getting new date, current year and month
let date = new Date(),
 currentYear = date.getFullYear(),
 currentmonth = date.getMonth();

const months = ["January", "February", "March", "April", "May", "June", "July",
                "August", "September", "October", "November", "December"];

 const renderCalendar = () => {
    let firstDayofMonth = new Date(currentYear, currentmonth , 1).getDay(), // getting first days  of month
     lastDateofMonth = new Date(currentYear, currentmonth +1, 0).getDate(), // getting last date of month
     lastDayofMonth = new Date(currentYear, currentmonth, lastDateofMonth).getDay(), // getting last days of month
     lastDateofPrevMonth = new Date(currentYear, currentmonth, 0).getDate(); // getting last date of prives month
    let liTag = "";
 
    for (let i= firstDayofMonth; i> 0; i--) { // creating li of previous month last days
        liTag += `<li class="inactive">${lastDateofPrevMonth -i +1}</li>`;
        
    }


    for (let i = 1; i<=lastDateofMonth; i++){ // creating li of all days of  current month
        // adding active class to li if the current day, month, year matched
        let istoday = i === date.getDate() && currentmonth === new Date().getMonth()
        && currentYear === new Date().getFullYear() ? "active" : "";
        
        liTag += `<li class="${istoday}">${i}</li>`;
    }

    for (let i = lastDayofMonth; i <6; i++) { // creating li of all next month first days
        
        liTag += `<li class="inactive">${i- lastDayofMonth  +1}</li>`;

    }
    
    currentDate.innerHTML= `${months[currentmonth]} ${currentYear}`;
    dayTag.innerHTML =liTag;
 }

renderCalendar();

preNexticon.forEach(icon => {      // adding click event on both icons
        icon.addEventListener("click", () => {
        currentmonth = icon.id === "pre" ? currentmonth -1 : currentmonth+1;

            if(currentmonth <0 || currentmonth>11){
                //creating a new date of current year and month and pass it as date value
             date = new Date(currentYear, currentmonth);
                currentYear= date.getFullYear(); //updating current year with new date year
                currentmonth = date.getMonth();  // updating current month with new date month
            }
            else  //else pass new Date as date value
            {
                date = new Date();
            }

        renderCalendar();
    })
})