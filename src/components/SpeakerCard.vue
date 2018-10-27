<template>
<div class="SpeakerCard">
  <article class="info" :class="{ collapseInfo }">
      <header>
        <h1>{{ name }}</h1>
        <h1 @click="starred = !starred">{{ starred ? '⭐' : '☆' }}</h1>
      </header>

      <section v-for="(val, detail) in details" :key="detail">
        <h2>{{ detail }}</h2>
        <p>{{ val }}</p>
      </section>

      <div v-if="website || twitter" class="webPresence">
        <a v-if="website" :href="website">website</a>
        <div v-else> </div>
        <a v-if="twitterHandle" :href="twitter">🐦</a>
      </div>

      <div>
        <button>Contact Jen!</button>
      </div>
  </article>
  <div class="pic"
    @mouseover="expandPhoto = true"
    @mouseleave="expandPhoto = false"
  />
</div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },

    starred: {
      type: Boolean,
      default: false,
    },

    details: {
      type: Object,
      required: true,
    },

    website: {
      type: String,
      required: false,
    },

    twitterHandle: {
      type: String,
      required: false,
    },
  },

  data: _ => ({
    expandPhoto: false,
  }),

  computed: {
    collapseInfo() { return this.expandPhoto },

    twitter() {
      return this.twitterHandle ? `$twitter.com/{ this.twitterHandle }` : ''
    },
  },
}
</script>

<style lang="scss">
.SpeakerCard {
  overflow-x: hidden;

  width: 30rem;
  height: 18rem;

  border: 1px solid black;
  border-radius: 0.2rem;


  .pic {
    background-color: blue;
    height: 100%;
    width: 100%;
    // object-fit: cover;
    // object-position: 0;
  }

  .info {
    background-color: white;
    float: right;
    width: 60%;
    padding: 1rem 2rem;
    transition: 450ms ease-in-out;

    &.collapseInfo {
      transform: translate(100%);
    }
  }

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0;
  }

  section {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .webPresence {
    display: flex;
    justify-content: space-between;
  }
}
</style>

