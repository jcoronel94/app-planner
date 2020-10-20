<template>
  <article class="post">
    <div class="activity-title-wrapper">
      <h4 class="activity-title">{{ activity.title }}</h4>
      <i @click="isMenuDisplayed=!isMenuDisplayed" class="fas fa-cog activity-settings" />
    </div>
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
    <div v-if="isMenuDisplayed" class="activity-control">
      <a @click="$emit('toggle-update', true)" class="button is-warning">Edit</a>
      <a @click = "deleteActivity" class="button is-danger">Delete</a>
    </div>
  </article>
</template>

<script>
import textUtility from "@/mixins/TextUtility";
import store from '@/store'

export default {
  mixins: [textUtility],
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
  data() {
    return {
      isMenuDisplayed: false
    };
  },
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
  },
  methods:{
      deleteActivity(){
          store.deleteActivity(this.activity)
      }
  }
};
</script>


<style lang="scss" scoped>
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

.activity-title {
  margin-bottom: 5px;
  display: inline-block;
}

.activity-settings {
  float: right;
  font-size: 22px;

  &:hover {
    cursor: pointer;
  }
}

.activity-control {
  margin: 20px 0 0 0;
  a {
    margin-right: 5px;
  }
}
</style>