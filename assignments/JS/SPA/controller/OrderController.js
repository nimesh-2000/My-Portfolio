function loadAllCustomerId() {
    $('#oCustomerId').empty();
    for (let customerArElement of customers) {
        $('#oCustomerId').append(`<option>${customerArElement.id}</option>`);
    }
}

$('#oCustomerId').on('change',function (){
    /*get Customer*/
    let customer = searchCustomer($('#oCustomerId').val());

    $('#oCustomerName').val(customer.name);
    $('#oCustomerAddress').val(customer.address);
    $('#oCustomerPhone').val(customer.phone);


});