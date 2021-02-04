$(document).ready(function(){
	function initgrid(width,height,border){
		$table = $("<table></table>");
		
		for (var x = 0; x < width; x++){
			$tr = $("<tr></tr>");
			for (var y = 0; y < height; y++){
				$td = $("<td></td>");
				if (border){
					$td.css({"border":"1px solid black"});
				}
				$tr.append($td);
			};
			$table.append($tr);
			
		};
		$table.attr({"class":"uigrid"});
		
		$("body").append($table);
	};
	
	function getblock(x,y){
		return $(".uigrid").children().children().eq(y).children().eq(x);
		
	};
	
	function createlement(tagname){
		return $(`<${tagname}></${tagname}>`);
	};
	var ing = initgrid;
	var gbl = initgrid;
	var cel = createlement;
	
});
