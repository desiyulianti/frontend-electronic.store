<template>
    <div id="layoutAuthentication">
            <div id="layoutAuthentication_content">
                <main>
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-5">
                                <div class="card shadow-lg border-0 rounded-lg mt-5">
                                    <div class="card-header"><h3 class="text-center font-weight-light my-4">Login</h3></div>
                                    <div class="card-body">
                                        <p>{{ message }}</p>
                                        <br>
                                        <form>
                                        <div class="form-floating mb-3">
                                             <input class="form-control" v-model="email" id="inputEmail" type="email" placeholder="Email"/>
                                        </div>

                                        <div class="form-floating mb-3">
                                             <input class="form-control" v-model="password" id="inputPassword" type="password" placeholder="Password"/>
                                        </div>

                                        <div class="d-flex align-items-center justify-content-between mt-4 mb-0">
                                                <a class="btn btn-primary" v-on:click ="login()">Login</a>
                                        </div>
                                        </form>
                                    </div>
                                    <div class="card-footer text-center py-3">
                                        <div class="small"><a href="register.html">Need an account? Sign up!</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
</template>
<script>
    export default{
        name: "Login_page",
        data(){
            return{
                email:'',
                password:'',
            }
        },
        methods:{ 
            login : function(){
                var data={
                    email:this.email,
                    password:this.password
                }
                this.axios.post("http://127.0.0.1:8000/api/login",data).then((result)=>{
                   localStorage.setItem('token', result.data.token)
                    localStorage.setItem('status', true)
                    this.$emit('authenticated', true)
                    this.$router.replace({name: "Home"})
                }).catch(error=>{
                    console.log(error)
                    alert('Incorrect Password')
                })
            }
        },
        mounted(){
               this.$emit('authenticated', false) 
        }
    }
</script>