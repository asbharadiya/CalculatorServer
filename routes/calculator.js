
function calculate(req, res){
	//TODO check number validation....
	var operand = req.body.operand;
	var firstNum = req.body.firstNum;
	var secondNum = req.body.secondNum;
	var result;
	switch(operand) {
		case 'add':
			result = firstNum + secondNum;
			break;
		case 'sub':
			result = firstNum - secondNum;
			break;
		case 'div':
			result = firstNum / secondNum;
			break;
		case 'mul':
			result = firstNum * secondNum;
			break;
		default:
			res.json({statusCode: 400, message: 'Not a valid operand.'})
			return;
	}
	res.json({statusCode: 200, message: 'Success.', data: result});
}

exports.calculate = calculate;
