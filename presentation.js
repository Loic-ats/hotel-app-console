function start() {

    var readline = require('readline');

    var rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
      });

      rl.question('1. Lister les clients\n99. Sortir\n', function(saisie) {
        // la variable `saisie` contient la saisie effectuée
        console.log(`Vous avez saisi : ${saisie}`);
        rl.close();// attention, une fois l'interface fermée, la saisie n'est plus possible
      });

   }
/*On choisit ce que l'on rend disponible à l'extérieur d'un fichier car par défault tous est privé*/
exports.demarrer= start;