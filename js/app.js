$(document).ready(function(){

	$("button#create-task").click(function(){
		
		insertionNewItem();

	});

	$(document).keydown(function(event){
		
		if(event.which == 13){
			insertionNewItem();
		}

	});

	// Clear all tasks button
	$('button#clear-all-tasks').click(function(){
		$('#task-list li').remove();
		$('.task-headline').fadeOut(300);
		$('#controls').fadeOut(300);
		$('.nothing-message').show(500);
	});

	// // mark as complete
	// $(".items-container ul li").click(function(){
	// 	$(this).toggleClass('complete');
	// });

	// mark as complete
	$(document).on('click','.items-container li',function(){
		$(this).toggleClass('complete');
	});


	// double click to remove
	$(document).on('dblclick','.items-container li',function(){
		$(this).remove();
		//when the last Item is removed 
		if ($(".items-container li").length === 0){
			$('button#clear-all-tasks').trigger("click");
		}
	});


});

function insertionNewItem(){

	// remove nothing message
	$('.nothing-message').hide('slide',{direction:'left'},300)
	$('.task-headline').show('slide',{direction:'right'},500)
	// makes other controls fade in when first task is created
	$('#controls').fadeIn(400);


	// Alert if the form in submitted empty
	var item = $('input[name=task-insert]').val();
	if (item.length == 0) {
			alert('please insert a new item in the shopping list');
	}else{
		// create the new li from the form input
		var newItem = '<li>' + '<p>'+item+'</p>' + '</li>'
		$('#task-list').append(newItem);
	};

	// clear form when button is pressed
	$('input').val('');

}