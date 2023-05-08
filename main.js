$(document).ready(function () {
  
  $('form').submit(function(event) {
    event.preventDefault();
  
  let newTask = $('#add_new_task').val() 
  let listItem = $('ul').append('<li>' + newTask + '</li>');
  let removeButton = $('<button>Remover</button>')

  listItem.append(removeButton)

  $('ul').append(listItem);

  removeButton.on('click', function() {
    listItem.remove();
  });

  $('#add_new_task').val('');

 })
})
