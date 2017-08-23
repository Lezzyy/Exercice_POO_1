// https://skillcode.fr/javascript-avance-exercices-poo/
// EXERCICE 1

var user = {
    prenom: "John",
    nom: "Maclane",
    pays: "France",
    age: 45,
    paiement: ["visa", "mastercards", "paypal"],
    paysOk: ["NOUVELLE-ZELANDE", "FRANCE", "ANGLETERRE", "ESPAGNE", "ITALIE"],
    paiementOk: ["VISA", "MASTERCARDS"],
    ageMini: 18,
    getInfo: function() {
        alert(this.prenom);
        alert(this.nom);
        alert(2017 - this.age);
        if (this.age > user.ageMini) {
            alert("Accès autorisé");
        }
        if (this.paysOk.includes(this.pays.toUpperCase())) {
            alert("Pays accepté");
        }
        // for (var i=0; i<this.paiement.length; i++){
        //   for (var j=0; j< this.paiementOk.length; j++ ){
        //     if(this.paiement[i].toUpperCase()==this.paiementOk[j]){
        //       alert(this.paiementOk[j]);
        //     }
        //   }
        // }
        for (var i=0; i<this.paiement.length; i++){
          if(this.paiementOk.includes(this.paiement[i].toUpperCase())){
            alert(this.paiement[i]);
          }
        }
    }
};

user.getInfo();
