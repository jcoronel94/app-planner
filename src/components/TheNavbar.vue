<template>
  <nav class="navbar is-white">
    <div class="container">
      <div class="navbar-menu">
        <div class="navbar-start">
          <a
            :class="{ 'is-active': filterOption === 'all' }"
            @click="emitFilter('all')"
            class="navbar-item"
            href="#"
            >Newest</a
          >
          <a
            :class="{ 'is-active': filterOption === 'inprogress' }"
            @click="emitFilter('inprogress')"
            class="navbar-item"
            href="#"
            >In Progress</a
          >

          <a
            :class="{ 'is-active': filterOption === 'notstarted' }"
            @click="emitFilter('notstarted')"
            class="navbar-item"
            href="#"
            >Not Started</a>

          <a
            :class="{ 'is-active': filterOption === 'finished' }"
            @click="emitFilter('finished')"
            class="navbar-item"
            href="#"
            >Finished</a
          >
          
        </div>
      </div>
    </div>
  </nav>
</template>


<script>
export default {
  data() {
    return {
      filterOption: "all",
    };
  },
  methods: {
    emitFilter(op) {
      this.filterOption = op;
      this.$emit("filterSelected", op);
    },
  },
};
</script>


<style scoped>
</style>