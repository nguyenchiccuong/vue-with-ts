<template>
  <Header :username="name" />
  <h1>Hello {{ name }}, Welcome to Add Restaurant Page</h1>
  <form class="add" @submit.prevent="addRestaurant">
    <input
      type="text"
      name="name"
      placeholder="Enter Name"
      v-model="restaurant.name"
    />
    <input
      type="text"
      name="address"
      placeholder="Enter Address"
      v-model="restaurant.address"
    />
    <input
      type="text"
      name="contact"
      placeholder="Enter Contact"
      v-model="restaurant.contact"
    />
    <button>Add new Restaurant</button>
  </form>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Header from "@/components/Header.vue"; // @ is an alias to /src
import axios from "axios";

@Options({
  components: {
    Header,
  },
})
export default class Add extends Vue {
  name = "" as string;
  restaurant = {
    name: "" as string,
    address: "" as string,
    contact: "" as string,
  };

  async addRestaurant(): Promise<void> {
    const result = await axios.post("api/restaurant", {
      name: this.restaurant.name,
      address: this.restaurant.address,
      contact: this.restaurant.contact,
    });
    if (result.status === 201) {
      this.$router.push({ name: "Home" });
    }
  }

  mounted(): void {
    let user = localStorage.getItem("user-info") || "";
    this.name = JSON.parse(user).name;
  }
}
</script>

<style>
</style>
