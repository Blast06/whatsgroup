export class Login {
    token_type: string;
    expires_in: string;
    access_token: string;
    refresh_token: string;

    constructor(token: string, expires: string, at: string, rt: string) {
        this.access_token = token;
        this.expires_in = expires;
        this.access_token = at;
        this.refresh_token = rt;
    }


}
