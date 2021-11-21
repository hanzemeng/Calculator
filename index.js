var unitOfMass = [453.59237, 28.349523125, 1000, 1, 0.001, 0.000001]; //gram
var symbolOfMass = ["lb", "oz", "kg", "g", "mg", "\u03BCg"];
var unitOfLength = [1609.344, 0.9144, 0.3048, 0.0254, 1000, 1, 0.001, 0.000001];
var symbolOfLength = ["mi", "yd", "ft", "in", "km", "m", "mm", "\u03BCm"];
var unitOfTime = [3600, 60, 1, 0.001, 0.000001];
var symbolOfTime = ["h", "min", "s", "ms", "\u03BCs"];//second
var unitOfAmount = [1, 1/602214076000000000000000]; //mole
var symbolOfAmount = ["mol", "atom"];
var unitOfTemperature = [1, 1, 5/9]; //kelvin
var symbolOfTemperature = ["K", "\xB0C", "\xB0F"];

var unitOfVolume = [28.316846592, 0.016387064, 3.785411784, 1000, 1, 0.001, 0.000001, 1000, 1, 0.001]; //liter
var symbolOfVolume = ["ft\u00B3", "in\u00B3", "gal", "kL", "L", "mL", "\u03BCL", "m\u00B3", "dm\u00B3", "cm\u00B3"];
var unitOfEnergy = [4184, 4.184, 1000, 1, 0.001, 0.000001]; //joule
var symbolOfEnergy = ["Cal", "cal", "kJ", "J", "mJ", "\u03BCJ"];
var unitOfPressure = [101325, 20265/152, 1]; //pascal
var symbolOfPressure = ["atm", "Torr", "Pa"];



var R = 8314.46261815324; //ideal gas constant

document.addEventListener("keyup", KeyCheck); 
function KeyCheck(event)
{
   var KeyID = event.keyCode;
   switch(KeyID)
   {
   		case 8:
	    cald();
	    calc();
	    break; 
	    case 13:
	    insert();
	    break;
	    case 37:
	   	document.getElementById("significantDigit").value=Number(document.getElementById("significantDigit").value)-Number(1);	
      	break;
      	case 39:
      	document.getElementById("significantDigit").value=Number(document.getElementById("significantDigit").value)+Number(1);
      	default:
      	break;
   }
}


function creatUnit(id, symbol, length, assume, location)
{
	var i = document.createElement("select");
	i.id = id;
	for(var e = 0; e<10; e++)
	{
		i.options[e] = new Option(symbol[e],e);
	}
	i.length = length;
	i.options[assume].selected = "selected";
	document.getElementById(location).appendChild(i);
}
function removeUnit(id)
{
	document.getElementById(id).remove();
}
function copyText(element) 
{
	var i = document.getElementById(element);
	i.select();
	i.setSelectionRange(0, 100);
	document.execCommand("copy");
}
function copyURL() 
{

    document.getElementById("url").value = "http://zach1.hanmingjie.com/Formula%20Calculator/index.php";
   	document.getElementById("url").style.display = "block";
   	document.getElementById("url").select();
   	document.getElementById("url").setSelectionRange(0,100);
   	document.execCommand("copy");
	document.getElementById("url").style.display = "none";
    alert("URL copied. I appreciate your willingness to share.");
}
function toTop(location)
{
	var i = document.getElementById(location).offsetTop - Number(30);
	window.scrollTo({top:i, behavior: 'smooth'});
}

