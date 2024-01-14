let btn=document.querySelector("button");
let ul=document.querySelector("ul");
let input=document.querySelector("input");


btn.addEventListener("click",function(){
    let item=document.createElement("li");
    item.innerText=input.value;

    let dltbtn=document.createElement("button");
    dltbtn.innerText="Delete";
    dltbtn.classList.add("Delete");

    item.appendChild(dltbtn);
    ul.appendChild(item);
    input.value="";

})

ul.addEventListener("click",function(event){
    if(event.target.nodeName=="BUTTON"){
        let listitem=event.target.parentElement;
        listitem.remove();
        console.log("deleted");
    }
})

// let dltbtns=document.querySelectorAll(".Delete");
// for(dltbtn of dltbtns){
//     dltbtn.addEventListener("click",function(){
//         let par=this.parentElement;
//         par.remove();
//     });
// }