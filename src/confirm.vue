<script>
    // 
    export default {
        name: 'confirm',
        data() {
            return {input:{text:''}}
        },
        created() {


        },

        

        methods: {
            pushToHome() {
                this.$router.push({
                    name: 'landing'
                })
            },

            backToHome() {
                this.$router.push({
                    name: 'landing'
                })
            },

        }
    }
</script>

<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <div class="jumbotron">
                    <h1 class="display-3 text-dark">Thanks your request has been sent !</h1>
                </div>
            </div>
        </div>
                <div class="row">
            <div class="col">
            </div>
            <div class="col-6 col-8-md col-12-lg">
                <button type="button" class="btn btn-dark btn-lg btn-block" v-on:click="backToHome()">Back to Home</button>
            </div>
            <div class="col">
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

    @media only screen and (max-width:480px) {
        h1.display-3 {
            font-size: 2.5rem;
        }
    }
</style>