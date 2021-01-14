<template>
  <div id="container">
    <div class="game">
      <div class="map">
        <div id="gameMap">
          <Game></Game>
          <canvas id="mycanvas" width="1100" height="600"></canvas>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Game from "@/components/Game";
export default {
  name: "Tank",
  components: { Game }
}
</script>

<style scoped>

</style>