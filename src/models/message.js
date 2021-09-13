export class Message {
    msgId;
    msgMessage;
    msgDate;
    fsUtilisateurByMsgIdUti;

    constructor(msgId, msgMessage, msgDate, fsUtilisateurByMsgIdUti) {
        this.msgId = msgId;
        this.msgMessage = msgMessage;
        this.msgDate = msgDate;
        this.fsUtilisateurByMsgIdUti = fsUtilisateurByMsgIdUti;
    }
}