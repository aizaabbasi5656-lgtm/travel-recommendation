 const btnSearch = document.getElementById('btnSearch');
const btnClear = document.getElementById('btnClear');
const conditionInput = document.getElementById('conditionInput');
const resultDiv = document.getElementById('result');

btnSearch.addEventListener('click', () => {
    const query = conditionInput.value.toLowerCase().trim();
    resultDiv.innerHTML = ''; // Clear previous results

    if (!query) return;

    fetch('travel_recommendation_api.json')
        .then(response => response.json())
        .then(data => {
            if (query.includes('beach')) {
                data.beaches.forEach(beach => {
                    resultDiv.innerHTML += `
                        <div style="margin-bottom: 20px;">
                            <h3>${beach.name}</h3>
                            <img src="${beach.imageUrl}" alt="${beach.name}" style="width:300px; border-radius:8px; margin-right:10px;">
                            <p>${beach.description}</p>
                        </div>
                    `;
                });
            } else if (query.includes('temple')) {
                data.temples.forEaach ? data.temples.forEach(temple => {
                    resultDiv.innerHTML += `
                        <div style="margin-bottom: 20px;">
                            <h3>${temple.name}</h3>
                            <img src="${temple.imageUrl}" alt="${temple.name}" style="width:300px; border-radius:8px; margin-right:10px;">
                            <p>${temple.description}</p>
                        </div>
                    `;
                }) : data.temples.forEach(temple => {
                    resultDiv.innerHTML += `
                        <div style="margin-bottom: 20px;">
                            <h3>${temple.name}</h3>
                            <img src="${temple.imageUrl}" alt="${temple.name}" style="width:300px; border-radius:8px; margin-right:10px;">
                            <p>${temple.description}</p>
                        </div>
                    `;
                });
            } else if (query.includes('country') || query.includes('countries')) {
                data.countries.forEach(country => {
                    country.cities.forEach(city => {
                        resultDiv.innerHTML += `
                            <div style="margin-bottom: 20px;">
                                <h3>${city.name}</h3>
                                <img src="${city.imageUrl}" alt="${city.name}" style="width:300px; border-radius:8px; margin-right:10px;">
                                <p>${city.description}</p>
                            </div>
                        `;
                    });
                });
            } else {
                resultDiv.innerHTML = '<p>No results found. Try searching for "beach", "temple", or "country".</p>';
            }
        })
        .catch(error => console.error('Error fetching data:', error));
});

btnClear.addEventListener('click', () => {
    conditionInput.value = '';
    resultDiv.innerHTML = '';
});
