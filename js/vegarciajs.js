$(document).ready(function() {
	$("#about-text").addClass("about-text-hover-off");
	$(".secondary-title").hide();
	$('.portfolio-moreitems-container-en').load('portfolioen.html');
	$('.portfolio-moreitems-container-es').load('portfolio.html');

	$(".fiscal-info").hover( function(){
	    $(".fiscal-info-modal").fadeIn("slow");
	},
	function(){
	    $(".fiscal-info-modal").fadeOut("slow");
	});

	$("#aboutme").click( function(){
	    $("#about-text").delay(100).addClass("about-text-hover");
	    $("#about-text").removeClass("about-text-hover-off");
	    $("#about-container").addClass("about-hover");
	    $(".content-container").addClass("content-container-onabout");
	});

	$("#close-aboutme").click( function(){
	    $("#about-text").addClass("about-text-hover-off");
	    $("#about-text").removeClass("about-text-hover");
	    $("#about-container").removeClass("about-hover");
	    $(".content-container").removeClass("content-container-onabout");
	});

	$("#uxui-tag").click(function () {
		$("#uxui-tag").addClass("dev-tag-selected");
		$("#dev-tag").removeClass("dev-tag-selected");
		$(".dev-item").hide();
		$(".square-item").hide();
		$(".uxui-item").show();
	});
	$("#dev-tag").click(function () {
		$("#dev-tag").addClass("dev-tag-selected");
		$("#uxui-tag").removeClass("dev-tag-selected");
		$(".uxui-item").hide();
		$(".square-item").hide();
		$(".dev-item").show();
	});
	$("#all-tag").click(function () {
		$("#uxui-tag").removeClass("dev-tag-selected");
		$("#dev-tag").removeClass("dev-tag-selected");
		$(".uxui-item").show();
		$(".square-item").show();
		$(".dev-item").show();
	});
});


$(".content-container").scroll(function() {

       if($(this).scrollTop() > 50){

        $(".portfolio-welcome").addClass("portfolio-welcome-open");
        $(".secondary-title").show();

       }else if($(this).scrollTop() < 50){

        $(".portfolio-welcome").removeClass("portfolio-welcome-open");
        $(".secondary-title").hide();

       }
});