$(document).ready(function() {
    // Toggle the sidebar visibility
    $(".toggle-btn").on("click", function() {
        var colorPicker = $(".colorpick");
        var rightPos = colorPicker.css("right") === "0px" ? "-332px" : "0px";
        colorPicker.css("right", rightPos);
    });

    // Close the sidebar when close button is clicked
    $(document).on("click", ".closebtn", function() {
        $(".colorpick").css("right", "-332px");
    });

    // Change the theme color when a color is picked
    $(document).on("click", "span", function() {
        var color = $(this).data("color");
        document.documentElement.style.setProperty('--maincolor', color);
    });
});
