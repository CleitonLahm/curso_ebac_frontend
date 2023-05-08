$(document).ready(function () {
  
  $('form').submit(function(event) {
    event.preventDefault();
  
  let newTask = $('#add_new_task').val() 
  let listItem = $('ul').append('<li>' + newTask + '</li>');

  $('ul').append(listItem);
  $('#add_new_task').val('');

  $('ul').on('click', 'li', function() {
    $(this).toggleClass('line');
  });

 })
})
