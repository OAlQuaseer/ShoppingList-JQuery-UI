$(document).ready(function(){

	$("button#create-task").click(function(){
		
		insertionNewItem();

	});

	$(document).keydown(function(event){
		
		if(event.which == 13){
			insertionNewItem();
		}

	});




});

function insertionNewItem(){

	// remove nothing message
	$('.nothing-message').hide('slide',{direction:'left'},300)
	$('.task-headline').show('slide',{direction:'right'},500)
	// makes other controls fade in when first task is created
	$('#controls').fadeIn(400);


	// create the new li from the form input
	var item = $('input[name=task-insert]').val();
	var newItem = '<li>' + '<p>'+item+'</p>' + '</li>'
	$('#task-list').append(newItem);


	// clear form when button is pressed
	$('input').val('');

	// Alert if the form in submitted empty
	if (item.length == 0) {
			alert('please insert a new item in the shopping list');
		};



}