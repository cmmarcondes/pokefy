function getPokemao(pokemao) {

    let name = document.getElementById('inputPoke');

    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemao}`)

    .then(pegarPoke => {

        return pegarPoke.json();

    })

    .then(data => {

        let result = data;

        console.log(result);

        var show;

        if (result.types[length].slot === 2) {
            show = `<div class="poke ${result.types[0].type["name"]}${result.types[1].type["name"]}">
                    ${result.name}</br> 
                    <img src="${result.sprites.front_default}">
                    </div>`
            document.querySelector('.cont2').insertAdjacentHTML('beforeend', show);
        } else {
            show = `<div class="poke ${result.types[0].type["name"]}">
            ${result.name}</br> 
            <img src="${result.sprites.front_default}">
            </div>`
            document.querySelector('.cont2').insertAdjacentHTML('beforeend', show);
        }


    });
}

let button = document.querySelector('.btn');



button.addEventListener('click', function() {

    pegarNome = document.querySelector('.inputPoke').value;

    getPokemao(pegarNome);
});