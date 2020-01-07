/***
 * 786*/


// addEventListener version
window.addEventListener('online', (event) => {
    console.log("You are now connected to the network.");
});


// ononline version
window.ononline = (event) => {
    console.log("You are now connected to the network.");
    var status = document.getElementById("status");

    status.append("Online");
};