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
//娃定住-------------------------------------------------------------------------------------------------------------------------------------------
    var controller_doll_pin_rwd = new ScrollMagic.Controller();

    var scene_doll_pin_rwd = new ScrollMagic.Scene({triggerElement: "#rwd_dodo_out", duration: 9000, offset: 100})
                    .setPin("#rwd_doll_dodo")
                    // .addIndicators({name: "doll_pin"}) // add indicators (requires plugin)
                    .addTo(controller_doll_pin_rwd);
//11 12尺_1出現 定住---------------------------------------------------------------------------------------------------------------------------------
    var controller_ruler_1=new ScrollMagic.Controller();
    var tween_ruler_1=TweenMax.to("#rwd_ruler_1",0.2,{opacity:1});
    var scene_ruler_1=new ScrollMagic.Scene({triggerElement:"#rwd_ruler_1_out",duration:300})
                .setTween(tween_ruler_1)
                // .addIndicators({name: "淡入"})
                .addTo(controller_ruler_1);


    var controller_ruler_1_pin = new ScrollMagic.Controller();
    var scene_ruler_1_pin = new ScrollMagic.Scene({triggerElement: "#rwd_dodo_out", duration: 2500})
                        .setPin("#rwd_ruler_1")
                        // .addIndicators({name: "R1"}) // add indicators (requires plugin)
                        .addTo(controller_ruler_1_pin);

// //13 14尺_2出現 定住---------------------------------------------------------------------------------------------------------------------------------
    var controller_ruler_2=new ScrollMagic.Controller();
    var tween_ruler_2=TweenMax.to("#rwd_ruler_2",0.2,{opacity:1});
    var scene_ruler_2=new ScrollMagic.Scene({triggerElement:"#rwd_ruler_2_out",duration:300})
                .setTween(tween_ruler_2)
                // .addIndicators()
                .addTo(controller_ruler_2);


    var controller_ruler_2_pin = new ScrollMagic.Controller();
    var scene_ruler_2_pin = new ScrollMagic.Scene({triggerElement: "#rwd_dodo_out", duration: 2500})
                    .setPin("#rwd_ruler_2")
                    // .addIndicators({name: "R2"}) // add indicators (requires plugin)
                    .addTo(controller_ruler_2_pin);
//15 對話框_1出現 定住---------------------------------------------------------------------------------------------------------------------------------
    var controller_balloon_1=new ScrollMagic.Controller();
    var tween_balloon_1=TweenMax.to("#rwd_balloon_1",0.2,{opacity:1});
    var scene_balloon_1=new ScrollMagic.Scene({triggerElement:"#rwd_balloon_1_out",duration:200})
                .setTween(tween_balloon_1)
                // .addIndicators()
                .addTo(controller_balloon_1);


    var controller_balloon_1_pin = new ScrollMagic.Controller();
    var scene_balloon_1_pin = new ScrollMagic.Scene({triggerElement: "#rwd_dodo_out", duration: 2500})
                    .setPin("#rwd_balloon_1")
                    // .addIndicators() // add indicators (requires plugin)
                    .addTo(controller_balloon_1_pin);
//尺_1 尺_2 對話框 消失---------------------------------------------------------------------------------------------------------------------------------
    var controller_balloon_disappear=new ScrollMagic.Controller();
    var tween_balloon_disappear=TweenMax.to("#rwd_balloon_1",0.2,{opacity:0});
    var scene_balloon_disappear=new ScrollMagic.Scene({triggerElement:"#rwd_ruleandballoon_kiete",duration:200})
                .setTween(tween_balloon_disappear)
                // .addIndicators()
                .addTo(controller_balloon_disappear);

    var controller_ruler_2_disappear=new ScrollMagic.Controller();
    var tween_ruler_2_disappear=TweenMax.to("#rwd_ruler_2",0.2,{opacity:0});
    var scene_ruler_2_disappear=new ScrollMagic.Scene({triggerElement:"#rwd_ruleandballoon_kiete",duration:200})
                .setTween(tween_ruler_2_disappear)
                // .addIndicators()
                .addTo(controller_ruler_2_disappear);

    var controller_ruler_1_disappear=new ScrollMagic.Controller();
    var tween_ruler_1_disappear=TweenMax.to("#rwd_ruler_1",0.2,{opacity:0});
    var scene_ruler_1_disappear=new ScrollMagic.Scene({triggerElement:"#rwd_ruleandballoon_kiete",duration:200})
                .setTween(tween_ruler_1_disappear)
                // .addIndicators()
                .addTo(controller_ruler_1_disappear);
//15 對話框_2出現 定住---------------------------------------------------------------------------------------------------------------------------------
    var controller_balloon_2=new ScrollMagic.Controller();
    var tween_balloon_2=TweenMax.to("#rwd_balloon_2",0.2,{opacity:1});
    var scene_balloon_2=new ScrollMagic.Scene({triggerElement:"#rwd_balloon_2_out",duration:200})
                .setTween(tween_balloon_2)
                // .addIndicators()
                .addTo(controller_balloon_2);


    var controller_balloon_2_pin = new ScrollMagic.Controller();
    var scene_balloon_2_pin = new ScrollMagic.Scene({triggerElement: "#rwd_dodo_out", duration: 3500})
                    .setPin("#rwd_balloon_2")
                    // .addIndicators() // add indicators (requires plugin)
                    .addTo(controller_balloon_2_pin);
