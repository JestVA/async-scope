const apiUrl = '';
function getResults() {
    fetch(apiUrl)
    .then((results) => results.json())
    .then((json) => {
        console.log(json[0])
    }).catch((error) => {
        console.log('Fetch failed')
    })
}
getResults();