const solve = function (str, x) {	
	if(/^[-+()x*\/\d\s]+$/.test(str)){
		try {
			var calc = new Function('x', 'return ' + str + ';');
			return calc(x);
		} catch (err) {		
			return 'Ошибка синтаксиса';	
		}
	} else {
		return 'Недопустимые символы';	
	};
};
