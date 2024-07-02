const emailConfirm = document.getElementById("email_confirm");
const form = document.getElementById("form");
const email = document.getElementById("email");

emailConfirm.addEventListener("change", (ev) => {
    console.log("hola change");
    console.log(ev);

    if (email.value !== emailConfirm.value) {
        console.log("es distinto");
        emailConfirm.style.backgroundColor = "rgba(230,169,171,.5)";
        var element = document.createElement("p");
        element.setAttribute("id", "mensajito");
        var message = document.createTextNode("El correo electronico no coincide");
        element.style.color = "#d14539";
        element.appendChild(message);
        var emailConfirmRow = emailConfirm.closest("tr");
        emailConfirmRow.insertAdjacentElement("afterend", element);
        setTimeout(() => {
            element.remove()
          }, 3000)
        
        return false;
    } else {
        console.log("es igual");
        emailConfirm.style.backgroundColor = "";
    }
});
