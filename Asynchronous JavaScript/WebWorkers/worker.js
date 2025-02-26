onmessage = (data) => {
    const ans = data.reduce((acc, item) => acc + item, 0); // Fixing the parameter order in reduce
    console.log(ans);
    postMessage(ans);
}
