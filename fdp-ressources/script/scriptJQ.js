$(document).ready(function() {
    $(".entry").click(function () {
        
        $(this).html(`<input class="input"  type="text" placeholder="écrivez ici">`).focus()
        $('.input').focus();
        let that = $(this)
        $('input').keypress(function(e){
            if( e.which === 13 ){
                // console.log(that.attr('id'))
                registerCharacterElement(that, $(this).val())
                $(this).remove();
                that.text($(this).val());
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



    $(".entry").each(function(){
        displayCharacterElement()
        }

    )


    

})
