function renderTranscation(data) {
    var myTable = document.getElementById('myTable');
    var myTableBody = document.getElementById('myTableBody');
    table && table.destroy();
    var drdata = [], crdata = [];
    var bodyhtm = '', crhtm = '';
    var selecteddata = [];
    var classeditHtm = 'style="display: none;"'
    if (location.pathname.includes("/admin")) {
        classeditHtm = 'style="display: block;"'
    }
    // var editHtm = `<td ${classeditHtm}> Edit </td>`
    var editHtm = ``
    var drtotal = 0, crtotal = 0, transferTotal = 0;
    data.forEach(each => {
        if (each.particular && !allSuggestedText.includes(each.particular)) {
            allSuggestedText.push(each.particular);
        }
        if ((selectedMonth == 12) || (selectedMonth == new Date(each.date).getMonth())) {
            each.amount = prefixedZero(each.amount, 5)
            if (each.crAcc == selectedAcc) {
                crdata.push(each);
            } else if (each.drAcc == selectedAcc) {
                drdata.push(each);
            }
        }
    });
    selecteddata = crdata.length > drdata.length ? crdata : drdata;
    var srNo = 1;
    selecteddata.forEach(function (each, index) {
        var eachDr = drdata[index] ? drdata[index] : {};
        var eachCr = crdata[index] ? crdata[index] : {};
        if (eachDr.isTransfer) {
            transferTotal += (utils.amount(eachDr.amount))
        } else {
            drtotal += (utils.amount(eachDr.amount));
        }
        crtotal += (utils.amount(eachCr.amount));
        bodyhtm += `<tr><td>${(each.dateOfTransfer) || utils.parseDateStr(each.date)  || utils.monthEndDate()}</td>
        <td>${utils.data(eachDr.particular)}</td><td>${utils.rs((eachDr.amount))}</td> ${editHtm}
        <td>${(each.dateOfTransfer) || utils.monthEndDate() || utils.monthEndDate()}</td>
        <td>${utils.data(eachCr.particular)}</td><td>${utils.rs((eachCr.amount))}</td> ${editHtm} </tr> `;
        srNo++;
        /* end  */
    });
    var totalUseAmount = drtotal + transferTotal;
    bodyhtm += `<tr><td> ${utils.monthEndDate()} </td>
    <td>Total Transfer </td><td>${utils.rs(transferTotal)}</td>
    <td>${ utils.monthEndDate() }</td>
    <td>Total Transfer </td><td> - </td>`;

    bodyhtm += `<tr><td> ${utils.monthEndDate()} </td>
    <td>Total Expense </td><td>${utils.rs(drtotal)}</td>
    <td>${ utils.monthEndDate() }</td>
    <td>Total Credit </td><td>${utils.rs(crtotal)}</td>`;

    bodyhtm += `<tr><td> ${utils.monthEndDate()} </td>
    <td> - </td><td> - </td>
    <td>${ utils.monthEndDate() }</td>
    <td> Balance </td><td>${utils.rs((crtotal - totalUseAmount))}</td>`;

    myTableBody.innerHTML = bodyhtm;
    initDataTable("#myTable", {})
}