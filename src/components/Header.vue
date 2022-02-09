<template>
  <div class="nav">
    <router-link to="/">Home</router-link>
    <a href="#" @click="this.$router.push({ name: 'Add' })">Add Restaurant</a>
    <a href="#" @click="logout">Logout</a>

    <a href="#" :style="{ float: 'right' }">{{ username }}</a>
  </div>
</template>

<script lang="ts">
import { Options, Vue, prop } from "vue-class-component";

// Define props in a class
class Props {
  username = prop({
    // Same as Vue core's prop option
    type: String,
    required: true,
  });
}

@Options({})
export default class Header extends Vue.with(Props) {
  logout(): void {
    localStorage.clear();
    this.$router.push({ name: "Login" });
  }
}
</script>

<style scoped>
.nav {
  background-color: #333;
  overflow: hidden;
}
.nav a {
  float: left;
  color: #f2f2f2;
  padding: 14px 16px;
  text-align: center;
  font-size: 17px;
  text-decoration: none;
  margin-right: 5px;
}

.nav a:hover {
  background: #ddd;
  color: #333;
}
</style>