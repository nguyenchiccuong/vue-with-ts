<template>
  <Header />
  <h1>Hello {{ name }}, Welcome to Update Restaurant Page</h1>
  <form class="add" @submit.prevent="updateRestaurant">
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
    <button>Update Restaurant</button>
  </form>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Header from "@/components/Header.vue"; // @ is an alias to /src
import axios from "axios";

@Options({
  components: { Header },
})
export default class Update extends Vue {
  name = "" as string;
  restaurant = {
    name: "" as string,
    address: "" as string,
    contact: "" as string,
  };

  async updateRestaurant(): Promise<void> {
    const result = await axios.put(`/api/restaurant/${this.$route.params.id}`, {
      name: this.restaurant.name,
      address: this.restaurant.address,
      contact: this.restaurant.contact,
    });
    if (result.status === 200) {
      this.$router.push({ name: "Home" });
    }
  }

  async loadData(): Promise<void> {
    const result = await axios.get(
      `/api/restaurant/${this.$route.params.id}`
    );
    this.restaurant.name = result.data.name;
    this.restaurant.address = result.data.address;
    this.restaurant.contact = result.data.contact;
  }

  mounted(): void {
    let user = localStorage.getItem("user-info") || "";
    this.name = JSON.parse(user).name;
    this.loadData();
  }
}
</script>

<style>
</style>