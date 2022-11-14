function show() {
  alert("Has sumado al carrito");
  console.log("Has sumado al carrito");
}

$(".size").on('click', function(){
    $(this).toggleClass('focus').siblings().removeClass('focus');
 })
