<template>
<v-app>
  <div class="pt-3">
<v-row class=d-flex>
<v-col cols="8">
    <v-text-field style="margin-left: 45%;" label="New Todo" outlined v-model="newItem" @keyup.enter="addItem">

    </v-text-field>
</v-col>
<!-- Second Column -->
<v-col cols="1">
    <v-btn large color="primary" @click="addItem">Add</v-btn>
</v-col>
</v-row>
<transition-group name="fade">
    <v-card class="mx-auto pa-3 ma-2 text-center" max-width="400" v-for="todo in todos" :key="todo.id">
<v-row>
    <v-col cols="8">
        <v-list-item-title class="headline mb-1">{{todo.name}}</v-list-item-title>
    </v-col>
    <v-col cols="4">
        <v-btn icon color="red" @click="delTodo(todo.id)"><v-icon>mdi-delete</v-icon></v-btn>
    </v-col>
</v-row>
    </v-card>
</transition-group>
  </div>
  </v-app>
</template>

<script>
import { db } from '../firebase/config';
export default {
    data() {
        return {
            todos: [],
        newItem: ""
    }
    },
    methods: {
        async addItem() {
            if (this.newItem) {
                db.collection('books').add({ name: this.newItem });
                this.newItem = "";
            }  
        },
        delTodo(id) {
            db.collection('books').doc(id).delete();
        }
    },
    firestore: {
    todos: db.collection('books')
}
}
</script>

<style>

</style>