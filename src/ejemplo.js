const fetchData = async () => {

  const res = await fetch('./data/pokemon/pokemon.json');
  const data = await res.json();
  console.log(data.pokemon);

}

fetchData();