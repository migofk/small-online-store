/*
Name: Migo_cart
Description: Free Jquery shopping cart plugin.
site: a4mweb.com
Author: Ahmed Magdy
Author Email: ahmedmagdy@a4mweb.com
Author github: github.com/migofk
Copyright: Free to use for all purposes 
*/

//Global vars and arrays
	var migo_cart = [];
	var migo_color ;
	var migo_size ;
	var migo_quantity ;

//creating cookies for cart *****
function migoCheckCookies() {
 var cartCookies = Cookies.get('migo_cart');

//if cart cookies don't exist, create cookies
 if (cartCookies == undefined ){
 	var arr2 = [];
 	var json_str = JSON.stringify(arr2);
 	Cookies.set('migo_cart',json_str,{ expires: 7 })
 	/*alert(Cookies.getJSON('cart'));*/
 }
 //if cart cookies exist, load them to cart array
else{
	migo_cart = Cookies.getJSON('migo_cart');
	/*alert(Cookies.getJSON('cart'));*/
}
// displaying total items at the cart in the navebar ***** 
$('#migoCartTotal').html('<i class="fa fa-shopping-cart" aria-hidden="true"></i> ('+migo_cart.length+')');
}
 
/*********************************************************/	
// add the defult values for the  Global vars.
function migoGlobalVarValues (color,size,quantity){
	
	migo_color = color;
	migo_size = size;
	migo_quantity = quantity;

}

// adding data for cart
//Cart_1 one will add size, color and quantity automatically form Migo Global Vars 
function addtoMigoCart(product_id,product_name,total_to_pay){
/*
	var migo_productID = $('#pro2').attr('pro_ID');
	var migo_pro_name = $('#pro2').attr('pro_name');
	var migo_total_pay = $('#total_pay').val();
*/
	var productList	 ={
		productID:product_id,
		 size:migo_size, 
		 color:migo_color,
		 quantity:migo_quantity,
		 pro_name:product_name,
		 total_pay:total_to_pay,
		};
	
    migocreatingCookiesCart(migo_cart,product_id,productList);

}

//Cart_2 addin manually all the data
function addtoMigoCartAll(product_id,product_name,total_to_pay,product_size,product_color,product_quantity){
/*
	var migo_productID = $('#pro2').attr('pro_ID');
	var migo_pro_name = $('#pro2').attr('pro_name');
	var migo_total_pay = $('#total_pay').val();
*/
	var productList	 ={
		 productID:product_id,
		 size:product_size, 
		 color:product_color,
		 quantity:product_quantity,
		 pro_name:product_name,
		 total_pay:total_to_pay,
		};
	
    migocreatingCookiesCart(migo_cart,product_id,productList);

}


//creatin cookies for cart array
function migocreatingCookiesCart(array,productID,ProArray){
	var counter=0;

	//check if the user added this items before
for (var i = 0; i < migo_cart.length; i++) {
	if(array[i]['productID'] == productID){
		counter++;
		}	
	}

   // if added the item before
	if (counter != 0){
	if(confirm("You have already added this item "+counter+" time(s), do you want to added again?")){

    //adding item to the cart
	array.push(ProArray);
    
	//creating cookies
    var json_str = JSON.stringify(array);
 	Cookies.set('migo_cart',json_str,{ expires: 7 })

 	// displaying total items at the cart in the navebar
    $('#migoCartTotal').html('<i class="fa fa-shopping-cart" aria-hidden="true"></i> ('+migo_cart.length+')');
   //Displaying add to cart message
    $('#migoAddedToCart').show('slow/400/fast', function() {
    	
     setTimeout(function() {
     	$('#migoAddedToCart').hide('slow/400/fast');	}, 1000);
    
    }); 
    
    }

	}

// if not added the item before
	else{
	
	//adding item to the cart
	array.push(ProArray);
	//alert(migo_cart[0]['color']);

	//creating cookies
    var json_str = JSON.stringify(array);
 	Cookies.set('migo_cart',json_str,{ expires: 7 })
 	
 	// displaying total items at the cart in the navebar
    $('#migoCartTotal').html('<i class="fa fa-shopping-cart" aria-hidden="true"></i> ('+migo_cart.length+')');

    //Displaying add to cart message
    $('#migoAddedToCart').show('slow/400/fast', function() {
    	
     setTimeout(function() {
     	$('#migoAddedToCart').hide('slow/400/fast');	}, 1000);
    
    });


	}
     
	
	

}

