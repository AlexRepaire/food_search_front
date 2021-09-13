export class Report {
    repId;
    repNombre;
    fsUtilisateurByRepIdUti;

    constructor(repId, repNombre, fsUtilisateurByRepIdUti) {
        this.repId = repId;
        this.repNombre = repNombre;
        this.fsUtilisateurByRepIdUti = fsUtilisateurByRepIdUti
    }
}