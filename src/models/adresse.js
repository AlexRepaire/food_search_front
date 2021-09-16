export class Adresse {
    adrId;
    adrNumero;
    adrRue;
    adrCplAdr;
    adrCp;
    adrVille;
    adrPays;


    constructor(adrId,adrNumero,adrRue,adrCplAdr, adrCp, adrVille, adrPays) {
        this.adrId = adrId;
        this.adrNumero = adrNumero;
        this.adrRue = adrRue;
        this.adrCplAdr = adrCplAdr;
        this.adrCp = adrCp;
        this.adrVille = adrVille;
        this.adrPays = adrPays;

    }
}