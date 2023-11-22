let dt = new Date();

function RenderDate() {

    dt.setDate(1);
    let day = dt.getDay();
    
    let endDate = new Date(dt.getFullYear(), dt.getMonth() + 1, 0).getDate();
        
    let prevDate = new Date(dt.getFullYear(), dt.getMonth() + 1, 0).getDate();
    
    let today = new Date();
    
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    document.getElementsByClassName('calendar__month').innerHTML = months[dt.getMonth()]
    
    let cells = '';
    
    for ( x = day; x > 0; x--) {
        cells += "<div class='prev_date' >" + (prevDate - x) + "</div>";   
    }
    
    for (let i = 1; i <= endDate; i++) {
        if ( i == today.getDate() && dt.getMonth() == today.getMonth()) {
            cells += "<button class='calendar__today'>" + i + "</button>";
        } else {
            cells += "<button class='calendar__day'>" + i + "</button>";
        }
    }
    
    
    document.getElementsByClassName('calendar__days')[0].innerHTML = cells;
}

RenderDate();

function moveDate(month) {
    if (month == 'prev') {
        dt.setMonth(dt.getMonth() - 1);

    } else if (month == 'next'){
        dt.setMonth(dt.getMonth() + 1);

    }
    RenderDate();
}