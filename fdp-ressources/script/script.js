$(document).ready(function() {
    $(".plus").click(function () {
        
        $(this).next().html(`<input class="input"  type="text" placeholder="écrivez ici">`).focus()
        $('.input').focus();
        $('input').keypress(function(e){
            if( e.which === 13 ){
         
                $(this).parent().html($(this).val())
                $(this).remove()
            }
        });
        
    })
    
    
    $(".plus-liste").click(function () {
        
        $(this).next().append(`<input class="input"  type="text" placeholder="écrivez ici">`).focus()
        $('.input').focus();
        $('input').keypress(function(e){
            if( e.which === 13 ){
                
                $(this).parent().append("<li>-"+$(this).val()+"</li>")
                $(this).remove()
            }
        });
        
    })
    

})