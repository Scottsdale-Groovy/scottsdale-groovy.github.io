$(document).ready( function() {
  $('.pop').popover({html: true})
  
  $('.view li > a').click( function() {
    $('.view li').removeClass();
    $(this).parent().addClass('active');
    if ( $(this).hasClass('list-view') ) {
      console.log('hello');
      $('.calendar').hide();
      $('.list').show();
    }
    else if ( $(this).hasClass('calendar-view') ) {
      $('.list').hide();
      $('.calendar').show();
    }
  });
  
});