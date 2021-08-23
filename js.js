function fun1() {
var  chbox;   // переменная состояния ch-bx
 chbox = document.getElementById("one");  // получить значение из html

//проверка состояния 
if (chbox.checked) {
	console.log('Активен ');
}
else{
 console.log('Не активен ');
}
}



function fun2(){
	var radi=document.getElementsByName("r1"); // получаем значение по имени
	for(var i=0; i<radi.length ;i++){ //пока i меньше длинны массива
		if(radi[i].checked){
			console.log('Выбран'+i +'балл в качестве оценки');
		}

	}
}


function fun3(){
var sel = document.getElementById("mySelect").selectedIndex;  //получает индекс выбраной строки в массиве
var options = document.getElementById("mySelect");   // получаем содержимое (текст)
console.log('Выбрана тренеровка  '+ options[sel].text);  //выводим содержимое массива преображенное в текст
}


function fun4(){
	var rng = document.getElementById("r2");
	var p = document.getElementById("one");
	console.log(p.innerHTML = rng.value);
	var i1 = document.getElementById("i1");
	i1.value=rng.value;
	var p1 = document.getElementById("block");
	p1.style.width=rng.value+"px"; // изм. в ширине р1 == величине значения ползунка
}
