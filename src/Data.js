import axios from 'axios';
export default {
        
    testthis:function(){
        
        picturesss : 'looooollll';
        return  [
        {
            'id': 0,
            'url': '',
            'comments':'A cat game',
            'info':'Posted by Kevin on friday'
        },
        {
            'id':1,
            'url':'',
            'comments':'Tatoo and Cat',
            'info':'Posted by Charles on Tuesday'
        },
        {
            'id':2,
            'url':'',
            'comments':'Santa cat',
            'info':'Posted by Richard on Monday'
        }, 
        {
            'id':3,
            'url':'',
            'comments':'Mexico Cat',
            'info':'Posted by Richard on Monday'
        },
        {
            'id':4,
            'url':'',
            'comments':'Curious Cat',
            'info':'Posted by Richard on Monday'
        }
 
    ];
    },
  testthis2 : function(){
      

  axios.get('http://jsonplaceholder.typicode.com/todos')
    .then(function (response) {
      var count = Object.keys(response.data).length
      console.log("Succes!!!!!"+count);
      return response.data;
      
    })
    .catch(function (error) {
      console.log("Failure");
    });   
}
    
}


