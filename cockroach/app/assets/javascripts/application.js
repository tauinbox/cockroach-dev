// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery2
//= require jquery_ujs
//= require twitter/bootstrap
//= require_tree .

$(document).ready(function() {
  $('#navbarToggle').on('blur', function(event) {
    var screenWidth = window.innerWidth;
    if (screenWidth < 768) {
      $("#navbar").collapse('hide');
    }
  })
});

$(function() {
  const ALERT_DIV = "<div class='alert alert-danger text-center' style='margin-bottom: 5px; padding: 5px;'>"
  return $("form#sign_in_user, form#sign_up_user").on("ajax:success", function(event, xhr, settings) {
    $(this).parents('.modal').modal('hide');
    // $('.my-informer').remove();
    // $('#sign-in').before('<div class="text-center"><p class="alert alert-info">Signed in successfully.</p></div>');
    // var host = location.href;
    // $.get( host + "/navbar", function(data) {
    //   $('#mynavbar').replaceWith(data);
    // });
    location.reload();
  }).on("ajax:error", function(event, xhr, settings, exceptions) {
    var error_messages = xhr.responseJSON['error'] ? ALERT_DIV + xhr.responseJSON['error'] + "</div>" 
    : xhr.responseJSON['errors'] ? $.map(xhr.responseJSON["errors"], function(value, key) {
      return ALERT_DIV + "<strong>" + key + "</strong> " + value.join("; ") + "</div>" ;
    })
    : ALERT_DIV + "Unknown error</div>";
    
    return $(this).parents().children('.modal-footer').html(error_messages);
  });
});