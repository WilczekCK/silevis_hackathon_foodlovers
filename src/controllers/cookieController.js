import Cookies from 'js-cookie';

class CookieController {
    cookieName;

    constructor(){
        this.cookieName = "hackathon_project"
    }

    setCookie(){
        if(Cookies.get(this.cookieName)){
            return false;
        } else {
            Cookies.set(this.cookieName, '{"username":"test", "role":"basic", "token":"AbCdEf"}');
            return true;
        }
        
    }
}

const CookieInstation = new CookieController();

export default CookieInstation;