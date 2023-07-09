const utils = {};
const api = {};
const biz = {};
const render = {};
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

    $('[name=drAcc]').select2();
    $('[name=crAcc]').select2();

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


utils.data = function (data) {
    return data || " - "
}
utils.amount = function (amt) {
    return amt ? parseFloat(amt) : 0
}

utils.customDate = function (daycount = 0) {
    const now = new Date();
    return new Date(now.getFullYear(), now.getMonth(), now.getDate() - daycount);
}
utils.monthStartDate = function () {
    const now = new Date();
    return new Date(now.getFullYear(), now.getMonth());
}

