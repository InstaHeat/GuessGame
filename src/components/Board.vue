<template>
  <div class="wrapper">
    <div class="board">
      <BoardItem :item="item"
          v-for="item in dots"
          :key="item.id"
          :gameStatus="gameStatus"
          @selected="selected"
        />
    </div>

    <div class="panel">
      <div class="panel-input">
        <span>Difficulty : {{this.diff}} </span>
        <div v-if="this.gameStatus === 4 "><span class="notification lose">You lose! Try again!</span></div>
        <div v-if="this.gameStatus === 3 "><span class="notification win">You WIN!</span></div>
      </div>
      <button class="button" :disabled="this.gameStatus === 1 " @click="start">Start</button>
    </div>
  </div>
</template>

<script>
import BoardItem from './BoardItem.vue'

    const DOT = {
        EMPTY: 0,
        FILLED: 1,
    }

    const DIFFICULTY = 3;
    const MAX_DIFFICULTY = 16;

    const GAME_STATUS = {
        NONE: 0,
        SHOW_DOTS: 1,
        STARTED: 2,
        WIN: 3,
        GAMEOVER: 4,
    }

    const timeMS = 2000;


export default {

    components: {
        BoardItem,
    },

    data() {
        return {
            dots: [],
            dotsLength: 25,
            gameStatus: GAME_STATUS.NONE,
            diff: DIFFICULTY,
            maxDiff: MAX_DIFFICULTY,
        }
    },

    created() {
        this.init();
    },

    methods: {
        //заполнили вообще массив id, val, select
    init() {
      this.dots = [];
      for (let i = 0; i < this.dotsLength; i++){
        this.dots.push( {
          id: i,
          value: 0,
          selected: DOT.EMPTY,
        });
      }
    },

    start() {
      this.init();
      this.setUpDots();

      setTimeout(() => {
        this.gameStatus = GAME_STATUS.STARTED
        }, timeMS);                     
    },

    rand(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    },

    setUpDots() {
      this.gameStatus = GAME_STATUS.SHOW_DOTS;

      for (let i = 0; i < this.diff; i++) {
        const index = this.rand(0, this.dotsLength - 1);

        if(this.dots[index].value !== DOT.FILLED ) {
          this.dots[index].value = DOT.FILLED;
        }
        else {
          i--;
          }
      }
    },

    selected(id) {
     const index = this.dots.findIndex((dot) => {
       return dot.id === id;
     });

      if(index > -1 && !this.dots[index].selected) {
        this.dots[index].selected = true;
        this.check();
      }
    },

    check() {
      const ErrorIndex = this.dots.findIndex((dot) => {
          return dot.selected && dot.value === DOT.EMPTY;
      });

      if(ErrorIndex > -1 ) {
          this.gameOver();
          return;
      }
      
      const notLastFounded = this.dots.findIndex((dot) => {
        return !dot.selected && dot.value === DOT.FILLED;
      })

      if(notLastFounded === -1) {
          this.win();
      }
    },

    win(){
        this.diff += 1;
        if(this.diff === MAX_DIFFICULTY) {
           this.gameStatus = GAME_STATUS.WIN;

          setTimeout(() => {
            this.gameStatus = GAME_STATUS.NONE;
            this.diff = DIFFICULTY;
            this.init();
        }, timeMS);
          return;
        }
        this.start();
    },

    gameOver() {
        this.gameStatus = GAME_STATUS.GAMEOVER;
        console.log('It seems you like to look into console :)')
         setTimeout( () => {
                            this.init();
                            this.diff = DIFFICULTY;
                            }, timeMS);
    },
  },
}
</script>

<style scoped>
.board {
    background-color: #e9e9e9;
    width: 352px;
    margin: 0 auto;
}

.panel {
  margin-top: 30px;
}

.panel-input {
  padding: 15px 0px;
  font-weight: 600;
  font-size: 18px;
}

.button {
  border: none;
  padding: 10px 15px;
  width: 120px;
  height: 50px;
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  background-color: #009879;
  cursor: pointer;
}

.button:disabled,
button[disabled] {

  border: none;
  padding: 10px 15px;
  width: 120px;
  height: 50px;
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  background-color: #88cebf;
  cursor: pointer;
}

.notification {
  font-size: 26px;
}

.win {
  color:#009879;
}

.lose {
  color:#c23232;
}
</style>
