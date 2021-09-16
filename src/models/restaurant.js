export class Restaurant {
    restId;
    restNom;
    restTel;
    fsCommandesByRestId;
    fsPlatsRestaurantsByRestId;
    fsAdresseByRestId;
    fsUtilisateurByRestIdUti;
    fsSpecialiteByRestIdSpe;

    constructor(restId, restNom,restTel,fsCommandesByRestId,fsPlatsRestaurantsByRestId,fsAdresseByRestId,fsUtilisateurByRestIdUti,fsSpecialiteByRestIdSpe) {
        this.restId = restId;
        this.restNom = restNom;
        this.restTel = restTel;
        this.fsCommandesByRestId = fsCommandesByRestId;
        this.fsPlatsRestaurantsByRestId = fsPlatsRestaurantsByRestId;
        this.fsAdresseByRestId = fsAdresseByRestId;
        this.fsUtilisateurByRestIdUti = fsUtilisateurByRestIdUti;
        this.fsSpecialiteByRestIdSpe = fsSpecialiteByRestIdSpe;
    }
}

