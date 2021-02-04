function initgrid(width,height,border){
	$table = $("<table></table>");
		
	for (var y = 0; y < height; y++){
		$tr = $("<tr></tr>");
		for (var x = 0; x < width; x++){
			$td = $("<td></td>");
			if (border){
				$td.css({"border":"1px solid black"});
			}
			$tr.append($td);
		};
		$table.append($tr);
			
	};
	$table.attr({"class":"uigrid"});
		
	return $table;
};
	
function getblock(x,y){
	return $(".uigrid").children().children().eq(y).children().eq(x);
};
	
function createlement(tagname){
	return $(`<${tagname}></${tagname}>`);
};
function marge(x,y,xd,yd){
	getblock(x,y).attr({
		"colspan":xd,
		"rowspan":yd,
	});
	for (var xs = x; xs < x + xd; xs++){
		for (var ys = y; ys < y + yd; ys++){
			if ((xs != x) && (ys != y)){
				getblock(xs,ys).remove();
			};
		};
	};
};
var ing = initgrid;
var gbl = getblock;
var cel = createlement;
