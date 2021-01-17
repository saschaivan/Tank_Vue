<template>
  <v-container id="menucontainer">
    <Header></Header>
    <v-row>
      <button class="menubutton" @click="getGame(); getMap();">Start</button>
    </v-row>
    <v-row>
      <button class="menubutton" @click="$router.push('about')">About</button>
    </v-row>
    <v-row>
      <button class="menubutton" @click="$router.push('controls')">Controls</button>
    </v-row>

    <Footer></Footer>
  </v-container>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {mapActions, mapGetters} from "vuex";
export default {
  name: "TankMenu",
  components: {Footer, Header},
  computed: {
    ...mapGetters({
      Game: "Game"
    }),
    ...mapGetters({
      Map: "Map"
    })
  },
  methods: {
    ...mapActions({
      getGame: "getGame"
    }),
    ...mapActions({
      getMap: "getMapCoordinates"
    })
  },
  watch: {
    Game: function () {
      this.$router.push('game')
    },
    Map: function() {
      this.$router.push('game')
    }
  }
}
</script>
