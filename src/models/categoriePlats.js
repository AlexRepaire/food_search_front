export class CategoriePlats {
    cpId;
    cpType;
    fsPlatsRestaurantsByCpId;

    constructor(cpId, cpType, fsPlatsRestaurantsByCpId) {
        this.cpId = cpId;
        this.cpType = cpType;
        this.fsPlatsRestaurantsByCpId = fsPlatsRestaurantsByCpId;
    }
}