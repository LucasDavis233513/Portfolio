document.addEventListener("DOMContentLoaded", () => {
    emailjs.init("lgux6FwkiHx6jsCHi");

    const form = document.getElementById("contact-form");
    if (!form) return;

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        emailjs.sendForm("service_hvaz7uh", "template_lbndqgp", this)
            .then(() => {
                alert("Message sent!");
                this.reset();
            }, (error) => {
                console.error("FAILED...", error);
                alert("Failed to send message. Please try again.");
            });
    });
});