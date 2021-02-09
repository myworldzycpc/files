var HTMLEscape = {

	"HTMLEncode":function(html){
		var temp = document.createElement("div");
		(temp.textContent != null) ? (temp.textContent = html) : (temp.innerText = html);
		var output = temp.innerHTML;
		temp = null;
		return output;
	},
	"HTMLDecode":function(text) { 
		var temp = document.createElement("div"); 
		temp.innerHTML = text; 
		var output = temp.innerText || temp.textContent; 
		temp = null; 
		return output; 
	}
};
var Uio = {
	"init":function(){
		$("body").attr({"class":"inited"});
	},
	"print":function(text, options={}){
		tag=options.tag;
		style=options.style;
		single=options.single;
		if ($("body").attr("class") == "inited"){
			if (single){
				$textele = $("<div />").html(HTMLEscape.HTMLEncode(text));	 
			} else {
				$textele = $("<span />").html(HTMLEscape.HTMLEncode(text));
			};
			if (style){
				$textele.css(style);
			};
			if (tag){
				$textele.attr({"class":tag});
			};
			$("body").append($textele);
		};
	},
	"input":function(text, action, options={}){
		tag=options.tag;
		style=options.style;
		single=options.single;
		if ($("body").attr("class") == "inited"){
			if (single){
				$textele = $("<div />").html(HTMLEscape.HTMLEncode(text));	 
			} else {
				$textele = $("<span />").html(HTMLEscape.HTMLEncode(text));
			};
			if (style){
				$textele.css(style);
			};
			if (tag){
				$textele.attr({"class":tag});
			};
			$input = $("<input />");
			$textele.append($input);
			$("body").append($textele);
			$input.focus()
			$input.bind("keypress",function(){
				if (event.keyCode == 13){
					$(this).parent().append($input.val());
					$(this).hide();
					action($input.val());
				};
			});
		};
	},
};
