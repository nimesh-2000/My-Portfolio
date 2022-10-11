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
    // clearAllTexts();
    //
    // bindRowClickEvents();
});

$("#btnViewAllItems").click(function (){
    loadAllCustomers();
});

function loadAllItems(){

    $("#tblItem").empty();

    for(var item of items){
        console.log(item);

        var row= `<tr><td>${item.code}</td><td>${item.name}</td><td>${item.price}</td><td>${item.quantity}</td></tr>`;

        $("#tblItem").append(row);
    }
}