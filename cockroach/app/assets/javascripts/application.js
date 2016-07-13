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
  return $("form#sign_in_user, form#sign_up_user").on("ajax:success", function(event, xhr, settings) {
    location.reload();
    return $(this).parents('.modal').modal('hide');
  }).on("ajax:error", function(event, xhr, settings, exceptions) {
    var error_messages = xhr.responseJSON['error'] ? "<div class='alert alert-danger text-center' style='margin-bottom: 5px; padding: 5px;'>" + xhr.responseJSON['error'] + "</div>" 
    : xhr.responseJSON['errors'] ? $.map(xhr.responseJSON["errors"], function(value, key) {
      return "<div class='alert alert-danger text-center' style='margin-bottom: 5px; padding: 5px;'><strong>" + key + "</strong> " + value.join("; ") + "</div>" ;
    })
    : "<div class='alert alert-danger text-center' style='margin-bottom: 5px; padding: 5px;'>Unknown error</div>";
    
    return $(this).parents().children('.modal-footer').html(error_messages);
  });
});