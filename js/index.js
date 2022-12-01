function namePokemon (list){
    let tableItems = '';
    list.results.forEach(function (el) {
        tableItems += "<tr> <td>"+el.name+"</td><td>"+el.url+"</td></tr>";
    });
    document.querySelector('tbody').innerHTML = tableItems;
};

fetch('https://pokeapi.co/api/v2/pokemon/')
.then(function (response) {
   return response.json()
})
.then(function (data){
    namePokemon(data)
});