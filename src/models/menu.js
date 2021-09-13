export class Menu {
    menId;
    menNom;
    menType;
    menPrix;
    fsPlatMenusByMenId;

    constructor(menId, menNom, menType, menPrix, fsPlatMenusByMenId) {
        this.menId = menId;
        this.menNom = menNom;
        this.menType = menType;
        this.menPrix = menPrix;
        this.fsPlatMenusByMenId = fsPlatMenusByMenId;
    }
}