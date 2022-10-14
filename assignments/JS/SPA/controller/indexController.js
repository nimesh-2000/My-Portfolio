$("#cForm").css('display','none');
$("#iForm").css('display','none');
$("#oForm").css('display','none');
$("#detail").css('display','none');

$("#h").click(function(){
    $("#cForm").css('display','none');
    $("#dashboardContent").css('display','block');
    $("#iForm").css('display','none');
    $("#oForm").css('display','none');
});

$("#c").click(function(){
    $("#cForm").css('display','block');
    $("#dashboardContent").css('display','none');
    $("#iForm").css('display','none');
    $("#oForm").css('display','none');
});

$("#i").click(function(){
    $("#cForm").css('display','none');
    $("#dashboardContent").css('display','none');
    $("#iForm").css('display','block');
    $("#oForm").css('display','none');
});

$("#o").click(function(){
    $("#cForm").css('display','none');
    $("#dashboardContent").css('display','none');
    $("#iForm").css('display','none');
    $("#oForm").css('display','block');
});

$("#d").click(function(){
    $("#cForm").css('display','none');
    $("#dashboardContent").css('display','none');
    $("#iForm").css('display','none');
    $("#oForm").css('display','none');
    $("#detail").css('display','block');
});