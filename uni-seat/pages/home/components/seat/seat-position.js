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
		this.reloadData()
	},
	
	destroyed() {
		this.animation = false
	},
	
	
	watch : {
		val(e){
			this.reloadData()
		}
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
		reloadData(){
			if(this.val != null &&  this.val.user != null){
				if(this.val.user.length > 0){
					this.list = this.val.user
					this.list.map(function(e){
						e.avatar = uniConfig.baseUrl + e.avatar
					})
					this.icon = this.list[0].avatar
					if(this.list.length == 2){
						this.animation = true
						this.iconChange()
					}else{
						this.animation = false
					}
					
				}else{
					this.list = this.val.user
					this.icon = ''
					this.animation = false
				}
			}
		},
		
		iconChange(){
			let that = this
			setTimeout(function(){
				if(that.icon === that.list[0].avatar){
					that.icon = that.list[1].avatar
				}else{
					that.icon = that.list[0].avatar
				}
				if(that.animation == true){
					that.iconChange()
				}
			}, 1000)
		},
		
		didUserHeaderIcon : function(e){
			if(this.icon.length > 0){
				let that = this
				let userInfo = this.list.find(function(e){
					return that.icon == e.avatar
				})
				uni.$emit('userInfo', userInfo)
			}else{
				uni.$emit('seatDidChange', this.val)
			}
			
		},
		
		didDeskTapSeat : function(e){
			uni.$emit('seatDidChange', this.val)
		}
	}
};