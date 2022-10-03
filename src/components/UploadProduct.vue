<template>
    <div><br><br>
        <div class="container">
            <div class="card"><br>
                <h3 class="card-title"><center>Update Product</center></h3>
                <div class="card-body">

                    <input type="hidden" class="form-control" id="name" v-model="id_product">

                    <div class="mb-3">
                        <label for="nama_produk" class="form-label">Product Name</label>
                        <input type="text" class="form-control" id="nama_produk" v-model="nama_produk" placeholder="Product Name">
                    </div>

                    <div class="mb-3">
                        <label for="deskripsi" class="form-label">Description</label>
                        <textarea class="form-control" v-model="deskripsi" id="deskripsi" rows="3"></textarea>
                    </div>

                    <div class="mb-3">
                        <label for="harga" class="form-label">Price</label>
                        <input type="number" class="form-control" id="harga" v-model="harga" placeholder="Price">
                    </div>

                    <div class="mb-3">
                        <label for="foto_produk" class="form-label">Product Image</label>
                        <input type="text" class="form-control" id="foto_produk" v-model="foto_produk" placeholder="Product Image">
                    </div>

                    <button class="btn btn-outline-dark" @click="Update()">Save</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name : "update_product",
        data() {
            return {
                id_product : "",
                nama_produk : "",
                deskripsi : "",
                harga : "",
                foto_produk : "",
            }
        },
        methods : {
            getDetail(id){
                var  token={
            headers: {"Authorization" : "bearer " + localStorage.getItem("token")}
          };
                this.axios.get('http://127.0.0.1:8000/api/product/'+id, token)
                .then(response => {
                    //vmodel
                    this.id_product    = response.data[0].id_product,
                    this.nama_produk     = response.data[0].nama_produk,
                    this.deskripsi   = response.data[0].deskripsi,
                    this.harga       = response.data[0].harga,
                    this.foto_produk   = response.data[0].foto_produk
                
                })
            },

            Update(){
                let form = {
                    //back end    //state
                    'nama_produk'       : this.nama_produk,
                    'deskripsi'    : this.deskripsi,
                    'harga'       : this.harga,
                    'foto_produk'   : this.foto_produk,
                    
                }
                
                this.axios.put('http://127.0.0.1:8000/api/product/' + this.id_product, form)
                   .then(response =>{
                         this.$swal({
                                title: 'Success!',
                                text: response.data.message,
                                icon: 'success',
                                confirmButtonText: 'OK'
                        });
                        this.product_list = response.data;
                        this.$router.push('/product')
                    })
                }
        },
        mounted(){
            this.getDetail(this.$route.params.id)
        }
        
    }
</script>