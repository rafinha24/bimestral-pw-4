document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); 

        const firstName = document.getElementById("firstname").value;
        const message = `Sua inscrição foi enviada com sucesso, ${firstName}!`;

        
        const existingMessage = document.querySelector(".confirmation-message");
        if (existingMessage) {
            existingMessage.remove();
        }

       
        const confirmationMessage = document.createElement("div");
        confirmationMessage.textContent = message;
        confirmationMessage.classList.add("confirmation-message");
        confirmationMessage.style.fontSize = "18px";
        confirmationMessage.style.fontWeight = "bold";
        confirmationMessage.style.color = "#4CAF50";
        confirmationMessage.style.marginTop = "20px";
        confirmationMessage.style.textAlign = "center";

        
        form.appendChild(confirmationMessage);
    });
});
