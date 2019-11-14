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

            //linear-gradient(45deg, purple 50%, green 50%)

            /*
            
            electric: yellow
            
            water: CornflowerBlue
            
            grass: Green
            
            poison: purple
            
            bug: olive
            
            normal:PeachPuff
            
            ground:SandyBrown
            
            fighting: Firebrick
            
            psychic:Violet
            
            rock: Grey
            
            flying:Pink
            
            ghost: MediumOrchid
            
            ice:cyan
            
            dragon:gold
            
            steel:gainsboro
            
            dark: DarkSlateGray
            
            fairy:hotpink
            
            */

            if (result.types[length].slot === 2) {
                if (result.types[0].type.name === 'flying' && result.types[1].type.name === 'fire') {
                    show = `<style>

            div.flyfire{

                background: linear-gradient(45deg, pink 50%, orange 50%);

            }

            </style>      

            <div class="poke flyfire">

            ${result.name}</br> 

            <img src="${result.sprites.front_default}">

            </div>`

                    document.querySelector('.cont2').insertAdjacentHTML('beforeend', show);



                } else if(result.types[0].type.name === 'water' && result.types[1].type.name === 'rock') {
                    show = `<style>

            div.waterock{

                background: linear-gradient(45deg, cornflowerblue 50%, grey 50%);

            }

            </style>      

            <div class="poke waterock">

            ${result.name}</br> 

            <img src="${result.sprites.front_default}">

            </div>`

                    document.querySelector('.cont2').insertAdjacentHTML('beforeend', show);
        }else if(result.types[0].type.name === 'poison' && result.types[1].type.name === 'ghost') {
            show = `<style>

    div.poisghos{

        background: linear-gradient(45deg, purple 50%, mediumorchid 50%);

    }

    </style>      

    <div class="poke poisghos">

    ${result.name}</br> 

    <img src="${result.sprites.front_default}">

    </div>`

            document.querySelector('.cont2').insertAdjacentHTML('beforeend', show);
}
            } else {

                if (result.types[0].type.name === 'electric') {

                    show = `<style>

            div.elec{

                background: yellow;

            }

            </style>      

            <div class="poke elec">

            ${result.name}</br> 

            <img src="${result.sprites.front_default}">

            </div>`

                    document.querySelector('.cont2').insertAdjacentHTML('beforeend', show);



                } else if (result.types[0].type.name === 'water') {

                    show = `<style>

            div.water{

                background: CornflowerBlue;

            }

            </style>      

            <div class="poke water">

            ${result.name}</br> 

            <img src="${result.sprites.front_default}">

            </div>`

                    document.querySelector('.cont2').insertAdjacentHTML('beforeend', show);



                } else if (result.types[0].type.name === 'grass') {

                    show = `<style>

            div.grass{

                background: Green;

            }

            </style>      

            <div class="poke grass">

            ${result.name}</br> 

            <img src="${result.sprites.front_default}">

            </div>`

                    document.querySelector('.cont2').insertAdjacentHTML('beforeend', show);



                } else if (result.types[0].type.name === 'poison') {

                    show = `<style>

            div.poison{

                background: purple;

            }

            </style>      

            <div class="poke poison">

            ${result.name}</br> 

            <img src="${result.sprites.front_default}">

            </div>`

                    document.querySelector('.cont2').insertAdjacentHTML('beforeend', show);



                } else if (result.types[0].type.name === 'bug') {

                    show = `<style>

            div.bug{

                background: olive;

            }

            </style>      

            <div class="poke bug">

            ${result.name}</br> 

            <img src="${result.sprites.front_default}">

            </div>`

                    document.querySelector('.cont2').insertAdjacentHTML('beforeend', show);



                } else if (result.types[0].type.name === 'normal') {

                    show = `<style>

            div.normal{

                background: PeachPuff;

            }

            </style>      

            <div class="poke normal">

            ${result.name}</br> 

            <img src="${result.sprites.front_default}">

            </div>`

                    document.querySelector('.cont2').insertAdjacentHTML('beforeend', show);



                } else if (result.types[0].type.name === 'ground') {

                    show = `<style>

            div.ground{

                background: sandybrown;

            }

            </style>      

            <div class="poke ground">

            ${result.name}</br> 

            <img src="${result.sprites.front_default}">

            </div>`

                    document.querySelector('.cont2').insertAdjacentHTML('beforeend', show);



                } else if (result.types[0].type.name === 'fighting') {

                    show = `<style>

            div.fighting{

                background: firebrick;

            }

            </style>      

            <div class="poke fighting">

            ${result.name}</br> 

            <img src="${result.sprites.front_default}">

            </div>`

                    document.querySelector('.cont2').insertAdjacentHTML('beforeend', show);



                }

                else if (result.types[0].type.name === 'psychic') {

                    show = `<style>

            div.psychic{

                background: violet;

            }

            </style>      

            <div class="poke psychic">

            ${result.name}</br> 

            <img src="${result.sprites.front_default}">

            </div>`

                    document.querySelector('.cont2').insertAdjacentHTML('beforeend', show);



                } else if (result.types[0].type.name === 'rock') {

                    show = `<style>

            div.rock{

                background: grey;

            }

            </style>      

            <div class="poke rock">

            ${result.name}</br> 

            <img src="${result.sprites.front_default}">

            </div>`

                    document.querySelector('.cont2').insertAdjacentHTML('beforeend', show);



                } else if (result.types[0].type.name === 'flying') {

                    show = `<style>

            div.fly{

                background: pink;

            }

            </style>      

            <div class="poke fly">

            ${result.name}</br> 

            <img src="${result.sprites.front_default}">

            </div>`

                    document.querySelector('.cont2').insertAdjacentHTML('beforeend', show);



                } else if (result.types[0].type.name === 'ghost') {

                    show = `<style>

            div.ghost{

                background: MediumOrchid;

            }

            </style>      

            <div class="poke ghost">

            ${result.name}</br> 

            <img src="${result.sprites.front_default}">

            </div>`

                    document.querySelector('.cont2').insertAdjacentHTML('beforeend', show);



                } else if (result.types[0].type.name === 'ice') {

                    show = `<style>

            div.ice{

                background: cyan;

            }

            </style>      

            <div class="poke ice">

            ${result.name}</br> 

            <img src="${result.sprites.front_default}">

            </div>`

                    document.querySelector('.cont2').insertAdjacentHTML('beforeend', show);



                } else if (result.types[0].type.name === 'dragon') {

                    show = `<style>

            div.dragon{

                background: gold;

            }

            </style>      

            <div class="poke dragon">

            ${result.name}</br> 

            <img src="${result.sprites.front_default}">

            </div>`

                    document.querySelector('.cont2').insertAdjacentHTML('beforeend', show);



                } else if (result.types[0].type.name === 'steel') {

                    show = `<style>

            div.steel{

                background: gainsboro;

            }

            </style>      

            <div class="poke steel">

            ${result.name}</br> 

            <img src="${result.sprites.front_default}">

            </div>`

                    document.querySelector('.cont2').insertAdjacentHTML('beforeend', show);



                } else if (result.types[0].type.name === 'dark') {

                    show = `<style>

            div.dark{

                background: DarkSlateGray;

            }

            </style>      

            <div class="poke dark">

            ${result.name}</br> 

            <img src="${result.sprites.front_default}">

            </div>`

                    document.querySelector('.cont2').insertAdjacentHTML('beforeend', show);



                } else if (result.types[0].type.name === 'fairy') {

                    show = `<style>

            div.fairy{

                background: hotpink;

            }

            </style>      

            <div class="poke fairy">

            ${result.name}</br> 

            <img src="${result.sprites.front_default}">

            </div>`

                    document.querySelector('.cont2').insertAdjacentHTML('beforeend', show);



                }
            }

        });
}


let button = document.querySelector('.btn');



button.addEventListener('click', function () {

    pegarNome = document.querySelector('.inputPoke').value;

    getPokemao(pegarNome);

});




