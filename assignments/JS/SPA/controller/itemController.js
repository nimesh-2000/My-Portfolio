// global scope (Store all the customer records)
$("#txtItemCode").focus();
// $("#txtCusId").focus();

$("#btnItemSave").click(function () {

    let itemCode = $("#txtItemCode").val();
    let itemName = $("#txtItemName").val();
    let itemPrice = $("#txtItemPrice").val();
    let itemQuantity = $("#txtItemQuantity").val();

    // var customerObject = {
    //     id: customerID,
    //     name: customerName,
    //     address: customerAddress,
    //     contact: customerPhone
    // }
    var item = itemObject(itemCode, itemName, itemPrice, itemQuantity);
    // customerDB.push(customer);
    //add the customer object to the array
    items.push(item);
    console.log(items);
     loadAllItems();
    // // doubleClickEvents();
    clearAllTexts();
    //
    bindRowClickEvents();
});

$("#btnViewAllItems").click(function (){
    loadAllItems();
});

function loadAllItems(){

    $("#tblItem").empty();

    for(var item of items){
        console.log(item);

        var row= `<tr><td>${item.code}</td><td>${item.name}</td><td>${item.price}</td><td>${item.quantity}</td></tr>`;

        $("#tblItem").append(row);
    }
}

$("#btnItemSearch").click(function (){

    let typedId = $("#inputItemSearch").val();
    let item = searchItem(typedId);
    if (item != null) {
        setTextfieldValues(item.code, item.name, item.price, item.quantity);
    } else {
        alert("There is no item available for that " + typedId);
        setTextfieldValues("", "", "", "");
    }

});

$("#btnItemDelete").click(function () {
    let deleteID = $("#txtICode").val();

    let option = confirm("Do you really want to delete item code :" + deleteID);
    if (option){
        if (deleteItem(deleteID)) {
            alert("Item Successfully Deleted..");
            setTextfieldValues("", "", "", "");
        } else {
            alert("No such item to delete. please check the code");
        }
    }
});

$("#btnItemUpdate").click(function () {
    let itemCode = $("#txtICode").val();
    let response = updateItem(itemCode);
    if (response) {
        alert("Item Updated Successfully");
        setTextfieldValues("", "", "", "");
    } else {
        alert("Update Failed..!");

    }
});

$("#txtICode").on('keyup', function (event) {
    if (event.code == "Enter") {
        let typeCode = $("#txtICode").val();
        let item = searchItem(typeCode);
        if (item != null) {
            setTextfieldValues(item.code, item.name, item.price, item.quantity);
        } else {
            alert("There is no item available for that " + typeCode);
            setTextfieldValues("", "", "", "");
        }
    }
});

function setTextfieldValues(code, name, price, quantity) {
    $("#txtICode").val(code);
    $("#txtIName").val(name);
    $("#txtIPrice").val(price);
    $("#txtIQuantity").val(quantity);
}


function searchItem(itemID) {
    for (let item of items) {
        if (item.code == itemID) {
            return item;
        }
    }
    return null;
}

function deleteItem(itemID) {
    let item = searchItem(itemID);
    if (item != null) {
        let indexNumber = items.indexOf(item);
        items.splice(indexNumber, 1);
        loadAllItems();
        return true;
    } else {
        return false;
    }
}

function updateItem(itemID) {
    let item = searchItem(itemID);
    if (item != null) {
        item.code = $("#txtICode").val();
        item.name = $("#txtIName").val();
        item.price = $("#txtIPrice").val();
        item.quantity = $("#txtIQuantity").val();
        loadAllItems();
        return true;
    } else {
        return false;
    }

}


// customer reguler expressions
const itemCodeRegEx = /^(I00-)[0-9]{1,3}$/;
const itemNameRegEx = /^[A-z ]{3,20}$/;
const itemPriceRegEx = /^[0-9]{1,}$/;
const itemQuantityRegEx = /^[0-9]{1,}$/;

