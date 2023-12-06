let calendarE1 = document.getElementById('calendar');

let calendar = new FullCalendar.Calendar(calendarE1, {
    initialView: 'dayGridMonth',
    headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay'
    },
    events: [
        {
            title: "Record a video for Marisa",
            start: "2023-12-5"
        },
    ],

});

calendar.render();
