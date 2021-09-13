export class Role {
    rolId;
    rolType;
    fsUtilisateursByRolId;

    constructor(rolId,rolType,fsUtilisateursByRolId) {
        this.rolId = rolId;
        this.rolType = rolType;
        this.fsUtilisateursByRolId = fsUtilisateursByRolId;
    }
}

