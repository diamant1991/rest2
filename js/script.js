$('input,textarea').focus(function(){
  $(this).data('placeholder',$(this).attr('placeholder'))
  $(this).attr('placeholder','');
});
$('input,textarea').blur(function(){
  $(this).attr('placeholder',$(this).data('placeholder'));
});

$(document).ready(function(){
    $('.button-arrow').click(function(){ 
      if(document.getElementById($(this).attr('href').substr(1)) != null) {
         $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top }, 1200);
      }     
      return false;
    });

    $('.email-input').inputmask({
      mask: "*{1,20}[.*{1,20}][.*{1,20}][.*{1,20}]@*{1,20}[.*{2,6}][.*{1,2}]",
      greedy: false,
      onBeforePaste: function (pastedValue, opts) {
          pastedValue = pastedValue.toLowerCase();
          return pastedValue.replace("mailto:", "");
      },
      definitions: {
          '*': {
              validator: "[0-9A-Za-z!#$%&'*+/=?^_`{|}~\-]",
              cardinality: 1,
              casing: "lower"
          }
      }
  });


});

// Select
$('.slct').click(function(){
	var dropBlock = $(this).parent().find('.drop');

	if( dropBlock.is(':hidden') ) {
		dropBlock.slideDown(150);

		$(this).addClass('active');
		$('.drop').find('li').click(function(){
			var selectResult = $(this).html();
			$(this).parent().parent().find('input').val(selectResult);
			$(this).parent().parent().find('.slct').removeClass('active').html(selectResult);

			dropBlock.slideUp(150);
		});
	
	} else {
		$(this).removeClass('active');
		dropBlock.slideUp(150);
	}

	return false;
});

$(document).mouseup(function (e) {
    var container = $(".drop");
    if (container.has(e.target).length === 0){
        container.slideUp(150);
        $('.slct').removeClass('active');
    }
});


$(document).ready(function(){
   $('.rest-link > a').click(function(event) {
      var menu = $(this).parent().find('.res-menu');
      if(menu.css('display') != 'none'){
         menu.hide();
      }
      else{
         menu.show();
      }
   });


$(document).mouseup(function (e) {
    var container = $(".res-menu");
    if (container.has(e.target).length === 0){
        container.hide();
    }

});




    $('header[data-type="background"]').each(function(){
        var $bgobj = $(this); 
        $(window).scroll(function() {
            var yPos = -($(window).scrollTop() / $bgobj.data('speed'));
            var coords = 'center '+ yPos + 'px';
            $bgobj.css({ backgroundPosition: coords });
        });
    });


    $('.nav-item-link').click(function(e) {
       e.preventDefault();

       var
          section = $(this).attr('href');
          showSection($(this).attr('href'), true)
    });
    showSection(window.location.hash, false)

});

$(window).scroll(function(){
   checkSection()
})

function showSection(section, isAnimate){
   var 
      direction = section.replace(/#/, ''),
      reqSection = $('.section').filter('[data-section = "' + direction + '"]'),
      reqSectionPos = reqSection.offset().top - 50;

   if(isAnimate){
      $('body, html').animate({scrollTop: reqSectionPos}, 1000);
   }
   else{
      $('body,html').scrollTop(reqSectionPos);
   }
}

function checkSection(){
  $('.section').each(function(){
    var 
       
        $this = $(this),
        topEdge = $this.offset().top - 100,
        bottomEdge = topEdge + $this.height(),
        wscroll = $(window).scrollTop();

   if(topEdge < wscroll && bottomEdge > wscroll){
      var 
         currentId = $this.data('section');
         reqLink = $('.nav-item-link').filter('[href="#' + currentId + '"]');

      reqLink.closest('.nav-item').addClass('active')
              .siblings().removeClass('active');
     

   }
  })
}

