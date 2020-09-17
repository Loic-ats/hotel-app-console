var request = require('request');

var backendUrl = 'https://cqlv2-hotel-web-api.herokuapp.com'
/*La fonction lister clients a deux parametres "fonction".
un parametre fonction est similaire a un parametre classique car il y a pas de typage explicite en JS
Deuxième points important: le code est asynchrome, il continue de s'exécuter meme si il a pas un retour de la réponse
La fonction resquest est fournie par une librairie elle impose de prendre 3 parametres dont une fonction
qui sera appeler au moment de la réponse. 
Ainsi, la fonction listerClients va renvoyer en fonction du retour soit callBackKO et donc le parametre "err"
soit CallbackOk avec le parametre listeDeclients qui est le retour de la requete...
*/
function listerClients(callbackOK, callbackKO) {

    //request + requête HTTP ==> err parametre d'erreur et listeDeClient ==> parametre retour de la requête http
    request(backendUrl + '/clients?start=0&size=10', { json: true },
        function (err, res, listeDeClients) {
            //3    
            if (err) {
                callbackKO(err);
            } else {
                callbackOK(listeDeClients);
            }
        });

}
//request + requête HTTP ==> err parametre d'erreur,res ==> reponse et listeDeClient ==> parametre retour de la requête http

    function ajouterClients() {

    request({url:backendUrl + '/clients', json: { nom: 'Bob', prenoms: 'Paul' }, method : 'POST'}, 
    function (err, httpResponse, body) {
        if (err) {
          return console.error('upload failed:', err);
        }
        console.log('Upload successful!  Server responded with:', body);
    });
}
    exports.listerClients = listerClients;
    exports.ajouterClients = ajouterClients;

