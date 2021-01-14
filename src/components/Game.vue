<template>
  <button v-on:click="getGame()">Start</button>
</template>

<script>
import {mapGetters} from 'vuex';
import $ from "jquery";
export default {
  name: "Game",
  data : function() {
    return {
      canvas: null,
      ctx: null,
      map: {
        mapfirstx: [],
        mapfirsty: [],
        maplastx: [],
        maplasty: []
      },
      tank_player1: {
        Name: [],
        x:0,
        y:0,
        dx:150,
        dy:-50
      },
      tank_player2: {
        Name:[],
        x:0,
        y:0,
        dx:150,
        dy:-50
      },
      img: null
    }
  },
  mounted() {
    this.canvas = document.getElementById("mycanvas");
    this.ctx = this.canvas.getContext('2d');
  },
  created() {
    const image = new window.Image();
    image.src = "https://i.postimg.cc/PJJxDhYL/tank-icon.png";
    image.onload = () => {
      this.img = image;
    };
  },
  computed: {
    ...mapGetters({
      Game: "Game"
    })
  },
  methods: {
    getGame: function() {
      console.log(this.Game);
      this.tank_player1.Name.push(this.Game.game.player1.name);
      this.tank_player2.Name.push(this.Game.game.player2.name);
      this.tank_player1.x = this.Game.game.player1.posx * 16; // ~15 -> 240 (16)
      this.tank_player1.y = this.Game.game.player1.posy * 32; // ~11 -> 350 (32)
      this.tank_player2.x = this.Game.game.player2.posx * 13; // ~88 -> 1100 (13)
      this.tank_player2.y = this.Game.game.player2.posy * 39; // ~9 -> 350 (39)
      /**
      for (let i = 0; i < this.Game.game.map.length - 1; i++) {
        this.map.mapfirstx.push(this.Game.game.map[i][0] + 240); // get the x value out of the array of arrays, 0 -> +240 (scale)
        this.map.mapfirsty.push(this.Game.game.map[i][1] * 35); // get the y value out of the array of arrays, 10 -> *35 = 350 (scale)
      }
      this.map.maplastx.push(this.Game.game.map[this.Game.game.map.length - 1][0] * 11); // ~100 -> 1100 (11)
      this.map.maplasty.push(this.Game.game.map[this.Game.game.map.length - 1][1] * 35); // 10 -> 350 (35) */
      this.tankGame();
    },
    tankGame: function () {
      setInterval(() => {
        this.drawGame(this.map.mapfirstx[0], this.map.mapfirsty[0], this.map.maplastx, this.map.maplasty);
      }, 1);
    },
    drawGame: function (X1, Y1, X2, Y2) {
      this.ctx.clearRect(0,0,1100,600);
      this.ctx.drawImage(this.img, this.tank_player1.x - this.tank_player1.dx, this.tank_player1.y - this.tank_player1.dy);
      this.flip(this.img);
      //this.drawing(X1, Y1, X2, Y2);
    },
    flip(img) {
      this.ctx.translate(this.tank_player2.x - this.tank_player2.dx, this.tank_player2.y - this.tank_player2.dy);
      this.ctx.scale(-1, 1);
      this.ctx.drawImage(img, 0, 0);
      this.ctx.setTransform(1,0,0,1,0,0);
    },
    drawing(X1, Y1, X2, Y2) {
      this.ctx.beginPath();
      this.ctx.moveTo(X1, Y1);
      this.ctx.lineTo(X2, Y2);
      this.ctx.stroke();
    }
  }
}
</script>

<style scoped>

</style>