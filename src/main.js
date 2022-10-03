import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'
import store from './store'

import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';


import { createWebHashHistory, createRouter } from 'vue-router';
import Home from './components/Home.vue';
import Customer from './components/Customer.vue';
import AddCustomer from './components/AddCustomer.vue';
import UploadCustomer from './components/UploadCustomer.vue';
import Product from './components/Product.vue';
import AddProduct from './components/AddProduct.vue';
import UploadProduct from './components/UploadProduct.vue';
import Order from './components/Order.vue';
import AddOrder from './components/AddOrder.vue';
import DetailOrder from './components/DetailOrder.vue';
import Login from './components/Login.vue';
import Barang from './components/Barang.vue';
import keranjang from './components/keranjang.vue';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {path: '/', name: "Home", component : Home},
    {path: '/customer', name: "Customer", component : Customer},
    {path: '/customer/AddCustomer', name: "AddCustomer", component : AddCustomer},
    {path: '/customer/UploadCustomer/:id', name: "UploadCustomer", component : UploadCustomer},
    {path: '/product', name: "Product", component : Product},
    {path: '/product/AddProduct', name: "AddProduct", component : AddProduct},
    {path: '/product/UploadProduct/:id', name: "UploadProduct", component : UploadProduct},
    {path: '/order', name: "Order", component : Order},
    {path: '/order/AddOrder', name: "AddOrder", component : AddOrder},
    {path: '/detailorder', name: "DetailOrder", component : DetailOrder},
    {path: '/login', name: "Login", component : Login},
    {path: '/barang', name: "Barang", component : Barang},
    {path: '/keranjang', name: "keranjang", component : keranjang},

   
  ],
  base: '/'
});

var app = createApp(App)
app.use(router)
app.use(store)
app.config.globalProperties.axios = axios
app.mount('#app')
app.use(VueSweetalert2)
