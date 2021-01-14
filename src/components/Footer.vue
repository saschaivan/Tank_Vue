<template>
  <v-footer dark absolute padless>
    <v-card class="flex" height="50">
      <v-card-text class="text-center">
        <span>
          More information about
          <a href="https://github.com/saschaivan/Tank" target="_blank">
            Tank Game
          </a>
        </span>
        <span>
          More information about
          <a
              href="https://github.com/saschaivan/Tank_Web"
              target="_blank"
          >
            Tank Server
          </a>
        </span>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style scoped>
.footer {
  background-color: #101010;
  position: fixed;
  height: 4%;
  width: 100%;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
}
.footer-item {
  color: grey;
  font-size: 0.5vw;
}
</style>