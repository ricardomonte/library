let listBook = [];
let receiveForm = [];
let booki = '';

// 

let bookListUl = document.querySelector('#book-list ul');
const form = document.forms['add-book'];
let u = document.querySelector('#container-li')
const btn = document.querySelector('#g-form')


// remove item 
bookListUl.addEventListener('click', remove);
function remove(e){
  let target = e.target;
  if(target.className == 'delete') {
    let li = target.parentElement;
    li.remove()
  }
}

btn.onclick = () => { displayForm()}




form.addEventListener('submit', (e) => {
  e.preventDefault()
  receiveForm = []
  let title = document.querySelector('#title').value;
  let author = document.querySelector('#author').value;
  let pages = document.querySelector('#pages').value;
  let status = document.querySelector('#status').value;
  receiveForm.push(title)
  receiveForm.push(author)
  receiveForm.push(pages)
  receiveForm.push(status)
  booki = new Books(...receiveForm)
  AddBookToList(booki)
  displayBook()

  title = '';
  author = '';
  pages = '';
  status = '';
  console.log(title)

  form.reset()

})

function Books(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Books.prototype.info = function(){
  return `Book title: ${this.title}
  Writen by: ${this.author}
  Number of pages:${this.pages}, 
  Status: ${this.read}`;
}

function AddBookToList(something) {
  listBook.push(something);
}

function displayBook(){
  let l = document.createElement('li');
  let buttondelete = document.createElement('span');
  listBook.forEach(book => l.innerHTML = '<p>Title: ' + book.title + '</p><p>Author: ' + book.author + '</p><p>Pages: ' + book.pages + '</p><p>Status: ' + book.read + '</p>')
  buttondelete.textContent = 'Delete'
  buttondelete.classList.add('delete')
  l.appendChild(buttondelete);
  u.appendChild(l);
}

function displayForm() {
  const disp = document.querySelector('#hide');
  disp.classList.toggle('no-show')
  // const attr = document.createAttribute('class');
  // attr.value = 'visible';
  // disp.setAttributeNode(attr)
}

console.log('this is a test')