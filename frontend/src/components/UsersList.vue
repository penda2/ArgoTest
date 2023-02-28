<template>
  <div class="container">
    <h3>Membres de l'équipage :</h3>
    <div class="conatainerListe">
      <div class="membersListe" v-for="user in users" :key="user">
        <p class="nom">{{ user.userName }}</p>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "UsersList",
  data() {
    return {
      users: [],
    };
  },
  created() {
    axios
      .get("/user")
      .then((response) => {
        this.users = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>
