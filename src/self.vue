<script>
    // 
    export default {
        name: 'self',
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
            // login() {
            //     const {
            //         email,
            //         password
            //     } = this
            //     if (email === 'user@hack.code', password === '123') {
            //         const user = {
            //             id: '121qwsaxsx',
            //             username: 'just-user',
            //             email: 'user@hack.code'
            //         }
            //         this.$router.push({
            //             name: 'main',
            //             params: {
            //                 user
            //             }
            //         })
            //     }


            // },
            pushTo1() {
                this.$router.push({
                    name: 'self'
                })
            },
            pushTo2() {
                this.$router.push({
                    name: 'serve'
                })
            },
            pushTo3() {
                this.$router.push({
                    name: 'looking'
                })
            }
        }
    }
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
                        <input type="text" class="form-control" placeholder="Hajj ID" aria-label="Hajj IDe" aria-describedby="button-addon2">
                        <div class="input-group-append">
                            <button class="btn btn-dark margin-top-remove" type="button" id="button-addon2">Search</button>
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
                    <p class="font-weight-bold" v-if="disabled"> Hajj Name: Ahmed Ahmed Ahmed </p>
                    <p class="font-weight-bold" v-if="disabled"> Group Name: World Group </p>
                </div>
                <div class="col">
                </div>
            </div>
            <div class="row">
                <div class="col">
                </div>
                <div class="col-lg-6 col-md-8 col-sm-12 col-xm-12">
                    <button type="button" class="btn btn-dark btn-md btn-block" v-on:click='pushTo3()'>Confirm & Submit</button>
                    <button type="button" class="btn btn-dark btn-md btn-block" v-on:click='pushTo3()'>Reset</button>

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

    .margin-top-remove {
        margin-top: 0;
    }



    @media only screen and (max-width:480px) {
        h1.display-3 {
            font-size: 2.5rem;
        }
    }
</style>