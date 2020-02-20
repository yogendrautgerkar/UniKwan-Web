<template>
   <div class="text-center">
    <v-dialog
      v-model="dialog"
      width="500"
    >
      
      <template v-slot:activator="{ on }">
        <v-btn
          color="light-green accent-3"
          dark
          v-on="on"
        >
          Add Project
        </v-btn>
      </template>

      <v-card>
        <v-card-title
          class="headline grey lighten-2"
          primary-title
        >
          Add Project Info
        </v-card-title>

        <v-card-text>
         <v-form class="pa-2">
           <v-text-field label="Title" v-model="name"></v-text-field>
           
           <v-text-field label="Project Status" v-model="status"></v-text-field>
           <v-text-field label="Project Details" v-model="details"></v-text-field>
         </v-form>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
             @click="submit"
          >
            Add
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import db from '~/fb'
export default {
    data () {
      return {
        dialog: false,
        name: '',
        id: '',
        status: '',
        details: ''
      }
    },
    methods: {
        submit(){
           if(this.name == '' || this.status == '' || this.details == '')return
           else{const test = {
             name: this.name, 
              id: this.id, 
              status: this.status, 
              details: this.details
            }
           db.collection('tests').add(test).then(() => {
              
              this.name = '',
              this.status = '',
              this.details = '',
              this.dialog = false
           }) 
           

           }
        }
    }
  }
</script>
<style>

</style>
