function outer(_name) {
	function inner(name) {
		return outer(name);
	};
	inner.title = _name;
	inner.twist = function(name) {
		return this(name);
	};
	return inner;
}
