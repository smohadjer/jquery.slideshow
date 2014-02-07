jquery.slideshow
================

A responsive touch-friendly slideshow based on jQuery

<h3>Examples</h3>
<ul>
	<li><a href="http://repos.saeidmohadjer.com/jquery.slideshow/demo/slideshow.html">Minimal</a></li>
	<li><a href="http://repos.saeidmohadjer.com/jquery.slideshow/demo/slideshow_images.html">with image preloading</a></li>
	<li><a href="http://repos.saeidmohadjer.com/jquery.slideshow/demo/slideshow_tabs_bullet.html">auto-generated tabs (bullets)</a></li>
	<li><a href="http://repos.saeidmohadjer.com/jquery.slideshow/demo/slideshow_tabs_text.html">labeled tabs</a></li>
	<li><a href="http://repos.saeidmohadjer.com/jquery.slideshow/demo/slideshow_thumbs.html">thumbnails</a></li>
	<li><a href="http://repos.saeidmohadjer.com/jquery.slideshow/demo/slideshow_multiple_responsive.html">multiple visible slides</a></li>
	<li><a href="http://repos.saeidmohadjer.com/jquery.slideshow/demo/slideshow_variable_height.html">variable height</a></li>				
</ul>

<h3>Features</h3>
<ul>
	<li>Supports any type of content (HTML, images, videos, etc.)</li>
	<li>Ability to easily modify look and feel via HTML and CSS adjustments</li>
	<li>Navigational tabs can be auto-generated or manually inserted in markup</li>
	<li>Ability to display multiple slides simultaneously</li>
	<li>Supports responsive layouts</li>
	<li>Supports touch devices</li>
	<li>Supports endless looping</li>
	<li>bookmarking support for each slide via hash tag in URL</li>
	<li>Supports custom easing via jquery easing plugin</li>
</ul>

<h3>API</h3>
<ul>
	<li><strong>autoplay</strong>: false [true]</li>
	<li><strong>autoplay_start_delay</strong>: 0, time in miliseconds that it takes for autoplay to start</li>
	<li><strong>callback</strong>: a function that runs when slide buttons are clicked.</li>						
	<li><strong>displayTime</strong>: 3000, is used only when autoplay is set to true and indicates the amount of time a slide stays on screen</li>
	<li><strong>easing</strong>: "swing" ["easeOutCubic", "easeOutQuart", "easeOutQuad", ...], using jquery.easing.1.3.js</li>
	<li><strong>id</strong>: id of slideshow container (a required parameter)</li>
	<li><strong>loader_image</strong>: "img/loader.gif", path to image to be used as loader</li>
	<li><strong>loop</strong>: true [false]</li>
	<li><strong>preload_images</strong>: true [false], Set this to false if you have specified a width for div.slide in CSS as then there is no need to wait for all images to load first which otherwise is required in order to calculate the width of each slide. This parameter relies on jquery.imagesloaded.js plugin which is included in slideshow.min.js.</li>
	<li><strong>slide_is_as_wide_as_slideshow</strong>: true [false], by default slides inherit their width from their slideshow. If you want to have slides that are narrower than slideshow such as showing multiple slides simultanously then set this to false and use css to specify a width for your slides.</li>
	<li><strong>slideTab_has_value</strong>: false [true], by default slideshow generated tabs have no value, if set to true they would have integers as value.</li>
	<li><strong>startingSlideId</strong>: null, id of slide that should be used as starting slide</li>
	<li><strong>startingSlideNumber</strong>: 1, number of slide that should be used as starting slide</li>
	<li><strong>touch_drag</strong>: true [false], when set to false slides can NOT be dragged by mouse or swipped by touch.</li>
	<li><strong>transition_delay</strong>: 500, is in miliseconds and is the amount of time it takes for a slide to move to view, so the higher the value, the slower the animation would be.</li>				
	<li><strong>variableHeight</strong>: false [true], if true, slideshow's height is calculated dynamically</li>
	<li><strong>variableWidth</strong>: false [true], if true, slideshow's width is calculated dynamically</li>
	<li><strong>visibleSlidesCount</strong>: 1 [integer], if slideshow shows multiple slides simultanously, use this parameter to indicate how many slides are displayed at a time</li>
	<li><strong>slide_margin_right</strong>: 0 [integer], indicates the amount of right margin in percentage relative to width of div.wrapper when multiple slides are displayed and slideshow has variable width. This helps javascript to calculate the width of each slide.</li>						
</ul>
