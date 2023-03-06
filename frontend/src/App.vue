<template>
  <div id="app">
    <HelloWorld/>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
export default {
  name: "App",
  components: {
    HelloWorld,
  },
};
</script>

<style>
* {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  list-style: none;
  box-sizing: border-box;
  color: #003366;
}
body {
  text-align: center;
  margin: 0;
}
/* --- section titre/Navbar*/ 
.title {
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  box-shadow: 2px 2px 5px #e2d1c3;
  background-image: linear-gradient(135deg, #fdfcfb 0%, #e2d1c3 100%);
}
img {
  object-fit: cover;
  width: 90px;
  margin-right: 10px;
  padding: 0;
  color: #4e5166;
}
h1 {
  font-family: 'Pirata One', cursive;
}
h3 {
  margin: 0;
  padding-top: 15px;
}
/* section addMember*/
.conatainerAdd1, .container {
  border-radius: 15px;
  border: 1px solid #e2d1c3;
  box-shadow: 2px 2px 5px #e2d1c3;
  margin: 15px 0 15px 0;
}
.conatainerAdd {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
}
input {
  margin: 10px 0 10px 0;
  text-align: center;
  border: 1px solid #e2d1c3;
  padding: 3px;
  border-radius: 5px;
  cursor: pointer;
}
.btnSubmit {
  background-image: linear-gradient(135deg, #fdfcfb 0%, #e2d1c3 100%);
  border: 1px solid #e2d1c3;
  padding: 8px 15px;
  border-radius: 5px;
  font-weight: bold;
}
.btnSubmit:hover {
  background-image: linear-gradient(to right top, #003366, #6b4c77, #a27183, #c79f9a, #e2d1c3);
  color: white;
}

/* ----- Section liste des membres */

.membersListe {
   display: flex;
   align-items: center;
   justify-content: flex-start;
   margin-left: 50px;
}
.membersListe p {
  margin: 5px 0;
}
.conatainerListe {
  column-count: 3;
  padding: 15px;
}
</style>
