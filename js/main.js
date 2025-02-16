// Toggle Menu
function toggleSideMenu(){
    $('body').toggleClass('showMenu')
}
$('.sideMenubackdrop').click(function () {
    $('body').removeClass('showMenu');
})


// ----floatin input label in input and select
$('.form-group').find('.floating-control').each(function (index, ele) {
    var $ele = $(ele);
    if($ele.val() != '' || $ele.is(':selected') === true){
        $ele.parents('.floating-group').addClass('focused');
    }
})
$('.floating-control').on('focus', function (e) {
$(this).parents('.floating-group').addClass('focused');	
}).on('blur', function(){
if($(this).val().length > 0){
    $(this).parents('.floating-group').addClass('focused');		
}else{
    $(this).parents('.floating-group').removeClass('focused');
}
});
$('.floating-control').on('change', function (e) {
if($(this).is('select')){
    if($(this).val() === $("option:first", $(this)).val()) {
        $(this).parents('.floating-group').removeClass('focused');
    }
    else{
        $(this).parents('.floating-group').addClass('focused');
    }
}
})



$('.sideMenubackdrop').click(function () {
    $('body').removeClass('showMenu');
    $('body').removeClass('showContactForm');
    $('body').removeClass('showAddresForm');
    $('body').removeClass('showNotification');
})








