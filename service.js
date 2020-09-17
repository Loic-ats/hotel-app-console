function listerClient() {

    var request = require('request');
    request('https://localhost:8080/clients', { json: true }, function (err, res, body) {
        if (err) {
            return console.log('Erreur', err);
        }
        console.log('Ok', body);
    });
}

