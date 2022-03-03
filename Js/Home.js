var counter = 1;
setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter > 5){
        counter=1;
    }
},3500);



// let button1 = document.getElementsByClassName('btn')

// $(document).ready(function () {
//     $(button1).click(function () {
//             $('.btn').css("opacity", 1)
//             $('.container1 .f-box .content').css("opacity", 0.5)
//             $('.container1 .f-box .content h2').css("opacity", 1)
//             $('.container1 .f-box .content h2 span').css("opacity", 1)
//             $('.container1 .f-box .content h2 a').css("opacity", 1)
//     })
// })


// <!-- page_load -->

// var preloader = document.getElementById('se-pre-con')

//     function page_load() {
//         preloader.style.display = 'none';
//     }



     //  $.opacity = $(".btn").css("opacity");
        //  var opacity1 = $(".btn").css("opacity");

        function opacityabout() {
            if ($(".btn").css("opacity") == 0.2) {
                let button1 = document.getElementsByClassName('btn')
                $(document).ready(function () {
                    $(button1).click(function () {
                        $('.btn').css("opacity", 1)
                        $('.container1 .f-box .content').css("opacity", 0.5)
                        $('.container1 .f-box .content h2').css("opacity", 1)
                    })
                })
            }
            else {
                let button2 = document.getElementsByClassName('btn')
                $(document).ready(function () {
                    $(button2).click(function () {
                        $('.btn').css("opacity", 0.2)
                        $('.container1 .f-box .content').css("opacity", 0)
                        $('.container1 .f-box .content h2').css("opacity", 0)
                    })
                })
            }
        }


        
    // $(window).load(function () {
    //         // Animate loader off screen
    //         $("#se-pre-con").fadeOut(5000);;
    //     });




        // <!-- page_load Script -->
        // setTimeout(function () {
        //     $('.loader').fadeToggle();
        // }, 3000);

            // let button1 = document.getElementsByClassName('btn')

            // $(document).ready(function () {
            //     $(button1).click(function () {
            //         $('.btn').css("opacity", 1)
            //         $('.container1 .f-box .content').css("opacity", 0.5)
            //         $('.container1 .f-box .content h2').css("opacity", 1)
            //     })
            // })
        // $(document).ready(function () {
        //     $(button2).click(function () {
        //             $('.btn').css("opacity", 0.2)
        //             $('.container1 .f-box .content').css("opacity", 0)
        //             $('.container1 .f-box .content h2').css("opacity", 0)
        //     })
        // })

        // do {
        //      let button1 = 1;
        //     if(button1 == 1){
        //         $(document).ready(function () {
        //         $('.btn').click(function () {
        //             $('.btn').fadeTo(2000, 1, function () {
        //                 alert("The Fadeto Effect has Finished!");
        //             });
        //             $('.container1 .f-box .content').css("opacity", 0.5);
        //             $('.container1 .f-box .content h2').css("opacity", 1);
        //         });
        //     });
        //     button1 = 2;
        // }
        // else if(button1 == 2){
        //     $(document).ready(function () {
        //         $('.btn').click(function () {
        //             $('.btn').fadeTo(1000, 0.2, function () {
        //                 alert("The Fadeto Effect dfdnjdhas Finished!");
        //             });
        //             $('.container1 .f-box .content').css("opacity", 0);
        //             $('.container1 .f-box .content h2').css("opacity", 0);
        //         });
        //     });
        //     button1 = 1;
        // }
        // }while(button1 != null);



        
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


