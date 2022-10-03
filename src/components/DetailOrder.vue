<template>
    <div>
    <br><br>
        <div class="container">
            <div class="card">
            <div class="card-body"><br>
              <h3 class="card-title"><center>Detail Order List</center></h3><br>

              <table class="table table-hover">
                <thead>
                  <tr>
                    <th scope="col">Id Detail Order</th>
                    <th scope="col">Id Order</th>
                    <th scope="col">Id Product</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Subtotal</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="dol in detail_order_list" :key="dol">
                    <td>{{ dol.id_detail_order }}</td>   
                    <td>{{ dol.id_order }}</td>
                    <td>{{ dol.id_product }}</td>
                    <td>{{ dol.qty }}</td>
                    <td>{{ dol.subtotal }}</td>
                    <td>
                      <button class="btn btn-danger" @click="Remove(dol.id_detail_order)"><i class="fas fa-trash-alt fa-fw"></i></button>
                    </td>
                  </tr>
                </tbody>
              </table>
             
              <!-- End Table with hoverable rows -->
            </div>
          </div>
        </div>
    </div>
</template>

<script>
    export default {
        name : "DetailOrder_page",
    
    //state
    data(){
        return {
            detail_order_list : [],
        }
    },

    methods : {
        getData : function(){
          var  token={
            headers: {"Authorization" : "bearer " + localStorage.getItem("token")}
          };
            this.axios.get('http://127.0.0.1:8000/api/detail_order')
            .then((response) => {
                this.detail_order_list = response.data, token;
                // console.log(response);
            })
        },

        Remove(id){
          if(confirm('Are you sure to delete this data?')){
                    this.axios.delete('http://127.0.0.1:8000/api/detail_order/' + id)
                    .then(() => {
                        this.getData()
                        location.reload();
                    })
                }
        }
    },

    mounted(){
        this.getData()
    }
    }
</script>