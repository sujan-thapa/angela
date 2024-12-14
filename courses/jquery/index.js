// $(document).ready(function(){
//     $("h1").css("color", "red")
// })  


// manipulating styles with jquery

// $("h1").css("color", "green")

// console.log($("h1").css("color"));
// console.log($("h1").css("font-size"));


// manipulating text with jquery
// $("h1").addClass("big-title");
// $("h1").removeClass("big-title");


// manipulating text with jquery

// $("h1").text("Sujan Thapa");
// $("button").text("Sujan Thapa");
// $("h1").html("<em>Sujan Thapa</em>");


// Manipulating attributes with jQuery
// console.log($("img").attr("src"))
// $("a").attr("href","http://www.google.com")
// $("h1").attr("class")


// $("h1").click(function(){
//     $("h1").css("color", "blue")
// })




// $("input").keydown(function(event){
//     console.log(event.key)
// })

// $("input").on("mouseover", function(event){
//     // console.log(event.key)
//     $("h1").css("color","purple")
// })



// adding and removing elements with jQuery
// $("h1").before("<button>New</button>")
// $("h1").after("<button>New</button>")
// $("h1").prepend("<button>New</button>")
// $("h1").append("<button>New</button>")


// websites animations with jQuery
// $("button").on("click", function(){
//     $("h1").hide();
// })

// $("button").on("click", function(){
//     $("h1").fadeOut();
// })

// $("button").on("click", function(){
//     $("h1").fadeToggle();
// })


// $("button").on("click", function(){
//     $("h1").slideToggle();
// })


// $("button").on("click", function(){
//     $("h1").animate({
//         opacity: 0.2
//     });
// })


$("button").on("click", function(){
    $("h1").slideUp().slideDown().animate({
        opacity: 0.2
    });
})

