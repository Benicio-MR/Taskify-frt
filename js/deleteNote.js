const shadowModal = document.querySelector('.modal-shadow');
const buttonCancel = document.getElementById('cancel');
const buttonDelete = document.getElementById('del');
let noteName = null;

const openModal = (name) => {
   shadowModal.removeAttribute("hidden");
   noteName = name.toLowerCase();
}

const closeModal = () => {
   shadowModal.toggleAttribute("hidden");
}

const deleteNote = async () => {
   console.log(noteName);

   const response = await fetch(`http://localhost:3000/notes/delete/${noteName}`, {
     method: 'DELETE',
   });

   const message = await response.json();
   console.log(message);
   if (response.status !== 200) {
      alert('An unexpected error occurred. See console.');
      return;
   }
  
   // Recarrega a página
   window.location.reload();
}
function underlineIt(str) {
   str.replace(/ /g, "_");
}

buttonDelete.addEventListener("click", deleteNote)