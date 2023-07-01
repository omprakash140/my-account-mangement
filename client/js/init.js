document.addEventListener("DOMContentLoaded", function () {
    api.transaction();
    if (location.pathname.includes("/admin")) {
    } else if (location.pathname.includes("/update/")) {
        var userid = location.pathname.split("/")[2]
        sendApi("GET", "/transcation/" + userid).then(function (response) {
            var data = response;
            console.log(data);
            schema.value = data;
            initFormSchema(schema);
            // renderUserFormData(data);
        }).catch(function (error) {

        });
    }else {
        initFormSchema(schema);
    }
});