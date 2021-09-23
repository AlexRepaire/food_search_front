/**
 * Dans le cas ou on veut avoir acces a des ressources protegé,
 * la requete http aura besoin d'une en-tete d'authorisation
 *
 * @returns {{Authorization: string}|{}}
 */
export default function authHeader() {
    const user = JSON.parse(localStorage.getItem('user'));

    if (user && user.accessToken) {
        return { Authorization: 'Bearer ' + user.accessToken };
    } else {
        return {};
    }
}