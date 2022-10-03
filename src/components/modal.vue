<template>
  <div class="modal" id="show_detail" tabindex="-1" v-if="detail">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">{{ detail.nama_produk }}</h5>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <img v-bind:src="'http://127.0.0.1:8000/foto_produk/' + detail.foto_produk" style="width=100%"/>
          <p>{{ detail.deskripsi }}</p>
          <p v-if="getcount">{{getcount}}</p>
          <p v-else>0</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close </button>
          <button v-on:click="addToCart()" class="btn btn-primary" >AddToCart</button>
          <button v-on:click="removeItem()" class="btn btn-danger" >Remove</button>
        
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default{
  props:["detail"],
  name: "modal_page",
  methods:{
    addToCart(){
      this.$store.commit('addToCart',this.detail)
      
    },
    removeItem(){
      this.$store.commit('removeFromProduct',this.detail)
    }
},
computed:{
 getcount(){
      return this.$store.getters.productQuantity(this.detail);
    }
},
 
}
</script>