let itemValidations = [];
itemValidations.push({reg: itemCodeRegEx, field: $('#txtItemCode'),error:'Item Code Pattern is Wrong : I00-001'});
itemValidations.push({reg: itemNameRegEx, field: $('#txtItemName'),error:'Item Name Pattern is Wrong : A-z 3-20'});
itemValidations.push({reg: itemPriceRegEx, field: $('#txtItemPrice'),error:'Item price Pattern is Wrong : [0-9]{1,}'});
itemValidations.push({reg: itemQuantityRegEx, field: $('#txtItemQuantity'),error:'Item Quantity Pattern is Wrong : [0-9]{1,}'});


//disable tab key of all four text fields using grouping selector in CSS
$("#txtItemCode,#txtItemName,#txtItemPrice,#txtItemQuantity").on('keydown', function (event) {
    if (event.key == "Tab") {
        event.preventDefault();
    }
});


$("#txtItemCode,#txtItemName,#txtItemPrice,#txtItemQuantity").on('keyup', function (event) {
    checkValidity();
});

$("#txtItemCode,#txtItemName,#txtItemPrice,#txtItemQuantity").on('blur', function (event) {
    checkValidity();
});


$("#txtItemCode").on('keydown', function (event) {
    if (event.key == "Enter" && check(itemCodeRegEx, $("#txtItemCode"))) {
        $("#txtItemName").focus();
    } else {
        focusText($("#txtItemCode"));
    }
});


$("#txtItemName").on('keydown', function (event) {
    if (event.key == "Enter" && check(itemNameRegEx, $("#txtItemName"))) {
        focusText($("#txtItemPrice"));
    }
});


$("#txtItemPrice").on('keydown', function (event) {
    if (event.key == "Enter" && check(itemPriceRegEx, $("#txtItemPrice"))) {
        focusText($("#txtItemQuantity"));
    }
});


$("#txtItemQuantity").on('keydown', function (event) {
    if (event.key == "Enter" && check(itemQuantityRegEx, $("#txtItemQuantity"))) {
        // let res = confirm("Do you want to add this customer.?");
        // if (res) {
        //     clearAllTexts();
        // }
        let itemCode = $("#txtItemCode").val();
        let itemName = $("#txtItemName").val();
        let itemPrice = $("#txtItemPrice").val();
        let itemQuantity = $("#txtItemQuantity").val();

        var item = itemObject(itemCode, itemName, itemPrice, itemQuantity);

        //add the customer object to the array
        items.push(item);
        console.log(items);
        let res = confirm("Do you want to add this Item.?");
        if (res) {
            clearAllTexts();
        }
    }

    loadAllItems();
    bindRowClickEvents();
});


function checkValidity() {
    let errorCount=0;
    for (let validation of itemValidations) {
        if (check(validation.reg,validation.field)) {
            textSuccess(validation.field,"");
        } else {
            errorCount=errorCount+1;
            setTextError(validation.field,validation.error);
        }
    }
    setButtonState(errorCount);
}

function check(regex, txtField) {
    let inputValue = txtField.val();
    return regex.test(inputValue) ? true : false;
}

function setTextError(txtField,error) {
    if (txtField.val().length <= 0) {
        defaultText(txtField,"");
    } else {
        txtField.css('border', '2px solid red');
        txtField.parent().children('span').text(error);
    }
}

function textSuccess(txtField,error) {
    if (txtField.val().length <= 0) {
        defaultText(txtField,"");
    } else {
        txtField.css('border', '2px solid green');
        txtField.parent().children('span').text(error);
    }
}

function defaultText(txtField,error) {
    txtField.css("border", "1px solid #ced4da");
    txtField.parent().children('span').text(error);
}

function focusText(txtField) {
    txtField.focus();
}

function setButtonState(value){
    if (value>0){
        $("#btnItemSave").attr('disabled',true);
    }else{
        $("#btnItemSave").attr('disabled',false);
    }
}

function clearAllTexts() {
    $("#txtItemCode").focus();
    $("#txtItemCode,#txtItemName,#txtItemPrice,#txtItemQuantity").val("");
    checkValidity();
}

$("#btnItemClear").click(function (){
    $("#txtICode").focus();
    $("#txtICode,#txtIName,#txtIPrice,#txtIQuantity").val("");
    checkValidity();

});
