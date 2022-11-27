fetch('https://pokeapi.co/api/v2/pokemon/')
    .then(function (response) {
        console.log(response)  
        return response.json()
    })
    .then(function(data){
        templateGenerator(data)
});

function templateGenerator(list) {
    console.log(list);
    let template = '';
    list.results.forEach(function (el) {
        template += '<p>' + el.name + '</p>';
    });
    document.querySelector('body').innerHTML = template;
}

