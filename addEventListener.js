document.getElementById("eventBtn").addEventListener("click",()=>{
    const postArea=document.getElementById("post");
    const postInput=document.getElementById("post-input");
    let postValue=postInput.value;
    postArea.innerHTML+=`
    <p>${postValue}</p>
    `;
    postInput.value="";
})