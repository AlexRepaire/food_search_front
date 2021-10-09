/**
 * Dans le cas ou on veut avoir acces a des ressources protegé,
 * la requete http aura besoin d'une en-tete d'authorisation
 *
 * @returns {{Authorization: string}|{}}
 */
export default function authHeader() {
    const token = JSON.parse(localStorage.getItem('token'));

    if (token) {
        return {
            Authorization: 'Bearer ' + token
        };
    } else {
        return {};
    }
}