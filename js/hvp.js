var $button = $("a.download-button"); //finding the matching buttons on the DOM

$button.on('click', function() { // adding click event handler to the buttons
    var $clickedButton = $(this); // storing the current button so we can reference to it later in timeout fn
    var $href = $(this).attr("href");
    $clickedButton.text("Downloading...");
    $clickedButton.css("background-color", "#275AB0");
    setTimeout(function() {
        $clickedButton.removeAttr("href"); // remove href so further clicks don't trigger download
    }, 50);

    setTimeout(function() {
        $clickedButton.text("Downloaded.");
        $clickedButton.css("background-color", "#aaa");
    }, 1500); // this executes 1.5 seconds after click event

    $clickedButton.off(); // remove the event listener so further clicks aren't listened to

});