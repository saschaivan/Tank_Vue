Skip to content
Search or jump to…

Pull requests
Issues
Marketplace
Explore

@saschaivan
npely
/
trailrunner-pwa
1
0
0
Code
Issues
Pull requests
Actions
Projects
Wiki
Security
Insights
trailrunner-pwa/src/components/Header.vue
@npely
npely setup new vue frontend project for TrailRunner
Latest commit 0466210 27 days ago
History
1 contributor
33 lines (31 sloc)  873 Bytes

<template>
  <div id="Tank-header">
    <h1>
      Tank
    </h1>
  </div>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style scoped>
  #Tank-header {
    border: none;
    background: none;
    font-family: "Trebuchet MS", Helvetica, sans-serif;
    letter-spacing: 3.2px;
    word-spacing: -0.2px;
    font-weight: normal;
    text-decoration: none;
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
    height: 350px;
  }

  #Tank-header h1 {
    font-size: 100px;
    padding-top: 70px;
  }

  @media(max-width: 1500px) {
    #Tank-header {
      height: 300px;
    }
    #Tank-header h1 {
      font-size: 80px;
      padding-top: 60px;

    }
  }

  @media(max-width: 800px) {
    #Tank-header {
      height: 250px;
    }
    #Tank-header h1 {
      font-size: 60px;
      padding-top: 40px;
      height: 100px;
    }
  }
</style>

