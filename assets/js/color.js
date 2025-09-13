$(document).ready(function() {

  // Add color to the list
  $('#addColor').click(function() {
    var color = $('#colorInput').val().trim();
    if (color !== '') {
      var li = $('<li></li>').text(color);
      li.data('toggled', false);
      $('#colorList').append(li);
      $('#colorInput').val('');
    }
  });

  // Toggle background color on li click
  $('#colorList').on('click', 'li', function() {
    var $this = $(this);
    var toggled = $this.data('toggled');
    var color = $this.text();

    if (!toggled) {
      $this.css('background-color', color);
    } else {
      $this.css('background-color', '');
    }

    $this.data('toggled', !toggled);
  });

  // Remove the last color from the list
  $('#removeColor').click(function() {
    $('#colorList li:last-child').remove();
  });

});