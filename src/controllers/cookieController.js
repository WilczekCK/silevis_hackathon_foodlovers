import Cookies from 'js-cookie';

class CookieController {
    cookieName;

    constructor(){
        this.cookieName = "hackathon_project_dupa"
    }

    getCookieInfo(){
        const cookieInfo = Cookies.get(this.cookieName);

        if (cookieInfo) {
            return cookieInfo;
        }
    }

    removeCookie(){
        return Cookies.remove(this.cookieName);
    }

    setCookie( token ){
        if (Cookies.get(this.cookieName)) {
            return false;
        } else {
            const cookie = token;

            Cookies.set(this.cookieName, cookie, {expires: 7, path: '/', sameSite:'none'});
            return true;
        }
        
    }
}

const CookieInstation = new CookieController();

export default CookieInstation;