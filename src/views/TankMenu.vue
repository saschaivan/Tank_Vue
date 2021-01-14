<template>
  <v-container id="menucontainer">
    <Header></Header>

    <!--
    <div class="input-name">
      <div id="data_player1">
        <input v-model="player_data.player1" id="player1_name" type="text" class="form-control" placeholder="SPIELER 1">
      </div>
      <div id="data_player2">
        <input v-model="player_data.player2" id="player2_name" type="text" class="form-control" placeholder="SPIELER 2">
      </div>
      <div id="test">
        <p>Name: {{ player_data.player1 }}</p>
        <p>Name: {{ player_data.player2 }}</p>
      </div>
    </div>
    -->
    <v-row>
      <button class="menubutton" @click="getGame(); getMap();">Start</button>
    </v-row>
    <v-row>
      <button class="menubutton" @click="$router.push('about')">About</button>
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
  data() {
    return {
      player_data: {
        player1: "",
        player2: ""
      }
    }
  },
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
