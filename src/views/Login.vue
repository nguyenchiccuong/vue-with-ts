<template>
  <img class="logo" alt="Vue logo" src="../assets/logo.png" />
  <h1>Login</h1>
  <div class="login">
    <input type="text" placeholder="Enter Email" v-model="email" />
    <input type="password" placeholder="Enter Password" v-model="password" />
    <button @click="login">Login</button>
    <p>
      <router-link to="/sign-up">Sign Up</router-link>
    </p>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import axios from "axios";
import { mapActions } from "vuex";

@Options({
  components: {},
  methods: mapActions(["updateUsername"]),
})
export default class Login extends Vue {
  isMale!: string; //use in vue always need ?: or !:
  email = "" as string;
  password = "" as string;
  updateUsername!: (username: string) => void;

  async login(): Promise<void> {
    let result = await axios.get(
      `api/users?email=${this.email}&passsword=${this.password}`
    );
    if (result.status === 200 && result.data.length > 0) {
      localStorage.setItem("user-info", JSON.stringify(result.data[0]));
      this.updateUsername(this.email);
      this.$router.push({ name: "Home" });
    } else {
      alert("Email or password invalid");
    }
  }
}
</script>

<style></style>