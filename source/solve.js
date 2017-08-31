const solve = function (str, x) {	
	if(/^[-+()x*\/\d\s]+$/.test(str)){
		try {
			return eval(str);
		} catch (err) {	
			alert('Ошибка синтаксиса');		
		}
	} else {
		alert('Недопустимые символы');
	};
};