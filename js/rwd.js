$(function () { 
//對話框出現------------------------------------------------
    var tital_rwd = new ScrollMagic.Controller();

    var scene_tital_rwd = new ScrollMagic.Scene({
        triggerElement: "#rwd_door_trigger"
    })
    .setTween("#rwd_tital", 1.5, {opacity: 1}) // trigger a TweenMax.to tween
    // .addIndicators({name: "對話框的淡入淡出"}) // add indicators (requires plugin)
    .addTo(tital_rwd);

//剪刀路線------------------------------------------------
	var scissors_rwd = {
						entry : {
							curviness: 2.5,
							autoRotate: true,
							values: [
									{x: 550,	y: 0}
								]
						}
					};
					// init controller
	var controller_rwd_scissors = new ScrollMagic.Controller
	// create tween
	var tween_rwd_scissors = new TimelineMax()
		.add(TweenMax.to($("#rwd_scissors"),10, {css:{bezier:scissors_rwd.entry}, ease:Power1.easeInOut}));
	// build scene
	var scene_rwd_scissors = new ScrollMagic.Scene({triggerElement: "#rwd_cloth_trigger", duration: 250, offset: 0})
					// .setPin("#target")
					.setTween(tween_rwd_scissors)
					// .addIndicators({name: "剪刀"}) // add indicators (requires plugin)
					.addTo(controller_rwd_scissors);
//布往下掉跑出字------------------------------------------------

	var rwd_cloth_foot = {
						entry : {
						values: [
								{x: 0,	y: 400}
								]
								}
						};
	// init controller
	var controller_rwd_cloth_foot = new ScrollMagic.Controller();

	// create tween
	var tween_rwd_cloth_foot = new TimelineMax()
		.add(TweenMax.to($("#rwd_cloth_foot"),0.5, {css:{bezier:rwd_cloth_foot.entry}, ease:Power1.easeInOut}));
	// build scene
	var scene_rwd_cloth_foot = new ScrollMagic.Scene({triggerElement: "#rwd_cloth_trigger", duration: 350, offset: 0})
					// .setPin("#target")
					.setTween(tween_rwd_cloth_foot)
					// .addIndicators() // add indicators (requires plugin)
					.addTo(controller_rwd_cloth_foot);

//10 布往下掉完------------------------------------------------
	var rwd_cloth_foot_out = {
		entry : {
			// curviness: 1.5,
			// autoRotate: true,
			values: [
					{x: 0,	y: 1000}
				]
		}
	};
	// init controller
	var controller_rwd_cloth_foot_out = new ScrollMagic.Controller
	// create tween
	var tween_rwd_cloth_foot_out = new TimelineMax()
		.add(TweenMax.to($("#rwd_cloth_foot"),50, {css:{bezier:rwd_cloth_foot_out.entry,opacity: 0}, ease:Power1.easeInOut}));
	//								.add(TweenMax.to($("#scissors"), 3, {css:{bezier:flightpath.leave}, ease:Power1.easeInOut}
	// build scene
	var scene_rwd_cloth_foot_out = new ScrollMagic.Scene({triggerElement: "#rwd_cloth_out_trigger", duration: 100, offset: 0})
					// .setPin("#target")
					.setTween(tween_rwd_cloth_foot_out)
					// .addIndicators() // add indicators (requires plugin)
					.addTo(controller_rwd_cloth_foot_out);
//---------------------------------------------------------------------
    var scissors_rwd_out = new ScrollMagic.Controller();

    var scene_scissors_rwd_out = new ScrollMagic.Scene({
        triggerElement: "#rwd_scissors_out_trigger"
    })
    .setTween("#rwd_scissors", 0.5, {display:'none'}) // trigger a TweenMax.to tween
    .addTo(scissors_rwd_out);
//---------------------------------------------------------------------
    var doll_rwd = new ScrollMagic.Controller();

    var scene_doll_rwd = new ScrollMagic.Scene({
        triggerElement: "#rwd_dodo_out"
    })
    .setTween("#rwd_doll_dodo", 0.5, {opacity:1}) // trigger a TweenMax.to tween
    .addTo(scissors_rwd_out);
//娃定住(娃掉下)-------------------------------------------------------------------------------------------------------------------------------------------
var controller_doll_pin_rwd = new ScrollMagic.Controller();

var scene_doll_pin_rwd = new ScrollMagic.Scene({triggerElement: "#rwd_dodo_out", duration: 9000, offset: 100})
                .setPin("#rwd_doll_dodo")
                // .addIndicators({name: "doll_pin"}) // add indicators (requires plugin)
                .addTo(controller_doll_pin_rwd);
})