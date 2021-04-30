
character = {
    idSaison: '5',
    id: '',
    nom: 'bob',
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

    if ('winter-char' && 'spring-char' && 'summer-char' && 'autumn-char' && 'time-char' in localStorage) {
        console.log('already')
        character = JSON.parse(localStorage.getItem('winter-char'));
    } else {
        console.log('not yet')
        const array = ['winter', 'spring', 'summer', 'autumn', 'time'];
        array.forEach(element => {
            character.idSaison = element;
            localStorage.setItem(element + '-char', JSON.stringify(character));
        });
    }
    return character;
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
