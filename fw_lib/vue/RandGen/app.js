const app = Vue.createApp({
    // template: '<h1>Hello </h1>'
    data() {
        return {
          firstName: "John",
          lastName: "Doe",
          email: "john@gmail.com",
          gender: "male",
          picture: "https://randomuser.me/api/portraits/men/61.jpg"
        }
    },
    methods: {
    async getUser() {
      const res = await fetch('https://randomuser.me/api')
      const {results} = await res.json() // destructuring, res has 'results' and 'info' we 
      //only need results
        this.firstName = results[0].name.first
        this.lastName = results[0].name.last
        this.email = results[0].email
        this.gender = results[0].gender
        this.picture = results[0].picture.large
    },
  }
})

app.mount('#app') // app is the div in index.html