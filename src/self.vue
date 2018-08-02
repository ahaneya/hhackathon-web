<script>
//
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(VueAxios, axios);


export default {
  name: "self",
  data() {
    return {
      input: { text: "" },
      haj_info: [{}]
    };
  },
  created() {},

  mounted() {},

  methods: {
    pushToHome() {
      this.$router.push({
        name: "landing"
      });
    },

    pushToConfirm() {

        
        this.$router.push({
        name: "confirm"
        });
        
    },
    pushTo2() {
      this.$router.push({
        name: "serve"
      });
    },
    pushTo3() {
      this.$router.push({
        name: "looking"
      });
    },

    reset() {
      this.input.text = "";
      //console.log(this.input)
    },

    submitSearch() {
            this.axios.get("http://localhost:3000/queryById/haj_id=123456789").then(response => {
            this.haj_info = response.data
            console.log(response.data)
            console.log(response.data[0].haj_first_name);
            // console.log(response.data[0].superuser_id[0]);
        });
    }
  }
};
</script>

<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <div class="jumbotron">
                    <h1 class="display-3 text-dark">Enter Hajj ID</h1>
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
                            <span class="input-group-text" id="basic-addon1">Hajj ID</span>
                        </div>
                        <input v-model="input.text" type="text" class="form-control" placeholder="Hajj ID" aria-label="Hajj IDe" aria-describedby="button-addon2">
                        <div class="input-group-append">
                            <button class="btn btn-dark margin-top-remove" type="button" id="button-addon2" v-on:click="submitSearch()">Search</button>
                        </div>
                    </div>

                </div>
                <div class="col">
                </div>
            </div>
            <div class="row">
                <div class="col">
                </div>
                <div class="col-lg-6 col-md-8 col-sm-12 col-xm-12">
                    <p class="font-weight-bold" v-if="haj_info" > Hajj Name: {{ haj_info[0].haj_first_name }} {{ haj_info[0].haj_last_name}} </p>
                    <p class="font-weight-bold" v-if="haj_info"> Group Name: {{ haj_info[0].Superuser_id}} </p>
                </div>
                <div class="col">
                </div>
            </div>
            <div class="row">
                <div class="col">
                </div>
                <div class="col-lg-6 col-md-8 col-sm-12 col-xm-12">
                    <button type="button" class="btn btn-dark btn-md btn-block" v-on:click='pushToConfirm()'>Confirm & Submit</button>
                    <button type="button" class="btn btn-dark btn-md btn-block" v-on:click="reset()">Reset</button>

                </div>
                <div class="col">
                </div>
            </div>


        </div>
    </div>
</template>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0;
}

.btn {
  margin-top: 10px;
}

.margin-top-remove {
  margin-top: 0;
}

@media only screen and (max-width: 480px) {
  h1.display-3 {
    font-size: 2.5rem;
  }
}
</style>