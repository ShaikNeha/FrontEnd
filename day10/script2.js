script.js
var selectedRow = null
//form clear
function myFormReset(){
document.getElementById("myForm").reset()
}

// Form Submit Function
function onFormSubmit() {
    // check validity
    if (validate()) {
        // store user data
        var formData = readFormData();
        // check empty row
        if (selectedRow == null)
        {
            // Insert New User Record
            insertNewRecord(formData);
        }
        else
        {
            // Update New User Record
            updateRecord(formData);
        }
        // Reset Input Values
        resetForm();
    }
}
// Get Values From Form
function readFormData() {
    var formData = {};
    // Get Values From  Input
    formData["idNo"] = document.getElementById("idNo").value;
    formData["userName"] = document.getElementById("userName").value;
    formData["course"] = document.getElementById("course").value;
    formData["adhar"] = document.getElementById("adhar").value;
   
    // return Form Data
    return formData;
}
// Insert New User Record
function insertNewRecord(data) {
    var table = document.getElementById("stdlist").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.idNo;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.userName;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.course;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.adhar;
   cell4 = newRow.insertCell(4);
    cell4.innerHTML = `<a onClick="onEdit(this)">Edit</a>
    <a onClick="onDelete(this)">Delete</a>`;
}
// Reset Function
function resetForm() {
    document.getElementById("idNo").value = "";
    document.getElementById("userName").value = "";
    document.getElementById("course").value = "";
    document.getElementById("adhar").value = "";
    
    selectedRow = null;
}
// Edit Function
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("idNo").value = selectedRow.cells[0].innerHTML;
    document.getElementById("userName").value = selectedRow.cells[1].innerHTML;
    document.getElementById("course").value = selectedRow.cells[2].innerHTML;
    document.getElementById("adhar").value = selectedRow.cells[3].innerHTML;
    
}
// Update Record
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.idNo;
    selectedRow.cells[1].innerHTML = formData.userName;
    selectedRow.cells[2].innerHTML = formData.course;
    selectedRow.cells[3].innerHTML = formData.adhar;
   
}
// Delete Function
function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("stdlist").deleteRow(row.rowIndex);
        resetForm();
    }
}
// Check User validation
function validate() {
    isValid = true;
    
    // Id validation
    if (document.getElementById("idNo").value == "") {
        isValid = false;
        document.getElementById("IdNovalidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("IdNovalidationError").classList.contains("hide"))
        {
            document.getElementById("IdNovalidationError").classList.add("hide");
        }
    }
// userName validation
    if (document.getElementById("userName").value == "") {
        isValid = false;
        document.getElementById("userNamevalidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("userNamevalidationError").classList.contains("hide"))
        {
            document.getElementById("userNamevalidationError").classList.add("hide");
        }
    }
    // course class validation
    if (document.getElementById("course").value == "") {
        isValid = false;
        document.getElementById("coursevalidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("coursevalidationError").classList.contains("hide"))
        {
            document.getElementById("coursevalidationError").classList.add("hide");
        }
    }
    // adhar validation
    if (document.getElementById("adhar").value == "") {
        isValid = false;
        document.getElementById("adharvalidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("adharvalidationError").classList.contains("hide"))
        {
            document.getElementById("adharvalidationError").classList.add("hide");
        }
    }
   
    return isValid;
}

