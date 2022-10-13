function loadAllCustomerId() {
    // $('#oCustomerId').empty();
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


