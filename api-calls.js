// Fetch example

const apiUrl = '';
// pretending results will be parsed into an array of elements

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

// Api call example with async await instead of promises (still uses fetch)

async function getResultsAsync() {
    const response = await fetch(apiUrl);
    const json = await response.json();
    console.log(json[0]);
}

// clearly above example shows the power of async await & less lines of code

