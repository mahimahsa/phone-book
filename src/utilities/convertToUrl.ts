

    export const convertToUrl =(inputStr: string) :string=>{
        let url: string= inputStr;
        url.replaceAll(' ', '%20');
        url.replaceAll('+', '%2B')
        return url
    }