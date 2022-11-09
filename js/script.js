document.addEventListener('DOMContentLoaded', function() {
	let cardToggles = document.getElementsByClassName('card-toggle');
	for (let i = 0; i < cardToggles.length; i++) {
		cardToggles[i].addEventListener('click', e => {
			e.currentTarget.parentElement.parentElement.childNodes[3].classList.toggle('is-hidden');
		});
	}
});

function changeImage() {
    console.log("change");
    if (document.getElementById("Canna").src == "../Infinity/img/Canna Disguised.png"){
        document.getElementById("Canna").src = "../Infinity/img/Canna Non-Disguised.png";
    } 
    if (document.getElementById("Kikaru").src == "../Infinity/img/Kikaru Disguised.png"){
        document.getElementById("Kikaru").src = "../Infinity/img/Kikaru non-disguised.png";
    } else {
        document.getElementById("Kikaru").src = "../Infinity/img/Kikaru Disguised.png";
    }
    if (document.getElementById("David").src == "../Infinity/img/David disguised.png"){
        document.getElementById("David").src = "../Infinity/img/David non-disguised.png";
    } else {
        document.getElementById("David").src = "../Infinity/img/David Disguised.png";
    }
    if (document.getElementById("Kaey").src == "../Infinity/img/Kaey Disguised.png"){
        document.getElementById("Kaey").src = "../Infinity/img/Kaey non-disguised.png";
    } else {
        document.getElementById("Kaey").src = "../Infinity/img/Kaey Disguised.png";
    }
    if (document.getElementById("Aurelia").src == "../Infinity/img/Aurelia Disguised.png"){
        document.getElementById("Aurelia").src = "../Infinity/img/Aurelia non-Disguised.png";
    } else {
        document.getElementById("Aurelia").src = "../Infinity/img/Aurelia Disguised.png";
    }
}