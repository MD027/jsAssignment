
<html>
	<head>
		<title>PizzaHutz</title>

		<style>
		tr, td, select, input, textarea{
			padding: 10px;
		}

		table{
			background-color: lightpink;
			font-size: 18px;
		}

		</style>
	</head>

	<body>

	<center>

	<h1>Enter Pizza Information</h1>

	 <form method="post">

	 <table>
		 <tr>
		  <td ><label>Name:</label></td>
		  <td colspan="7"><input type="text" id="name" name="name" autocomplete="off"></td>
		 </tr>

		 <tr>
		   <td ><label>Email:</label></td>
		   <td colspan="7"><input type="email" id="email" name="email" autocomplete="off"></td>
		 </tr>

		 <tr>
		   <td>Toppings </td>

		   <td>
		   	  <input type="checkbox" name="coldrinks" id = "coldrinks" value="Coldrinks" >
			  <label>Coldrinks </label>
			</td>

		   <td>
		   	  <input type="checkbox" name="extraCheese"  id="extraCheese" value="ExtraCheese" >
		      <label> Extra Cheese </label>
		   </td>

		   <td>
		      <input type="checkbox" name="Olives" id="olives" value="Olives" >
		      <label> Olives </label>
			</td>

		   <td>
		   	  <input type="checkbox" name="Pepper" id="pepper" value="Pepper" >
		      <label> Pepper </label>
		   </td>

		   <td>
		      <input type="checkbox" name="Bacon" id="bacon" value="Bacon" >
			  <label> Bacon </label>
		   </td>

		   <td>
		      <input type="checkbox" name="Tomatoes" id="tomatoes" value="Tomatoes" >
			  <label> Tomatoes </label>
		   </td>

		   <td>
		      <input type="checkbox" name="Mushrooms" id="mushrooms" value="Mushrooms" >
			   <label> Mushrooms </label>
		   </td>
	   </tr>

	   <tr>
		   <td>How do you want to get your pizza ? </td>

		   <td>
		     <input type="radio" value="Delivery" id="delivery" name="delivery" >
		     <label> Delivery</label></td>

		   	<td>
			   <input type="radio" value="Pickup" id="pickup" name="delivery">
		       <label>Pickup</label>
			</td>
	   </tr>

	   <tr>
	   <td>Tip ?</td>
	   <td colspan="2">
	   <select id="tip">
	        <option> -- Select --</option>
			<option> 10% </option>
			<option> 20% </option>
			<option> 25% </option>
	   </select>
       </td>
	   </tr>

	   <tr>
		<td> <label>Address: </label> </td>
		<td colspan="7"> <textarea id="address" rows="5" cols = "30"> </textarea> </td>
       </tr>

	   <tr>
		   <td> </td>
		   <td><input type="submit" name="Submit" value="Submit" onclick="display();"></td>
		   <td><input type="submit" name="Reset" value="Reset"></td>
		   <td colspan="5"><input type="submit" name="Show" value="Show Summary"></td>
	   </tr>
	   </table>
	   </form>
    </center>

	<script>

	  function display(){

        var del = "";
	    var topping  = "";
		var res = "";

		var name = document.getElementById("name").value;
		var email = document.getElementById("email").value;
		var tip = document.getElementById("tip").value;
		var address = document.getElementById("address").value;

		if(document.getElementById("coldrinks")){
			var p1 = document.getElementById("coldrinks").value;
			res = p1 + ", ";
		}

		else if(document.getElementById("extraCheese").checked){
			var p2 = document.getElementById("extraCheese").value;
			res = res + p2 + ", ";
		}

		else if(document.getElementById("olives").checked){
			var p3 = document.getElementById("olives").value;
			res = res + p3 + ", ";
		}


		else if(document.getElementById("pepper").checked){
			var p4 = document.getElementById("pepper").value;
			res = res + p4 + ", ";
		}

		else if(document.getElementById("bacon").checked){
			var p5 = document.getElementById("bacon").value;
			res = res + p5 + ", ";
		}

		else if(document.getElementById("tomatoes").checked){
			var p6 = document.getElementById("tomatoes").value;
			res = res + p6 + ", ";
		}

		else if(document.getElementById("mushrooms").checked){
			var p7 = document.getElementById("mushrooms").value;
			res = res + p7+", ";
		}

		// Options that is Delivery/Pickup
		if(document.getElementById('delivery').checked) {
           del = document.getElementById("delivery").value;
		}

		else if(document.getElementById('pickup').checked) {
          del = document.getElementById("pickup").value;
		}

		document.write("Customer Name: " + name + "<br>" +
						"Customer's Email: " + email+ "<br>"+
						"Toppings: " + res + "<br>" +
						"Option: " + del + "<br>" +
						"Tip Provided : " + tip + "<br>" +
						"Customer's address : " + address
					   );
		}
	</script>


	</body>
</html>
