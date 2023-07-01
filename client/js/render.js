function renderTranscation(data) {
    var myTable = document.getElementById('myTable');
    var myTableBody = document.getElementById('myTableBody');
    table && table.destroy();
    var drdata = [], crdata = [];
    var bodyhtm = '', crhtm = '';
    var selecteddata = [];
    var drtotal = 0, crtotal = 0;
    data.forEach(each => {
        if (selectedMonth == new Date(each.date).getMonth()) {
            if (each.crAcc == selectedAcc) {
                crdata.push(each);
            } else if (each.drAcc == selectedAcc) {
                drdata.push(each);
            }
        }
    });
    selecteddata = crdata.length > drdata.length ? crdata : drdata;
    selecteddata.forEach(function (each, index) {
        drtotal += (drdata[index]?.amount ? parseFloat(drdata[index]?.amount) : 0);
        crtotal += (crdata[index]?.amount ? parseFloat(crdata[index]?.amount) : 0);
        bodyhtm += `<tr><td>${prefixedZero(index + 1)}</td>
        <td>${drdata[index]?.particular || '-'}</td><td>${drdata[index]?.amount || '-'}</td>
        <td>${crdata[index]?.particular || '-'}</td><td>${crdata[index]?.amount || '-'}</td></tr>`;
    });
    bodyhtm += `<tr><td> ALL </td>
    <td>Total</td><td>${drtotal}</td>
    <td>Total</td><td>${crtotal}</td>`;
    bodyhtm += `<tr><td> Balance </td>
    <td>Total</td><td>Balance</td>
    <td>Total</td><td>${(crtotal - drtotal)}</td>`;

    myTableBody.innerHTML = bodyhtm;
    initDataTable("#myTable", {})
}