function abc(firstUnitType, secondUnitType, firstNumber, secondNumber, firstUnit, secondUnit, thirdUnit, fourthUnit, target, display)
{
	var a = document.getElementById(firstNumber).value*firstUnitType[document.getElementById(firstUnit).value];
	var b = document.getElementById(secondNumber).value*secondUnitType[document.getElementById(secondUnit).value];
	var c = a/b;
	var result = c/(firstUnitType[document.getElementById(thirdUnit).value]/secondUnitType[document.getElementById(fourthUnit).value])
	if(a != 0 && b != 0)
	{
		document.getElementById(target).innerHTML = result.toPrecision(document.getElementById("significantDigit").value) + " " + document.getElementById(thirdUnit).options[document.getElementById(thirdUnit).selectedIndex].text + "/" + document.getElementById(fourthUnit).options[document.getElementById(fourthUnit).selectedIndex].text;	
		document.getElementById(target).style.color = "red";
	}
	else
	{
		document.getElementById(target).innerHTML = display;
		document.getElementById(target).style.color = "#c7c1c1";
	}	
}
function bca(firstUnitType, secondUnitType, firstNumber, secondNumber, firstUnit, secondUnit, thirdUnit, fourthUnit, target, display)
{
	var a = document.getElementById(firstNumber).value*firstUnitType[document.getElementById(firstUnit).value];
	var b = document.getElementById(secondNumber).value*secondUnitType[document.getElementById(secondUnit).value]/firstUnitType[document.getElementById(thirdUnit).value];
 	var c = a*b;
 	var result = c/secondUnitType[document.getElementById(fourthUnit).value]
	if(a != 0 && b != 0)
	{
		document.getElementById(target).innerHTML = result.toPrecision(document.getElementById("significantDigit").value) + " " + document.getElementById(fourthUnit).options[document.getElementById(fourthUnit).selectedIndex].text;
		document.getElementById(target).style.color = "red";
	}	
	else
	{
		document.getElementById(target).innerHTML = display;
		document.getElementById(target).style.color = "#c7c1c1";
	}		
}
function acb(firstUnitType, secondUnitType, firstNumber, secondNumber, firstUnit, secondUnit, thirdUnit, fourthUnit, target, display)
{
	var a = document.getElementById(firstNumber).value*firstUnitType[document.getElementById(firstUnit).value];
	var b = document.getElementById(secondNumber).value*firstUnitType[document.getElementById(secondUnit).value]/secondUnitType[document.getElementById(thirdUnit).value];
	var c = a/b;
	var result = c/secondUnitType[document.getElementById(fourthUnit).value]
	if(a != 0 && b != 0)
	{
		document.getElementById(target).innerHTML = result.toPrecision(document.getElementById("significantDigit").value) + " " + document.getElementById(fourthUnit).options[document.getElementById(fourthUnit).selectedIndex].text;	
		document.getElementById(target).style.color = "red";
	}	
	else
	{
		document.getElementById(target).innerHTML = display;
		document.getElementById(target).style.color = "#c7c1c1";
	}		
}
function cald()
{
	switch(cycled%3)
	{
		case 0:
		abc(unitOfMass, unitOfVolume, "num00", "num01", "unit00", "unit01", "unit02", "unit03", "answerd", "Density:");		
		break;
		case 1:
		bca(unitOfVolume, unitOfMass, "num00", "num01", "unit00", "unit01", "unit02", "unit03", "answerd", "Mass:");
		break;
		case 2:
		acb(unitOfMass, unitOfVolume, "num00", "num01", "unit00", "unit01", "unit02", "unit03", "answerd", "Volume:");	
		break;
	}
}
function cals()
{
	switch(cycles%3)
	{
		case 0:
		abc(unitOfLength, unitOfTime, "num30", "num31", "unit30", "unit31", "unit32", "unit33", "answers", "Speed:");		
		break;
		case 1:
		bca(unitOfTime, unitOfLength, "num30", "num31", "unit30", "unit31", "unit32", "unit33", "answers", "Length:");
		break;
		case 2:
		acb(unitOfLength, unitOfTime, "num30", "num31", "unit30", "unit31", "unit32", "unit33", "answers", "Time:");	
		break;
	}
}

