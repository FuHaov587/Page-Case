new Vue({
  el: '.app',
  data: {
    list: [
      {name: '小米6', state: 0},
      {name: 'LV', state: 1},
      {name: 'mac', state: -1}
    ],
    name: ''
  },
  filters: {
    stateFormat: function (val){
      switch(val){
        case -1:
          return '未采购'
        case 0:
          return '采购中'
        case 1:
          return '已采购'
      }
    }
  },
  methods: {
    add(){
      if(this.name != ''){
        this.list.unshift({name: this.name,state: -1})
        this.name = ''
      }
    },
    del(index){
      //console.log(index
      this.list.splice(index,1)
    }
  },
  mounted(){
    this.$refs.name.focus()
  }
})