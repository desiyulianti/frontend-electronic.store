<template>
    <div>
    <br><br>
        <div class="container">
            <router-view></router-view>
            <div class="card"><br>
                <h3 class="card-title"><center>Add Customer</center></h3>
                <div class="card-body">
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

                    <button class="btn btn-outline-dark" @click="Save()">Save</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name : "AddCustomer",
        data() {
            return {
                nama : "",
                alamat : "",
                telp : "",
                username : "",
                password : "",
            }
        },
        methods : {
            Save : function(){
                let form = {
                    //back end    //state
                    'nama'       : this.nama,
                    'alamat'     : this.alamat,
                    'telp'       : this.telp,
                    'username'   : this.username,
                    'password'   : this.password,
                }
                
                this.axios.post('http://127.0.0.1:8000/api/customers', form)
                    .then((response) =>{
                        console.log(response);
                        this.$swal('Success !', 'Success add new data', 'OK');
                        this.customer_list = response.data;
                        this.$router.push('/customer')
                    })
                }
        }  
        
    }
</script>