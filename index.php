<html>
	<?php
		session_start();
		if (isset($_SESSION['loggedin']) && $_SESSION['loggedin'] == true) 
		{
			$username = $_SESSION['username'];
			echo "Welcome! $username";
			echo "<br>";
			echo "<br>"; 			
			echo "<a href='http://zach1.hanmingjie.com/'>Login Page</a>";

		} 
		else 
		{
    		echo "You have not logged in yet!";
   			echo "<br>";
   			echo "Certain features will be restricted.";
			echo "<br>";
			echo "<a href='http://zach1.hanmingjie.com/'>Login Page</a>";
		}
	?>
	<head>
		<meta charset="UTF-8">
	  	<meta name="description" content="A density, specific heat, and ideal gas law calculator with a build-in unit convertor.">
	  	<meta name="keywords" content="density, specific heat, ideal gas law">
	  	<meta name="viewport" content="width=device-width, initial-scale=2.0">
		<meta property="og:image" content="http://zach.hanmingjie.com/picture/cover.png">

		<meta name="twitter:card" content="summary_large_image">
		<meta name="twitter:image" content="http://zach.hanmingjie.com/picture/cover.png">
		<meta name="twitter:site" content="http://zach.hanmingjie.com/">
		<meta name="twitter:creator" content="@ZemengHan">
		<meta name="twitter:title" content="Formula Calculator">

		<title>Formula Calculator</title>
		<link rel="stylesheet" type="text/css" href="style.css">
		<script src="index.js"></script>
		<?php include("submit.php"); ?>
	</head>
	<body onload="
		defaultCookie(),

		creatUnit('unit00', symbolOfMass, 6, 3, 'loc00'), 
		creatUnit('unit01', symbolOfVolume, 9, 4, 'loc01'), 
		creatUnit('unit02', symbolOfMass, 6, 3, 'loc03'),
		creatUnit('unit03', symbolOfVolume, 9, 4, 'loc03'), 

		creatUnit('unit10', symbolOfEnergy, 6, 3, 'loc10'), 
		creatUnit('unit11', symbolOfMass, 6, 3, 'loc11'), 
		creatUnit('unit12', symbolOfTemperature, 3, 1, 'loc12'), 
		creatUnit('unit13', symbolOfEnergy, 6, 3, 'loc13'), 
		creatUnit('unit14', symbolOfMass, 6, 3, 'loc13'), 
		creatUnit('unit15', symbolOfTemperature, 3, 1, 'loc13')

		creatUnit('unit20', symbolOfAmount, 2, 0, 'loc20'), 
		creatUnit('unit21', symbolOfTemperature, 3, 0, 'loc22'), 
		creatUnit('unit22', symbolOfVolume, 9, 4, 'loc23'), 
		creatUnit('unit23', symbolOfPressure, 3, 2, 'loc24'),

		creatUnit('unit30', symbolOfLength, 8, 5, 'loc30'), 
		creatUnit('unit31', symbolOfTime, 5, 2, 'loc31'), 
		creatUnit('unit32', symbolOfLength, 8, 5, 'loc33'),
		creatUnit('unit33', symbolOfTime, 5, 2, 'loc33'), 

		creatUnit('unit50', symbolOfLength, 8, document.cookie[0], 'loc50'),
		creatUnit('unit51', symbolOfLength, 8, document.cookie[1], 'loc51'),
		creatUnit('unit60', symbolOfMass, 6, document.cookie[2], 'loc60'), 
		creatUnit('unit61', symbolOfMass, 6, document.cookie[3], 'loc61'), 
		creatUnit('unit70', symbolOfVolume, 9, document.cookie[4], 'loc70'), 
		creatUnit('unit71', symbolOfVolume, 9, document.cookie[5], 'loc71'), 

		changeScale(),
		changeColor('unit50', 'unit51'),
		changeColor('unit60', 'unit61'),
		changeColor('unit70', 'unit71'),
		openBar(),

		check()
		">


	<div id="sideBar">
		<div id="sideBarArrow">
			<img id ="rightArrow" src ="picture/rightArrow.png" onclick="openBar()" onmouseover ="openBar()">
		</div>
		<div id ="sideBarOption">
			<h3>Navigation Bar</h3>
		  	<p onclick="toTop('unitConvertor')" >Unit Convertor</p>
		  	<p onclick="toTop('dataAnalyser')" >Data Analyser</p>
		  	<p onclick="toTop('density')" >Density</p>
		  	<p onclick="toTop('speed')" >Speed</p>
		  	<p onclick="toTop('specificHeat')" >Specific Heat</p>
		  	<p onclick="toTop('idealGasLaw')" >Ideal Gas Law</p>
	  	</div>
	</div>
		<div class="head">
			<div class="significantDigit">
				Significant Digits: <input id="significantDigit" value="10" onkeyup="cald(),cals(),calc(),calP(),conl('num50','unit50','num51','unit51',unitOfLength),conl('num60','unit60','num61','unit61',unitOfMass),conl('num70','unit70','num71','unit71',unitOfVolume),mean(),median(),standerDiviation()">
			</div>		
		</div>
		<h1 id ="unitConvertor">Unit Convertor</h1>
		<img id = "sl" src="picture/ruler.png" onclick="select('length'), setBorder('sl'), changeColor('unit50', 'unit51')">
		<img id = "sm" src="picture/mass.png" onclick="select('mass'), setBorder('sm'), changeColor('unit60', 'unit61')">
		<img id = "sv" src="picture/volume.png" onclick="select('volume'), setBorder('sv'), changeColor('unit70', 'unit71')">
		<div class="convertor" id ="length">
			<div id ="loc50" onchange="conl('num50','unit50','num51','unit51',unitOfLength), setCookie()">
				<input type="tel" class ="box" id="num50" placeholder="Length:" onkeyup="conl('num50','unit50','num51','unit51',unitOfLength)">
			</div>
			<div class ="box">
				=
			</div>
			<div id ="loc51" onchange="conl('num50','unit50','num51','unit51',unitOfLength), setCookie()">
				<input class ="box" id = "num51" placeholder="???" readonly>
			</div>
		</div>
		<div class="convertor" id ="mass">
			<div id ="loc60" onchange="conl('num60','unit60','num61','unit61',unitOfMass), setCookie()">
				<input type="tel" class ="box" id="num60" placeholder="Mass:" onkeyup="conl('num60','unit60','num61','unit61',unitOfMass)">
			</div>
			<div class ="box">
				=
			</div>
			<div id ="loc61" onchange="conl('num60','unit60','num61','unit61',unitOfMass), setCookie()">
				<input class ="box" id = "num61" placeholder="???" readonly>
			</div>
		</div>
		<div class="convertor" id ="volume">
			<div id ="loc70" onchange="conl('num70','unit70','num71','unit71',unitOfVolume), setCookie()">
				<input type="tel" class ="box" id="num70" placeholder="Volume:" onkeyup="conl('num70','unit70','num71','unit71',unitOfVolume)">
			</div>
			<div class ="box">
				=
			</div>
			<div id ="loc71" onchange="conl('num70','unit70','num71','unit71',unitOfVolume), setCookie()">
				<input class ="box" id = "num71" placeholder="???" readonly>
			</div>
		</div>
		<div class="reset">
			<img src="picture/reset.png" onclick="reset()">
		</div>
		<br>
		<h1 id = "dataAnalyser"> Data Analyser</h1>
		<p id = "num80">Enter a number below and you will see it shows up here</p>
		<div id = "meanFinder">
			<div id ="left">		
				<br>
				<input id = "num81" type = "number" placeholder="add a number here">
				<br>
				<br>
				<button onclick="insert()">Insert</button>
				<button onclick="remove()">Remove</button>
				<br>
				<br>
			</div>
			<div id = "right">
				Mean
				<br>
				<input id = "num82" placeholder="???" readonly>
				<br>
				Median
				<br>
				<input id = "num83" placeholder="???" readonly>
				<br>
				Stander Diviation
				<br>
				<input id = "num84" placeholder="???" readonly>
			</div>
		</div>
		<br>
		</div>
		<h1>Formula Calculators</h1>
		<div class="container" id="density">
		<br>	
			<div class ="e">
				<div id="l0">
				    <div id="n0">m</div>
				    <div id="d0">v</div>
				</div>
					<div id ="r0">= d</div>
			</div>
			<div id ="loc03" onchange="cald()">
				<textarea id="answerd" onchange="cald()" readonly>Density:</textarea>
			</div>
			<div id ="loc00" onchange="cald()">
				<input id = "num00" type="tel" placeholder="Mass" onkeyup="cald()">
			</div>
			<div id ="loc01" onchange="cald()">
				<input id = "num01" type="tel" placeholder="Volume" onkeyup="cald()">
			</div>
			<div id ="loc02"onchange="cald()">
			</div>
			<br>
			<button onclick="rotated()">Rotate</button>
			<button onclick="copyText('answerd')">Copy</button>
			<br>
			<br>
		</div>
		<br>
		<div class="container" id="speed">
		<br>	
			<div class ="e">
				<div id="l3">
				    <div id="n3">d</div>
				    <div id="d3">t</div>
				</div>
					<div id ="r3">= s</div>
			</div>
			<div id ="loc33" onchange="cals()">
				<textarea id="answers" onchange="cals()" readonly>Speed:</textarea>
			</div>
			<div id ="loc30" onchange="cals()">
				<input id = "num30" type="tel" placeholder="Length" onkeyup="cals()">
			</div>
			<div id ="loc31" onchange="cals()">
				<input id = "num31" type="tel" placeholder="Time" onkeyup="cals()">
			</div>
			<div id ="loc32"onchange="cals()">
			</div>
			<br>
			<button onclick="rotates()">Rotate</button>
			<button onclick="copyText('answers')">Copy</button>
			<br>
			<br>
		</div>
		<br>
		<div class="container" id="specificHeat">
		<br>
			<div class ="e">
				<div id="l1">
				    <div id="n1">&#8710;E</div>
				    <div id="d1">m &#8901; &#8710;T</div>
				</div>
					<div id ="r1">= c</div>
			</div>
			<div id ="loc13"onchange="calc()">
				<textarea id="answerc" onchange="cald()" readonly>Specific Heat:</textarea>
			</div>
			<div id ="loc10" onchange="calc()">
				<input id = "num10" type="tel" placeholder="Change of Energy"onkeyup="calc()">
			</div>
			<div id ="loc11"onchange="calc()">
				<input id = "num11" type="tel" placeholder="Mass"onkeyup="calc()">
			</div>
			<div id ="loc12"onchange="calc()">
				<input id = "num12" type="tel" placeholder="Change of Temperature"onkeyup="calc()">
			</div>
			<br>
			<button onclick="rotatec()">Rotate</button>
			<button onclick="copyText('answerc')">Copy</button>
			<br>
			<br>
		</div>
		<br>
		<div class="container" id="idealGasLaw">
		<br>
			<div class ="e">
				<div id="l2">
				    <div id="n2">n &#8901; R &#8901; T</div>
				    <div id="d2">v</div>
				</div>
					<div id ="r2">= P</div>
			</div>
			<div id ="loc24"onchange="calP()">
				<textarea id="answerP" onchange="cald()" readonly>Pressure:</textarea>
			</div>		
			<div id ="loc20" onchange="calP()">
				<input id = "num20" type="tel" placeholder="Amount"onkeyup="calP()">
			</div>
			<div id ="loc21"onchange="calP()">
				<input id = "num21" type="tel" placeholder="ctrl + z" value="8314.46261815324" onkeyup="calP()">
			</div>
			<div id ="loc22"onchange="calP()">
				<input id = "num22" type="tel" placeholder="Temperature"onkeyup="calP()">
			</div>
			<div id ="loc23"onchange="calP()">
				<input id = "num23" type="tel" placeholder="Volume"onkeyup="calP()">
			</div>
			<br>
			<button onclick="rotateP()">Rotate</button>
			<button onclick="copyText('answerP')">Copy</button>
			<br>
			<br>
		</div>
		<br>
		<img id="like" src="picture/like.png" onclick="submit()">
		<br>
		<form id = "form" method="post">
			This webpage has recived 
			<input type="number" name="try" id="sub" readonly>
			like(s) since July 6, 2019. 
			<br>
			<sub>PS: Identical IP addresses may have multiple entries</sub>
		</form>
		<div id = "share">
			<a href="http://www.facebook.com/sharer.php?u=http://zach.hanmingjie.com/" target="_blank">
	        	<img src="picture/facebook.png">
	    	</a>
	    	<a href="https://twitter.com/share?url=http://zach.hanmingjie.com/&amp;text=Formula%20Calculator" target="_blank">
	        	<img src="picture/twitter.png">
	    	</a>
	    	<img src="picture/url.png" onclick="copyURL()">
    	</div>
    	<b>Sharing is caring...</b>
    	<br>
    	<br>
		Author's Email: hanzemeng2001518@gmail.com
		<br>
		Author's QQ: 2752744524
		<br>
		This website was created by Zemeng Han in July, 2019. Please do not use this website for any commercial purposes.
		<br>
		<input id ="url">
<img src = "picture/cover.png" id = "sharePicture">
	</body>
</html>
