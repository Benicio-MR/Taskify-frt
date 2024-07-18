const iName = document.getElementById('name');
const iDesc = document.getElementById('desc');
const updtButton = document.getElementById('updt');

const params = new URLSearchParams(window.location.search);
const id = params.get('id');
console.log(params, id);

const load = async () => {
   const response = await fetch(`https://benicio-mr.github.io/Taskify-bck/notes/${id}`);
   const notej = await response.json();
   console.log(notej);
   if(notej.title.indexOf('_')) {
      iName.value = removeUl(capitalizeFirstLetter(notej.title));
   } else {
      iName.value = capitalizeFirstLetter(notej.title);
   }
   iDesc.value = notej.description;
};
load();

updateNote = async () => {
   if(iName.value.indexOf(' ')) {
      const response = await fetch(`https://benicio-mr.github.io/Taskify-bck/notes/text/update/${id}`, {
         method: 'PUT',
         headers: {
           'Content-Type': 'application/json',
         },
         body: JSON.stringify({ ntitle: underlineIt(iName.value), ntext: iDesc.value }),
      });
      const messg = await response.json();
      console.log(messg);
      alert('Updated with success');
   } else {
      const response = await fetch(`https://benicio-mr.github.io/Taskify-bck/notes/text/update/${id}`, {
         method: 'PUT',
         headers: {
           'Content-Type': 'application/json',
         },
         body: JSON.stringify({ ntitle: iName.value, ntext: iDesc.value }),
      });
      console.log(iName.value)
      const messg = await response.json();
      console.log(messg);
      alert('Updated with success');
   }
  
};
function underlineIt(str) {
   return str.replace(/ /g, "_");
}
function capitalizeFirstLetter(string) {
   if (string.length === 0) {
     return string;
   }
   return string.charAt(0).toUpperCase() + string.slice(1);
}
function removeUl(str) {
   return str.replace(/_/g, ' ')
}
updtButton.addEventListener('click', updateNote);
