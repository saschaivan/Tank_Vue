<template>
  <div id="container">
    <div id="player1">
      <label>{{ player_data.player1 }}</label>
      <br>
      <label>{{ player_data.player1life }}</label>
      <br>
      <label>{{ player_data.player1angle }}</label>
    </div>
    <div class="game">
      <div class="map">
        <div id="gameMap">
          <canvas id="mycanvas" width="1100" height="600"></canvas>
          <Game></Game>
        </div>
      </div>
    </div>
    <div id="player2">
      <label>{{ player_data.player2 }}</label>
      <br>
      <label>{{ player_data.player2life }}</label>
      <br>
      <label>{{ player_data.player2angle }}</label>
    </div>
  </div>
</template>

<script>
import Game from "@/components/Game";
import {mapGetters} from "vuex";
export default {
  name: "Tank",
  components: { Game },
  data() {
    return {
      player_data: {
        player1: "",
        player2: "",
        player1life: "",
        player1angle: "",
        player2life: "",
        player2angle: ""
      }
    }
  },
  computed: {
    ...mapGetters({
      Game: "Game"
    })
  },
  created() {
      this.player_data.player1 = this.Game.game.player1.name;
      this.player_data.player2 = this.Game.game.player2.name;
      this.player_data.player1life = this.Game.game.tank.life1;
      this.player_data.player2life = this.Game.game.tank.life2;
      this.player_data.player1angle = this.Game.game.tank.angle1;
      this.player_data.player2angle = this.Game.game.tank.angle2;
  },
  methods: {
  }
}
</script>

<style scoped>

</style>