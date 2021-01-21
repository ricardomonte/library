let listBook = [];
let receiveForm = [];
let booki = '';
let bookId = '';
let btnStatus = "";
let stat = '';
let prev = '';

// 

let bookListUl = document.querySelector('#book-list ul');
const form = document.forms['add-book'];
let u = document.querySelector('#container-li')
const btn = document.querySelector('#g-form')


// remove item 
bookListUl.addEventListener('click', (e) => {
  remove(e)
  changeStatus(e)
});


btn.onclick = () => { displayForm()}


form.addEventListener('submit', (e) => {
  e.preventDefault()
  receiveForm = []
  let title = document.querySelector('#title').value;
  let author = document.querySelector('#author').value;
  let pages = document.querySelector('#pages').value;
  let status = document.querySelector('#status').value;
  displayForm()
  displayBook(title, author, pages, status)
  booki = new Books(title, author, pages, status)
  AddBookToList(booki)
  title = '';
  author = '';
  pages = '';
  status = '';

  form.reset()

})


function Books(title, author, pages, read) {
  if(read === 'allready readed'){
    read = true
  }
  else {
    read = false
  }
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

function displayBook(title, author, pages, read){
  let l = document.createElement('li');
  let titl = document.createElement('p');
  let auth = document.createElement('p');
  let pag = document.createElement('p');
  let rea = document.createElement('button');
  let buttondelete = document.createElement('button');
  titl.textContent = 'Title: ' + title
  auth.textContent = 'Author: ' + author
  pag.textContent = 'Nº of pages: ' + pages
  rea.textContent = read  
  buttondelete.textContent = 'Delete'
  buttondelete.classList.add('delete')
  rea.classList.add('changes')
  rea.id = 'changeble'
  l.classList.add('book')
  l.appendChild(titl);
  l.appendChild(auth);
  l.appendChild(pag);
  l.appendChild(rea);
  l.appendChild(buttondelete);
  u.appendChild(l);
}

const changeStatus = (e) => {
  if (e.target.id === 'changeble') {
    const target = e.target;
    if (target.textContent === 'Not readed') {
      target.textContent = 'Allready readed';
    } else {
      target.textContent = 'Not readed';
    }
  }
};

function remove(e){
  let target = e.target;
  if(target.className == 'delete') {
    let li = target.parentElement;
    li.remove()
  }
}

function displayForm() {
  const disp = document.querySelector('#hide');
  if(disp.className == 'show'){
    disp.classList.remove('show')
    disp.classList.add('no-show')
  }
  else{
    disp.classList.remove('no-show')
    disp.classList.add('show')
  }
}
