<template>
  <div class="container">
    <div class="card">
      <div class="card-body">
        <h2 align="center">List Product</h2> 
        <modal :detail="product "/>
        <div class="row">
          <div class="col-md-3" v-for="barang in list_barang" :key="barang.id">
            <div class="card">
              <img  v-bind:src="'http://127.0.0.1:8000/foto_produk/'+barang.foto_produk" class="card-img-top" alt="meja.jpg" />
              <div class="card-body">
                <h5 class="card-title">{{barang.nama_produk}}
                  <span v-if="getcount(barang)!=null">({{getcount(barang)}})</span>
                  <span v-else>(0)</span></h5>
                <p class="card-text">{{barang.deskripsi}}</p>
                <p class="card-text">{{barang.harga}}</p>
                 <button v-on:click="addToCart(barang)"  class="btn btn-success">AddToCart</button> <a href="#" class="btn btn-primary" data-target="#show_detail" data-toggle="modal" v-on:click="view_product(barang)">Show</a>
              </div>
            </div>
          </div>
        </div>
        <router-link to="/keranjang" class="btn btn-warning">Show Cart</router-link>
      </div>
    </div>
  </div>
</template>
<script>
import modal from '../components/modal.vue'
export default {
  name: "Barang_page",
  components:{
        modal
   },
  data() {
    return { 
      list_barang: [],
      product:null,
    };
  },
  methods: {
    getbarang() {
      var token = {
        headers: { Authorization: "bearer " + localStorage.getItem("token") },
      };
      this.axios.get("http://127.0.0.1:8000/api/product").then((response) => {
        console.log(response);
        (this.list_barang = response.data), token;
        // console.log(response);
      });
    },
    view_product(product){
         this.product=product
         console.log(this.product)
    },
    addToCart(product){
      this.$store.commit('addToCart',product)
    },
    getcount(product){
      return this.$store.getters.productQuantity(product);
    },
  },
  mounted() {
    this.getbarang();
  },
};
</script>