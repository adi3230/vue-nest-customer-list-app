<template src="./edit.html"></template>
<script>
import { server } from "../../../helper.js";
import axios from "axios";
import router from "../../../router";
export default {
    data() {
        return {
            id: 0,
            customer: {}
        };
    },
    created() {
        this.id = this.$route.params.id;
        this.getCustomer();
    },
    methods: {
        editCustomer() {
            let customerData = {
                first_name: this.customer.first_name,
                last_name: this.customer.last_name,
                email: this.customer.email,
                phone: this.customer.phone,
                address: this.customer.address,
                description: this.customer.description
            };
            axios
                .put(
                    `${server.baseURL}/customer/update?customerID=${this.id}`,
                    customerData
                )
                .then(() => {
                    router.push({ name: "home" });
                });
        },
        getCustomer() {
            axios
                .get(`${server.baseURL}/customer/customer/${this.id}`)
                .then(data => (this.customer = data.data));
        },
        navigate() {
            router.go(-1);
        }
    }
};
</script>
<style lang="scss" src="./edit.scss"></style>
