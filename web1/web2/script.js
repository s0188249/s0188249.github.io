const url = "https://formcarry.com/s/GVjGRMzvvwU";

function recordHistory() {
    window.history.pushState({modalOpen: true}, "", "#modal");
}

function goBackHistory() {
    window.history.back();
}

function displayModal() {
    let modalInstance = bootstrap.Modal.getInstance(
        document.getElementById("exampleModal")
    );

    if (window.location.hash.match(/^#modal$/)) {
        modalInstance.show();
    } else {
        modalInstance.hide();
    }
}


function submitForm(event) {
    event.preventDefault();
    if (!document.querySelector("form").reportValidity()) {
        return;
    }

    let xhr = new XMLHttpRequest();
    xhr.open("POST", url);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("Accept", "application/json");

    let formData = {};
    let inputFields = document.querySelectorAll(".form-control:not(.form-label)");
    inputFields.forEach(function (input) {
        formData[input.name] = input.value;
    });

    xhr.send(JSON.stringify(formData));
    xhr.onreadystatechange = function () {
        if (this.readyState === 4) {
            let responseMessage = document.querySelector(".response");
            if (this.status === 200) {
                responseMessage.innerHTML = "Успешно";
                inputFields.forEach(function (input) {
                    input.value = "";
                });
                window.localStorage.clear();
            } else {
                responseMessage.innerHTML = "Что-то пошло не так!";
            }
            goBackHistory();
        }
    };
}

function storeItem(event) {
    window.localStorage.setItem(event.target.name, event.target.value);
}

window.addEventListener("DOMContentLoaded", function () {
    new bootstrap.Modal(document.getElementById("exampleModal"));
    displayModal();

    document.getElementById("buttonModal")
        .addEventListener("click", recordHistory);
    document.getElementById("buttonClose")
        .addEventListener("click", goBackHistory);

    window.addEventListener("popstate", displayModal);
    document.addEventListener("keydown", function (e) {
        if (e.key === "Escape" && window.location.hash.match(/^#modal$/)) {
            goBackHistory();
        }
    });

    document.querySelector("form").addEventListener("change", storeItem);

    Object.keys(window.localStorage).forEach(function (key) {
        document.querySelector(`[name=${key}]`).value = window
            .localStorage.getItem(key);
    });

    document.querySelector("form").addEventListener("submit", submitForm);
});