var cycled = 3;
function rotated()
{
	document.getElementById("num00").value=document.getElementById("num01").value=null;
	document.getElementById("answerd").style.color = "#c7c1c1";
	cycled=cycled+1;
	switch(cycled%3)
	{
		case 0:
		removeUnit('unit00')
		removeUnit('unit01')
		removeUnit('unit02')
		removeUnit('unit03')
		creatUnit('unit00', symbolOfMass, 6, 3, 'loc00')
		creatUnit('unit01', symbolOfVolume, 10, 4, 'loc01')
		creatUnit('unit02', symbolOfMass, 6, 3, 'loc03')
		creatUnit('unit03', symbolOfVolume, 10, 4, 'loc03')
		document.getElementById("num00").placeholder="Mass";
		document.getElementById("num01").placeholder="Volume";	
		document.getElementById("n0").innerHTML="m";
		document.getElementById("n0").style.borderBottom="1pt solid black";
		document.getElementById("l0").style.width="1em";
		document.getElementById("d0").innerHTML="v";
		document.getElementById("r0").innerHTML="= d";
		document.getElementById("answerd").innerHTML = "Density: ";
		break;
		case 1:
		removeUnit('unit00')
		removeUnit('unit01')
		removeUnit('unit02')
		removeUnit('unit03')
		creatUnit('unit00', symbolOfVolume, 10, 4, 'loc00')
		creatUnit('unit01', symbolOfMass, 6, 3, 'loc01')
		creatUnit('unit02', symbolOfVolume, 10, 4, 'loc01')
		creatUnit('unit03', symbolOfMass, 6, 3, 'loc03')
		document.getElementById("num00").placeholder="Volume";
		document.getElementById("num01").placeholder="Density";	
		document.getElementById("n0").innerHTML="v &#8901; d";
		document.getElementById("n0").style.borderBottom="0pt solid black";
		document.getElementById("l0").style.width="2em";
		document.getElementById("d0").innerHTML=null;
		document.getElementById("r0").innerHTML="= m";
		document.getElementById("answerd").innerHTML = "Mass: ";
		break;
		case 2:
		removeUnit('unit00')
		removeUnit('unit01')
		removeUnit('unit02')
		removeUnit('unit03')
		creatUnit('unit00', symbolOfMass, 6, 3, 'loc00')
		creatUnit('unit01', symbolOfMass, 6, 3, 'loc01')
		creatUnit('unit02', symbolOfVolume, 10, 4, 'loc01')
		creatUnit('unit03', symbolOfVolume, 10, 4, 'loc03')	
		document.getElementById("num00").placeholder="Mass";
		document.getElementById("num01").placeholder="Density";	
		document.getElementById("n0").innerHTML="m";
		document.getElementById("n0").style.borderBottom="1pt solid black";
		document.getElementById("l0").style.width="1em";
		document.getElementById("d0").innerHTML="d";
		document.getElementById("r0").innerHTML="= v";
		document.getElementById("answerd").innerHTML = "Volume: ";
		break;														
	}
}
var cycles = 3;
function rotates()
{
	document.getElementById("num30").value=document.getElementById("num31").value=null;
	document.getElementById("answers").style.color = "#c7c1c1";
	cycles=cycles+1;
	switch(cycles%3)
	{
		case 0:
		removeUnit('unit30')
		removeUnit('unit31')
		removeUnit('unit32')
		removeUnit('unit33')
		creatUnit('unit30', symbolOfLength, 8, 5, 'loc30')
		creatUnit('unit31', symbolOfTime, 5, 2, 'loc31')
		creatUnit('unit32', symbolOfLength, 8, 5, 'loc33')
		creatUnit('unit33', symbolOfTime, 5, 2, 'loc33')
		document.getElementById("num30").placeholder="Length";
		document.getElementById("num31").placeholder="Time";	
		document.getElementById("n3").innerHTML="d";
		document.getElementById("n3").style.borderBottom="1pt solid black";
		document.getElementById("l3").style.width="1em";
		document.getElementById("d3").innerHTML="t";
		document.getElementById("r3").innerHTML="= s";
		document.getElementById("answers").innerHTML = "Speed:";
		break;
		case 1:
		removeUnit('unit30')
		removeUnit('unit31')
		removeUnit('unit32')
		removeUnit('unit33')
		creatUnit('unit30', symbolOfTime, 5, 2, 'loc30')
		creatUnit('unit31', symbolOfLength, 8, 5, 'loc31')
		creatUnit('unit32', symbolOfTime, 5, 2, 'loc31')
		creatUnit('unit33', symbolOfLength, 8, 5, 'loc33')
		document.getElementById("num30").placeholder="Time";
		document.getElementById("num31").placeholder="Speed";	
		document.getElementById("n3").innerHTML="t &#8901; s";
		document.getElementById("n3").style.borderBottom="0pt solid black";
		document.getElementById("l3").style.width="2em";
		document.getElementById("d3").innerHTML=null;
		document.getElementById("r3").innerHTML="= d";
		document.getElementById("answers").innerHTML = "Length:";
		break;
		case 2:
		removeUnit('unit30')
		removeUnit('unit31')
		removeUnit('unit32')
		removeUnit('unit33')
		creatUnit('unit30', symbolOfLength, 8, 5, 'loc30')
		creatUnit('unit31', symbolOfLength, 8, 5, 'loc31')
		creatUnit('unit32', symbolOfTime, 5, 2, 'loc31')
		creatUnit('unit33', symbolOfTime, 5, 2, 'loc33')
		document.getElementById("num30").placeholder="Length";
		document.getElementById("num31").placeholder="Speed";	
		document.getElementById("n3").innerHTML="d";
		document.getElementById("n3").style.borderBottom="1pt solid black";
		document.getElementById("l3").style.width="1em";
		document.getElementById("d3").innerHTML="s";
		document.getElementById("r3").innerHTML="= t";
		document.getElementById("answers").innerHTML = "Time:";
		break;														
	}
}

