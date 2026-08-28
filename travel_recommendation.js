document.getElementById('btnSearch').addEventListener('click', function() {
    const input = document.getElementById('conditionInput').value.toLowerCase();
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';

    fetch('travel_recommendation_api.json')
        .then(response => response.json())
        .then(data => {
            if (input.includes('beach')) {
                data.beaches.forEach(item => {
                    resultDiv.innerHTML += `<div><h3>${item.name}</h3><img src="${item.imageUrl}" width="200"><img src="${item.imageUrl2}" width="200"><p>${item.description}</p></div>`;
                });
            } else if (input.includes('temple')) {
                data.temples.forEach(item => {
                    resultDiv.innerHTML += `<div><h3>${item.name}</h3><img src="${item.imageUrl}" width="200"><img src="${item.imageUrl2}" width="200"><p>${item.description}</p></div>`;
                });
            } else if (input.includes('country')) {
                data.countries.forEach(country => {
                    country.cities.forEach(city => {
                        resultDiv.innerHTML += `<div><h3>${city.name}</h3><img src="${city.imageUrl}" width="200"><img src="${city.imageUrl2}" width="200"><p>${city.description}</p></div>`;
                    });
                });
            } else {
                resultDiv.innerHTML = '<p>Type "beach", "temple", or "country" to search.</p>';
            }
        });
});

document.getElementById('btnClear').addEventListener('click', function() {
    document.getElementById('conditionInput').value = '';
    document.getElementById('result').innerHTML = '';
});
