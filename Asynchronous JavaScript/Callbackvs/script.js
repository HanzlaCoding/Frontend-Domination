// Callback
function getData(url, callback) {
    fetch(url)
        .then(raw => raw.json())
        .then(result => {
            callback(result)
        }
        )
}

// getData(`https://randomuser.me/api/`,(data)=> console.log(data.results[0].location)
// )


// Promise


const dataFetcher = (url) => {
    const jawabUska = new Promise((resolve, reject) => {
        fetch(url)
            .then(raw => raw.json())
            .then(result => {
                if (result.results[0]) resolve(result)
                else reject();
            })
    })
    return jawabUska;
}


dataFetcher(`https://randomuser.me/api/`)
        .then((data) => console.log(data))
        .catch(() => console.log('code ke l lag gaye')
        )
// Async Await
async function getDataWithAsyncAwait() {
    const data = await fetch(`https://randomuser.me/api/`);
    const result = await data.json();
    console.log(result)
}