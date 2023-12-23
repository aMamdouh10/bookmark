var bookName = document.getElementById("booktName");
var bookModel = document.getElementById("bookModel");
var bookList = [];

if(localStorage.getItem("books") != null)
{
    bookList = JSON.parse( localStorage.getItem("books"));
    displayProudct(bookList)
}

function addBook(){
if(validateBookName()&&validateBookUrl() == true){
    var book = {
        name:bookName.value,
        model:bookModel.value
    }
    bookList.push(book)
        localStorage.setItem("books",JSON.stringify(bookList))

    displaybook(bookList)
}

}

function displaybook() {
var cartona =``;
for (i =1;i<bookList.length;i++){
    cartona+=`<tr>
    <td>${i}</td>
    <td>${bookList[i].name}</td>
    <td>
        <button class="text-white btn btn-warning "><i class="fa-solid fa-eye"></i>
        Visite</button>
    </td>
    <td>
        <button onclick="deleteBook(${i})" class="btn btn-danger "><i class="fa-solid fa-trash"></i>
        Delete</button>
    </td>
</tr>`
}
document.getElementById("tBody").innerHTML = cartona;
}


function deleteBook(bookIndex){
    bookList.splice(bookIndex,1)
    localStorage.setItem("books",JSON.stringify(bookList))
    displaybook(bookList)
}



function validateBookName(){
    var rejex = /^[a-zA-Z]{3,}$/;
    if( rejex.test(bookName.value)){
        bookName.style.border="none"
        document.getElementById('wrongName').classList.add("d-none")

        return true
    }else{
        bookName.style.border="5px red solid"
        document.getElementById('wrongName').classList.remove("d-none")
        return false
    }
}


function validateBookUrl(){
    var rejex = /^www\.[a-zA-Z]{3,20}\.com$/;
    if( rejex.test(bookModel.value)){
        bookModel.style.border="none"
        document.getElementById('wrongUrl').classList.add("d-none")

        return true
    }else{
        bookModel.style.border="5px red solid"
        document.getElementById('wrongUrl').classList.remove("d-none")

        return false
    }
}



// function openModal(){
//     var modal = document.getElementById("exampleModal")
//     modal.classList.replace("d-none","d-bloc")
    
// }