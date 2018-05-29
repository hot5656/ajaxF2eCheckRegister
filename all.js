// check register
var send = document.querySelector(".send") ;
send.addEventListener("click", submit, );
function submit() {
	var email = document.querySelector(".email") ;
	var account = {} ;
	account.email = email.value ;
	var data = JSON.stringify(account);

	// post
	var xhr = new XMLHttpRequest();
	xhr.open('post', 'https://www.thef2e.com/api/isSignUp', true);
	xhr.setRequestHeader('Content-type', "application/json");
	xhr.send(data);
	console.log("check complete");

	// show dialog
	xhr.onload = function() {
		respData = JSON.parse(xhr.responseText) ;
		if (respData.success) {
			alert(respData.message+respData.nickName) ;
		}
		else {
			alert("Error : "+respData.message) ;
		}
	}
}


// check register counter
var send = document.querySelector(".sendCnt") ;
send.addEventListener("click", submitCnt, );
function submitCnt() {
	// post
	var xhr = new XMLHttpRequest();
	xhr.open('get', 'https://www.thef2e.com/api/signUpTotal', true);
	xhr.send(null);
	console.log("count complete");

	// show dialog
	xhr.onload = function() {
		respData = JSON.parse(xhr.responseText) ;
		if (respData.success) {
			alert("Count : "+respData.total) ;
		}
		else {
			alert("Error : "+respData.message) ;
		}
	}
}