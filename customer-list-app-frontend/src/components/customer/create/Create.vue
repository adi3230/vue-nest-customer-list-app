<template src="./create.html"></template>
<script>
import axios from "axios";
import { server } from "../../../helper.js";
import router from "../../../router";
export default {
    data() {
        return {
            first_name: "",
            last_name: "",
            email: "",
            phone: "",
            address: "",
            description: ""
        };
    },
    methods: {
        createCustomer() {
            let customerData = {
                first_name: this.first_name,
                last_name: this.last_name,
                email: this.email,
                phone: this.phone,
                address: this.address,
                description: this.description
            };
            this.__submitToServer(customerData);
        },
        __submitToServer(data) {
            axios.post(`${server.baseURL}/customer/create`, data).then(() => {
                router.push({ name: "home" });
            });
        }
    }
};
</script>
<style lang="scss" src="./create.scss"></style>
