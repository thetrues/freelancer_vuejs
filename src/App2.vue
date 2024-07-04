<script>
export default {
  data() {
    return {
      name: 'Samweli',
      status: 'active',
      tasks: ['Task One', 'Task two', 'Task three'],
      link: 'www.google.com'
    }
  },
  methods: {
    toggleStatus() {
      if (this.status === 'active') {
        this.status = 'pending'
      } else if (this.status == 'pending') {
        this.status = 'inactive'
      } else {
        this.status = 'active'
      }
      console.log(this.status)
    }
  }
}
</script>
<template>
  <h1>{{ name }}</h1>
  <p v-if="status == 'active'">User is active</p>
  <p v-else-if="status === 'pending'">User is pending</p>
  <p v-else>User is inactive</p>

  <h3>Tasks:</h3>
  <ul>
    <li v-for="task in tasks" :key="task">{{ task }}</li>
  </ul>
  <a :href="link">Click for google</a>
  <br />
  <button v-on:click="toggleStatus">Change Status</button>
</template>
