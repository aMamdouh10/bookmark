var bookName = document.getElementById("booktName");
var bookModel = document.getElementById("bookModel");
var bookList = [];
// if(localStorage.getItem("bookList") != null){
//     bookList =JSON.parse(localStorage.getItem("bookList"))
//     displaybook()
// }

function addBook(){
    var book = {
        name:bookName.value,
        model:bookModel.value
    }
    bookList.push(book)
    displaybook(bookList)
    // localStorage.setItem("bookList",JSON.stringify(bookList))
}

function displaybook(books) {
var cartona =``;
for (i =1;i<books.length;i++){
    cartona+=`<tr>
    <td>${i}</td>
    <td>${books[i].name}</td>
    <td>
        <button class="text-white btn btn-warning "><i class="fa-solid fa-eye"></i>
        Visite</button>
    </td>
    <td>
        <button class="btn btn-danger "><i class="fa-solid fa-trash"></i>
        Delete</button>
    </td>
</tr>`
}
document.getElementById("tBody").innerHTML = cartona;
}