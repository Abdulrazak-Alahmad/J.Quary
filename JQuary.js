$('img').click(function() {
    $(this).attr('src',$(this).attr('alt')) 
});

$('#color').click(()=>{
        $( "#p-color" ).css('color','red')  
})

$('#showHide').click(()=>{
    $( "#p-showHide" ).toggle();  
})

$('#text').click(()=>{
    $( "#p-text" ).html( " <b>Some new text</b>" ) 
})
