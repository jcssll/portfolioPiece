/* ----------------------------------------
- Function
------------------------------------------- */
    function creativeinputs() {
        $("#contact_form input, #contact_form textarea").each(function() {
            $(this).addClass('populated');
        });
    }
/* ----------------------------------------
- Focus - Animating the labels on input focus
------------------------------------------- */
    $("#contact_form input, #contact_form textarea").focusin(function() {
        $(this).removeClass('populated');
    });

    $("#contact_form input, #contact_form textarea").focusout(function() {
        if ($(this).val() != '') {
            $(this).addClass('populated');
        } else {
            $(this).removeClass('populated');
        }
    });

/* ----------------------------------------
- On load
------------------------------------------- */
    creativeinputs();

/* ----------------------------------------
- On Document ready
------------------------------------------- */
    $(document).ready(function() {
        creativeinputs();
    });