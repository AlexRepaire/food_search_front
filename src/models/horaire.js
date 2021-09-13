export class Horaire {
    id;
    ouvertureMatin;
    fermetureMatin;
    ouvertureApresMidi;
    fermetureApresMidi;
    dateJour;
    ouvert;
    fermetureHebdomadaire;
    fSRestaurant;

    constructor(id, ouvertureMatin, fermetureMatin, ouvertureApresMidi, fermetureApresMidi, dateJour, ouvert, fermetureHebdomadaire, fSRestaurant) {
        this.id = id;
        this.ouvertureMatin = ouvertureMatin;
        this.fermetureMatin = fermetureMatin;
        this.ouvertureApresMidi = ouvertureApresMidi;
        this.fermetureApresMidi = fermetureApresMidi;
        this.dateJour = dateJour;
        this.ouvert = ouvert;
        this.fermetureHebdomadaire = fermetureHebdomadaire;
        this.fSRestaurant = fSRestaurant;
    }
}