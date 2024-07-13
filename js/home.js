const notesdv = document.querySelector(".notel");
const srch = document.getElementById("srch");
const showNotes = async () => {
   const respnse = await fetch("http://localhost:3000/notes")
   const notes = await respnse.json()
   console.log('Notes', notes);
   notes.forEach(({id, title, description}) => {
      console.log(id)
      const txtel = document.createElement('div');
      if(title.indexOf('_')) {
         const rnotet = capitalizeFirstLetter(removeUl(title))
         txtel.innerHTML = `
         <div class="note">
            <p class="left"><b>${rnotet}</b><br><span>Description: ${description}</span> </p>
            <br>
            <div class="right">
               <a id="edit" href="updateTextNote.html?id=${id}">✏️</a>
               <p onclick="openModal('${title}')" id="del-note">❌</p>
            </div>
         </div>
         `;
      } else {
         const rnotet = capitalizeFirstLetter(title)
         txtel.innerHTML = `
         <div class="pokemon">
            <p class="left">${rnotet} <span><br>Description: ${description}</span><b></b></p>
            <div class="right">
               <a class="edit" href="updateTextNote.html?id=${id}">✏️</a>
               <p onclick="openModal('${title}') : return alert("You have no notes")" id="del-note">❌</p>
            </div>
         </div>
         `;
      }
      notesdv.appendChild(txtel);
   });
}
function capitalizeFirstLetter(string) {
   if (string.length === 0) {
     return string;
   }
   return string.charAt(0).toUpperCase() + string.slice(1);
}



showNotes()

function removeUl(str) {
   return str.replace(/_/g, ' ')
}