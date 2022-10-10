
$("#btnSave").click(function () {
    //local scope // function scope

    //select all the four text fields and then get their typed values
    let customerID = $("#txtCustomerID").val();
    let customerName = $("#txtCustomerName").val();
    let customerAddress = $("#txtCustomerAddress").val();
    let customerPhone = $("#txtCustomerPhone").val();

    // alert(customerID+" "+ customerName+" "+customerAddress+" "+customerSalary);

    //Put all of these values inside a named container
    // customer

    var customerObject = {
        id: customerID,
        name: customerName,
        address: customerAddress,
        phone: customerPhone
    }

    //add the customer object to the array
    customers.push(customerObject);

    console.log(customers);

    loadAllCustomers();
    bindRowClickEvents()
});


$("#btnGetAll").click(function (){
    loadAllCustomers();
});


//load all customers
function loadAllCustomers(){
    //remove all the table body content before adding data
    $("#tblCustomer").empty();


    // get all customer records from the array
    for(var customer of customers){
        console.log(customer);// customer object

        // add those data to the table row
        // var row= "<tr><td>"+customer.id+"</td><td>"+customer.name+"</td><td>"+customer.address+"</td><td>"+customer.salary+"</td></tr>";

        // Using String Literals to do the same thing as above
        var row= `<tr><td>${customer.id}</td><td>${customer.name}</td><td>${customer.address}</td><td>${customer.phone}</td></tr>`;

        //then add it to the table body of customer table
        $("#tblCustomer").append(row);
    }
}

function bindRowClickEvents() {
    $("#tblCustomer>tr").click(function () {
        let id = $(this).children(":eq(0)").text();
        let name = $(this).children(":eq(1)").text();
        let address = $(this).children(":eq(2)").text();
        let phone = $(this).children(":eq(3)").text();

        //setting table details values to text fields
        $('#txtCusId').val(id);
        $('#txtCusName').val(name);
        $('#txtCusAddress').val(address);
        $('#txtCusPhone').val(phone);

    });
}

$("#btnSearch").click(function (){

    for (let customerKey of customers){

        if (customerKey.id===$('#inputCusSearch').val()){
            $('#txtCusId').val(customerKey.id);
            $('#txtCusName').val(customerKey.name);
            $('#txtCusAddress').val(customerKey.address);
            $('#txtCusPhone').val(customerKey.phone);
        }
        else if (customerKey.name===$('#inputCusSearch').val()){
            $('#txtCusId').val(customerKey.id);
            $('#txtCusName').val(customerKey.name);
            $('#txtCusAddress').val(customerKey.address);
            $('#txtCusPhone').val(customerKey.phone);
        }
    }

});
$("#txtCustomerID,#txtCustomerName,#txtCustomerAddress,#txtCustomerPhone").on('keydown', function (event) {
    if (event.key == "Tab") {
        event.preventDefault();
    }
});


$("#txtCustomerID").on('keydown', function (event) {
    if (event.key == "Enter") {
        $("#txtCustomerName").focus();
    }
});

$("#txtCustomerName").on('keydown', function (event) {
    if (event.key == "Enter") {
        $("#txtCustomerAddress").focus();
    }
});

$("#txtCustomerAddress").on('keydown', function (event) {
    if (event.key == "Enter") {
        $("#txtCustomerPhone").focus();
    }
});

$("#txtCustomerPhone").on('keydown', function (event) {
    if (event.key == "Enter") {
        $("#btnSave").focus();
    }
});

$("#btnSaveCus").on('keydown', function (event) {
    if (event.key == "Enter") {
        let customerID = $("#txtCustomerID").val();
        let customerName = $("#txtCustomerName").val();
        let customerAddress = $("#txtCustomerAddress").val();
        let customerPhone = $("#txtCustomerPhone").val();

        var customerObject = {
            id: customerID,
            name: customerName,
            address: customerAddress,
            contact: customerPhone
        }

        //add the customer object to the array
        customers.push(customerObject);
        console.log(customers);
    }
    loadAllCustomers();
    bindRowClickEvents();
});