function abcd(firstUnitType, secondUnitType, thirdUnitType, firstNumber, secondNumber, thirdNumber, firstUnit, secondUnit, thirdUnit, fourthUnit, fifthUnit, sixthUnit, target, display)
{
	var a = document.getElementById(firstNumber).value*firstUnitType[document.getElementById(firstUnit).value];
	var b = document.getElementById(secondNumber).value*secondUnitType[document.getElementById(secondUnit).value];
	var c = document.getElementById(thirdNumber).value*thirdUnitType[document.getElementById(thirdUnit).value];
	var d = a/(b*c);
	var result = d/(firstUnitType[document.getElementById(fourthUnit).value]/(secondUnitType[document.getElementById(fifthUnit).value]*thirdUnitType[document.getElementById(sixthUnit).value]));
	if(a != 0 && b != 0 && c!= 0)
	{
		document.getElementById(target).innerHTML = result.toPrecision(document.getElementById("significantDigit").value) + " " + document.getElementById(fourthUnit).options[document.getElementById(fourthUnit).selectedIndex].text + "/" + document.getElementById(fifthUnit).options[document.getElementById(fifthUnit).selectedIndex].text+ "&#8901;" + document.getElementById(sixthUnit).options[document.getElementById(sixthUnit).selectedIndex].text;
		document.getElementById(target).style.color = "red";
	}
	else
	{
		document.getElementById(target).innerHTML= display;
		document.getElementById(target).style.color = "#c7c1c1";
	}	
}	
function bcda(firstUnitType, secondUnitType, thirdUnitType, firstNumber, secondNumber, thirdNumber, firstUnit, secondUnit, thirdUnit, fourthUnit, fifthUnit, sixthUnit, target, display)
{	
	var a = document.getElementById(firstNumber).value*firstUnitType[document.getElementById(firstUnit).value];
	var b = document.getElementById(secondNumber).value*secondUnitType[document.getElementById(secondUnit).value];
	var c = document.getElementById(thirdNumber).value*thirdUnitType[document.getElementById(thirdUnit).value]/(firstUnitType[document.getElementById(fourthUnit).value]*secondUnitType[document.getElementById(fifthUnit).value]);
	var d = a*b*c
	var result = d/thirdUnitType[document.getElementById(sixthUnit).value];
	if(a != 0 && b != 0 && c != 0)
	{
		document.getElementById(target).innerHTML = result.toPrecision(document.getElementById("significantDigit").value) + " " + document.getElementById(sixthUnit).options[document.getElementById(sixthUnit).selectedIndex].text;
		document.getElementById(target).style.color = "red";
	}
	else
	{
		document.getElementById(target).innerHTML = display;
		document.getElementById(target).style.color = "#c7c1c1";
	}		
}
function acdb(firstUnitType, secondUnitType, thirdUnitType, firstNumber, secondNumber, thirdNumber, firstUnit, secondUnit, thirdUnit, fourthUnit, fifthUnit, sixthUnit, target, display)
{
	var a = document.getElementById(firstNumber).value*firstUnitType[document.getElementById(firstUnit).value];
	var b = document.getElementById(secondNumber).value*secondUnitType[document.getElementById(secondUnit).value];
	var c = document.getElementById(thirdNumber).value*firstUnitType[document.getElementById(thirdUnit).value]/(thirdUnitType[document.getElementById(fourthUnit).value]*secondUnitType[document.getElementById(fifthUnit).value]);		var d = a/(b*c);
	var result = d/thirdUnitType[document.getElementById(sixthUnit).value];
	if(a != 0 && b != 0 && c!= 0)
	{
		document.getElementById(target).innerHTML = result.toPrecision(document.getElementById("significantDigit").value) + " " + document.getElementById(sixthUnit).options[document.getElementById(sixthUnit).selectedIndex].text;
		document.getElementById(target).style.color = "red";
	}
	else
	{
		document.getElementById(target).innerHTML = display;
		document.getElementById(target).style.color = "#c7c1c1";
	}		
}
function abdc(firstUnitType, secondUnitType, thirdUnitType, firstNumber, secondNumber, thirdNumber, firstUnit, secondUnit, thirdUnit, fourthUnit, fifthUnit, sixthUnit, target, display)
{
	var a = document.getElementById(firstNumber).value*firstUnitType[document.getElementById(firstUnit).value];
	var b = document.getElementById(secondNumber).value*secondUnitType[document.getElementById(secondUnit).value];
	var c = document.getElementById(thirdNumber).value*firstUnitType[document.getElementById(thirdUnit).value]/(secondUnitType[document.getElementById(fourthUnit).value]*thirdUnitType[document.getElementById(fifthUnit).value]);	
	var d = a/(b*c);
	var result = d/thirdUnitType[document.getElementById(sixthUnit).value];
	if(a != 0 && b != 0 && c!= 0)
	{
		document.getElementById(target).innerHTML = result.toPrecision(document.getElementById("significantDigit").value) + " " + document.getElementById(sixthUnit).options[document.getElementById(sixthUnit).selectedIndex].text;
		document.getElementById(target).style.color = "red";
	}
	else
	{
		document.getElementById(target).innerHTML = display;
		document.getElementById(target).style.color = "#c7c1c1";
	}						
}
function calc()
{
	switch(cyclec%4)
	{
		case 0:
		abcd(unitOfEnergy, unitOfMass, unitOfTemperature, "num10", "num11", "num12", "unit10", "unit11", "unit12", "unit13", "unit14", "unit15", "answerc", "Specific Heat:");		
		break;
		case 1:
		bcda(unitOfMass, unitOfTemperature, unitOfEnergy, "num10", "num11", "num12", "unit10", "unit11", "unit12", "unit13", "unit14", "unit15", "answerc", "Change of Energy:");
		break;
		case 2:
		acdb(unitOfEnergy, unitOfTemperature, unitOfMass, "num10", "num11", "num12", "unit10", "unit11", "unit12", "unit13", "unit14", "unit15", "answerc", "Mass:");
		break;
		case 3:
		abdc(unitOfEnergy, unitOfMass, unitOfTemperature, "num10", "num11", "num12", "unit10", "unit11", "unit12", "unit13", "unit14", "unit15", "answerc", "Change of Temperature:");
		break;
	}
}
var cyclec = 4;		
function rotatec()
{
	document.getElementById("num10").value=document.getElementById("num11").value=document.getElementById("num12").value=null;
	document.getElementById("answerc").style.color = "#c7c1c1";
	cyclec = cyclec+1;
	switch(cyclec%4)
	{
		case 0:
		removeUnit('unit10')
		removeUnit('unit11')
		removeUnit('unit12')
		removeUnit('unit13')
		removeUnit('unit14')
		removeUnit('unit15')
		creatUnit('unit10', symbolOfEnergy, 6, 3, 'loc10')
		creatUnit('unit11', symbolOfMass, 6, 3, 'loc11')
		creatUnit('unit12', symbolOfTemperature, 3, 1, 'loc12')
		creatUnit('unit13', symbolOfEnergy, 6, 3, 'loc13')
		creatUnit('unit14', symbolOfMass, 6, 3, 'loc13')
		creatUnit('unit15', symbolOfTemperature, 3, 1, 'loc13')
		document.getElementById("num10").placeholder="Change of Energy";
		document.getElementById("num11").placeholder="Mass";	
		document.getElementById("num12").placeholder="Change of Temperature";	
		document.getElementById("n1").innerHTML="&#8710;E";
		document.getElementById("n1").style.borderBottom="1pt solid black";
		document.getElementById("l1").style.width="3em";
		document.getElementById("d1").innerHTML="m &#8901; &#8710;T";
		document.getElementById("r1").innerHTML="= c";
		document.getElementById("answerc").innerHTML = "Specific Heat:";
		break;
		case 1:
		removeUnit('unit10')
		removeUnit('unit11')
		removeUnit('unit12')
		removeUnit('unit13')
		removeUnit('unit14')
		removeUnit('unit15')
		creatUnit('unit10', symbolOfMass, 6, 3, 'loc10')
		creatUnit('unit11', symbolOfTemperature, 3, 1, 'loc11')
		creatUnit('unit12', symbolOfEnergy, 6, 3, 'loc12')
		creatUnit('unit13', symbolOfMass, 6, 3, 'loc12')
		creatUnit('unit14', symbolOfTemperature, 3, 1, 'loc12')
		creatUnit('unit15', symbolOfEnergy, 6, 3, 'loc13')
		document.getElementById("num10").placeholder="Mass";
		document.getElementById("num11").placeholder="Change of Temperature";	
		document.getElementById("num12").placeholder="Specific Heat";	
		document.getElementById("n1").innerHTML="m &#8901; &#8710;T &#8901; c";
		document.getElementById("n1").style.borderBottom="0pt solid black";
		document.getElementById("l1").style.width="5em";
		document.getElementById("d1").innerHTML=null;
		document.getElementById("r1").innerHTML="= &#8710;E";
		document.getElementById("answerc").innerHTML = "Change of Energy:";
		break;
		case 2:
		removeUnit('unit10')
		removeUnit('unit11')
		removeUnit('unit12')
		removeUnit('unit13')
		removeUnit('unit14')
		removeUnit('unit15')
		creatUnit('unit10', symbolOfEnergy, 6, 3, 'loc10')
		creatUnit('unit11', symbolOfTemperature, 3, 1, 'loc11')
		creatUnit('unit12', symbolOfEnergy, 6, 3, 'loc12')
		creatUnit('unit13', symbolOfMass, 6, 3, 'loc12')
		creatUnit('unit14', symbolOfTemperature, 3, 1, 'loc12')	
		creatUnit('unit15', symbolOfMass, 6, 3, 'loc13')	
		document.getElementById("num10").placeholder = "Change of Energy";
		document.getElementById("num11").placeholder = "Change of Temperature";	
		document.getElementById("num12").placeholder = "Specific Heat";	
		document.getElementById("n1").innerHTML="&#8710;E";
		document.getElementById("n1").style.borderBottom="1pt solid black";
		document.getElementById("l1").style.width="3em";
		document.getElementById("d1").innerHTML="&#8710;T &#8901; c";
		document.getElementById("r1").innerHTML="= m";
		document.getElementById("answerc").innerHTML = "Mass:";
		break;
		case 3:
		removeUnit('unit10')
		removeUnit('unit11')
		removeUnit('unit12')
		removeUnit('unit13')
		removeUnit('unit14')
		removeUnit('unit15')
		creatUnit('unit10', symbolOfEnergy, 6, 3, 'loc10')
		creatUnit('unit11', symbolOfMass, 6, 3, 'loc11')
		creatUnit('unit12', symbolOfEnergy, 6, 3, 'loc12')
		creatUnit('unit13', symbolOfMass, 6, 3, 'loc12')
		creatUnit('unit14', symbolOfTemperature, 3, 1, 'loc12')
		creatUnit('unit15', symbolOfTemperature, 3, 1, 'loc13')	
		document.getElementById("num10").placeholder = "Change of Energy";
		document.getElementById("num11").placeholder = "Mass";	
		document.getElementById("num12").placeholder = "Specific Heat";	
		document.getElementById("n1").innerHTML="&#8710;E";
		document.getElementById("n1").style.borderBottom="1pt solid black";
		document.getElementById("l1").style.width="3em";
		document.getElementById("d1").innerHTML="m &#8901; c";
		document.getElementById("r1").innerHTML="= &#8710;T";
		document.getElementById("answerc").innerHTML = "Change of Temperature:";		
		break;
	}
}

