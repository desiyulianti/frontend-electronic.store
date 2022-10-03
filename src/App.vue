<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark" style="margin-top: -61px;}" v-if="authenticated">
   <a class="navbar-brand" href="#">Toko Online</a>
   <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
                 <router-link class="nav-link" to="/">Home</router-link>
        </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/customer">Customer</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/product">Product</router-link>
      </li>
       <li class="nav-item">
        <router-link class="nav-link" to="/barang">List</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/order">Order</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/detailorder">Detail Order</router-link>
      </li>
      <li class="nav-item">
        <a class="nav-link" v-on:click="logout()">Logout</a>
      </li>
      </ul>
    </div>
  </nav>
    <router-view
      @authenticated="setAuthenticated">
    </router-view>
</div>
</template>

<script>
export default {
  name: "App",
 data(){
   return{
     authenticated: localStorage.getItem('status'),
     data: [],
      
   }
 },
 methods:{
     setAuthenticated(status){
       this.authenticated=status
     },
     logout(){
       this.authenticated=false;
       localStorage.clear()
       this.$router.replace({name:"Login"});
     }
   },
   mounted(){
     this.$store.commit('updateCartFromLocalStorage');     if(!this.authenticated){
       this.$router.replace({name:"Login"});
     }
   },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
   

