<template>
    <div>
    <br><br>
        <div class="container">
            <router-view></router-view>
            <div class="card"><br>
                <h3 class="card-title"><center>Add Order</center></h3>
                <div class="card-body">

                     <div class="mb-3">
                        <label for="id_customer" class="form-label">Id Customer</label>
                        <input type="number" class="form-control" id="id_customer" v-model="id_customer">
                    </div>

                    <div class="mb-3">
                        <label for="tgl_order" class="form-label">Date Order</label>
                        <input type="date" class="form-control" id="tgl_order" v-model="tgl_order">
                    </div>

                    <button class="btn btn-outline-dark" @click="Save()">Save</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name : "AddOrder",
        data() {
            return {
                id_customer : "",
                tgl_order : "",
                
            }
        },
        methods : {
            Save : function(){
                let form = {
                    //back end    //state
                    'id_customer'       : this.id_customer,
                    'tgl_order'     : this.tgl_order,
                   
                }
                
                this.axios.post('http://localhost:8000/api/orders', form)
                    .then((response) =>{
                        console.log(response);
                        this.$swal('Success !', 'Success add new data', 'OK');
                        this.order_list = response.data;
                        this.$router.push('/orders')
                    })
                }
        }  
        
    }
</script>