export class Evaluation {
    evaId;
    evaNote;
    evaCommentaire;
    fsCommandesByEvaId;

    constructor(evaId,evaNote,evaCommentaire,fsCommandesByEvaId) {
        this.evaId = evaId;
        this.evaNote = evaNote;
        this.evaCommentaire = evaCommentaire;
        this.fsCommandesByEvaId = fsCommandesByEvaId;
    }
}