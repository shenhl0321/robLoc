(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["package_home/common/vendor"],{

/***/ 354:
/*!*******************************************************************************************************!*\
  !*** /Users/shenhl/Desktop/uniapp/外包项目/robLoc/uni-seat/package_home/components/seat/seat-position.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _request = __webpack_require__(/*! ../../../utils/js/request.js */ 33);
var _default = {
  props: {
    val: {
      type: Object
    }
  },
  data: function data() {
    return {
      list: [],
      animation: false,
      icon: ''
    };
  },
  mounted: function mounted() {
    this.reloadData();
  },
  destroyed: function destroyed() {
    this.animation = false;
  },
  watch: {
    val: function val(e) {
      this.reloadData();
    }
  },
  computed: {
    iconPath: function iconPath() {
      if (this.$store.state.seat != null && this.$store.state.seat.id == this.val.id) {
        return '/static/hm_seat_sel.png';
      } else {
        return this.icon;
      }
    },
    statusClassName: function statusClassName() {
      if (this.$store.state.seat != null && this.$store.state.seat.id == this.val.id) {
        return 'ownerSelected';
      } else {
        if (this.val.status == 2) {
          return 'enable';
        } else {
          if (this.val.date_type == 1) {
            return 'upSelected';
          } else if (this.val.date_type == 2) {
            return 'downSelected';
          } else if (this.val.date_type == 3) {
            return 'selected';
          } else {
            return 'normal';
          }
        }
      }
    }
  },
  methods: {
    reloadData: function reloadData() {
      if (this.val != null && this.val.user != null) {
        if (this.val.user.length > 0) {
          this.list = this.val.user;
          this.list.map(function (e) {
            e.avatar = _request.uniConfig.baseUrl + e.avatar;
          });
          this.icon = this.list[0].avatar;
          if (this.list.length == 2) {
            this.animation = true;
            this.iconChange();
          } else {
            this.animation = false;
          }
        } else {
          this.list = this.val.user;
          this.icon = '';
          this.animation = false;
        }
      }
    },
    iconChange: function iconChange() {
      var that = this;
      setTimeout(function () {
        if (that.icon === that.list[0].avatar) {
          that.icon = that.list[1].avatar;
        } else {
          that.icon = that.list[0].avatar;
        }
        if (that.animation == true) {
          that.iconChange();
        }
      }, 1000);
    },
    didUserHeaderIcon: function didUserHeaderIcon(e) {
      if (this.icon.length > 0) {
        var that = this;
        var userInfo = this.list.find(function (e) {
          return that.icon == e.avatar;
        });
        uni.$emit('userInfo', userInfo);
      } else {
        uni.$emit('seatDidChange', this.val);
      }
    },
    didDeskTapSeat: function didDeskTapSeat(e) {
      uni.$emit('seatDidChange', this.val);
    }
  }
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ })

}]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/package_home/common/vendor.js.map