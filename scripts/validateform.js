$('#submit').click(function (event) {
	let username = $('input[name="username"]').val();
	let password = $('input[name="password"]').val();
	let email = $('input[name="email"]').val();
	let phone = $('input[name="numberphone"]').val();
	let validateName = true;
	let validatePass = true;
	let validateEmail = true;
	let validatePhone = true;
	let validate = true;
	let rexgeEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	let rexphone = /^[0-9]{10}$/;
	event.preventDefault();
	if (username === '') {
		$('input[name="username"]').css('border', '2px solid #ca6510');
		$('.errorname').text('name is empty');
		validateName = false;
	} else {
		$('input[name="username"]').css('border', '2px solid #0f5132');
		$('.errorname').text('');
		validateName = true;
	}
	if (password === '') {
		$('input[name="password"]').css('border', '2px solid #ca6510');
		$('.errpassword').text('min lenght is 6 characters');
		validatePass = false;
	} else {
		$('input[name="password"]').css('border', '2px solid #0f5132');
		$('.errpassword').text('');
		validatePass = true;
	}
	if (rexgeEmail.test(email) === false) {
		$('input[name="email"]').css('border', '2px solid #ca6510');
		$('.erremail').text('Email is required');
		validateEmail = false;
	} else {
		$('input[name="email"]').css('border', '2px solid #0f5132');
		$('.erremail').text('');
		validatePhone = true;
	}
	if (rexphone.test(phone) === false) {
		$('input[name="numberphone"]').css('border', '2px solid #ca6510');
		$('.errphone').text('Phone is required');
		validateEmail = false;
	} else {
		$('input[name="numberphone"]').css('border', '2px solid #0f5132');
		$('.errphone').text('');
		validatePhone = true;
	}
	validate = validateName && validatePass && validateEmail && validatePhone;
	if (validate) {
		window.location.href = '../index.html';
	} else {
		alert('Please fill in the form');
	}
});
