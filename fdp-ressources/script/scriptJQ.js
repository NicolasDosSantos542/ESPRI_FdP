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
    $(".saison-pastille").click(function () {
        let bob = prompt("quel est votre score?")
        $(this).children().html(bob)
    
    })

  character = initpage(character)
    console.log(character)
    Object.entries(character).forEach(entry => {
        const [key, value] = entry
        // console.log(key, value);

        $(`#${key}`).text(value)
    });

    console.log(localStorage)

    

})
