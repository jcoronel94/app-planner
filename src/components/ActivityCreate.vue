<template>
  <div class="activity">
    <a
      v-if="!isFormDisplayed"
      @click="toggleFormDisplay"
      class="button is-primary is-block is-alt is-large"
      href="#"
    >New Activity</a>
    <div v-if="isFormDisplayed" class="create-form">
      <h2>Create Activity</h2>
      <form>
        <div class="field">
          <label class="label">Title</label>
          <div class="control">
            <input v-model="newActivity.title" class="input" type="text" placeholder="Read a Book" />
          </div>
        </div>

        <div class="field">
          <label class="label">Notes</label>

          <div class="control">
            <textarea
              v-model="newActivity.notes"
              class="textarea"
              placeholder="Write some notes here"
            ></textarea>
          </div>
        </div>
        <div class="field">
          <label class="label">Category</label>

          <div class="control">
            <select v-model="newActivity.category" class="select">
              <option disabled value>Please select one</option>
              <option
                :key="category.id"
                :value="category.id"
                v-for="category in categories"
              >{{category.text}}</option>
            </select>
          </div>
        </div>

        <div class="field is-grouped">
          <div class="control">
            <button
              :disabled="!isFormValid"
              @click.prevent="createActivity"
              class="button is-link"
            >Create Activity</button>
          </div>
          <div class="control">
            <button @click="toggleFormDisplay" class="button is-text">Cancel</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>


<script>
import { createActivityAPI } from "@/api";

export default {
  props: {
    categories: {
      Type: Object
    }
  },
  data() {
    return {
      isFormDisplayed: false,
      newActivity: {
        title: "",
        notes: "",
        category: ""
      }
    };
  },
  methods: {
    toggleTextDisplay() {
      this.isTextDisplayed = !this.isTextDisplayed;
    },

    toggleFormDisplay() {
      this.isFormDisplayed = !this.isFormDisplayed;
    },
    resetActivity() {
      this.newActivity = { title: "", notes: "", category: "" };
      this.isFormDisplayed = false;
    },

    createActivity() {
  
      createActivityAPI({ ...this.newActivity }).then(activity => {
        console.log(activity)
        this.resetActivity()
        this.$emit("activityCreated", { ...activity });
      });
    }
  },
  computed: {
    isFormValid() {
      return (
        this.newActivity.title &&
        this.newActivity.notes &&
        this.newActivity.category
      );
    }
  }
};
</script>


<style scoped>
</style>