// Promise function in ES6
function resolve_after_3_seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved after 3 seconds')
        }, 3000);
    });
}

resolve_after_3_seconds().then(data => console.log(data))


// Async example

async function getNewDataAsync() {
    const result = await resolve_after_3_seconds();
    console.log(result)
}

getNewDataAsync()