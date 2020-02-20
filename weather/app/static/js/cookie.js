/*! js-cookie v3.0.0-beta.3 | MIT */
!(function(e, t) {
	'object' == typeof exports && 'undefined' != typeof module
		? (module.exports = t())
		: 'function' == typeof define && define.amd
			? define(t)
			: ((e = e || self),
				(function() {
					var n = e.Cookies,
						r = (e.Cookies = t());
					r.noConflict = function() {
						return (e.Cookies = n), r;
					};
				})());
})(this, function() {
	'use strict';
	var e = {
		read  : function(e) {
			return e.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent);
		},
		write : function(e) {
			return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g, decodeURIComponent);
		}
	};
	function t(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) e[r] = n[r];
		}
		return e;
	}
	return (function n(r, o) {
		function i(e, n, i) {
			if ('undefined' != typeof document) {
				'number' == typeof (i = t({}, o, i)).expires && (i.expires = new Date(Date.now() + 864e5 * i.expires)),
					i.expires && (i.expires = i.expires.toUTCString()),
					(n = r.write(n, e)),
					(e = encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape));
				var c = '';
				for (var u in i) i[u] && ((c += '; ' + u), !0 !== i[u] && (c += '=' + i[u].split(';')[0]));
				return (document.cookie = e + '=' + n + c);
			}
		}
		return Object.create(
			{
				set            : i,
				get            : function(t) {
					if ('undefined' != typeof document && (!arguments.length || t)) {
						for (var n = document.cookie ? document.cookie.split('; ') : [], o = {}, i = 0; i < n.length; i++) {
							var c = n[i].split('='),
								u = c.slice(1).join('=');
							'"' === u[0] && (u = u.slice(1, -1));
							try {
								var f = e.read(c[0]);
								if (((o[f] = r.read(u, f)), t === f)) break;
							} catch (e) {}
						}
						return t ? o[t] : o;
					}
				},
				remove         : function(e, n) {
					i(e, '', t({}, n, { expires: -1 }));
				},
				withAttributes : function(e) {
					return n(this.converter, t({}, this.attributes, e));
				},
				withConverter  : function(e) {
					return n(t({}, this.converter, e), this.attributes);
				}
			},
			{ attributes: { value: Object.freeze(o) }, converter: { value: Object.freeze(r) } }
		);
	})(e, { path: '/' });
});
