function getPokemao(pokemao){
    let name = document.getElementById('inputPoke');
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemao}`)
    .then(pegarPoke => {
        return pegarPoke.json();
    })
    .then(data => {
        let result = data;
        console.log(result);
        if(result.types[0].type.name === 'poison' && result.types[1].type.name === 'grass'){
            let show = `
            <style>
            div.pokePoGr{
                background: linear-gradient(45deg, purple 50%, green 50%);
            }
            </style>      
            <div class="poke pokePoGr">
            ${result.name}</br> 
            <img src="${result.sprites.front_default}">
            </div>`
            document.querySelector('.cont2').insertAdjacentHTML('beforeend', show);
        }else if(result.types[0].type.name === 'poison' && result.types[1].type.name === 'bug'){
            let show = `
            <style>
            div.pokePoBu{
                background: linear-gradient(45deg, purple 50%, olive 50%);
            }
            </style>      
            <div class="poke pokePoBu">
            ${result.name}</br> 
            <img src="${result.sprites.front_default}">
            </div>`
            document.querySelector('.cont2').insertAdjacentHTML('beforeend', show);
        }else if(result.types[0].type.name === 'ground' && result.types[1].type.name === 'poison'){
            let show = `
            <style>
            div.pokePoGround{
                background: linear-gradient(45deg, purple 50%, sandybrown 50%);
            }
            </style>      
            <div class="poke pokePoGround">
            ${result.name}</br> 
            <img src="${result.sprites.front_default}">
            </div>`
            document.querySelector('.cont2').insertAdjacentHTML('beforeend', show);
        }else if(result.types[0].type.name === 'flying' && result.types[1].type.name === 'poison'){
            let show = `
            <style>
            div.pokePoFly{
                background: linear-gradient(45deg, purple 50%, mediumpurple 50%);
            }
            </style>      
            <div class="poke pokePoFly">
            ${result.name}</br> 
            <img src="${result.sprites.front_default}">
            </div>`
            document.querySelector('.cont2').insertAdjacentHTML('beforeend', show);
        }else if(result.types[0].type.name === 'poison' && result.types[1].type.name === 'water'){
            let show = `
            <style>
            div.pokePoWat{
                background: linear-gradient(45deg, purple 50%, blue 50%);
            }
            </style>      
            <div class="poke pokePoWat">
            ${result.name}</br> 
            <img src="${result.sprites.front_default}">
            </div>`
            document.querySelector('.cont2').insertAdjacentHTML('beforeend', show);
        }else if(result.types[0].type.name === 'poison' && result.types[1].type.name === 'ghost'){
            let show = `
            <style>
            div.pokePoGho{
                background: linear-gradient(45deg, purple 50%, violet 50%);
            }
            </style>      
            <div class="poke pokePoGho">
            ${result.name}</br> 
            <img src="${result.sprites.front_default}">
            </div>`
            document.querySelector('.cont2').insertAdjacentHTML('beforeend', show);
        }else if(result.types[0].type.name === 'flying' && result.types[1].type.name === 'fire'){
            let show = `
            <style>
            div.pokeFlyFir{
                background: linear-gradient(45deg, mediumpurple 50%, orange 50%);
            }
            </style>      
            <div class="poke pokeFlyFir">
            ${result.name}</br> 
            <img src="${result.sprites.front_default}">
            </div>`
            document.querySelector('.cont2').insertAdjacentHTML('beforeend', show);
        }else if(result.types[0].type.name === 'electric'){
            let show = `
            <style>
            div.pokeElectric{
                background-color: yellow;
            }
            </style>      
            <div class="poke pokeElectric">
            ${result.name}</br> 
            <img src="${result.sprites.front_default}">
            </div>`
            document.querySelector('.cont2').insertAdjacentHTML('beforeend', show);
        }else if(result.types[0].type.name === 'water'){
            let show = `
            <style>
            div.pokeWater{
                background-color: blue  ;
            }
            </style>      
            <div class="poke pokeWater">
            ${result.name}</br> 
            <img src="${result.sprites.front_default}">
            </div>`
            document.querySelector('.cont2').insertAdjacentHTML('beforeend', show);
        } else if(result.types[0].type.name === 'fire'){
            let show = `
            <style>
            div.pokeFire{
                background-color: orange;
            }
            </style>      
            <div class="poke pokeFire">
            ${result.name}</br> 
            <img src="${result.sprites.front_default}">
            </div>`
            document.querySelector('.cont2').insertAdjacentHTML('beforeend', show);
        } else if(result.types[0].type.name === 'poison'){
            let show = `
            <style>
            div.pokePurple{
                background-color: purple;
            }
            </style>      
            <div class="poke pokePurple">
            ${result.name}</br> 
            <img src="${result.sprites.front_default}">
            </div>`
            document.querySelector('.cont2').insertAdjacentHTML('beforeend', show);
        } else if(result.types[0].type.name === 'flying'){
            let show = `
            <style>
            div.pokeFlying{
                background-color: mediumpurple;
            }
            </style>      
            <div class="poke pokeFlying">
            ${result.name}</br> 
            <img src="${result.sprites.front_default}">
            </div>`
            document.querySelector('.cont2').insertAdjacentHTML('beforeend', show);
        }else if(result.types[0].type.name === 'normal'){
            let show = `
            <style>
            div.pokeNormal{
                background-color: darkolivegreen;
            }
            </style>      
            <div class="poke pokeNormal">
            ${result.name}</br> 
            <img src="${result.sprites.front_default}">
            </div>`
            document.querySelector('.cont2').insertAdjacentHTML('beforeend', show);
        }else if(result.types[0].type.name === 'ground'){
            let show = `
            <style>
            div.pokeGround{
                background-color: sandybrown;
            }
            </style>      
            <div class="poke pokeGround">
            ${result.name}</br> 
            <img src="${result.sprites.front_default}">
            </div>`
            document.querySelector('.cont2').insertAdjacentHTML('beforeend', show);
        }
        else if(result.types[0].type.name === 'fighting'){
            let show = `
            <style>
            div.pokeFighting{
                background-color: firebrick;
            }
            </style>      
            <div class="poke pokeFighting">
            ${result.name}</br> 
            <img src="${result.sprites.front_default}">
            </div>`
            document.querySelector('.cont2').insertAdjacentHTML('beforeend', show);
        }
        else if(result.types[0].type.name === 'psychic'){
            let show = `
            <style>
            div.pokePsychic{
                background-color: pink;
            }
            </style>      
            <div class="poke pokePsychic">
            ${result.name}</br> 
            <img src="${result.sprites.front_default}">
            </div>`
            document.querySelector('.cont2').insertAdjacentHTML('beforeend', show);
        }
        else if(result.types[0].type.name === 'rock'){
            let show = `
            <style>
            div.pokeRock{
                background-color: brown;
            }
            </style>      
            <div class="poke pokeRock">
            ${result.name}</br> 
            <img src="${result.sprites.front_default}">
            </div>`
            document.querySelector('.cont2').insertAdjacentHTML('beforeend', show);
        }else if(result.types[0].type.name === 'ghost'){
            let show = `
            <style>
            div.pokeGhost{
                background-color: violet;
            }
            </style>      
            <div class="poke pokeGhost">
            ${result.name}</br> 
            <img src="${result.sprites.front_default}">
            </div>`
            document.querySelector('.cont2').insertAdjacentHTML('beforeend', show);
        }else if(result.types[0].type.name === 'bug'){
            let show = `
            <style>
            div.pokeBug{
                background-color: olivegreen;
            }
            </style>      
            <div class="poke pokeBug">
            ${result.name}</br> 
            <img src="${result.sprites.front_default}">
            </div>`
            document.querySelector('.cont2').insertAdjacentHTML('beforeend', show);
        }
    
    })
};

let button = document.querySelector('.btn');

button.addEventListener('click', function(){
    pegarNome = document.querySelector('.inputPoke').value;
    getPokemao(pegarNome); 
    
});
