

    export const convertToUrl =(inputStr: string) :string=>{
        let url: string= inputStr;
        url= url.replaceAll(' ', '%20');
        url= url.replaceAll('+', '%2B');
        return url
    }