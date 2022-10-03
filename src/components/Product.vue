<template>
    <div>
    <br><br>
        <div class="container">
            <div class="card">
            <div class="card-body"><br>
              <h3 class="card-title"><center>List Product</center></h3><br>

              <table class="table table-hover">
                <thead>
                  <tr>
                    <th scope="col">Id Product</th>
                    <th scope="col">Product Name</th>
                    <th scope="col">Description</th>
                    <th scope="col">Price</th>
                    <th scope="col">Product Image</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="cl in product_list" :key="cl">
                    <td>{{ cl.id_product }}</td>
                    <td>{{ cl.nama_produk }}</td>
                    <td>{{ cl.deskripsi }}</td>
                    <td>{{ cl.harga }}</td>
                    <td>{{ cl.foto_produk }}</td>
                    <td>
                      <router-link type="button" class="btn btn-info" :to="{path:'/product/UploadProduct/' + cl.id_product}"><i class="fas fa-pencil-alt fa-fw"></i></router-link>
                      <button class="btn btn-danger" @click="Remove(cl.id_product)"><i class="fas fa-trash-alt fa-fw"></i></button>
                    </td>
                  </tr>
                </tbody>
              </table>
              <router-link class="btn btn-primary btn-sm float-left" :to="{path:'/product/AddProduct'}">Add Product</router-link><br>
              <!-- End Table with hoverable rows -->
            </div>
          </div>
        </div>
    </div>
</template>

<script>
    export default {
        name : "Product_page",
    
    //state
    data(){
        return {
            product_list : [],
        }
    },

    methods : {
        getProduct : function(){
          var  token={
            headers: {"Authorization" : "bearer " + localStorage.getItem("token")}
          };
            this.axios.get('http://127.0.0.1:8000/api/product')
            .then((response) => {
                this.product_list = response.data, token;
                // console.log(response);
            })
        },

        Remove(id){
          if(confirm('Are you sure to delete this data?')){
                    this.axios.delete('http://127.0.0.1:8000/api/product/' + id)
                     .then(response => {
                      this.$swal({
                                title: 'Success!',
                                text: response.data.message,
                                icon: 'success',
                                confirmButtonText: 'OK'
                        })
                        this.getProduct()
                        location.reload();
                    })
                }
        }
    },

    mounted(){
        this.getProduct()
    }
    }
</script>