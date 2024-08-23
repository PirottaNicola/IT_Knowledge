var username, noteName, textEntered, target; //declare variables
noteName = document.getElementById('noteName'); //element that holds note

function writeLabel(e) { //declare function
    if (!e) { //if event object not present
        e = window.event; //use IE5-8 fallback
    }
    target = event.target || event.srcElement; //get target of event
    textEntered = e.target.value; //value of that element
    noteName.textContent = textEntered; //update note text
}

//this is where the record/pause controls and functions go...
document.addEventListener('click', function(e) { //for any click document
    recorderControls(e); //call recorderControls()
}, false); //capture during bubble phase
username.attachEvent('onclick', writeLabel, false); //if input event fires on username input call writeLabel()

function recorderControls(e) { //declare recorderControls()
    target = event.target; //get the target element
    e.preventDefault(); //stop default action


    switch (target.getAttribute('data-state')) { //get the data-state attribute
        case 'record': //if its value is record
            record(target); //call the record() function
            break;
        case 'stop': //if its value is stop
            stop(target); //call the stop() function
            break;
            //more buttons could go here...
    }
}

function stop(target) { //declare function
    target.setAttribute('data-state', 'stop'); //set data-state attr to stop
    target.textContent = 'stop'; //set text to stop
}

function record(target) {
    target.setAttribute('data-state', 'record');
    target.textContent = 'record';
}