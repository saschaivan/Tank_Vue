<template>
  <div class="text-center">
    <v-carousel>
      <v-carousel-item
          v-for="(item,i) in items"
          :key="i"
          :src="item.src"
          reverse-transition="fade-transition"
          transition="fade-transition"
      ></v-carousel-item>
    </v-carousel>
    <h3 class="introduction">
      Tank is a artillery strategy game where two players battle against each other on a 2D landscape map. <br>
      Each player has their own tank with 100 life points. Upon hitting the target the player loses 10 life points.
      You win if the other player has 0 life points left.
    </h3>

    <h3 class="introduction">
      The idea for the project came because there is another popular game called Shellshock live. <br>
      This is much more complicated because there are many different weapons and items you can collect, <br>
      but we wanted to implement our own version of this game. In our version there are only 2 Maps, <br>
      no items to collect, no different weapons to choose from, but you can drive, shoot and enjoy the
      good music while playing.
    </h3>

  </div>
</template>

<script>
export default {
  data () {
    return {
      items: [
        {
          src: 'background_tank.jpg',
        },
        {
          src: 'ank_mainpage.png',
        },
        {
          src: 'tank_gamepage1.png',
        },
      ],
    }
  },
}
</script>
