<template>
  <Header />
  <h1>Helle {{ name }}, Welcome to Home Page</h1>
  <table border="1">
    <tr>
      <td>Id</td>
      <td>Name</td>
      <td>Contact</td>
      <td>Address</td>
      <td>Actions</td>
    </tr>
    <tr v-for="item in restaurant" :key="item.id">
      <td>{{ item.id }}</td>
      <td>{{ item.name }}</td>
      <td>{{ item.contact }}</td>
      <td>{{ item.address }}</td>
      <td>
        <router-link :to="'/update/' + item.id"> Update</router-link>
        <button @click="deleteRestaurant(item.id)">Delete</button>
      </td>
    </tr>
  </table>
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
export default class Home extends Vue {
  name = "" as string;
  restaurant = [] as {
    id: number;
    name: string;
    address: string;
    contact: string;
  }[];

  async deleteRestaurant(id: number): Promise<void> {
    let result = await axios.delete("api/restaurant/" + id);
    if (result.status == 200) {
      this.loadData();
    }
  }

  async loadData(): Promise<void> {
    let user = localStorage.getItem("user-info") || "";
    this.name = JSON.parse(user).name;
    let result = await axios.get("api/restaurant");
    this.restaurant = result.data;
  }

  mounted(): void {
    this.loadData();
  }
}
</script>

<style scoped>
td {
  width: 160px;
  height: 40px;
}
</style>