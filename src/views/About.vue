<template>
  <v-container>
    <v-carousel
        cycle
        height="800"
        hide-delimiter-background
        show-arrows-on-hover
    >
      <v-carousel-item
          v-for="(slide, i) in slides"
          :key="i"
          :src="slide.src"
          reverse-transition="fade-transition"
          transition="fade-transition"
      >
      </v-carousel-item>
    </v-carousel>
    <v-row>
      <div class="intro-box">
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
    </v-row>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      slides: [
        {
          src: 'https://i.postimg.cc/Y9b0jjGK/background-tank.jpg',
        },
        {
          src: 'https://i.postimg.cc/C52KHtsc/tank-gamepage1.png',
        },
        {
          src: 'https://i.postimg.cc/cLwJwFgc/tank-mainpage.png',
        },
      ],
    }
  },
}
</script>
