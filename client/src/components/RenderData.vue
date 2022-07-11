<script setup lang="ts">
import { ref } from "vue";
import { getAllUsers, addUser } from "../api/request";
import { IUser } from "../api/type";
let users = ref<IUser[]>([]);

getAllUsers().then((res) => {
  users.value = res;
  // console.log(users);
});

let username = ref("");
let age = ref(0);

async function showData() {
  console.log(username.value, age.value);
  addUser(username.value, age.value);
  users.value = await getAllUsers();
}
</script>

<template>
  <div v-for="user in users" :key="user.username">{{ user.age }}</div>
  <div>
    <input type="text" v-model="username" />
    <input type="text" v-model="age" />
    <button @click="showData">click</button>
  </div>
</template>

<style scoped></style>
