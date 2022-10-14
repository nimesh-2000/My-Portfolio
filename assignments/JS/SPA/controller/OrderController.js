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

$('#btnAddToCart').click(function (){

    let itemCode=$('#oItemId').val();
    let itmName = $('#oItemName').val();
    let itmPrice = $('#oItemPrice').val();
    let itemOrderQty = $('#orderQty').val();

    let total =itmPrice*itemOrderQty;


    let rowExists = searchRowExists(itemCode);
    if(rowExists!=null){
        let newQty=((parseInt(rowExists.orItemQTY))+(parseInt(itemOrderQty)));

        // rowExists.orItemQTY.val(newQty);
        rowExists.orItemQTY=newQty;
        rowExists.orItemTotal=parseFloat(itmPrice)*newQty;
        addCartData();

    }else{
        tempCartModal(itemCode,itmName,itmPrice,itemOrderQty,total)
        addCartData();
    }

    minQty(itemCode,itemOrderQty);

})

/*Add Table*/
function addCartData() {
    $("#orderTable> tr").detach();

    for (var tc of orders){
        var row="<tr><td>"+tc.orItemCOde+"</td><td>"+tc.orItemName+"</td><td>"+tc.orItemPrice+"</td><td>"+tc.orItemQTY+"</td><td>"+tc.orItemTotal+"</td></tr>";
        $('#orderTable').append(row);
    }
    bindCustomerRowClickEvents();
    getTotal();
}

function getTotal() {
    let tempTot=0;
    for (let tempOrderCartArElement of orders) {
        tempTot=tempTot+tempOrderCartArElement.orItemTotal;
    }
    $('#total').val(tempTot);

}

/*discount*/
$('#discount').on('keyup',function (){
    let dis=$('#discount').val();
    let tot=$('#total').val();
    let totMin=0;
    let subTot=0;

    console.log(dis+"=="+tot);
    totMin=parseFloat(tot)*(dis/100);
    subTot=tot-totMin;

    $('#subTotal').val(subTot);
})

$('#cash').on('keyup',function (){
    let cash=$('#cash').val();
    let subT=$('#subTotal').val();


    $('#balance').val((parseFloat(cash))-parseFloat(subT));
})

/*Remove Duplicate Row*/
function searchRowExists(itemCode) {
    for (let tempOr of orders) {
        console.log(tempOr.orItemCOde+"-----"+itemCode);
        if(tempOr.orItemCOde===itemCode){
            return tempOr
        }
    }
    return null;
}

function minQty(itemCode,orderQty) {
    for (let itemArElement of items) {
        if(itemArElement.code===itemCode){
            itemArElement.quantity=parseInt(itemArElement.quantity)-parseInt(orderQty);
        }
    }
    loadAllItems();
    clearData();

}
function clearData() {
    $('#qtyOnHandOrd').val("");
    $('#item').val("");
    $('#priceOrd').val("");
    $('#orderQty').val("");
}

/*Purchase Order*/
$('#purchaseOrder').click(function (){
    let orderId = $('#orderId').val();
    let orderDate = $('#OrderDate').val();
    let customerName = $('#oCustomerName').val();
    let discount = disTOGave;
    let subTotal = $('#subTotal').val();

    orderModal(orderId,orderDate,customerName,discount,subTotal);

    loadAllOrder();
    blindOrderRowClickEvent();
    clearOrderTexts();

    for (var tempOrder of orders){
        orders.pop();
    }
    orders.pop();
    addCartData();

    // console.log(orderArray);
});


