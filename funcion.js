const pokemon = document.getElementById('pokemon');
let posX = 0;
let posY = 0;

function movePokemon(e) {
    const step = 10;

    switch (e.key) {
        case 'ArrowUp':
            posY -= step;
            break;
        case 'ArrowDown':
            posY += step;
            break;
        case 'ArrowLeft':
            posX -= step;
            break;
        case 'ArrowRight':
            posX += step;
            break;
    }

    pokemon.style.left = `${posX}px`;
    pokemon.style.top = `${posY}px`;
}

window.addEventListener('keydown', movePokemon);
