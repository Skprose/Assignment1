$("#button1").on("click",function() {
	$("#box").css("height","235px")
	$("#box").css("width","235px")
})
		
$("#button2").on("click",function() {
			$("#box").css("background-color", "rgb(40,40,180)")
})
		
$("#button3").click(function() {
	 
     $("#box").css("opacity","0.5")
     $("#box").css("transition","opacity 3s 1s")
     $("#box").css("visibility","hidden")
     $("#box").css("transition","visibility 3s 1s")

})
$("#button4").on("click",function() {
	$("#box").css("visibility","visible")
    $("#box").css("height","150px")
    $("#box").css("width","150px")
    $("#box").css("background-color","orange")
    $("#box").css("opacity","0.75")
})
