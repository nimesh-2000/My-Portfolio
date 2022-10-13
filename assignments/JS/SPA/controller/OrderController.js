function loadAllCustomerId() {
    alert("load all")
    $('#oCustomerId').empty();
    for (let cus of customers) {
        $('#oCustomerId').append(`<option>${cus.id}</option>`);
    }
}

function loadAllItemCodes() {
    $('#oItemId').empty();
    for (let item of items) {
        $('#oItemId').append(`<option>${item.code}</option>`);
    }
}


$('#oCustomerId').on('change',function (){
    /*get Customer*/
    let customer = searchCustomer($('#oCustomerId').val());

    $('#oCustomerName').val(customer.name);
    $('#oCustomerAddress').val(customer.address);
    $('#oCustomerPhone').val(customer.contact);


});


$('#oItemId').on('change',function (){

    let item = searchItem($('#oItemId').val());

    $('#oItemName').val(item.name);
    $('#oItemPrice').val(item.price);
    $('#qtyOnHand').val(item.quantity);

});


