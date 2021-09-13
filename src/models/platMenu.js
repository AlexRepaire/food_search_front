export class PlatMenu {
    pmId;
    fsPlatsRestaurantByPmIdPlat;
    fsMenuByPmIdMenu;

    constructor(pmId, fsPlatsRestaurantByPmIdPlat, fsMenuByPmIdMenu) {
        this.pmId = pmId;
        this.fsPlatsRestaurantByPmIdPlat = fsPlatsRestaurantByPmIdPlat;
        this.fsMenuByPmIdMenu = fsMenuByPmIdMenu;
    }
}