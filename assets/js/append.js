$(document).ready(function() {
  $('#appendBtn').click(function() {
    $('#content').append('<p>The Text is Appended </p>');
  });
  $('#prependBtn').click(function() {
    $('#content').prepend('<p> The text is prepended </p>');
  });
  $('#removeBtn').click(function() {
    $('#content').remove();
  });
  $('#cssBtn').click(function() {
    $('#content').css({
      'color': 'white',
      'background-color': 'violet',
      'padding': '20px'
    });
  });
  $('#toggleClassBtn').click(function() {
    $('#content').toggleClass('highlight');
  });
});