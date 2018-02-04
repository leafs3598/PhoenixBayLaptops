var laptop1 = 0;
var laptop2 = 0;
var laptop3 = 0;
var laptop4 = 0;
var laptop5 = 0;
var laptop6 = 0;
var laptop7 = 0;
var laptop8 = 0;
var laptop9 = 0;
var LAPTOP1 = 899.99; //This all uppercase, even though it is a variable because const does not work. (We tried this Mr.Wong but it was not working.)
var LAPTOP2 = 749.99;
var LAPTOP3 = 599.99;
var LAPTOP4 = 496.99;
var LAPTOP5 = 766.99;
var LAPTOP6 = 899.99;
var LAPTOP7 = 999.99;
var LAPTOP8 = 849.99;
var LAPTOP9 = 679.99;

	function update() 
	{
		laptop1 = document.selection.laptop1.value;
		if (laptop1 <= 8)
			document.getElementById("HPSpectrex360price").innerHTML = "$" + (899.99 * laptop1).toFixed(2);
		else
			document.getElementById("HPSpectrex360price").innerHTML = ("Please enter a positive number of laptops you would like to purchase!");
		
		laptop2 = document.selection.laptop2.value;
		if (laptop2 <= 8)
			document.getElementById("AsusZenbook3price").innerHTML = "$" + (749.99 * laptop2).toFixed(2);
		else
			document.getElementById("AsusZenbook3price").innerHTML = ("Please enter a positive number of laptops you would like to purchase!");
		
		laptop3 = document.selection.laptop3.value;
		if (laptop3 <= 8)
			document.getElementById("AcerChromebook15price").innerHTML = "$" + (599.99 * laptop3).toFixed(2);
		else
			document.getElementById("AcerChromebook15price").innerHTML = ("Please enter a positive number of laptops you would like to purchase!");
		
		laptop4 = document.selection.laptop4.value;
		if (laptop4 <= 8)
			document.getElementById("DellXPS15price").innerHTML = "$" + (496.99 * laptop4).toFixed(2);
		else
			document.getElementById("DellXPS15price").innerHTML = ("Please enter a positive number of laptops you would like to purchase!");
		
		laptop5 = document.selection.laptop5.value;
		if (laptop5 <= 8)
			document.getElementById("LenovoThinkPadX1Carbonprice").innerHTML = "$" + (766.99 * laptop5).toFixed(2);
		else
			document.getElementById("LenovoThinkPadX1Carbonprice").innerHTML = ("Please enter a positive number of laptops you would like to purchase!");
		
		laptop6 = document.selection.laptop6.value;
		if (laptop6 <= 8)
			document.getElementById("MicrosoftSurfaceBookprice").innerHTML = "$" + (899.99 * laptop6).toFixed(2);
		else
			document.getElementById("MicrosoftSurfaceBookprice").innerHTML = ("Please enter a positive number of laptops you would like to purchase!");
		
		laptop7 = document.selection.laptop7.value;
		if (laptop7 <= 8)
			document.getElementById("AppleMacBookPro15-Inchprice").innerHTML = "$" + (999.99 * laptop7).toFixed(2);
		else
			document.getElementById("AppleMacBookPro15-Inchprice").innerHTML = ("Please enter a positive number of laptops you would like to purchase!");
		
		laptop8 = document.selection.laptop8.value;
		if (laptop8 <= 8)
			document.getElementById("AsusVivoBookprice").innerHTML = "$" + (849.99 * laptop7).toFixed(2);
		else
			document.getElementById("AsusVivoBookprice").innerHTML = ("Please enter a positive number of laptops you would like to purchase!");
		
		laptop9 = document.selection.laptop9.value;
		if (laptop9 <= 8)
			document.getElementById("Delli7567price").innerHTML = "$" + (679.99 * laptop9).toFixed(2);
		else
			document.getElementById("Delli7567price").innerHTML = ("Please enter a positive number of laptops you would like to purchase!");
	}
	
	function checkout()
	{
		// Store
		localStorage.setItem("laptop1", laptop1);
		// Store
		localStorage.setItem("laptop2", laptop2);
		// Store
		localStorage.setItem("laptop3", laptop3);
		// Store
		localStorage.setItem("laptop4", laptop4);
		// Store
		localStorage.setItem("laptop5", laptop5);
		// Store
		localStorage.setItem("laptop6", laptop6);
		// Store
		localStorage.setItem("laptop7", laptop7);
		// Store
		localStorage.setItem("laptop8", laptop8);
		// Store
		localStorage.setItem("laptop9", laptop9);
	}
	
	function retrieve()
	{
		var total_1;
		var subTotalOfPurchase;
		var tax;
		const HST = 0.13;
		var subTotal;
		var subTotal1 = LAPTOP1 * localStorage.getItem("laptop1");
		var subTotal_1;
		var subTotal2 = LAPTOP2 * localStorage.getItem("laptop2");
		var subTotal_2;
		var subTotal3 = LAPTOP3 * localStorage.getItem("laptop3");
		var subTotal_3;
		var subTotal4 = LAPTOP4 * localStorage.getItem("laptop4");
		var subTotal_4;
		var subTotal5 = LAPTOP5 * localStorage.getItem("laptop5");
		var subTotal_5;
		var subTotal6 = LAPTOP6 * localStorage.getItem("laptop6");
		var subTotal_6;
		var subTotal7 = LAPTOP7 * localStorage.getItem("laptop7");
		var subTotal_7;
		var subTotal8 = LAPTOP8 * localStorage.getItem("laptop8");
		var subTotal_8;
		var subTotal9 = LAPTOP9 * localStorage.getItem("laptop9");
		var subTotal_9;
		
		subTotal_1 = subTotal1;
		subTotal_2 = subTotal2;
		subTotal_3 = subTotal3;
		subTotal_4 = subTotal4;
		subTotal_5 = subTotal5;
		subTotal_6 = subTotal6;
		subTotal_7 = subTotal7;
		subTotal_8 = subTotal8;
		subTotal_9 = subTotal9;
		
		laptop1 = localStorage.getItem("laptop1");
		laptop2 = localStorage.getItem("laptop2");
		laptop3 = localStorage.getItem("laptop3");
		laptop4 = localStorage.getItem("laptop4");
		laptop5 = localStorage.getItem("laptop5");
		laptop6 = localStorage.getItem("laptop6");
		laptop7 = localStorage.getItem("laptop7");
		laptop8 = localStorage.getItem("laptop8");
		laptop9 = localStorage.getItem("laptop9");
		
	
		subTotal = subTotal1 + subTotal2 + subTotal3 + subTotal4 + subTotal5 + subTotal6 + subTotal7 + subTotal8 + subTotal9;
		subTotalOfPurchase = subTotal.toFixed(2);
		tax = subTotal * HST;
		tax_1 = tax.toFixed(2);
		total = subTotal + tax; 
		total_1 = total.toFixed(2);
		
		document.getElementById("subTotal_1").innerHTML = "$" + subTotal_1; //This gets the subtotal of the first laptop the user has purchaed. This continues for the other laptops every four lines.
		
		document.getElementById("laptop1").innerHTML = localStorage.getItem("laptop1"); //This gets the quantity of the first laptop the user has purchased. This continues for the other laptops every four lines.
		
		document.getElementById("subTotal_2").innerHTML = "$" + subTotal_2;
		
		document.getElementById("laptop2").innerHTML = localStorage.getItem("laptop2");  
		
		document.getElementById("subTotal_3").innerHTML = "$" + subTotal_3;
		
		document.getElementById("laptop3").innerHTML = localStorage.getItem("laptop3");
		
		document.getElementById("subTotal_4").innerHTML = "$" + subTotal_4;
		
		document.getElementById("laptop4").innerHTML = localStorage.getItem("laptop4");
		
		document.getElementById("subTotal_5").innerHTML = "$" + subTotal_5;
		
		document.getElementById("laptop5").innerHTML = localStorage.getItem("laptop5");
		
		document.getElementById("subTotal_6").innerHTML = "$" + subTotal_6;
		
		document.getElementById("laptop6").innerHTML = localStorage.getItem("laptop6");
		
		document.getElementById("subTotal_7").innerHTML = "$" + subTotal_7;
		
		document.getElementById("laptop7").innerHTML = localStorage.getItem("laptop7");
		
		document.getElementById("subTotal_8").innerHTML = "$" + subTotal_8;
		
		document.getElementById("laptop8").innerHTML = localStorage.getItem("laptop8");
		
		document.getElementById("subTotal_9").innerHTML = "$" + subTotal_9;
		
		document.getElementById("laptop9").innerHTML = localStorage.getItem("laptop9");
		
		document.getElementById("subTotalOfPurchase").innerHTML = "$" + subTotalOfPurchase; //This calculates the subtotal of the purchase. 
		
		document.getElementById("tax_1").innerHTML = "$" + tax_1; //This calculates the tax (HST) of the purchase. 
		
		document.getElementById("total_1").innerHTML = "$" + total_1;	//This calculates the total cost of the purchase.
		
	}
	
	