// 15 對話框_3出現 定住---------------------------------------------------------------------------------------------------------------------------------
    var controller_balloon_3=new ScrollMagic.Controller();
    var tween_balloon_3=TweenMax.to("#rwd_balloon_3",0.2,{opacity:1});
    var scene_balloon_3=new ScrollMagic.Scene({triggerElement:"#rwd_balloon_3_out",duration:200})
                .setTween(tween_balloon_3)
                // .addIndicators()
                .addTo(controller_balloon_3);


    var controller_balloon_3_pin = new ScrollMagic.Controller();
    var scene_balloon_3_pin = new ScrollMagic.Scene({triggerElement: "#rwd_dodo_out", duration: 3500})
                    .setPin("#rwd_balloon_3")
                    // .addIndicators() // add indicators (requires plugin)
                    .addTo(controller_balloon_3_pin);
//尺_1 尺_2 對話框 消失---------------------------------------------------------------------------------------------------------------------------------
    var controller_balloon_disappear_2rwd=new ScrollMagic.Controller();
    var tween_balloon_disappear_2rwd=TweenMax.to("#rwd_balloon_2",0.2,{opacity:0});
    var scene_balloon_disappear_2rwd=new ScrollMagic.Scene({triggerElement:"#rwd_ruleandballoon2_kiete",duration:200})
                .setTween(tween_balloon_disappear_2rwd)
                // .addIndicators()
                .addTo(controller_balloon_disappear_2rwd);
    
    var controller_balloon_disappear_3rwd=new ScrollMagic.Controller();
    var tween_balloon_disappear_3rwd=TweenMax.to("#rwd_balloon_3",0.2,{opacity:0});
    var scene_balloon_disappear_3rwd=new ScrollMagic.Scene({triggerElement:"#rwd_ruleandballoon2_kiete",duration:200})
                .setTween(tween_balloon_disappear_3rwd)
                // .addIndicators()
                .addTo(controller_balloon_disappear_3rwd);
//------花瓣------------------------------------------------------------------------------------------------------------------------------
    var petal_path_rwd = {
        entry : {
            // curviness: 1.5,
            // autoRotate: true,
            values: [
                    {x: 0,	y: 4800}
                ]
        }
    };
    // init controller
    var controller_petal_path_rwd = new ScrollMagic.Controller();

    // create tween
    var tween_petal_path_rwd = new TimelineMax()
        .add(TweenMax.to($("#rwd_petal_1,#rwd_petal_2,#rwd_petal_3,#rwd_petal_4,#rwd_petal_5,#rwd_petal_6,#rwd_petal_7,#rwd_petal_8,#rwd_petal_9,#rwd_petal_10,#rwd_petal_11,#rwd_petal_12,#rwd_petal_13,#rwd_petal_14,#rwd_petal_15"),1, {css:{bezier:petal_path_rwd.entry}, ease:Power1.easeInOut}));
    // build scene
    var scene_petal_path_rwd = new ScrollMagic.Scene({triggerElement: "#rwd_petal_out", duration: 1500, offset: 0})
                    .setPin("#target")
                    .setTween(tween_petal_path_rwd)
                    // .addIndicators({name: "手動花瓣"}) // add indicators (requires plugin)
                    .addTo(controller_petal_path_rwd);
//------花瓣出現---------------------------------------------------------------------------------------------------------
    var controller_petal_rwd = new ScrollMagic.Controller();

    var scene_petal_rwd = new ScrollMagic.Scene({triggerElement: "#rwd_petal_out"})
                    .setTween("#rwd_petal", 0.1, {opacity: 1}) // trigger a TweenMax.to tween
                    // .addIndicators({name: "1 (duration: 300)"}) // add indicators (requires plugin)
                    .addTo(controller_petal_rwd);
//---------------------花瓣消失------------------------------------------------------------
    var controller_petal_rwd_kiete = new ScrollMagic.Controller();

    var scene_petal_rwd_kiete = new ScrollMagic.Scene({
        triggerElement: "#rwd_out_firework_first"
    })
    .setTween("#rwd_petal", 0.5, {display:'none'}) // trigger a TweenMax.to tween
    .addTo(controller_petal_rwd_kiete);
//娃衣服一起定住---------------------------------------------------------------------------
    var controller_clothes_pin = new ScrollMagic.Controller();

    var scene_clothes_pin = new ScrollMagic.Scene({triggerElement: "#rwd_pin_kimono", duration: 2000})
                    .setPin("#rwd_kimono")
                    // .addIndicators({name: "clothed_pin"}) // add indicators (requires plugin)
                    .addTo(controller_clothes_pin);
})