function helper()
{
    var a = Number($("#inchesvalue").val())
    LengthConverter(a)
}//end of helper function

function LengthConverter(a) {

    if (typeof a !== 'number') {
		throw Error('The given argument is not a number');
	}
    var feet = 0
   if(a < 0){
alert("you can't give input value negitive")
}else{
    feet = a*0.08333
    alert("The value in feets is: "+feet)
}

return feet
}//end of function