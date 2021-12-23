<template>
  <h1>{{ event }} Likes: {{ likes }}</h1>
  <div>
    <button @click="party">{{ event }}</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      event: "Party",
      likes: 0,
    };
  },
  methods: {
    party() {
      this.likes += 1;
    },
  },
};
</script>

<style lang="scss" scoped>
h1 {
  font-size: 50px;
  color: lightcoral;
}
div {
  button {
    border: 0;
    color: lightcoral;
    border-radius: 5px;
    padding: 10px 15px;
    cursor: pointer;
  }
}
</style>
