let addBtn=document.querySelector(".addbtn");
let modalCont=document.querySelector(".modal");
let mainCont=document.querySelector(".main-cont");
let textAreaCont = document.querySelector(".text");
let addFlag=false;

addBtn.addEventListener("click", (e) => {
    //display Modal

    //Display Modal if addFlag is true
    //Display nothing if addFlag is false
    addFlag= !addFlag;
    if(addFlag){
        modalCont.style.display= "flex";
    }
    else{
        modalCont.style.display= "none";
    }
})

modalCont.addEventListener("keydown", (e) => {
    let key = e.key;
    if(key == "Shift"){
        createTicket();
        modalCont.style.display= "none";
        textAreaCont.value = "";
        addFlag= false;
    }
})


const createTicket = () => {
    let ticketCont= document.createElement("div")
    ticketCont.setAttribute("class","ticket-cont");
    ticketCont.innerHTML= `
            <div class="ticket-color"></div>
            <div class="ticket-id">16</div>
            <div class="task">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque enim, voluptatem sunt eligendi placeat ipsam explicabo natus eveniet ab incidunt distinctio nulla architecto labore dolores necessitatibus beatae, nisi atque possimus.</div>
    `;
    mainCont.appendChild(ticketCont);
}