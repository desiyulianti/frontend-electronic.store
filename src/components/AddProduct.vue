<template>
    <div>
    <br><br>
        <div class="container">
            <router-view></router-view>
            <div class="card"><br>
                <h3 class="card-title"><center>Add Product</center></h3>
                <div class="card-body">
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

                    <button class="btn btn-outline-dark" @click="Save()">Save</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name : "AddProduct",
        data() {
            return {
                nama_produk : "",
                deskripsi : "",
                harga : "",
                foto_produk : "",
            }
        },
        methods : {
            Save : function(){
                let form = {
                    //back end    //state
                    'nama_produk'       : this.nama_produk,
                    'deskripsi'     : this.deskripsi,
                    'harga'       : this.harga,
                    'foto_produk'   : this.foto_produk,
                }
                
                this.axios.post('http://127.0.0.1:8000/api/product', form)
                    .then((response) =>{
                        console.log(response);
                        this.$swal('Success !', 'Success add new data', 'OK');
                        this.product_list = response.data;
                        this.$router.push('/product')
                    })
                }
        }  
        
    }
</script>