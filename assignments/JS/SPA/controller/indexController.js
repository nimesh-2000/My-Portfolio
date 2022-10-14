

$("#h").click(function(){
    $("#dashboardContent").css('display','block');
    $("#cForm").css('display','none');
    $("#iForm").css('display','none');
    $("#oForm").css('display','none');
    $("#detail").css('display','none');
});

$("#c").click(function(){
    $("#dashboardContent").css('display','none');
    $("#cForm").css('display','block');
    $("#iForm").css('display','none');
    $("#oForm").css('display','none');
    $("#detail").css('display','none');
});

$("#i").click(function(){
    $("#dashboardContent").css('display','none');
    $("#cForm").css('display','none');
    $("#iForm").css('display','block');
    $("#oForm").css('display','none');
    $("#detail").css('display','none');
});

$("#o").click(function(){
    $("#dashboardContent").css('display','none');
    $("#cForm").css('display','none');
    $("#iForm").css('display','none');
    $("#oForm").css('display','block');
    $("#detail").css('display','none');
});

$("#d").click(function(){
    $("#dashboardContent").css('display','none');
    $("#cForm").css('display','none');
    $("#iForm").css('display','none');
    $("#oForm").css('display','none');
    $("#detail").css('display','block');
});