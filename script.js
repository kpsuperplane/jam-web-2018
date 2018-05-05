$(document).ready(function() {
    $('.delete').on('click', function() { // when a delete button is clicked
        $(this).parent().remove(); // get parent element and remove it!
    });
});