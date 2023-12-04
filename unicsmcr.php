<?php
$con=mysqli_connect('localhost','beanhceo_unicsmcr','Sj%X*;efjA@e','beanhceo_unicsmcr');
$getEvents=mysqli_query($con,"SELECT * from events ");

?>

<!DOCTYPE html>
<html lang='en'>
  <head>
    <meta charset='utf-8' />
    <script src='https://cdn.jsdelivr.net/npm/fullcalendar@6.1.9/index.global.min.js'></script>
    <script src="https://code.jquery.com/jquery-3.7.1.min.js" integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous"></script>
    <link href="fullcalendar.css" rel="stylesheet" type="text/css" />
    <link href="fullcalendar.print.css" rel="stylesheet" type="text/css" media='print' />


  


   
  </head>
  <body>
    <div id='calendar'></div>
    <script src="fullcalendar.js" type="text/javascript"></script>
    <script src="fullcalendar.min.js" type="text/javascript"></script>
    <script>

$(function() {

/* initialize the external events
 -----------------------------------------------------------------*/
function ini_events(ele) {
    ele.each(function() {

        // create an Event Object (https://arshaw.com/fullcalendar/docs/event_data/Event_Object/)
        // it doesn't need to have a start or end
        var eventObject = {
            title: $.trim($(this).text()) // use the element's text as the event title
        };

        // store the Event Object in the DOM element so we can get to it later
        $(this).data('eventObject', eventObject);

        // make the event draggable using jQuery UI
        $(this).draggable({
            zIndex: 1070,
            revert: true, // will cause the event to go back to its
            revertDuration: 0  //  original position after the drag
        });

    });
}
ini_events($('#external-events div.external-event'));

/* initialize the calendar
 -----------------------------------------------------------------*/
//Date for the calendar events (dummy data)
var date = new Date();
var d = date.getDate(),
        m = date.getMonth(),
        y = date.getFullYear();
 $('#calendar').fullCalendar({
    header: {
        left: 'prev,next today',
        center: 'title',
        right: 'month,agendaWeek,agendaDay'
    },  
    firstDay: 1,

    buttonText: {//This is to add icons to the visible buttons
        prev: "<span class='fa fa-caret-left'></span>",
        next: "<span class='fa fa-caret-right'></span>",
        today: 'today',
        month: 'month',
        week: 'week',
        day: 'day'
    },
    //Random default events
    events: [

        <?php 

        

        while($row=mysqli_fetch_assoc($getEvents)){
            $date=$row['dateStart'];
            //split date to y m d
            $year=substr($date,0,4);
            $month=substr($date,5,2);
            $month=$month-1;
            $day=substr($date,8,2);
            $startTime=date("H",strtotime($row['startTime'])).",".date("i",strtotime($row['startTime']));
            $endTime=date("H",strtotime($row['endTime'])).",".date("i",strtotime($row['endTime']));
            
            echo "
            {
                title: '".$row['title']."',
                start: new Date(".$year.",".$month.", ".$day.",".$startTime.",".$endTime."),
                allDay: false,
                backgroundColor: '#fdc32e', //yellow
                url: 'view-event.php?id=".$row['id']."',

                borderColor: '#fdc32e' //yellow
            },
            
            
            ";
        }
        ?>

],
    editable: false,
    droppable: false, // this allows things to be dropped onto the calendar !!!
    drop: function(date, allDay) { // this function is called when something is dropped

        // retrieve the dropped element's stored Event Object
        var originalEventObject = $(this).data('eventObject');

        // we need to copy it, so that multiple events don't have a reference to the same object
        var copiedEventObject = $.extend({}, originalEventObject);

        // assign it the date that was reported
        copiedEventObject.start = date;
        copiedEventObject.allDay = allDay;
        copiedEventObject.backgroundColor = $(this).css("background-color");
        copiedEventObject.borderColor = $(this).css("border-color");

        // render the event on the calendar
        // the last `true` argument determines if the event "sticks" (https://arshaw.com/fullcalendar/docs/event_rendering/renderEvent/)
        $('#calendar').fullCalendar('renderEvent', copiedEventObject, true);

        // is the "remove after drop" checkbox checked?
        if ($('#drop-remove').is(':checked')) {
            // if so, remove the element from the "Draggable Events" list
            $(this).remove();
        }

    }
});

/* ADDING EVENTS */
var currColor = "#f56954"; //Red by default
//Color chooser button
var colorChooser = $("#color-chooser-btn");
$("#color-chooser > li > a").click(function(e) {
    e.preventDefault();
    //Save color
    currColor = $(this).css("color");
    //Add color effect to button
    colorChooser
            .css({"background-color": currColor, "border-color": currColor})
            .html($(this).text()+' <span class="caret"></span>');
});
$("#add-new-event").click(function(e) {
    e.preventDefault();
    //Get value and make sure it is not null
    var val = $("#new-event").val();
    if (val.length == 0) {
        return;
    }

    //Create event
    var event = $("<div />");
    event.css({"background-color": currColor, "border-color": currColor, "color": "#fff"}).addClass("external-event");
    event.html(val);
    $('#external-events').prepend(event);

    //Add draggable funtionality
    ini_events(event);

    //Remove event from text input
    $("#new-event").val("");
});
});
   </script>
  </body>
</html>