exports.demarrer = start;

function start() {

   var readline = require('readline');

   var rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
   });

   rl.question('1. Lister les clients\n 2. Ajouter un client\n3. Rechercher un client par nom\n4. Vérifier la disponibilité des chambres \n99. Sortir\n', function (saisie) {

            switch (saisie) {

            case '1':
               console.log('Liste des clients');
               var service = require('./service');
               console.log (service.listerClient());
               break;

            case '2':

               console.log("vous avez saisie 2");
               break;
            case '3':

               console.log("vous avez saisie 3");
               break;

            case '4':

               console.log("vous avez saisie 4");
               break;

            case '99':
               console.log("Au revoir");
               break;

            default:
               console.log("Veuillez re-saisir votre choix")
         }  
         rl.close();    
      }

   );
}


