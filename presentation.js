// récupération du module `readline`
var readline = require('readline');
var service = require("./service.js");

// création d'un objet `rep` permettant de récupérer la saisie utilisateur
var rep = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function start() {

    console.log("Menu");
    console.log("1. Lister les clients");
    console.log("2. Ajouter un client");
    console.log("3. Recherche un client par nom");
    console.log("4. Vérifier la disponibilité d'une chambre");
    console.log("99. Sortir");

    rep.question('Votre choix :', function (saisie) {

        switch (saisie) {
            case "1":
                service.listerClients(
                    function (listerClients) {
                        console.log(
                            listerClients
                                .map(function (client) {
                                    return client.nom + ' ' + client.prenoms
                                })
                                .join('\n')
                        );
                        start();
                    }, function (err) {
                        console.log('oops');
                        start();
                    });
                break;

            case "2":
               console.log('ajouter un nouveaux client')
                    service.ajouterClients()
                    start(); 

                break;

                case "3":
                  console.log('Rechercher un client par nom')
                       service.rechercheClients()
                       start(); 
   
                   break;
            case "99":
                console.log("Aurevoir.")
                rep.close();
                this.process.exit(); // Met fin au programme
                break;
        }


    }
    );

}

exports.start = start;
