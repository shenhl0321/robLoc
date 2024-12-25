import Vue from 'vue'



Vue.filter('stringToSafe', (value, holder='未填写')=>{
	if(value == null || value.length == 0){
		return holder
	}else{
		return value
	}
})


Vue.filter('objectAtIndex', (value, index)=>{
	if(index - 1 > value.length){
		console.log('系统内部错误--------数组越界')
		return '数组越界'
	}else{
		return value[index]
	}
})

Vue.filter('dictionaryAtCode',(value,itemArr,holder='未选择')=>{
	
	if(value == null){
		return holder
	}
	let items = itemArr.filter(function(e){
		return e.code == value
	})
	if(items.length == 1){
		let sel = items[0]
		return sel.desc
	}else{
		return holder
	}
})