console.log("College Library ");

showBooks();

let addBook = document.getElementById("addBook");
addBook.addEventListener("click", function (e) {
  let addBookName = document.getElementById("addBookName");
  let addAuthorName = document.getElementById("addAuthorName");
  let type;
  let radio1 = document.getElementById('radio1');
  let radio2 = document.getElementById('radio2');
  let radio3 = document.getElementById('radio3');

  if (radio1.checked) {
      type = radio1.value;
      console.log(type); 
  }
 
  else if (radio2.checked) {
      type = radio2.value;
  }
  else if (radio3.checked) {
      type = radio3.value;
  }
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let bookObj = {
    bookName: addBookName.value,
    authorName: addAuthorName.value,
    type : type.value
  };
  console.log(notesObj);
  notesObj.push(bookObj);
  localStorage.setItem("notes", JSON.stringify(notesObj));
//   console.log(notesObj);
  addBookName.value = "";
  addAuthorName.value = "";
  showBooks();
});

function showBooks() {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let html = "";
  notesObj.forEach((element, index) => {
    html += `    <tr>
                    <th scope="row">${index + 1}</th>
                    <td>${element.bookName}</td>
                    <td>${element.authorName}</td>
                    <td>${element.type}</td>
                </tr>
                `;
  });
  let notesElm = document.getElementById("notes");
  if (notesObj.length != 0) {
    notesElm.innerHTML = html;
  } else {
    notesElm.innerHTML = `Nothing to show! Use "Add a Note" section above to add notes.`;
  }
}

