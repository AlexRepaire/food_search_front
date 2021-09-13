export class PlatsRestaurant {
    prId;
    prTitre;
    prPrix;
    prDescription;
    prPhoto;
    fsPhotosByPrId;
    fsPlatMenusByPrId;
    fsCategPlatsByPrIdCat;
    fsRestaurantByPrIdRes;

    constructor(prId, prTitre, prPrix, prDescription, prPhoto, fsPhotosByPrId, fsPlatMenusByPrId, fsCategPlatsByPrIdCat, fsRestaurantByPrIdRes) {
        this.prId = prId;
        this.prTitre = prTitre;
        this.prPrix = prPrix;
        this.prDescription = prDescription;
        this.prPhoto = prPhoto;
        this.fsPhotosByPrId = fsPhotosByPrId;
        this.fsPlatMenusByPrId = fsPlatMenusByPrId;
        this.fsCategPlatsByPrIdCat = fsCategPlatsByPrIdCat;
        this.fsRestaurantByPrIdRes = fsRestaurantByPrIdRes;
    }
}