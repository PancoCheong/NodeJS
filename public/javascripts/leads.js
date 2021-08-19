// ./public/javascripts/leads.js
// make a ajax HTTP request call to web server using Javascript
// and sending and recieving data thru JSON object
// ajax - the request happen on the background while you are on the same webpage
// pass data in the data payload
// stringify() - pack data into a transmittable form over the network
// use json.parse to unpack on the recieving end
// on success, update the DOM document object model, remove the lead entry by ID using jQuery
// $() - call jQuery
// #number - search for HTML element with ID 
function deleteLead(leadId) {
    $.ajax({
        url: '/lead/' + leadId + '/delete-json',
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        data: JSON.stringify({leadId}),
        type: 'POST',
        success: ((res) => {
            // Replace follow button with unfollow.
            console.log("Result: ", res)
            $("#"+leadId).remove();
        }),
        error: ((error) => {
            console.log("Error:", error);
        })
    });
}
