function namePokemon (list){
    let htm = '';
    console.log(list.results)
    list.results.forEach(function (el) {
        htm += "<p>"+el.name+"</p>"
    });
    document.querySelector('body').innerHTML = htm;
}

fetch('https://pokeapi.co/api/v2/pokemon/')
.then(function (response) {
   return response.json()
})
.then(function (data){
    namePokemon(data)
});