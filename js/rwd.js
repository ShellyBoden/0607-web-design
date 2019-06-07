$(function () { 
    var tital_rwd = new ScrollMagic.Controller();

    var scene_tital_rwd = new ScrollMagic.Scene({
        triggerElement: "#rwd_door_trigger"
    })
    .setTween("#rwd_tital", 1, {opacity: 1}) // trigger a TweenMax.to tween
    .addIndicators({name: "對話框的淡入淡出"}) // add indicators (requires plugin)
    .addTo(tital_rwd);
})