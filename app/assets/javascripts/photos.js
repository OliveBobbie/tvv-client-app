$(function(){
	Dropzone.autoDiscover = false;

	$('#my-dropzone').dropzone({
		maxFilesize: 5, 
		addRemoveLinks: true,
		paramName: 'photo[image]'
	});
	
});