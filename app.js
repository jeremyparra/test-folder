
$("#contact-form").submit(function(e){

    var firstname = document.getElementById("firstname"),
        lastname = document.getElementById("lastname");

    if (!firstname.value || !lastname.value) {
        alert("Please enter the correct information and re-submit");
    } else {
        $.ajax({
            url: "https://formspree.io/jeremy@denverwindowcleaningpro.com",
            method: "POST",
            data: $(this).serialize(),
            dataType: "json"
        });
        event.preventDefault();
        $(this).get(0).reset();
        alert("Message Sent");
    }
})






