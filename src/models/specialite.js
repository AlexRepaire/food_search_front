export class Specialite {
    speId;
    speType;
    fsRestaurantsBySpeId;

    constructor(speId, speType, fsRestaurantsBySpeId){
        this.speId = speId;
        this.speType = speType;
        this.fsRestaurantsBySpeId = fsRestaurantsBySpeId;
    }
}