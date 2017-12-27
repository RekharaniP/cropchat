<template>
 <div>
<h1> Welcome to Service Request </h1>

<p> This is Create Request Form</p><p>
</p>   
</div>
 
</template>
<script>
import axios from 'axios';

export default {
  data() {
    return {
             
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
  .button {
  display: inline-block;
-webkit-box-sizing: content-box;
-moz-box-sizing: content-box;
box-sizing: content-box;
float: none;
z-index: auto;
width: auto;
height: auto;
position: static;
cursor: pointer;
opacity: 1;
margin: 0;
padding: 10px 20px;
overflow: visible;
border: 1px solid #018dc4;
-webkit-border-radius: 3px;
border-radius: 3px;
font: normal 16px/normal "Times New Roman", Times, serif;
color: rgba(255,255,255,0.9);
-o-text-overflow: clip;
text-overflow: clip;
background: #0199d9;
-webkit-box-shadow: 2px 2px 2px 0 rgba(0,0,0,0.2) ;
box-shadow: 2px 2px 2px 0 rgba(0,0,0,0.2) ;
text-shadow: -1px -1px 0 rgba(15,73,168,0.66) ;
-webkit-transition: all 300ms cubic-bezier(0.42, 0, 0.58, 1);
-moz-transition: all 300ms cubic-bezier(0.42, 0, 0.58, 1);
-o-transition: all 300ms cubic-bezier(0.42, 0, 0.58, 1);
transition: all 300ms cubic-bezier(0.42, 0, 0.58, 1);
-webkit-transform: none;
transform: none;
-webkit-transform-origin: 50% 50% 0;
transform-origin: 50% 50% 0;
  }
</style>