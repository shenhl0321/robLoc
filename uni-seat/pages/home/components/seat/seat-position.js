
export default {
	
	props:{
		val : {
			type : Number,
		},
	},
	
	data(){
		return{
			list : ['/static/ic_header.png', '/static/logo.png'],
			animation : false,
			icon : '',
		}
	},
	
	mounted() {
		this.animation = true
		//this.iconChange()
	},
	
	destroyed() {
		this.animation = false
	},
	
	computed:{
		iconPath(){
			if(this.$store.state.seat == this.val){
				return '/static/hm_seat_sel.png'
			}else{
				return this.icon
			}
		},
		
		statusClassName(){
			if(this.$store.state.seat == this.val){
				return 'ownerSelected'
			}else if(this.state == 'enable'){
				return 'enable'
			}else if(this.state == 'otherSelected' || this.state == 'otherTopSelected' || this.state == 'otherBottomSelected'){
				return 'selected'
			}else{
				return 'normal'
			}
		},
	},
	
	methods:{
		iconChange(){
			let that = this
			setTimeout(function(){
				if(that.icon == that.list[0]){
					that.icon = that.list[1]
				}else{
					that.icon = that.list[0]
				}
				if(that.animation == true){
					that.iconChange()
				}
			}, 1000)
		},
		
		didTapSeat : function(e){
			uni.$emit('seatDidChange', this.val)
		}
	}
};