$('#submit').click(function (event) {
	event.preventDefault();
	const name = $('input[name = "name"]').val();
	const email = $('input[name = "email"]').val();
	const password = $('input[name = "password"]').val();
	const phone = $('input[name = "phone"]').val();
	let check = {
		name: false,
		email: false,
		password: false,
		phone: false,
	};
	const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
	const regexPhone = /^[0-9]{10}$/;
	if (name.length < 3) {
		$('label[for="name"]').css('color', 'red');
		$('label[for="name"]').text('Họ và tên không hợp lệ');
		$('input[name="name"]').css('border', '1px solid #ca6510');
		check.name = false;
	} else {
		$('label[for="name"]').css('color', 'green');
		$('label[for="name"]').text('Họ và tên hợp lệ');
		$('input[name="name"]').css('border', '1px solid #000');
		check.name = true;
	}
	if (regexEmail.test(email) === false) {
		$('label[for="email"]').css('color', 'red');
		$('label[for="email"]').text('Email không hợp lệ');
		$('input[name="email"]').css('border', '1px solid #ca6510');
		check.email = false;
	} else {
		$('label[for="email"]').css('color', 'green');
		$('label[for="email"]').text('Email hợp lệ');
		$('input[name="email"]').css('border', '1px solid #000');
		check.email = true;
	}
	if (password.length < 3) {
		$('label[for="password"]').css('color', 'red');
		$('label[for="password"]').text('Mật khẩu không hợp lệ');
		$('input[name="password"]').css('border', '1px solid #ca6510');
		check.password = false;
	} else {
		$('label[for="password"]').css('color', 'green');
		$('label[for="password"]').text('Mật khẩu hợp lệ');
		$('input[name="password"]').css('border', '1px solid #000');
		check.password = true;
	}
	if (regexPhone.test(phone) === false) {
		$('label[for="phone"]').css('color', 'red');
		$('label[for="phone"]').text('Số điện thoại không hợp lệ');
		$('input[name="phone"]').css('border', '1px solid #ca6510');
		check.phone = false;
	} else {
		$('label[for="phone"]').css('color', 'green');
		$('label[for="phone"]').text('Số điện thoại hợp lệ');
		$('input[name="phone"]').css('border', '1px solid #000');
		check.phone = true;
	}
	if (
		check.name === true &&
		check.email === true &&
		check.password === true &&
		check.phone === true
	) {
		window.location.href = '../index.html';
	}
});
