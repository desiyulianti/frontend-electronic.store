<template>
    <div class="container">
    <div class="card">
        <div class="card-body">
            <h2 align="center">List in Cart</h2>
            <table class="table table-hover table-striped">
                 <thead>
                      <tr>
                           <th>Name Product</th><th>Qty</th><th>Action</th>
                      </tr>
                 </thead>
                 <tbody>
                      <tr v-for="cart in getcart" :key="cart.id">
                           <td>{{cart.nama_produk}}</td> <td>{{cart.quantity}}</td>
                          <td> <button class="btn btn-danger"><i class="fas fa-trash-alt fa-fw"></i></button></td>
                      </tr>
                 </tbody>
            </table>
            <button v-on:click="simpan_db()" class="btn btn-primary">Checkout</button>
        </div>
    </div>
    </div>
</template>

<script>
    export default{
      
        name:"keranjang_page",
        computed:{
             getcart(){
                  return this.$store.getters.cartItems
             }
        },
        methods:{
             simpan_db(){
          var  option ={
            headers: {"Authorization" : "bearer " + localStorage.getItem("token")}
          };
          var data={
               datapost: this.$store.getters.cartItems
          }
            this.axios.post('http://127.0.0.1:8000/api/storecartdb', data, option)
            .then((result) => {
                 if(result.data.status==true){
                      alert(result.data.message)
                      this.$store.commit('reset')
                      this.$route.push('/product')
                 }
            })
        },  
             }
        }
</script>