export class Utilisateur {
    utiId;
    utiNom;
    utiPrenom;
    utiTel;
    utiPseudo;
    utiMail;
    utiMdp;
    utiDdn;
    utiPhoto;
    fsAdresseByUtiId;
    fsFavorisesByUtiId;
    fsFidelitesByUtiId;
    fsMessagesByUtiId;
    fsPaniersByUtiId;
    fsRestaurantsByUtiId;
    fsRoleByUtiIdRol;
    fsReportsByUtiId;

    constructor(id, nom, prenom, tel, pseudo, mail, mdp, ddn, photo, fsAdresseByUtiId, fsFavorisesByUtiId, fsFidelitesByUtiId, fsMessagesByUtiId,
                fsPaniersByUtiId, fsRestaurantsByUtiId, fsRoleByUtiIdRol, fsReportsByUtiId) {
        this.utiId = id;
        this.utiNom = nom;
        this.utiPrenom = prenom;
        this.utiTel = tel;
        this.utiPseudo = pseudo;
        this.utiMail = mail;
        this.utiMdp = mdp;
        this.utiDdn = ddn;
        this.utiPhoto = photo;
        this.fsAdresseByUtiId = fsAdresseByUtiId;
        this.fsFavorisesByUtiId = fsFavorisesByUtiId;
        this.fsFidelitesByUtiId = fsFidelitesByUtiId;
        this.fsMessagesByUtiId = fsMessagesByUtiId;
        this.fsPaniersByUtiId = fsPaniersByUtiId;
        this.fsRestaurantsByUtiId = fsRestaurantsByUtiId;
        this.fsRoleByUtiIdRol = fsRoleByUtiIdRol;
        this.fsReportsByUtiId = fsReportsByUtiId;
    }
}