function getLabel(key) {
    var obj = {}
    obj.firstName = "First Name"
    obj.lastName = "Last Name"
    obj.age = "Age"
    obj.gender = "Gender"
    obj.isDisabled = "Is Disabled"
    obj.healthIssue = "Health Issue"
    obj.maritalStatus = "Marital Status"

    obj[true] = "Y"
    obj[false] = "N"
    if (obj[key]) {
        return obj[key];
    }
    return key;
}