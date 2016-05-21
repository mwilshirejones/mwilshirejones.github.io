$(function(){

   $(".mwilshireHover").hover(
		function() {
	   		$("#mwilshire").removeClass("transparent").addClass("opaque");
	   		$("#latest-sketch").removeClass("opaque").addClass("transparent");	
	   	},
	   	function() {
	   		$("#mwilshire").removeClass("opaque").addClass("transparent");
	   		$("#latest-sketch").removeClass("transparent").addClass("opaque");
	   	}
   );

   $(".contactHover").hover(
		function() {
	   		$("#contact").removeClass("transparent").addClass("opaque");
	   		$("#latest-sketch").removeClass("opaque").addClass("transparent");	
	   	},
	   	function() {
	   		$("#contact").removeClass("opaque").addClass("transparent");
	   		$("#latest-sketch").removeClass("transparent").addClass("opaque");
	   	}
   );

});