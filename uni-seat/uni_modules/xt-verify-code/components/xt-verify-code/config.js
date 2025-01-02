export const propsMap = {
	// #ifdef VUE2
	value: {
		type: String,
		default: () => ''
	},
	// #endif
	
	// #ifdef VUE3
	modelValue: {
		type: String,
		default: () => ''
	},
	// #endif
	type: {
		type: String,
		default: () => 'bottom'
	},
	inputType: {
		type: String,
		default: () => 'number'
	},
	size: {
		type: Number,
		default: () => 4
	},
	isFocus: {
		type: Boolean,
		default: () => true
	},
	isPassword: {
		type: Boolean,
		default: () => false
	},
	cursorColor: {
		type: String,
		default: () => '#E9E9EA'
	},
	boxNormalColor: {
		type: String,
		default: () => '#E9E9EA'
	},
	boxActiveColor: {
		type: String,
		default: () => '#141D28'
	},
	color: {
		type: String,
		default: () => '#141D28'
	}
}