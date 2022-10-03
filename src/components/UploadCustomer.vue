<template>
    <div><br><br>
        <div class="container">
            <div class="card"><br>
                <h3 class="card-title"><center>Update Customer</center></h3>
                <div class="card-body">

                    <input type="hidden" class="form-control" id="name" v-model="cust_id">

                    <div class="mb-3">
                        <label for="nama" class="form-label">Customer Name</label>
                        <input type="text" class="form-control" id="nama" v-model="nama" placeholder="Customer Name">
                    </div>

                    <div class="mb-3">
                        <label for="alamat" class="form-label">Address</label>
                        <textarea class="form-control" v-model="alamat" id="alamat" rows="3"></textarea>
                    </div>

                    <div class="mb-3">
                        <label for="telp" class="form-label">Telephone</label>
                        <input type="number" class="form-control" id="telp" v-model="telp" placeholder="Telephone">
                    </div>

                    <div class="mb-3">
                        <label for="username" class="form-label">Username</label>
                        <input type="text" class="form-control" id="username" v-model="username" placeholder="Username">
                    </div>

                    <div class="mb-3">
                        <label for="password" class="form-label">Password</label>
                        <input type="password" class="form-control" id="password" v-model="password" placeholder="Password">
                    </div>

                    <button class="btn btn-outline-dark" @click="Update()">Save</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name : "update_customer",
        data() {
            return {
                id_customer : "",
                nama : "",
                alamat : "",
                telp : "",
                username : "",
                password : "",
            }
        },
        methods : {
            getDetail(id){
               var  token={
            headers: {"Authorization" : "bearer " + localStorage.getItem("token")}
          };
                this.axios.get('http://127.0.0.1:8000/api/customers/'+id, token)
                .then(response => {
                    //vmodel
                    this.id_customer    = response.data[0].id_customer,
                    this.nama       = response.data[0].nama,
                    this.alamat   = response.data[0].alamat,
                    this.telp       = response.data[0].telp,
                    this.username   = response.data[0].username,
                    this.password   = response.data[0].password
                })
            },

            Update(){
                let form = {
                    //back end    //state
                    'nama'       : this.nama,
                    'alamat'    : this.alamat,
                    'telp'       : this.telp,
                    'username'   : this.username,
                    'password'   : this.password,
                }
                
                this.axios.put('http://127.0.0.1:8000/api/customers/' + this.id_customer, form)
                    .then(response =>{
                         this.$swal({
                                title: 'Success!',
                                text: response.data.message,
                                icon: 'success',
                                confirmButtonText: 'OK'
                        });
                        this.customer_list = response.data;
                        this.$router.push('/customer')
                    })
                }
        },
        mounted(){
            this.getDetail(this.$route.params.id)
        }
        
    }
</script>