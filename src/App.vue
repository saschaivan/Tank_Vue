<template>
  <v-app>
    <router-view />
  </v-app>
</template>

<script>
  export default {
    created() {
      if (this.$workbox) {
        this.$workbox.addEventListener("waiting", () => {
          this.showUpgradeUI = true;
        });
      }
    },

    methods: {
      async accept() {
        this.showUpgradeUI = false
        await this.$workbox.messageSW({ type: "SKIP_WAITING" });
      }
    },
  }
</script>

<style>
  /* Menu */
  .menubutton {
    margin-left: auto;
    margin-right: auto;
    padding: 10px;
    text-align: center;
    display: inline-block;
    border: none;
    background: none;
    display: block;
    font-size: 50px;
    margin-bottom: 20px;
    letter-spacing: .1em;
    user-select: none;
    transition: text-shadow .3s ease .3s,
    transform .3s ease .3s,
    letter-spacing .3s ease .3s;
    font-style: italic;
    font-variant: small-caps;
    text-transform: uppercase;
    text-align: center;
    text-shadow: 1px 0px 1px #CCCCCC,
    0px 1px 1px #EEEEEE, 2px 1px 1px #CCCCCC,
    1px 2px 1px #EEEEEE, 3px 2px 1px #CCCCCC, 2px 3px 1px #EEEEEE,
    4px 3px 1px #CCCCCC, 3px 4px 1px #EEEEEE, 5px 4px 1px #CCCCCC,
    4px 5px 1px #EEEEEE, 6px 5px 1px #CCCCCC, 5px 6px 1px #EEEEEE, 7px 6px 1px #CCCCCC,
    26px 20px 2px rgba(206,89,55,0);
    color: #444444;
  }

  .menubutton:hover {
    transition: text-shadow .33s ease-in-out,
    transform .3s ease,
    letter-spacing .3s ease;
    background: none;
    text-shadow: 1px 0px 1px #CCCCCC,
    0px 1px 1px #EEEEEE, 2px 1px 1px #CCCCCC,
    1px 2px 1px #EEEEEE, 3px 2px 1px #CCCCCC, 2px 3px 1px #EEEEEE,
    4px 3px 1px #CCCCCC, 3px 4px 1px #EEEEEE, 5px 4px 1px #CCCCCC,
    4px 5px 1px #EEEEEE, 6px 5px 1px #CCCCCC, 5px 6px 1px #EEEEEE, 7px 6px 1px #CCCCCC,
    26px 20px 2px rgba(206,89,55,0);
    transform: translate(0px, 15px);
    letter-spacing: .125em;
  }

  .menubutton:focus {
    outline: none;
  }

  #menucontainer {
    background-image: url("assets/Game-Tank-Background-Free-Picture.jpg");
    background-size: cover;
    width: 100%;
    height: 100%;
  }

  @media(max-width: 1500px) {
    .menubutton {
      font-size: 40px;
      padding: 7px;
    }
  }

  @media(max-width: 800px) {
    .menubutton {
      font-size: 30px;
      padding: 5px;
    }
  }

  /* Game */
  .map {
    background-color: lightblue;
    padding:10px;
    margin: 0.5em;
    width: 1100px;
    height: 600px;
  }
  .game {
     border-color: black;
     margin-left: auto;
     margin-right: auto;
  }

  #container {
    width: 100%;
    height: 100%;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    display: flex;
    font-weight: bold;
    margin-top: 20px;
  }

  .gameplay_buttons {
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    padding: 0.5em;
  }

  #player2 {
    margin-right: auto;
    margin-left: auto;
    float: right;
  }

  #player1 {
    margin-right: auto;
    margin-left: auto;
    float: left;
  }

  #player1 label {
    font-size: 20px;
  }

  #player2 label {
    font-size: 20px;
  }

  @media(max-width: 1500px) {
    #mycanvas {
      width: 900px;
      height: 500px;
    }
    .map {
      width: 900px;
      height: 500px;
    }
  }

  @media(max-width: 800px) {
    #mycanvas {
      width: 700px;
      height: 400px;
    }
    .map {
      width: 700px;
      height: 400px;
    }
  }

  /* About */

  #aboutcontainer {
    width: 100%;
    height: 100%;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    display:flex;
    font-weight: bold;
    padding-left: 20px;
  }

  .h3 {
    min-height: 70%;
    font-size: 30px;
    font-weight: 100;
  }


  .intro-box {
    width: 100%;
    margin-bottom: 150px;
    margin-top: 50px;
    padding-left: 30px;
  }

  .playbuttons {
    margin-left: auto;
    margin-right: auto;

  }

</style>
