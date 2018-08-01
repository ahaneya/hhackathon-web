<script>
  // 
  export default {
    name: 'landing',
    data() {
      return {
        email: '',
        password: '',
        user: undefined,
      }
    },
    created() {


    },

    methods: {
      login() {
        const {
          email,
          password
        } = this
        if (email === 'user@hack.code', password === '123') {
          const user = {
            id: '121qwsaxsx',
            username: 'just-user',
            email: 'user@hack.code'
          }
          this.$router.push({
            name: 'main',
            params: {
              user
            }
          })
        }


      },
    }
  }
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <div class="jumbotron">
          <h1 class="display-3 text-dark">Select a Service</h1>
        </div>
      </div>
    </div>
    <div class="container">
    <div class="row">
      <div class="col">
      </div>
      <div class="col-lg-6 col-md-8 col-sm-12 col-xm-12">
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1">Email</span>
          </div>
          <input type="text" class="form-control" placeholder="Email" aria-label="Username" aria-describedby="basic-addon1" v-model="email">
        </div>
      </div>
      <div class="col">
      </div>
    </div>
        <div class="row">
      <div class="col">
      </div>
      <div class="col-lg-6 col-md-8 col-sm-12 col-xm-12">
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1">Password</span>
          </div>
          <input type="password" class="form-control" placeholder="Password" aria-label="Password" aria-describedby="basic-addon1" v-model="password">
        </div>
      </div>
      <div class="col">
      </div>
    </div>
    <div class="row">
      <div class="col">
      </div>
      <div class="col-lg-6 col-md-8 col-sm-12 col-xm-12">
        <p v-if='user'>welcome {{ user.email}}</p>
        <button type="button" class="btn btn-lg btn-block btn-dark" v-on:click='login()'>login</button>
      </div>
      <div class="col">
      </div>
    </div>


  </div>
  </div>
</template>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 0;
  }
  .btn {
    margin-top: 10px;
  }
  


  @media only screen and (max-width:480px){
  h1.display-3{
    font-size: 3.5rem;
  }
}
</style>