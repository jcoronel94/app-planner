import fakeApi from '@/lib/FakeApi'
import Vue from 'vue'

const store = {
    state: {
        activities: {

        },
        categories: {

        }
    },


    genereateUID() {
        return Math.floor(new Date() * Math.random())
    },

    fetchActivities() {
        return fakeApi.get('activities', { force: 1 })
        .then(activities =>{
            Object.keys(activities).forEach((key)=>{
                this.setItem('activities', key, activities[key])
            })
            //this.state.activities = activities
            return activities
        })
    },

    fetchCategories() {
        return fakeApi.get('categories', { force: 1 })
        .then(categories =>{
            Object.keys(categories).forEach((key)=>{
                this.setItem('categories', key, categories[key])
            })
            console.log(categories)
            return categories
        })
    },
    fetchUsers() {
        return {
            name: "Filip Jerga",
            id: "-Aj34jknvncx98812"
        }
    },
    setItem(resource,id,item){
        Vue.set(this.state[resource], id,item)
    },

    deleteActivity(activity) {
        return fakeApi.delete('activities', activity)
            .then(deletedActivity =>{
                Vue.delete(this.state.activities, activity.id)
                return this.deleteActivity
            })
    },

    updateActivity(activity){
        activity.updatedAt = new Date()
        return fakeApi.post('activities', activity)
        .then(updatedActivity =>{
            this.setItem('activities', updatedActivity.id,updatedActivity)
            return updatedActivity
        })
    },


    createActivity(activity) {
        activity.id = this.genereateUID()
        activity.progress = 0;
        activity.createdAt = new Date()
        activity.updatedAt = new Date()

        return fakeApi.post('activities', activity)
            .then(createdActivity =>{
                this.setItem('activities', createdActivity.id, createdActivity)
                return createdActivity
            })
    }
}

export default store