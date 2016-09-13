$(document).ready(function(){

	Dropzone.autoDiscover = false;
	var myDropzone = new Dropzone ('#my-dropzone', {
		maxFilesize: 5, 
		addRemoveLinks: true,
		paramName: 'photo[image]',
		autoProcessQueue: false,
		parallelUploads: 50
	});

	$('#submitBtn').on('click', function(e){
		e.preventDefault();
		myDropzone.processQueue();
	});
	
});