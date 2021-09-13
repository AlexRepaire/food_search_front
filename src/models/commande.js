export class Commande {
    cmdId;
    cmdTitrePr;
    cmdPrixPr;
    cmdQuantitePr;
    cmdStatus;
    cmdIdUti;
    fsRestaurantByCmdIdRes;
    fsEvaluationByCmdIdEva;

    constructor(cmdId, cmdTitrePr, cmdPrixPr, cmdQuantitePr, cmdStatus, cmdIdUti, fsRestaurantByCmdIdRes, fsEvaluationByCmdIdEva) {
        this.cmdId = cmdId;
        this.cmdTitrePr = cmdTitrePr;
        this.cmdPrixPr = cmdPrixPr;
        this.cmdQuantitePr = cmdQuantitePr;
        this.cmdStatus = cmdStatus;
        this.cmdIdUti = cmdIdUti;
        this.fsRestaurantByCmdIdRes = fsRestaurantByCmdIdRes;
        this.fsEvaluationByCmdIdEva = fsEvaluationByCmdIdEva;
    }
}