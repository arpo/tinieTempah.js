/*
 * tinieTempah.js
 * @version 1.01
 *
 * @author Mattias Johansson
 * @Copyright 2017, Licensed GPL & MIT
 */

var tTemp = {
	sTag: '{{',
	eTag: '}}',
	get: function (id) {
		return document.getElementById('templ-' + id).innerHTML;
	},
	put: function (pattern, inserts) {
		var rv = pattern,prop;
		for (prop in inserts) rv = rv.split(this.sTag + prop + this.eTag).join(inserts[prop]);
		return rv;
	},
	render: function (pattern, inserts) {

		if (pattern.indexOf(this.sTag) === -1) pattern = this.get(pattern);
		var rv = '';
		if (inserts instanceof Array) {
			var len = inserts.length,i;
			for (i = 0; i < len; i += 1) rv += this.put(pattern, inserts[i]);
		} else {
			rv = this.put(pattern, inserts);
		}
		return rv;
	}
};