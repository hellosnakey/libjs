var isCSS3Supported = function(css, el){
    var pre = ['', '-ms-', '-moz-', '-webkit-', '-khtml-', '-o-'],
	    reg = /-([a-z])/g;
		return function(css, el){
		    el = el ||document.documentElement;
			var style = el.style, prop;
			for(var i=0, len=pre.length; i < len; i++){
			    prop = (pre[i] + css).replace(reg, function($0, $1){
				    return $1.toUpperCase();
				});
				if(prop in style){
				    return true;
				}
			}
			return false;
		}
}();