var cycleP = 4;
function rotateP()
{
	document.getElementById("num20").value=document.getElementById("num21").value=document.getElementById("num22").value=document.getElementById("num23").value=null;
	document.getElementById("answerP").style.color = "#c7c1c1";
	cycleP = cycleP+1;
	switch(cycleP%4)
	{
		case 0:
		removeUnit('unit20')
		removeUnit('unit21')
		removeUnit('unit22')
		removeUnit('unit23')
		creatUnit('unit20', symbolOfAmount, 2, 0, 'loc20'), 
		creatUnit('unit21', symbolOfTemperature, 3, 0, 'loc22'), 
		creatUnit('unit22', symbolOfVolume, 9, 4, 'loc23'), 
		creatUnit('unit23', symbolOfPressure, 3, 2, 'loc24')
		document.getElementById("num20").placeholder="Amount";		
		document.getElementById("num21").value=R;	
		document.getElementById("num21").placeholder="ctrl + z";	
		document.getElementById("num22").placeholder="Temperature";							
		document.getElementById("num23").placeholder="Volume";	
		document.getElementById("n2").innerHTML="n &#8901; R &#8901; T ";
		document.getElementById("n2").style.borderBottom="1pt solid black";
		document.getElementById("l2").style.width="4em";
		document.getElementById("d2").innerHTML="v";
		document.getElementById("r2").innerHTML="= P";
		document.getElementById("answerP").innerHTML = "Pressure:";
		break;
		case 1:
		removeUnit('unit20')
		removeUnit('unit21')
		removeUnit('unit22')
		removeUnit('unit23')
		creatUnit('unit20', symbolOfAmount, 2, 0, 'loc20')
		creatUnit('unit21', symbolOfTemperature, 3, 0, 'loc22')
		creatUnit('unit22', symbolOfPressure, 3, 2, 'loc23')
		creatUnit('unit23', symbolOfVolume, 9, 4, 'loc24')
		document.getElementById("num20").placeholder="Amount";	
		document.getElementById("num21").value=R;	
		document.getElementById("num22").placeholder="Temperature";	
		document.getElementById("num23").placeholder="Pressure";	
		document.getElementById("n2").innerHTML="n &#8901; R &#8901; T";
		document.getElementById("n2").style.borderBottom="1pt solid black";
		document.getElementById("l2").style.width="4em";
		document.getElementById("d2").innerHTML="P";
		document.getElementById("r2").innerHTML="= v";
		document.getElementById("answerP").innerHTML = "Volume:";
		break;
		case 2:
		removeUnit('unit20')
		removeUnit('unit21')
		removeUnit('unit22')
		removeUnit('unit23')
		creatUnit('unit20', symbolOfPressure, 3, 2, 'loc20')
		creatUnit('unit21', symbolOfVolume, 9, 4, 'loc21')
		creatUnit('unit22', symbolOfTemperature, 3, 0, 'loc23')
		creatUnit('unit23', symbolOfAmount, 2, 0, 'loc24')
		document.getElementById("num20").placeholder="Pressure";		
		document.getElementById("num21").placeholder="Volume";				
		document.getElementById("num22").value=R;
		document.getElementById("num22").placeholder="ctrl + z";	
		document.getElementById("num23").placeholder="Temperature";	
		document.getElementById("n2").innerHTML="P &#8901; v ";
		document.getElementById("n2").style.borderBottom="1pt solid black";
		document.getElementById("l2").style.width="3em";
		document.getElementById("d2").innerHTML="R &#8901; T";
		document.getElementById("r2").innerHTML="= n";
		document.getElementById("answerP").innerHTML = "Amount:";
		break;
		case 3:
		removeUnit('unit20')
		removeUnit('unit21')
		removeUnit('unit22')
		removeUnit('unit23')
		creatUnit('unit20', symbolOfPressure, 3, 2, 'loc20')
		creatUnit('unit21', symbolOfVolume, 9, 4, 'loc21')
		creatUnit('unit22', symbolOfAmount, 2, 0, 'loc22')
		creatUnit('unit23', symbolOfTemperature, 3, 0, 'loc24')
		document.getElementById("num20").placeholder="Pressure";		
		document.getElementById("num21").placeholder="Volume";	
		document.getElementById("num21").value=null;	
		document.getElementById("num22").placeholder="Amount";						
		document.getElementById("num22").value=null;	
		document.getElementById("num23").value=R;
		document.getElementById("num23").placeholder="ctrl + z";		
		document.getElementById("n2").innerHTML="P &#8901; v ";
		document.getElementById("n2").style.borderBottom="1pt solid black";
		document.getElementById("l2").style.width="3em";
		document.getElementById("d2").innerHTML="n &#8901; R";
		document.getElementById("r2").innerHTML="= T";
		document.getElementById("answerP").innerHTML = "Temperature:";
		break;
	}
}
function calP()
{
	switch(cycleP%4)
	{
		case 0:
		nRTvP()
		break;
		case 1:
		nRTPv()
		break;
		case 2:
		PvRTn()
		break;
		case 3:
		PvnRT()
		break;
	}
}
	function nRTvP()
	{
		var n = document.getElementById("num20").value*(unitOfAmount[document.getElementById("unit20").value]);
		var R = document.getElementById("num21").value;	
		if(document.getElementById("unit21").selectedIndex == 0)
		{
			var T = document.getElementById("num22").value
		}
		else if (document.getElementById("unit21").selectedIndex == 1)
		{
			var T = Number(document.getElementById("num22").value) + Number(273.15);
		}
		else
		{
			var T = (Number(document.getElementById("num22").value) - Number(32))*5/9 + Number(273.15);
		}	
		var v = document.getElementById("num23").value*(unitOfVolume[document.getElementById("unit22").value]);
		var result = ((n*R*T)/v)/(unitOfPressure[document.getElementById("unit23").value]);
		if(n != 0 && R != 0 && T !=0 && v != 0)
		{
			document.getElementById("answerP").innerHTML = result.toPrecision(document.getElementById("significantDigit").value) + " " + document.getElementById("unit23").options[document.getElementById("unit23").selectedIndex].text
			document.getElementById("answerP").style.color = "red";
		}
		else
		{
			document.getElementById("answerP").innerHTML = "Pressure: "
			document.getElementById("answerP").style.color = "#c7c1c1";
		}		
	}
	function nRTPv()
	{
		var n = document.getElementById("num20").value*(unitOfAmount[document.getElementById("unit20").value]);
		var R = document.getElementById("num21").value;	
		if(document.getElementById("unit21").selectedIndex == 0)
		{
			var T = document.getElementById("num22").value
		}
		else if (document.getElementById("unit21").selectedIndex == 1)
		{
			var T = Number(document.getElementById("num22").value) + Number(273.15);
		}
		else
		{
			var T = (Number(document.getElementById("num22").value) - Number(32))*5/9 + Number(273.15);
		}	
		var P = document.getElementById("num23").value*(unitOfPressure[document.getElementById("unit22").value]);
		var result = ((n*R*T)/P)/(unitOfVolume[document.getElementById("unit23").value]);
		if(n != 0 && R != 0 && T !=0 && P != 0)
		{
			document.getElementById("answerP").innerHTML = result.toPrecision(document.getElementById("significantDigit").value) + " " + document.getElementById("unit23").options[document.getElementById("unit23").selectedIndex].text
			document.getElementById("answerP").style.color = "red";
		}
		else
		{
			document.getElementById("answerP").innerHTML = "Volume: "
			document.getElementById("answerP").style.color = "#c7c1c1";
		}
		
	}
	function PvRTn()
	{
		var P = document.getElementById("num20").value*(unitOfPressure[document.getElementById("unit20").value]);
		var v = document.getElementById("num21").value*(unitOfVolume[document.getElementById("unit21").value]);
		var R = document.getElementById("num22").value;	
		if(document.getElementById("unit22").selectedIndex == 0)
		{
			var T = document.getElementById("num23").value
		}
		else if (document.getElementById("unit22").selectedIndex == 1)
		{
			var T = Number(document.getElementById("num23").value) + Number(273.15);
		}
		else
		{
			var T = (Number(document.getElementById("num23").value) - Number(32))*5/9 + Number(273.15);
		}	
		var result = ((P*v)/(R*T))/(unitOfAmount[document.getElementById("unit23").value]);
		if(P != 0 && v != 0 && R !=0 && T != 0)
		{
			document.getElementById("answerP").innerHTML = result.toPrecision(document.getElementById("significantDigit").value) + " " + document.getElementById("unit23").options[document.getElementById("unit23").selectedIndex].text
			document.getElementById("answerP").style.color = "red";
		}
		else
		{
			document.getElementById("answerP").innerHTML = "Amount: "
			document.getElementById("answerP").style.color = "#c7c1c1";
		}		
	}
	function PvnRT()
	{
		var P = document.getElementById("num20").value*(unitOfPressure[document.getElementById("unit20").value]);
		var v = document.getElementById("num21").value*(unitOfVolume[document.getElementById("unit21").value]);
		var n = document.getElementById("num22").value*(unitOfAmount[document.getElementById("unit22").value]);
		var R = document.getElementById("num23").value;	
		var result = ((P*v)/(n*R));
		if(document.getElementById("unit23").selectedIndex == 0)
		{

		}
		else if (document.getElementById("unit23").selectedIndex == 1)
		{
			result = Number(result) - Number(273.15);
		}
		else
		{
			result = (Number(result) - Number(273.15) )*9/5 + Number(32) ;
		}
		if(P != 0 && v != 0 && n !=0 && R != 0)
		{
			document.getElementById("answerP").innerHTML = result.toPrecision(document.getElementById("significantDigit").value) + " " + document.getElementById("unit23").options[document.getElementById("unit23").selectedIndex].text
			document.getElementById("answerP").style.color = "red";
		}
		else
		{
			document.getElementById("answerP").innerHTML = "Temperature: "
			document.getElementById("answerP").style.color = "#c7c1c1";
		}	
	}

