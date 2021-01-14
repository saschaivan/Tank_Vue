<template>

  <v-form>
    <v-container>
      <h1>
        Tank
      </h1>
      <v-row>
        <v-col
            cols="6"
            sm="6"
            md="6"
        >
          <v-text-field
              label="Player1"
              Player1
          ></v-text-field>
        </v-col>

        <v-col
            cols="6"
            sm="6"
            md="6"
        >
          <v-text-field
              label="Player2"
              placeholder="Placeholder"
              Player2
          ></v-text-field>
        </v-col>

        <v-col
            cols="6"
            sm="6"
            md="6"
        >
          <v-select
              v-model="select"
              :items="items"
              :rules="[v => !!v || 'Map is required']"
              label="Map"
              required
          ></v-select>
        </v-col>

        <v-col
            cols="12"
            sm="12"
            md="12"
        >
          <div class="text-center">
            <v-btn
                rounded
                color="primary"
                dark
            >
              Start!
            </v-btn>
          </div>
        </v-col>

      </v-row>
    </v-container>
  </v-form>
</template>

<script>
  export default {
    data: () => ({
      select: null,
      items: [
        'Wolfsschanze',
        'Gerade',
        'Sägezahnhügel',
      ],
    })
  }

</script>