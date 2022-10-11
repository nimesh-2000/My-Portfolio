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
    customers.push(item);
    console.log(items);
    // loadAllCustomers();
    // // doubleClickEvents();
    // clearAllTexts();
    //
    // bindRowClickEvents();
});