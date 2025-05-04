const postArea=document.getElementById("post");
const postInput=document.getElementById("post-input");
const deleteInput=document.getElementById("delete");
const deleteBtn=document.getElementById("delete-btn");
document.getElementById("eventBtn").addEventListener("click",()=>{
    let postValue=postInput.value;
    postArea.innerHTML+=`
    <p>${postValue}</p>
    `;
    postInput.value="";
})
const deleteHandle=()=>{
    const deleteText=deleteInput.value.trim();
    if(deleteText=="Delete"){
        deleteBtn.removeAttribute("disabled", false);
    }else{
        deleteBtn.setAttribute("disabled", true);
    }
}