// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours
// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
// WHEN I click into a timeblock
// THEN I can enter an event
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist

// jQuery must-have. tells browser to use this code once DOM loaded
$(document).ready(function() { 

    // identify current day
    $("#currentDay").text(moment().format("LLLL"));

    // save schedule function
    $(".saveBtn").on("click", function(){
        var time = $(this).parent().attr("id");
        var value = $(this).siblings(".description").val();
        // save in local storage
        localStorage.setItem(time, value);
    });

    // get stored schedule
    var keys = Object.keys(localStorage);
        // loop for local storage keys
        for (var i = 0; i < keys.length; i++) {
            // assign storage index
            var value = localStorage.getItem(keys[i]);
            // add value to textarea
            var task = $("#" + keys[i]).find("textarea");
            task.val(value);
        }

    // create timeblock function loop
    function timeBlock() {
        // grab current hour from momentjs
        var currentHour = moment().hours();
            console.log(currentHour);
        
        // loop through each timeblock 
        $("time-block").each(function() {
            // identify timeblock
            // identify hour
            // with current day, organize blocks into proper time frames (past, current, future)
        })
    
            
    
        }

    
timeBlock();
    

});
