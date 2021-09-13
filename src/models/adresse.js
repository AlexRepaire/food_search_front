export class Adresse {
    adrId;
    adrNumero;
    adrRue;
    adrCplAdr;
    adrCp;
    adrVille;
    adrPays;
    fsUtilisateurByAdrId;
    fsRestaurantByAdrId;

    constructor(adrId,adrNumero,adrRue,adrCplAdr, adrCp, adrVille, adrPays, fsUtilisateurByAdrId, fsRestaurantByAdrId) {
        this.adrId = adrId;
        this.adrNumero = adrNumero;
        this.adrRue = adrRue;
        this.adrCplAdr = adrCplAdr;
        this.adrCp = adrCp;
        this.adrVille = adrVille;
        this.adrPays = adrPays;
        this.fsUtilisateurByAdrId = fsUtilisateurByAdrId;
        this.fsRestaurantByAdrId = fsRestaurantByAdrId;
    }
}