export default{
    open(method, url, params = {}){
        return new Promise((resolve, reject) => {

            var XMLHttpRequest = PHP.XMLHttpRequest;



            var ajax = PHP.XMLHttpRequest();


            ajax.open(method, url)

            ajax.onreadystatechange = (data) => {
                resolve(ajax);
            }

            ajax.send(params);

        })
    }
}