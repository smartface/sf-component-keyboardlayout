const extend = require('js-base/core/extend');
const FlexLayout1Design = require('library/FlexLayout1');

const FlexLayout1 = extend(FlexLayout1Design)(
	// Constructor
	function(_super, props = {}, pageName) {
		// Initalizes super class for this scope
		_super(this, props);
		this.pageName = pageName;
	}
);

module.exports = FlexLayout1;
