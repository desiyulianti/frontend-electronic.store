<template>
    <div>
    <br><br>
        <div class="container">
            <router-view></router-view>
            <div class="card"><br>
                <h3 class="card-title"><center>Add Detail Order</center></h3>
                <div class="card-body">
                    <div class="mb-3">
                        <label for="id_order" class="form-label">Id Order</label>
                        <input type="number" class="form-control" id="id_order" v-model="id_order" placeholder="id order">
                    </div>

                    <div class="mb-3">
                        <label for="id_product" class="form-label">Id Product</label>
                        <input type="number" class="form-control" id="id_product" v-model="id_product" placeholder="id product">
                    </div>

                    <div class="mb-3">
                        <label for="qty" class="form-label">Quantity</label>
                        <input type="number" class="form-control" id="qty" v-model="qty">
                    </div>

                    <div class="mb-3">
                        <label for="subtotal" class="form-label">Subtotal</label>
                        <input type="number" class="form-control" id="subtotal" v-model="subtotal" placeholder="subtotal">
                    </div>

                    <button class="btn btn-outline-dark" @click="Save()">Save</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name : "AddDetailOrder",
        data() {
            return {
                id_order : "",
                id_product : "",
                qty : "",
                subtotal : "",
            }
        },
        methods : {
            Save : function(){
                let form = {
                    //back end    //state
                    'id_order'       : this.id_order,
                    'id_product'     : this.id_product,
                    'qty'       : this.qty,
                    'subtotal'   : this.subtotal,
                }
                
                this.axios.post('http://127.0.0.1:8000/api/detail_order', form)
                    .then((response) =>{
                        console.log(response);
                        this.$swal('Success !', 'Success add new data', 'OK');
                        this.detail_order_list = response.data;
                        this.$router.push('/detailorder')
                    })
                }
        }  
        
    }
</script>