<template>
    <div>
    <br><br>
        <div class="container">
            <div class="card">
            <div class="card-body"><br>
              <h3 class="card-title"><center>Data Customer </center></h3><br>

              <table class="table table-hover">
                <thead>
                  <tr>
                    <th scope="col">No</th>
                    <th scope="col">Name</th>
                    <th scope="col">Address</th>
                    <th scope="col">Telephone</th>
                    <th scope="col">Username</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="dl in customer_data" :key="dl">
                    <td>{{ dl.id_customer }}</td>
                    <td>{{ dl.nama }}</td>
                    <td>{{ dl.alamat }}</td>
                    <td>{{ dl.telp }}</td>
                    <td>{{ dl.username }}</td>
                    <td>
                      <router-link type="button" class="btn btn-info" :to="{path:'/customer/UploadCustomer/' + dl.id_customer}"><i class="fas fa-pencil-alt fa-fw"></i></router-link>
                      <button class="btn btn-danger" @click="Remove(dl.id_customer)"><i class="fas fa-trash-alt fa-fw"></i></button>
                    </td>
                  </tr>
                </tbody>
              </table>
              <router-link class="btn btn-primary btn-sm float-left" :to="{path:'/customer/AddCustomer'}">Add Customer</router-link><br>
              <!-- End Table with hoverable rows -->
            </div>
          </div>
        </div>
    </div>
</template>

<script>
    export default {
        name : "Customer_page",
    
    //state
    data(){
        return {
            customer_data : [],
        }
    },

    methods : {
        getCustomer : function(){
          var  token={
            headers: {"Authorization" : "bearer " + localStorage.getItem("token")}
          };
            this.axios.get('http://127.0.0.1:8000/api/customers')
            .then((response) => {
                this.customer_data = response.data, token;
                // console.log(response);
            })
        },

        Remove(id){
          if(confirm('Are you sure to delete this data?')){
                    this.axios.delete('http://127.0.0.1:8000/api/customers/' + id)
                    .then(response => {
                      this.$swal({
                                title: 'Success!',
                                text: response.data.message,
                                icon: 'success',
                                confirmButtonText: 'OK'
                        })
                        this.getCustomer()
                        location.reload();
                    })
                }
        }
    },

    mounted(){
        this.getCustomer()
    }
    }
</script>
