const itm = document.getElementById('i');
const ttl = document.getElementById('ttl');
const cont = document.getElementById('cont');

const registerNote = async () => {
   const response = await fetch("http://localhost:3000/notes/add/text", {
      method: 'POST',
      headers: {
         'Content-Type': 'application/json',
      },
      body: JSON.stringify({
         title: ttl.value,
         text: itm.value,
      })
   });
   const responseData = await response.json();
   console.log(responseData);
   if(response.status === 200) {
      alert('The requested note has been created successfully!')
   } else {
      console.error('An error occurred')
   }
}