function conl(leftnumber,leftunit,rightnumber,rightunit,typeOfUnit)
{
	var left = document.getElementById(leftnumber).value*(typeOfUnit[document.getElementById(leftunit).value]);
	var result = left/(typeOfUnit[document.getElementById(rightunit).value]);
		if(left != 0)
		{
			document.getElementById(rightnumber).value = result.toPrecision(document.getElementById("significantDigit").value)
			document.getElementById(rightnumber).style.color = "red";
		}
		else
		{
			
			document.getElementById(rightnumber).placeholder = "???";
			document.getElementById(rightnumber).value = null;
			document.getElementById(rightnumber).style.color = "#c7c1c1";
		}	
}
var s;
var i;
function defaultCookie()//default length m m g g
{
	console.log(document.cookie);
	var o = document.cookie;
	if(o[0]=="P")
	{
		s = "length";
		i = "2"+"5"+"0"+"2"+"2"+"4";
		select(s);
		setBorder('sl');
		document.cookie = i + s;
		console.log(document.cookie);
	}
	else
	{
		i = document.cookie[0] + document.cookie[1] + document.cookie[2] + document.cookie[3] + document.cookie[4] + document.cookie[5];
		
		if(document.cookie[6] == "l")
		{
			s = "length";
			select(s);
			setBorder('sl');
		}
		else if(document.cookie[6] == "m")
		{
			s = "mass";
			select(s);
			setBorder('sm');
		}
		else
		{
			s = "volume"
			select(s);
			setBorder('sv');
		}
		console.log(document.cookie);
	}
}
function select(target)//set cookie as well
{
	document.getElementById('length').style.display = "none";
	document.getElementById('mass').style.display =  "none";
	document.getElementById('volume').style.display =  "none";
	document.getElementById(target).style.display = "flex";

	s = document.getElementById(target).id;
	document.cookie = i + s;
	console.log(document.cookie);
}

