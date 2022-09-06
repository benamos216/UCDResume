function sendMail(contactForm) {
    emailjs.send("service_jy5xwvk", "rosie", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "project_request": contactForm.projectsummary.value
    })
    .then(
        function(reponse) {
            console.log("SUCCESS", response);
        },
        function(error){
            console.log("FAILED", error);
        });
    return false;
}