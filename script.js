
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
        
        // loop through each timeblock 
        $(".time-block").each(function() {
            // access id of time-block
            var hourRow = $(this).attr("id");
            // use substring method to grab everything after "hour-##"
            var hourTime = hourRow.substring(5, hourRow.length);
            // change the typeof from string to integer to compare with currentHour
            var intHourTime = parseInt(hourTime);
            // function not working, so parseInt-ing currentHour
            var intCurrentHour = parseInt(currentHour);
            
            // with current day, organize blocks into proper time frames (past, current, future). Update - parseInt the variables once again.
            
            // conditions for past
            
            if (parseInt(intHourTime) < parseInt(intCurrentHour)) {
                $(this).addClass("past");
                $(this).removeClass("future");
                $(this).removeClass("present");
            }

            // conditions for future
            else if (parseInt(intHourTime) > parseInt(intCurrentHour)) {
                $(this).addClass("future");
                $(this).removeClass("present");
                $(this).removeClass("past");
            }

            // conditions for present
            else if (parseInt(intHourTime) === parseInt(intCurrentHour)) {
                $(this).addClass("present");
                $(this).removeClass("future");
                $(this).removeClass("past");
            }
            
        });

    }
    timeBlock();
    
});
