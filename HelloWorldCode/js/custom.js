$(function () {
	try {
		$('#editor').popover('show');
		$('#editor').keyup(function () {
			var keyed = $('#editor').val();
			$("#resultado").html(keyed);
		});
	} catch (e) {
		alert(e);
	}
});
