$(function() {
    const contactForm = $("#contact-form"),
        formMessages = $('.form-messege');
    contactForm.validate({
        submitHandler: function(form){
            $.ajax({
                type: 'POST',
                url: form.action,
                data: $(form).serialize()
            })
            .done(function (response) {
                console.log(response)
                formMessages.removeClass('error-message text-danger').addClass('success text-success mt-3').text(response);
                // Clear the form.
                form.reset()
            })
            .fail(function (data) {
                // Make sure that the formMessages div has the 'error' class.
                formMessages.removeClass('success text-success').addClass('error-message text-danger mt-3');
                // Set the message text.
                if (data.responseText !== '') {
                    formMessages.text(data.responseText);
                } else {
                    formMessages.text('Oops! An error occured and your message could not be sent.');
                }
            });
        }
    });
});
