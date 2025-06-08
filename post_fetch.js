// fetch('https://jsonplaceholder.typicode.com/posts', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//       title: 'My New Post',
//       body: 'This is the content of the post.',
//       userId: 1
//     })
//   })
//     .then(response => response.json())
//     .then(data => {
//       console.log('Created Post:', data);
//     })
//     .catch(error => {
//       console.error('Error:', error);
//     });



    fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log('Post:', data);
    })
    .catch(error => {
      console.error('Fetch error:', error);
    });
  



fetch('').then( response =>{
    if(!response.ok){
        throw new Error('Net work response was not ok')
    }
    return response.json();
}
).then(
    data => {
        console.log(data);
    }
)
.catch(
    error => {
        console.log(error)
    }
)