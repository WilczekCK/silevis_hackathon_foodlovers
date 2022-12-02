import Cookies from 'js-cookie';

class CookieController {
    cookieName;

    constructor(){
        this.cookieName = "hackathon_project"
    }

    getCookieInfo(){
        const cookieInfo = Cookies.get(this.cookieName);

        if (cookieInfo) {
            return JSON.parse(cookieInfo);
        }
    }

    setCookie(){
        if (Cookies.get(this.cookieName)) {
            return false;
        } else {
            Cookies.set(this.cookieName, '{"username":"test", "role":"basic", "token":"AbCdEf"}', {expires: 7, path: ''});
            return true;
        }
        
    }
}

const CookieInstation = new CookieController();

export default CookieInstation;