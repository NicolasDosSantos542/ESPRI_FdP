window.onload = function () {
    let plus = document.getElementsByClassName('plus');

    
    
    const plusFunction = function () {
        console.log(this)
        this.closest('p').innerHTML = '<input class="input"  type="text" placeholder="écrivez ici">`';
    };
    
    for (let i = 0; i < plus.length; i++) {
        plus[i].addEventListener('click', plusFunction, false);
    }



}