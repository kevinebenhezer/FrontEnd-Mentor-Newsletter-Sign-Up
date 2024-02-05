const form = document.getElementById("form");
const email = document.getElementById("email");
const modal = document.getElementById("modal");
const closeModal = document.getElementById("close-modal");

form.addEventListener("submit", (e) => {
	if (email.value == "") {
		error();
		e.preventDefault();
	} else {
		success();
	}
});

function error() {
	const message = [];

	if (email.value == "") {
		message.push("Email cannot be empty");
		email.classList.add("error");
	}
	const errorMessage = document.getElementById("error-message");
	errorMessage.innerText = message;
	errorMessage.classList.add("error-message");
}

function success() {
	modal.style.display = "flex";
}

closeModal.onclick = function () {
	modal.style.display = "none";
};
