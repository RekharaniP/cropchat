<template>
  <div id="app">
  <h1>Request Form</h1>
    <form @submit.prevent="validateBeforeSubmit" v-if="!formSubmitted">

        
        <div class="form-group" :class="{'has-error': errors.has('name') }">
            <label  class="control-label" for="name">Name</label><br>
            <input v-model="name" v-validate.initial="name" data-rules="required|alpha|min:3" class="form-control" type="text" placeholder="Full Name">
            <p class="text-danger" v-if="errors.has('name')">{{ errors.first('name') }}</p>
        </div>
        <br><br>
        <div class="form-group" :class="{'has-error': errors.has('email') }" >
            <label class="control-label" for="email">Email</label><br>
            <input v-model="email" v-validate.initial="email" data-rules="required|email" class="form-control" type="email" placeholder="Email">
            <p class="text-danger" v-if="errors.has('email')">{{ errors.first('email') }}</p>
        </div>
        <br><br>
        <div class="form-group" :class="{'has-error': errors.has('url') }">
            <label class="control-label" for="url">Website</label><br>
            <input v-model="url" v-validate.initial="url" data-rules="required|url" class="form-control" type="text" placeholder="Website">
            <p class="text-danger" v-if="errors.has('url')">{{ errors.first('url') }}</p>
        </div>
        <br><br>
        <div class="form-group" :class="{'has-error': errors.has('secret') }">
            <label class="control-label" for="secret">Secret</label><br>
            <input v-model="secret" v-validate.initial="secret" data-rules="required|passphrase" class="form-control" type="text" placeholder="Code Phrase">
            <p class="text-danger" v-if="errors.has('secret')">{{ errors.first('secret') }}</p>
        </div>

        <button v-on:click="greet()"  class="btn btn-primary btn-block" type="submit" >Submit</button>
    </form>
    <div v-else>
      <h1 class="submitted">Form submitted successfully!</h1>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import VeeValidate from 'vee-validate';
Vue.use(VeeValidate);
VeeValidate.Validator.extend('passphrase', {
    getMessage: field => 'Sorry dude, wrong pass phrase.',
    validate: value => value.toUpperCase() == 'Demogorgon'.toUpperCase()
});
export default {
  data () {
    return {
      email: '',
      name: '',
      url: '',
      secret: '',
      formSubmitted: false
    }
  },
  methods: {
    validateBeforeSubmit(e) {
        this.$validator.validateAll();
        if (!this.errors.any()) {
            this.submitForm()
        }
      },
    submitForm(){
      this.formSubmitted = true
    },
  
  greet(){
    axios.post('http://kermit:kermit@localhost:8080/flowable-rest/service/runtime/process-instances', {
      
   "processDefinitionId":"easyflow:2:2544",
   "businessKey":"easyflow",
   "returnVariables":true,
   "variables": [
      {
        "name":"myVar",
        "value":"This is a variable"
      }
   ]

    })
    .then(response => {})
    .catch(e => {
      this.errors.push(e)
    });
    console.log("hello");
  }
  }
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
.container {
  width: 500px;
}
h1 {
  text-align: center
}
img {
  text-align: center
}
.submitted {
  color: #4fc08d;
}
input[type=text], [type=email]{
display: inline-block;
-webkit-box-sizing: content-box;
-moz-box-sizing: content-box;
box-sizing: content-box;
float: none;
z-index: auto;
width: auto;
height: auto;
position: static;
cursor: default;
opacity: 1;
margin: 1px;
padding: 10px 20px;
overflow: visible;
border: 3px solid #b7b7b7;
-webkit-border-radius: 1px;
border-radius: 1px;
font: normal 16px/normal "Times New Roman", Times, serif;
color: rgba(0,142,198,1);
-o-text-overflow: clip;
text-overflow: clip;
background: rgba(252,252,252,1);
-webkit-box-shadow: 0 0 0 0 rgba(0,0,0,0.2) inset;
box-shadow: 0 0 0 0 rgba(0,0,0,0.2) inset;
text-shadow: 1px 1px 0 rgba(255,255,255,0.66) ;
-webkit-transition: all 200ms cubic-bezier(0.42, 0, 0.58, 1);
-moz-transition: all 200ms cubic-bezier(0.42, 0, 0.58, 1);
-o-transition: all 200ms cubic-bezier(0.42, 0, 0.58, 1);
transition: all 200ms cubic-bezier(0.42, 0, 0.58, 1);
-webkit-transform: none;
transform: none;
-webkit-transform-origin: 50% 50% 0;
transform-origin: 50% 50% 0;
}
</style>