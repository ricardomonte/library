let listBook = [];

// 

let bookListUl = document.querySelector('#book-list ul');
const form = document.forms['add-book'];
// remove item 
bookListUl.addEventListener('click', remove);
function remove(e){
  let target = e.target;
  if(target.className == 'delete') {
    let li = target.parentElement;
    li.remove()
  }
}




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
  // booki = new Books(...receiveForm)
  // AddBookToList(booki)

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

console.log('this is a test')