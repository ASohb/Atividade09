$('form button').click(function(){
    $('form').slideDown();
 })

 $('form').on('submit', function(e){
    e.preventDefault();
    const novatarefa= $('#nova-tarefa').val();
    //alert(novatarefa)

    $(`
      <li>${novatarefa}</li>`).appendTo('ul')

      $('#nova-tarefa').val('')
      
})

$(document).on('click', 'li', function() {
    $(this).toggleClass('concluido');
});