function setBorder(target)
{
	document.getElementById('sl').style.border = "none";
	document.getElementById('sm').style.border = "none";
	document.getElementById('sv').style.border = "none";	
	document.getElementById(target).style.border = "thick solid red";
}

function setCookie()
{
	i = document.getElementById('unit50').value + document.getElementById('unit51').value + document.getElementById('unit60').value + document.getElementById('unit61').value + document.getElementById('unit70').value + document.getElementById('unit71').value;
	document.cookie = i + s;
	console.log(document.cookie);
}
function reset()
{
	document.getElementById("num50").value = null;
	document.getElementById("num51").placeholder = "???";
	document.getElementById("num51").value = null;
	document.getElementById("num51").style.color = "#c7c1c1";
	document.getElementById("num60").value = null;
	document.getElementById("num61").placeholder = "???";
	document.getElementById("num61").value = null;
	document.getElementById("num61").style.color = "#c7c1c1";
	document.getElementById("num70").value = null;
	document.getElementById("num71").placeholder = "???";
	document.getElementById("num71").value = null;
	document.getElementById("num71").style.color = "#c7c1c1";
}

var numbers = [];
function insert()
{
	if(document.getElementById("num81").value == "")
	{
		document.getElementById("num81").placeholder = "ADD a number!!!";
	}
	else
	{
		document.getElementById("num81").placeholder = "add a number here";
		var i = document.getElementById("num81").value;
		numbers.push(i);
		arrange();
		document.getElementById("num80").innerHTML = numbers.toString();
		document.getElementById("num81").value = null;
		mean();		
		median();
		standerDiviation();
		console.log(numbers);
	}
}
function remove()
{
	numbers.pop();
	
	if(numbers == "")
	{
		document.getElementById("num80").innerHTML = "Enter a number below and you will see it shows up here";
		document.getElementById("num82").value = document.getElementById("num83").value = document.getElementById("num84").value = null;
		document.getElementById("num82").placeholder = document.getElementById("num83").placeholder = document.getElementById("num84").placeholder = "???";
	}
	
	else
	{
		document.getElementById("num80").innerHTML = numbers.toString();
		mean();		
		median();
		standerDiviation();
		console.log(numbers);
	}
}
function arrange()
{
	var e;
	for(var i = 0; i<numbers.length; i++)
	{
		if(Number(numbers[i])>Number(numbers[i+1]))
		{
			e = Number(numbers[i]);
			numbers[i] = Number(numbers[i+1]);
			numbers[i+1] = Number(e);
			i = 0;
			if(Number(numbers[i])>Number(numbers[i+1]))
			{
				e = Number(numbers[i]);
				numbers[i] = Number(numbers[i+1]);
				numbers[i+1] = Number(e);	
			}
		}
	}
}
var average;
function mean()
{
	var e = 0;
	for(var i = 0; i<numbers.length; i++)
	{
		e = Number(e) + Number(numbers[i]);
	}
	average = e/numbers.length;
	document.getElementById("num82").value = (e/numbers.length).toPrecision(document.getElementById("significantDigit").value);
	
}
function median()
{
	if(numbers.length%2==0)
	{
		var i = (Number(numbers[numbers.length/2 - Number(1)]) + Number(numbers[numbers.length/2]))/2;
	}
	else
	{
		var i = numbers[(Number(numbers.length) + Number(1))/2-Number(1)];
	}
	document.getElementById("num83").value = Number(i).toPrecision(document.getElementById("significantDigit").value);
}
function standerDiviation()
{
	var a,b;
	var c = 0;
	for(var i = 0; i<numbers.length; i++)
	{
		a = numbers[i] - average;
		b = Math.pow(a, 2);
		c = c + Number(b);
	}
	var d = c/numbers.length;
	document.getElementById("num84").value = (Math.sqrt(d)).toPrecision(document.getElementById("significantDigit").value);
}



var click = 2;
function openBar()
{
	click++;
	if(click%2 == 1)
	{
		document.getElementById("sideBar").style.width = "28px";
		document.getElementById("rightArrow").style.transform = "rotate(180deg)";
	}
	else
	{
		document.getElementById("sideBar").style.width = "25%";
		document.getElementById("rightArrow").style.transform = "rotate(360deg)";
	}
}
function changeColor(leftUnit, rightUnit)
{ 
	document.getElementById(leftUnit).style.transition = "1s";
	document.getElementById(rightUnit).style.transition = "1s";	
	document.getElementById(leftUnit).style.backgroundColor = "#ec9bea";
	document.getElementById(rightUnit).style.backgroundColor = "#ec9bea";
}
function changeScale() 
{
    if (document.documentElement.clientWidth < 1000) 
    	{ 
	    	document.querySelector("meta[name=viewport]").setAttribute
	    	(
		    	"content", 
		    	'width=device-width, initial-scale=0.5'
		);
	}
	else if (document.documentElement.clientWidth < 1500)
	{
	    	document.querySelector("meta[name=viewport]").setAttribute
	    	(
		    	"content", 
		    	'width=device-width, initial-scale=0.8'
		);		
	}
}
    