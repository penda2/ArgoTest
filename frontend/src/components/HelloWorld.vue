<template>
  <form @submit.prevent="addUser">
    <div class="title">
      <img alt="logo" src="../assets/—Pngtree—compass_595571.png" class="img" />
      <h1>Les Argonautes</h1>
    </div>
    <div class="conatainerAdd1">
      <h3>Ajouter un(e) Argonaute</h3>
      <div class="conatainerAdd">
        <label>Nom de l'Argonaute</label>
        <input type="text" placeholder="Nom ou Pseudo" v-model="userName" />
        <input type="submit" class="btnSubmit" value="Envoyer" />
      </div>
    </div>
    <usersList/>
  </form>
</template>

<script>
import UsersList from './UsersList.vue';
import axios from "axios";
export default {
  name: "HelloWorld",
  components: {
    UsersList
  },
  data() {
    return {
      userName: "",
    };
  },
  methods: {
    addUser() {
      let user = axios.post("/user", {
        userName: this.userName,
      });
      console.log(user);
    },
  },
};
</script> 