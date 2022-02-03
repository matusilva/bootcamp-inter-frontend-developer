const pokeButton = document.getElementById('change-poke');

const getPoke = async () => {
    const id = Math.floor(Math.random() * 151) + 1;
    const BASE_URL = `https://pokeapi.co/api/v2/pokemon/${id}`;

    const data = await fetch(BASE_URL)
        .then((res) => res.json())
        .catch((error) => console.log(error));

    return data.sprites.other.home.front_default;
}

const loadImg = async () => {
    const pokeImg = document.getElementById('poke');
    pokeImg.src = await getPoke();
}

pokeButton.addEventListener('click', loadImg);

loadImg();