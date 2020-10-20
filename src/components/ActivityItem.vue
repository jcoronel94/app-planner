<template>
  <div>
    <ActivityItemUpdate
      v-if="isUpdateActive"
      :activity="activity"
      :categories="categories"
      @toggle-update="changeUpdateState"
    />
    <ActivityItemDetail
      v-else
      :activity="activity"
      :categories="categories"
      @toggle-update="changeUpdateState"
    />
  </div>
</template>

<script>
import ActivityItemDetail from "./ActivityItemDetail";
import ActivityItemUpdate from "./ActivityItemUpdate";

export default {
  components: {
    ActivityItemDetail,
    ActivityItemUpdate,
  },
  props: {
    activity: {
      required: true,
      type: Object,
    },
    categories: {
      required: true,
      type: Object,
    },
  },
  data() {
    return {
      isUpdateActive: false,
    };
  },
  methods: {
    changeUpdateState(isUpdate) {
      this.isUpdateActive = isUpdate;
    },
  },
};
</script>


<style lang="scss" scoped>
</style>