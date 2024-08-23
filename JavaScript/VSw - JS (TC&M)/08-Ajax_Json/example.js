var xhr = new XMLHttpRequest();

xhr.onload = function() { //                            when readystate changes
    if (xhr.status === 200) { //                        if server status was ok
        responseObject = JSON.parse(xhr.responseText);

        //build up string with new content 
        var newContent = '';
        for (let i = 0; i < responseObject.events.length; i++) { // loop through object
            newContent += '<div class="event">';
            newContent += '<img src="' + responseObject.events[i].map + '"';
            newContent += 'alt="' + responseObject.events[i].location + '"';
            newContent += '<p><b>' + responseObject.events[i].location + '</b><br>';
            newContent += responseObject.events[i].date + '</p>';
            newContent += '</div>';
        }

        //update the page with the new content
        document.getElementById('content').innerHTML = newContent;
    }
}

xhr.open('GET', 'example.json', true) // prepare the request
xhr.send(null); //                       send the request