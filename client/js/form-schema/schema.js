const accList = ["Union Bank A/c", "SBI Bank A/c", "Income A/c","Salary's A/c",
    "Kotak Bank A/c", "Kotak Spendz A/c",
    "Paytm Payment Bank A/c", "Jio Payment Bank A/c",
    "Paytm Wallet A/c", "Jio Wallet A/c", "PhonePe Wallet A/c",
    "Paytm UPI Lite A/c", "BHIM UPI Lite A/c", "PhonePe UPI Lite A/c",
    "Shivani's A/c", "Kajal's A/c", "Geeta Devi's A/c",
    "Abhishek's A/c", "Home Expense A/c", "Personal Expense A/c", "Cash In Hand's A/c",
    
];
var acclistSelect = document.getElementById("acclist");
var monthlyAccList = document.getElementById("monthlyAccList");
var selectedAcc = "Union Bank A/c";
var selectedMonth = new Date().getMonth();;
accList.forEach(function (eachData) {
    acclistSelect.innerHTML += `<option value="${eachData}">${eachData}</option>`;
})
acclistSelect.addEventListener("change", function (e) {
    selectedAcc = this.value;
    console.log(selectedMonth);
    api.transaction();
});
monthlyAccList.addEventListener("change", function (e) {
    selectedMonth = parseInt(this.value);
    api.transaction();
});
const schema = {
    schema: {
        drAcc: {
            type: 'select',
            title: 'From(Dr Account)',
            enum: accList,
            required: true
        },
        crAcc: {
            type: 'select',
            title: 'To(Cr Account)',
            enum: accList,
            required: true,
        },
        amount: {
            type: 'number',
            title: 'Amount',
            required: true
        },
        particular: {
            title: 'Particular',
            required: true,
        },
        dateOfTransfer: {
            title: 'Date of transfer',
            required: true,
        },
        isTransfer: {
            type: 'boolean',
            title: 'Is Transfer (Exchange).',
        },
        /* 
        healthIssue: {
            "type": "checkboxes",
            "title": "Pls select the health issue",
            "items": {
                "type": "string",
                "title": "Option",
                "enum": ["Heart disease", "Cancer", "Lung disease", "Diabetes", "Kidney disease"]
            }
        },
        maritalStatus: {
            type: "string",
            title: 'Marital Status',
            required: true,
            enum: ["Single", "Married", "Divorced", "Widowed"],
            // default : "Single"
        } */
    },
    form: [
        {
            key: "drAcc",
        },
        {
            key: "crAcc",
        },
        {
            key: "amount",
        },
        {
            key: 'particular',
            type: "text"
        },
        {
            key: 'dateOfTransfer',
            type: "date"
        },
        {
            key: "isTransfer",
            inline: true,
            "inlinetitle": "Exchange Money."
        }
        /* ,
        
        {
            key: "healthIssue",
            inline: true
        },
        {
            "key": "maritalStatus",
            "type": "radiobuttons",
            "activeClass": "btn-success"
        } */, {
            type: "submit",
            title: "Submit"
        }
    ],
    onSubmit: function (errors, values) {
        console.log(errors, values);
        // values.date = utils.customDate();
        values.date = new Date();
        if (errors) {
        } else if (values.crAcc == values.drAcc) {
            alert("Cr Acc should not be same")
        } else {
            if (location.pathname.includes("/update/")) {
                sendApi("PUT", "/user/" + location.pathname.split("/")[2], values).then(function (data) {
                    console.log("Form Submitted", data);
                }).catch(function (err) {
                    alert(err.message)
                });
            } else {
                sendApi("POST", "/transaction", values).then(function (data) {
                    $('#res').html(JSON.stringify(data) );
                    console.log("Form Submitted", data);
                    api.transaction();
                }).catch(function (err) {
                    $('#res').html(JSON.stringify(err ));
                    alert(err.message)
                });
            }
        }
    }
}
