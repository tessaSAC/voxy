<template>
  <div id="app">
    <SpeakerCard
      v-for="({ starred, details, website, twitter, imgUrl }, speaker) in speakers"
      :key="speaker"
      :name="speaker"
      :starred="starred"
      :details="details"
      :website="website"
      :twitter="twitter"
      :imgUrl="imgUrl"
    />
  </div>
</template>

<script>
import SpeakerCard from "./components/SpeakerCard.vue";

export default {
  name: "app",

  components: {
    SpeakerCard
  },

  data: _ => ({
    speakers: {
      'Jen Whiler': {
        starred: true,
        details: {
          Location: 'Boston',
          Topics: 'Vue.js, NativeScript',
        },
        website: 'whilejen.com',
        twitterHandle: 'whileyouwereaway',
      },

      'Excellent Diane': {
        starred: false,
        details: {
          Location: 'Argentina',
          Topics: 'Vue.js, catscatscats',
        },
        website: 'dianeissuper.net',
        twitterHandle: 'suberbdina',
      },
    },
  })
}
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;

  .SpeakerCard {
    + .SpeakerCard {
      margin-top: 40px;
    }
  }
}
</style>
