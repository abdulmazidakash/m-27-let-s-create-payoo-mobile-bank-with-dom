document.getElementById('btn-add-money').addEventListener('click', function(event){

	event.preventDefault();
	// console.log('clicked');

	const  addMoneyInput = document.getElementById('input-add-money').value;
	const pinNumberInput = document.getElementById('input-pin-number').value;
	// console.log(typeof addMoneyInput, typeof pinNumberInput);

	if (pinNumberInput === '1234'){

		// console.log('adding money to your account');
		
		const balance = document.getElementById('account-balance').innerText;
		// console.log(typeof balance);

		const balanceNumber = parseFloat(balance);
		const addMoneyNumber = parseFloat(addMoneyInput);

		const newBalance = addMoneyNumber + balanceNumber;
		console.log(newBalance);

		document.getElementById('account-balance').innerText = newBalance;




	}else{
		alert('failed your password, please try again');
	}


})