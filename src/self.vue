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
      showInfo: true,
      loading: false,
      status: "",
      input: { text: "" },
      haj_info: [
        {
          // haj_id: "",
          // haj_first_name: "",
          // haj_last_name: "",
          // lost: null
        }
      ]
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
      const haj_id = this.input.text;
      const self = this;
      console.log(haj_id)
      // Check if the browser has support for the Geolocation API
      if (!navigator.geolocation) {
        alert("Browser doesn't support Geolocation");
      } else {
        navigator.geolocation.getCurrentPosition(function(position) {
          // Get the coordinates of the current location.
          var lat = position.coords.latitude;
          var lng = position.coords.longitude;

         // alert("Data loaded successfully");

          axios
            .put(
              "http://localhost:3000/confirm/submission/",
              {
                haj_id,
                lost: true,
                lat: lat.toFixed(3),
                lng: lng.toFixed(3)
              }
            )
            .then(function(response) {
              console.log(response);
            })
            .catch(err => {
              console.log(err);
            });
              self.$router.push({
        name: "confirm"
      });
        }); // position
      } //else


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
      var textMsg;

      // If x is Not a Number or less than one or greater than 10
      if (isNaN(this.input.text)) {
        textMsg = "Hajj ID should be a number and less than 15 digits";
      } else if (this.input.text < 1 || this.input.text > 1000000000000000) {
        textMsg = "Please enter Hajj ID";
      } else {
        textMsg = "";
        this.axios
          .get("http://localhost:3000/queryById/haj_id=" + this.input.text)
          .then(response => {
            this.haj_info = response.data;
            this.showInfo = false;
            // console.log(response.data);

            // console.log(response.data[0].superuser_id[0]);
          })
          .catch(err => {
            console.log(err);
          });
      }
      document.getElementById("txtValidationMsg").innerHTML = textMsg;
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
                        <input v-model="input.text" type="text" maxlength="15" class="form-control" placeholder="Hajj ID" aria-label="Hajj ID" aria-describedby="button-addon2">
              
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
                  
                        <p class="font-weight-bold" style="color:red;" id="txtValidationMsg"></p>
            
                    <p class="font-weight-bold" v-show="!showInfo" > Hajj Name: {{ haj_info[0].haj_first_name }} {{ haj_info[0].haj_last_name}} </p>
                    <p class="font-weight-bold" v-show="!showInfo"> Group Name: {{ haj_info[0].Superuser_id}} </p>
                </div>
                <div class="col">
                </div>
            </div>
            <div class="row">
                <div class="col">
                </div>
                <div class="col-lg-6 col-md-8 col-sm-12 col-xm-12">
                    <button type="button" class="btn btn-dark btn-md btn-block" v-on:click=pushToConfirm()>Confirm & Submit</button>
                    <button type="button" class="btn btn-dark btn-md btn-block" v-on:click="reset()">Reset</button>
<div v-if="loading" v-cloak>
    <i class="fa fa-circle-o-notch fa-spin fa-3x fa-fw"></i>
    <span>Loading...</span>
  </div>
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