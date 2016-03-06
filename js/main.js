/* This is a JS comment */ 

//alert($); //Also a comment for JS   This alert makes sure that when you refresh your webbroswer Javascript is working 

//when the page has loaded 
//lots of brackets in Java and the ; is a full stop ie. end of statement 

function askQuestions() {

	var firstName=prompt('What is your First Name?');
	var lastName=prompt('What is your Last Name?');
	console.log(firstName+' '+lastName)

	var age = prompt('How old are you?');
	console.log(age);

	age=parseInt(age);


	if (age>=18) {
		console.log('User is an Adult.');
	} else if (age>=13){
		console.log("User is a Teenager.");
	}	else {
			console.log('User is a Child');
	}
}

//when the page has loaded
$(function(){

	// When user clicks img, run askQuestions
	$('img').on('click', askQuestions);

	//When the user clicks an h3
	$('h3').on('click', function(){  //NOTE - the . joins the two elements together i.e. to click any h3 element

		console.log('test');

		//Hide the next element 
		$(this).next().slideToggle(100);  //.on .next .hide are three VIP jquery fuctions  NOW - you can switch .hide to .toggle which saves you writing 5 lines of code for this function - so hides the text if it is visible and vice versa  - slidetoggle - timing of dissapearing for paragraph

	});

});  