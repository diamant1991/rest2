$('form').bind('submit', function(event) {
    $(this).find('[type=text]').each(function() {
      if(!$(this).val().length) { 
      event.preventDefault();
        $(this).addClass('error');
      }
    });
  });