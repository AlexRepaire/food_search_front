export class Panier {
    panId;
    panTitre;
    panPrix;
    panQuantite;
    panIdRestaurant;
    fsUtilisateurByPanIdUti;

    constructor(panId, panTitre, panPrix, panQuantite, panIdRestaurant, fsUtilisateurByPanIdUti) {
        this.panId = panId;
        this.panTitre = panTitre;
        this.panPrix = panPrix;
        this.panQuantite = panQuantite;
        this.panIdRestaurant = panIdRestaurant;
        this.fsUtilisateurByPanIdUti = fsUtilisateurByPanIdUti;
    }
}