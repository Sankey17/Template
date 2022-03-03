function creatacnt() {

    var cacnt = document.getElementById('creatacnt');
    var lgn = document.getElementById('login');

    cacnt.style.display = 'block';
    lgn.style.display = 'none';
}

function login() {

    var cacnt = document.getElementById('creatacnt');
    var lgn = document.getElementById('login');

    lgn.style.display = 'block';
    cacnt.style.display = 'none';
}

function btn_click() {
    if ($(".input").css("type") == "") {
        let button3 = document.getElementsByName('submit')
        $(document).ready(function () {
            $(button3).click(function () {
                alert("Not Fill Detail")
            })
        })
    }
  
}


// $(document).ready(function () {
//     //Show a message in the alert box using each function.
//     $("#submit-btn").click(function () {
//       alert("THANK YOU FOR VISITING OUR WEBSITE");
//     });

//     //Write a script of JQuery to implement the minimum 5 events.
//     //Write a script of JQuery where show the use of selectors (ID , Class , Attribute , Value of attribute)
//     $("#hv").click(function () {
//       $("p").hide();
//     });
//     $(".muhrat").dblclick(function () {
//       $("p").show();
//     });
//     $("#about").mouseenter(function () {
//       $("video").attr("width", "700");
//     });
//     $("video").mouseleave(function () {
//       $("video").attr("width", "650");
//     });
//     $(".imgbx").mousedown(function () {
//       $("#t3").val("top 2 designer");
//     });

//     //Write a script to display any web content after the 5 second on any page.
//     //Write a script of JQuery to implement minimum sliding effect ,fadin , fade out, toggle.
    
//     $("#home").mouseleave(function(){
//       $("h1").fadeout(1000);
//       $("h2").fadeOut(slow);
//     });
//     $("#home").mouseleave(function(){
//       $("h1").fadeIn(1000);
//       $("h2").fadeIn(slow);
//     });
//     $("#home").mouseenter(function(){
//       $("h1").fadeToggle(1000);
//       $("h2").fadeToggle(slow);
//     });

//   });