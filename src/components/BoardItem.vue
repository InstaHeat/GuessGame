<template>
    <span :class="classObject" @click="selectDot(item.id)"></span>
</template>

<script>
export default {

 props:['item', 'gameStatus' ],

  data() {
    return {
    }
  },

  computed: {
  classObject: function () {
      return {
        'item' : true,
        'show': this.item.value === 1 && this.gameStatus === 1 || this.item.selected && this.item.value === 1,
        'wrong': this.item.selected  && this.item.value === 0,
      }
    }
  },

  methods: {
    selectDot(id) {      
      if(this.gameStatus === 2) {
        this.$emit('selected', id);    
      }
    }
  },


}
</script>

<style>
.item {
    display: inline-block;
    background-color: #bdbebd;
    width: 60px;
    height: 60px;
    margin: 5px;
    transition: .3s;
    transform-style: preserve-3d;
    cursor: pointer;
}

.show {
  background-color: #009879;
  transform: rotateX(180deg);
  }

.wrong {
  background-color: #cc4e4e;
  transform: rotateX(180deg);
}

</style>
