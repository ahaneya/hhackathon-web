
<script>


import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import {load, Map, Marker} from 'vue-google-maps'
load('AIzaSyDB6zzW8EnKL52b7lojNfQlRnxQ1Zl6K0w')

Vue.use(VueAxios, axios);

//

export default {
    
  name: "self",
  data() {
    return {

    showInfo:true,
    loading: false,
      status: '',
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

CreateMap: function() {

const self=this;
    this.axios.get("http://localhost:3000/queryById/haj_id="+this.input.text).then(response => {
            this.haj_info = response.data
            this.showInfo=false
            console.log(response.data)
         var lat_in=   self.haj_info[0].lat;
         var lng_in=self.haj_info[0].lng;
        
          var mapCanvas = document.getElementById("map");
          var myLatLng ={lat: lat_in , lng:lng_in};
    var mapOptions = {
        center: new google.maps.LatLng(lat_in, lng_in),
        zoom: 10
    };
    var map = new google.maps.Map(mapCanvas, mapOptions);

 var marker = new google.maps.Marker({position: new google.maps.LatLng(lat_in, lng_in), map: map});
    
    
   });

  
},
    
   
   
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
                        <input v-model="input.text" type="text" maxlength="15" class="form-control" placeholder="Hajj ID" aria-label="Hajj IDe" aria-describedby="button-addon2">
              
                        <div class="input-group-append">
                            <button class="btn btn-dark margin-top-remove" type="button" id="button-addon2" v-on:click="CreateMap()">Search</button>
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
 <div v-show="!showInfo" id="map"></div>               
               </div>
                <div class="col">
                </div>
            </div>
           


        </div>
    </div>

  


   




</template>

<style>
/* Set the size of the div element that contains the map */
#map {
  height: 400px;  /* The height is 400 pixels */
  width: 100%;  /* The width is the width of the web page */
 }
</style>
