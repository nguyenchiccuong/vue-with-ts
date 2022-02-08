<template>
  <img class="logo" alt="Vue logo" src="../assets/logo.png" />
  <h1>Sign Up</h1>
  <div class="register">
    <input type="text" placeholder="Enter Name" v-model="name" />
    <input type="text" placeholder="Enter Email" v-model="email" />
    <input type="password" placeholder="Enter Password" v-model="password" />
    <button @click="signUp">Sign Up</button>
    <p>
      <router-link to="/login">Login</router-link>
    </p>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import axios from "axios";

@Options({
  components: {},
})
export default class SignUp extends Vue {
  email = "" as string;
  name = ""as string;
  password = "" as string;

  async signUp(): Promise<void> {
    let result = await axios.post("api/users", {
      email: this.email,
      name: this.name,
      password: this.password,
    });
    if (result.status === 201) {
      this.$router.push({ name: "Login" });
    }
  }
}
</script>

<style>
</style>