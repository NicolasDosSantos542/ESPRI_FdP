character = {
    idSaison: '5',
    id: '',
    nom: '',
    lignee: '',
    age: '',
    role: '',
    talents: [],
    atouts: [],
    defauts: [],
    harmonie: '',
    rupture: '',
    sante: {
        choque: {type: '', intensite: ''},
        meurtri: {type: '', intensite: ''},
        brise: {type: '', intensite: ''},
    },
    relations: [{nom: '', nature: '', resonnance: []}],
    hiver: '',
    printemps: '',
    ete: '',
    automne: '',
    devotion: '',
    talisman: '',
    liturgie: '',
    sortileges: [],
    materiel: [],
};
emptyCharacter = {
    idSaison: '',
    id: '',
    nom: '',
    lignee: '',
    age: '',
    role: '',
    talents: [],
    atouts: [],
    defauts: [],
    harmonie: '',
    rupture: '',
    sante: {
        choque: {type: '', intensite: ''},
        meurtri: {type: '', intensite: ''},
        brise: {type: '', intensite: ''},
    },
    relations: [{nom: '', nature: '', resonnance: []}],
    hiver: '',
    printemps: '',
    ete: '',
    automne: '',
    devotion: '',
    talisman: '',
    liturgie: '',
    sortileges: [],
    materiel: [],
};

function initpage(character) {
    // localStorage.clear();

    if ('winter-char' && 'spring-char' && 'summer-char' && 'autumn-char' && 'time-char' in localStorage) {
        console.log('storage already here')
        character = JSON.parse(localStorage.getItem('winter-char'));
    } else {
        console.log('storage not yet here')
        const array = ['winter', 'spring', 'summer', 'autumn', 'time'];
        array.forEach(element => {
            character.idSaison = element;
            localStorage.setItem(element + '-char', JSON.stringify(character));
        });
    }
    return character;
}

function displayCharacterElement() {

    let value = '';
    let id = $(this).attr('id')
    for (const property in character) {
        if (property === id) {
            value = character[property];
        }
    }

    $(this).text(value)
}

function registerCharacterElement(dom, value) {
    let id =dom.attr('id')
    console.log(id)
    for (const property in character) {
        if (property === id) {
             character[property]= value;
        }
    }
    console.log(character)
    let element = character.idSaison
    localStorage.setItem(element + '-char', JSON.stringify(character));


}

$(document).ready(function () {
    // $('#nom').text(character.nom)
    /*    Object.entries(character).forEach(entry => {
            const [key, value] = entry
            console.log(key, value);
            $(`#${key}`).text(value)

        });*/
    //initpage()

});
