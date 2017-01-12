$(document).ready(function() {
  var height = parseInt(prompt("How tall are you?"));

  if ( height >= 5 ) {
    $('#rides-list').show();
  } else {
    $("#under-5-feet").show();
  }

});
