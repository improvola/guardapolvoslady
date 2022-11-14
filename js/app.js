function show() {
  alert("You clicked on the button, so it triggered the alert box");
}

$(".size").on('click', function(){
    $(this).toggleClass('focus').siblings().removeClass('focus');
 })
