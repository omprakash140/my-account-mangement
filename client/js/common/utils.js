function sendApi(method, url, data) {
    return new Promise(function (resolve, reject) {
        let xhr = new XMLHttpRequest();
        xhr.open(method, url, true);
        xhr.onreadystatechange = function () {
            if (this.readyState == 4) {
                let data = xhr.responseText;
                if (this.status == 200) {
                    if (typeof this.responseText == "string") {
                        data = JSON.parse(data);
                    }
                    resolve(data);
                }
                reject(this.responseText);
            }
        }
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify(data));
    })
}
function initFormSchema(obj) {
    $('form').jsonForm(obj);
}
var table = null;
function initDataTable(id, obje) {
    table = $(id).DataTable();
    // table = new DataTable(id);
}
function prefixedZero(num, size = 2) {
    num = num.toString();
    while (num.length < size) num = "0" + num;
    return num;
}
const api = {};
const biz = {};
const render = {};