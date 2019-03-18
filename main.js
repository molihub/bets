/**
 * 双色球自动随机一注
 */
function bets() {
	let red = [];
	_.times(6, function(n) {
		const r = _.random(1, 32, false);
		red.push(r);
	})

	red = _.sortedUniq(red.sort(function(a, b) { return a - b; }));
	while(red.length < 6) {
		const r = _.random(1, 32, false);
		red.push(r);
		red = _.sortedUniq(red.sort(function(a, b) { return a - b; }));
	}
	
	const blue = _.random(1, 16, false);

	$(".br").each(function(i) {
		$(this).html(red[i]);
	});

	$(".bb").html(blue);
}