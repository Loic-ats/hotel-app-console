var request = require('request');

var backendUrl = 'https:/qlv2-hotel-web-api.herokuapp.com'

function listerClients(callbackFn) {



    request(backendUrl + '/clients?start=0&size=3', { json: true },
        function (err, res, listeDeClients) {
            //3    
            if (err) {
                callbackFn({
                    error: err
                });
            } else {
                callbackFn({
                    data: listeDeClients
                });
            }
        });


}

//function ajouterClient()

exports.listerClients = listerClients;
