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

    // $('[name=drAcc]').select2();
    // $('[name=crAcc]').select2();
    $('select').select2();

    $('select').on('change', function(){
        selectedAcc = acclistSelect.value;
        selectedMonth = parseInt(monthlyAccList.value);

        api.transaction();
    })
}
var table = null;
function initDataTable(id, obje) {
    table = $(id).DataTable({
        paging: false
    });
    // table = new DataTable(id);
}
function prefixedZero(num, size = 2) {
    num = num.toString();
    while (num.length < size) num = "0" + num;
    return num;
}
function prefixedSpace(num, size = 2) {
    num = num.toString();
    while (num.length < size) num = "<span>&nbsp</span>" + num;
    return num;
}


utils.data = function (data) {
    return data || " - "
}
utils.amount = function (amt) {
    return amt ? parseFloat(amt) : 0
}

utils.rs = function (amt) {
    amt = utils.data(parseFloat(amt));
    if (isNaN(amt)) {
        amt = 0;
    }
    return amt ? prefixedSpace(amt.toLocaleString('en-in'), 10) : 0;
}

utils.customDate = function (daycount = 0) {
    const now = new Date();
    return new Date(now.getFullYear(), now.getMonth(), now.getDate() - daycount);
}
utils.monthStartDate = function () {
    const now = new Date();
    return new Date(now.getFullYear(), now.getMonth());
}
utils.monthEndDate = function () {
    var date = new Date(), y = date.getFullYear(), m = date.getMonth();
    var firstDay = new Date(y, m, 1);
    var lastDay = new Date(y, m + 1, 0);
    return utils.parseDateStr(lastDay);
}

utils.parseDateStr = function (date) {
    return new Date().getFullYear() + "-" + prefixedZero(date.getMonth() + 1, 2) + "-" + date.getDate();
}

