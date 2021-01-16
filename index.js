// mobile side bar for nav
$(document).ready(function(){
    $('.sidenav').sidenav();
  });

  // Expands displayed gif.
  $(document).ready(function(elem){
    var instance = M.Materialbox.getInstance(elem);
    $('.materialboxed').materialbox(instance);
});