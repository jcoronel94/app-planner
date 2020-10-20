import fakeApi from '@/lib/FakeApi'

const genereateUID = () => Math.floor(new Date() * Math.random())

export const fetchActivities = () => {
    return fakeApi.get('activities' , {force:1})
}

export const fetchCategories = () => {
    return fakeApi.get('categories', {force:1})
}

export const deleteActivityAPI = (activity) => {
    return fakeApi.delete('activities', activity)
}

export const fetchUsers = () => {
    return {
        name: "Filip Jerga",
        id: "-Aj34jknvncx98812"
    }
}

export const createActivityAPI = (activity) => {


    activity.id = genereateUID()
    activity.progress = 0;
    activity.createdAt = new Date()
    activity.updatedAt = new Date()

    return fakeApi.post('activities', activity)
}