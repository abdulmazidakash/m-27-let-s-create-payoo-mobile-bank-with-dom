// console.log('cash out file connected');

document.getElementById('btn-cash-out').addEventListener('click', function(event){
	event.preventDefault();
	// console.log('clicked');

	const cashOut = document.getElementById('input-cash-out').value;
	const cashOutNumber = parseFloat(cashOut);
	const pinNumber = document.getElementById('input-cash-out-pin').value ;

	console.log(cashOut, pinNumber);

	//wrong way to verify pin number 
	if (pinNumber === '1234'){
		// console.log('money reducing');
		const balance = document.getElementById('account-balance').innerText;
		const balanceNumber = parseFloat(balance);

		//reduce the balance 
		const newBalance = balanceNumber - cashOutNumber;
		
		//update the ui
		document.getElementById('account-balance').innerText = newBalance;
	}else{
		alert('wrong password , please try again later');
	}
});

