<template>
  <article class="post">
    <h4 class="title">{{ activity.title }}</h4>
    <p>{{textUtility_capitilize(categories[activity.category].text)}}</p>
    <p>{{activity.notes}}</p>
    <div class="media">
      <div class="media-left">
        <p class="image is-32x32">
          <img src="../assets/user.png" />
        </p>
      </div>

      <div class="media-content">
        <div class="content">
          <p>
            <a href="#">Filip Jerga</a>
            updated {{activity.updatedAt | prettyDate }} minutes ago &nbsp;
          </p>
        </div>
      </div>

      <div class="media-right">
        <span>
          Progress
          <span :class="'color-'+progressCheck">{{activity.progress}} %</span>
        </span>
      </div>
    </div>
  </article>
</template>

<script>

import textUtility from '@/mixins/TextUtility'

export default {
  props: {
    categories: {
      type: Object,
      required: true
    },
    activity: {
      type: Object,
      required: true
    }
  },
  mixins:[textUtility],
  computed: {
    progressCheck() {
      const progress = this.activity.progress;
      if (progress <= 0) {
        return "red";
      } else if (progress <= 50) {
        return "orange";
      } else {
        return "green";
      }
    }
  }
};
</script>


<style scoped>
.color-red {
  color: red;
}

.color-orange {
  color: orange;
}

.color-green {
  color: green;
}

.post .title {
  margin-bottom: 5px;
}
</style>