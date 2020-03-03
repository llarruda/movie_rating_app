<template>
  <v-layout row wrap>
    <v-flex xs12>
      <div>{{ message }}</div>
      <!-- <div v-text="motto"></div> -->
    </v-flex>
    <v-flex xs12>
      <v-btn color="primary" v-on:click="reply">Reply</v-btn>
    </v-flex>
  </v-layout>
</template>
<script>
export default {
  data() {
    return {
      message: 'Hello there, how are you this morning?',
      // motto: 'The sum of all fears',
    };
  },
  methods: {
    reply() {
      this.message = "I'm doing great. Thank You!";
    },
  },
};
</script>
<style>
  #inspire {
    background-color: slategray !important;
  }
</style>
