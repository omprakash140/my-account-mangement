function apiTransaction() {
    sendApi("GET", "/transaction").then(function (response) {
        var data = response;
        renderTranscation(data);
    }).catch(function (error) {
        console.error(error);
    });
}
api.transaction = apiTransaction;