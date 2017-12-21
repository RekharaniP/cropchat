<template>
 <div>
 <div class = "mdl-grid">
 <div class = "mdl-cell mdl-cell--3-col mdl-cell mdl-cell--1-col-tablet mdl-cell--hide-phone">
 <div class = "mdl-cell mdl-cell--6-col mdl-cell--4-col-phone">
 <table class="mdl-data-table mdl-js-data-table mdl-shadow--2dp">
 <thead>
 <tr>
 <th>User ID</th>
 <th>ID</th>
 <th>Title</th>
 <th>Completed</th>
 </tr>
 </thead>
 <tbody>
 <tr v-for="post of posts">
 <td> {{post.userId}} </td>
 <td>{{post.id}}</td>
 <td>{{post.title}} </td>
 <td>{{post.completed}} </td>
 </tr>
 </tbody>
 </table>


  <ul v-if="errors && errors.length">
    <li v-for="error of errors">
      {{error.message}}
    </li>
  </ul>
 </div>
 </div>
 </div>
 <router-link class = "add-picture-button mdl-button mdl-js-button mdl-button--fab mdl-button--colored" to = "/post">
 <i class = "material-icons"> add </i>
 </router-link>
 </div>
</template>
<script>
import axios from 'axios';

export default {
  data() {
    return {
      posts: [],
      errors: []
    }
  },

  // Fetches posts when the component is created.
  created() {
    axios.get('http://jsonplaceholder.typicode.com/posts')
    .then(response => {
      // JSON responses are automatically parsed.
      this.posts = response.data
    })
    .catch(e => {
      this.errors.push(e)
    }),

    // async / await version (created() becomes async created())
    //
    // try {
    //   const response = await axios.get(`http://jsonplaceholder.typicode.com/posts`)
    //   this.posts = response.data
    // } catch (e) {
    //   this.errors.push(e)
    // }
    
    pages () {
        return this.pagination.rowsPerPage ? Math.ceil(this.posts.length / this.pagination.rowsPerPage) : 0
      }
  }
}
</script>


<style scoped>
  .list {
    width: 100%;
    padding: 0;
  }
  .add-picture-button{
  position: fixed;
  right: 24px;
  bottom: 24px;
  z-index:998;
  }
  .image-card{
  position: relative;
  margin-bottom: 8px;
  }
  image-card__picture > img{
  width: 100%;
  }
  image-card__comment{
  position: absolute;
  bottom: 0;
  height: 52px;
  padding: 16px;
  text-align: right;
  background: rgba(0,0,0,0.5);
  }
  image-card__comment > span {
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  }
</style>