<template>
  <button v-on:click="tankGame()">Start</button>
</template>



<script>
export default {
  name: "Game.vue",
  data : {
    canvas: null
  },
  mounted() {
    let c = $('#mycanvas')[0].getContext('2d');
    this.canvas = c;
    this.ctx1 = this.canvas;
  },
  methods: {
    tankGame: function () {
      setInterval(() => {
        this.drawGame(game.mapfirstx[0], game.mapfirsty[0], game.maplastx, game.maplasty)
      }, 1);
    },
    drawGame: function (X1, Y1, X2, Y2) {
      this.ctx1.clearRect(0,0,1100,600);
      this.ctx1.drawImage(img, tank_player1.x - tank_player1.dx, tank_player1.y - tank_player1.dy);
      this.flip(img);
      this.drawing(X1, Y1, X2, Y2);
    },
    flip(img) {
      this.ctx1.translate(tank_player2.x-tank_player2.dx, tank_player2.y-tank_player2.dy);
      this.ctx1.scale(-1, 1);
      this.ctx1.drawImage(img, 0, 0);
      this.ctx1.setTransform(1,0,0,1,0,0);
    },
    drawing(X1, Y1, X2, Y2) {
      this.ctx1.beginPath();
      this.ctx1.moveTo(X1, Y1);
      this.ctx1.lineTo(X2, Y2);
      this.ctx1.stroke();
    }
  }
}
</script>

<style scoped>

</style>