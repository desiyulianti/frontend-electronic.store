<template>
    <div>
    <br><br>
        <div class="container">
            <div class="card">
            <div class="card-body"><br>
              <h3 class="card-title"><center>List Order</center></h3><br>

              <table class="table table-hover">
                <thead>
                  <tr>
                    <th scope="col">Id Order</th>
                    <th scope="col">Id Customer</th>
                    <th scope="col">Order Date</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="al in order_list" :key="al">
                    <td>{{ al.id_order }}</td> 
                    <td>{{ al.id_customer }}</td>
                    <td>{{ al.tgl_order }}</td>
                    <td>
                      <button class="btn btn-danger" @click="Remove(al.id_order)"><i class="fas fa-trash-alt fa-fw"></i></button>
                    </td>
                  </tr>
                </tbody>
              </table>
              <router-link class="btn btn-primary btn-sm float-left" :to="{path:'/order/AddOrder'}">Add Order</router-link><br>
              <!-- End Table with hoverable rows -->
            </div>
          </div>
        </div>
    </div>
</template>

<script>
    export default {
        name : "Order_page",
    
    //state
    data(){
        return {
            order_list : [],
        }
    },

    methods : {
        getOrder : function(){
          var  token={
            headers: {"Authorization" : "bearer " + localStorage.getItem("token")}
          };
            this.axios.get('http://127.0.0.1:8000/api/orders')
            .then((response) => {
                this.order_list = response.data, token;
                // console.log(response);
            })
        },

        Remove(id){
          if(confirm('Are you sure to delete this data?')){
                    this.axios.delete('http://127.0.0.1:8000/api/orders/' + id)
                    .then(response => {
                      this.$swal({
                                title: 'Success!',
                                text: response.data.message,
                                icon: 'success',
                                confirmButtonText: 'OK'
                        })
                        this.getOrder()
                        location.reload();
                    })
                }
        }
    },

    mounted(){
        this.getOrder()
    }
    }
</script>