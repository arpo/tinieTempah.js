/*
 * tinyTemp
 * @version 0.1
 *
 * @author Mattias Johansson
 * @copyright Copyright 2017, Licensed GPL & MIT
 */

var tTemp = {
	startTag: '{{',
	endTag: '}}',
	get: function (id) {
		return document.getElementById('templ-' + id).innerHTML;
	},
	put: function (pattern, inserts) {
		var rv = pattern,
			prop;
		for (prop in inserts) {
			rv = rv.split(this.startTag + prop + this.endTag).join(inserts[prop]);
		}
		return rv;
	},
	render: function (input, inserts) {
		var pattern = input;
		if (input.indexOf(this.startTag) === -1) {
			pattern = this.get(input);
		}

		var rv = '';
		if (inserts instanceof Array) {
			var len = inserts.length,
				i;
			for (i = 0; i < len; i += 1) {
				rv += this.put(pattern, inserts[i]);
			}
		} else {
			rv = this.put(pattern, inserts);
		}
		return rv;
	}
};