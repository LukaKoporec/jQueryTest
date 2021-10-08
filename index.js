$("h1").addClass("big-title margin-50");

$("button").text("Don't click me!");

console.log($("h1").css("font-size"));

$("button").text("Hey");


//attribute

console.log($("img").attr("src"));


$("a").attr("href", "https://www.yahoo.com");

// event

$("button").on("mouseover", function() {
    $("button").css("color", "yellow");

})


$(document).keydown(function(event){
    $("h1").text(event.key);
});

// removing and adding elements

$("h1").before("<button>New</button>");

// after prepend append 
// remove

// animations slideUp slideToggle slideDown.....

$("button").on("click", function() {
    $("h1").slideUp().slideDown().animate({opacity: 0.5});

});
