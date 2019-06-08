$(function () { 
    var tital_rwd = new ScrollMagic.Controller();

    var scene_tital_rwd = new ScrollMagic.Scene({
        triggerElement: "#rwd_door_trigger"
    })
    .setTween("#rwd_tital", 1.5, {opacity: 1}) // trigger a TweenMax.to tween
    .addIndicators({name: "對話框的淡入淡出"}) // add indicators (requires plugin)
    .addTo(tital_rwd);

//6 剪刀路線------------------------------------------------


	                var scissors_rwd = {
	                					entry : {
	                						curviness: 1.5,
	                						autoRotate: true,
	                						values: [
	                								{x: 580,	y: 0}
	                							]
	                					}
	                				};
	                				// init controller
					var controller_rwd_scissors = new ScrollMagic.Controller();

					// create tween
					var tween_rwd_scissors = new TimelineMax()
						.add(TweenMax.to($("#rwd_scissors"),200, {css:{bezier:scissors_rwd.entry}, ease:Power1.easeInOut}));
					// build scene
					var scene_rwd_scissors = new ScrollMagic.Scene({triggerElement: "#rwd_cloth_trigger", duration: 500, offset: 0})
									.setPin("#target")
									.setTween(tween_rwd_scissors)
									.addIndicators({name: "剪刀"}) // add indicators (requires plugin)
									.addTo(controller_rwd_scissors);
//7 布往下掉跑出字------------------------------------------------

					var flightpath_cloth_2 = {
										entry : {
										values: [
												{x: 0,	y: 750}
												]
												}
										};
					// init controller
					var controller_cloth_2 = new ScrollMagic.Controller();

					// create tween
					var tween_cloth_2 = new TimelineMax()
						.add(TweenMax.to($("#rwd_cloth_foot"),0.5, {css:{bezier:flightpath_cloth_2.entry}, ease:Power1.easeInOut}));
					// build scene
					var scene_cloth_2 = new ScrollMagic.Scene({triggerElement: "#rwd_cloth_trigger", duration: 620, offset: 0})
									.setPin("#target")
									.setTween(tween_cloth_2)
									// .addIndicators() // add indicators (requires plugin)
									.addTo(controller_cloth_2);

// //8 布剪刀一起定住---------------------------------------------------------------------------

// 					var controller_sc_pin = new ScrollMagic.Controller();

// 					var scene_sc_pin = new ScrollMagic.Scene({triggerElement: "#trigger_pin_sciandcloth", duration: 1000})
// 									.setPin("#pin2")
// 									// .addIndicators() // add indicators (requires plugin)
// 									.addTo(controller_sc_pin);
					
// //9 剪刀剪完------------------------------------------------

// 					var  scissorspath= {
// 						entry : {
// 							curviness: 1.5,
// 							autoRotate: true,
// 							values: [
// 									{x: 2000,	y: 0}
// 								]
// 						}
// 					};
// 					// init controller
// 					var controller_scissorspath = new ScrollMagic.Controller();

// 					// create tween
// 					var tween_scissorspath = new TimelineMax()
// 						.add(TweenMax.to($("#scissors"),5000000000, {css:{bezier:scissorspath.entry}, ease:Power1.easeInOut}));
// 					//								.add(TweenMax.to($("#scissors"), 3, {css:{bezier:flightpath.leave}, ease:Power1.easeInOut}));

// 					// build scene
// 					var scene_scissorspath = new ScrollMagic.Scene({triggerElement: "#trigger_sciandcloth_out", duration: 500, offset: 100})
// 									.setPin("#target")
// 									.setTween(tween_scissorspath)
// 									// .addIndicators() // add indicators (requires plugin)
// 									.addTo(controller_scissorspath);

//10 布往下掉完------------------------------------------------

					var clothpath = {
						entry : {
							// curviness: 1.5,
							// autoRotate: true,
							values: [
									{x: 0,	y: 1000}
								]
						}
					};
					// init controller
					var controller_clothpath = new ScrollMagic.Controller();

					// create tween
					var tween_clothpath = new TimelineMax()
						.add(TweenMax.to($("#rwd_cloth_foot"),5000000000, {css:{bezier:clothpath.entry,opacity: 0}, ease:Power1.easeInOut}));
					//								.add(TweenMax.to($("#scissors"), 3, {css:{bezier:flightpath.leave}, ease:Power1.easeInOut}));

					// build scene
					var scene_clothpath = new ScrollMagic.Scene({triggerElement: "#rwd_cloth_out_trigger", duration: 100, offset: 0})
									.setPin("#target")
									.setTween(tween_clothpath)
									// .addIndicators() // add indicators (requires plugin)
									.addTo(controller_clothpath);


})