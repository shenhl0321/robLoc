import {uniConfig} from '../../../../utils/js/request.js'
export default {
	
	props:{
		val : {
			type : Object,
		},
	},
	
	data(){
		return{
			list : [],
			animation : false,
			icon : '',
		}
	},
	
	mounted() {
		if(this.val != null &&  this.val.user != null && this.val.user.length > 0){
			this.list = this.val.user
			this.list.map(function(e){
				e.avatar = uniConfig.baseUrl + e.avatar
			})
			if(this.list.length == 2){
				this.animation = true
				this.iconChange()
			}
			this.icon = this.list[0].avatar
		}
		
	},
	
	destroyed() {
		this.animation = false
	},
	
	computed:{
		iconPath(){
			if(this.$store.state.seat != null && this.$store.state.seat.id == this.val.id){
				return '/static/hm_seat_sel.png'
			}else{
				return this.icon
			}
		},
		
		statusClassName(){
			if(this.$store.state.seat != null && this.$store.state.seat.id == this.val.id){
				return 'ownerSelected'
			}else{
				if(this.val.status == 2){
					return 'enable'
				}else{
					if(this.val.date_type == 1){
						return 'upSelected'
					}else if(this.val.date_type == 2){
						return 'downSelected'
					}else if(this.val.date_type == 3){
						return 'selected'
					}else{
						return 'normal'
					}
				}
			}
		},
	},
	
	methods:{
		iconChange(){
			let that = this
			setTimeout(function(){
				if(that.icon === that.list[0].avatar){
					that.icon = that.list[1].avatar
				}else{
					that.icon = that.list[0].avatar
				}
				console.log(that.icon)
				if(that.animation == true){
					that.iconChange()
				}
			}, 1000)
		},
		
		didUserHeaderIcon : function(){
			console.log(this.icon)
		},
		
		didTapSeat : function(e){
			uni.$emit('seatDidChange', this.val)
		}
	}
};