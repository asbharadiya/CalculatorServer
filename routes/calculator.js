
function calculate(req, res){
	//TODO check number validation....
	var operator = req.body.operator;
	var firstNum = req.body.firstNum;
	var secondNum = req.body.secondNum;
	var result;
	switch(operator) {
		case '+':
			result = firstNum + secondNum;
			break;
		case '-':
			result = firstNum - secondNum;
			break;
		case '/':
			result = firstNum / secondNum;
			break;
		case '*':
			result = firstNum * secondNum;
			break;
		default:
			res.json({statusCode: 400, message: 'Not a valid operator.'})
			return;
	}
	res.json({statusCode: 200, message: 'Success.', data: result});
}

exports.calculate = calculate;
