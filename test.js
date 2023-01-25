
fetch('https://my-json-server.typicode.com/maioranav/U02-W07-D03/db')
   .then(response => response.json())
   .then(json => console.log(json))