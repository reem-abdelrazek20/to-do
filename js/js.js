const themeToggle = document.getElementById("theme-toggle");
const body = document.body;


if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark-mode");
  themeToggle.checked = true; 
}


themeToggle.addEventListener("change", () => {
  if (themeToggle.checked) {
    body.classList.add("dark-mode");
    localStorage.setItem("theme", "dark"); 
  } else {
    body.classList.remove("dark-mode"); 
    localStorage.setItem("theme", "light"); 
  }
});


const input = document.querySelector(".input");
const message = document.querySelector(".message");
const add = document.querySelector(".add");
const form = document.querySelector("form");
const ul = document.querySelector("ul");


form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (input.value.trim() === "") {
        alert("يجب إدخال نص!");
        return;
    }

    const li = document.createElement("li");
    li.classList.add("flex", "justify-between", "items-center", "p-4", "mb-2", 'bg-[#3a3a553b]');

   
   
 


    const div = document.createElement("div");
    div.classList.add("flex", "items-center");

    const check = document.createElement("input");
    check.type = "checkbox";
    check.classList.add("mr-4", "w-5", "h-5","cursor-pointer",'check');

    const p = document.createElement("p");
    p.textContent = input.value;

    div.appendChild(check);
    div.appendChild(p);

    const exst = document.createElement("button");
    exst.textContent = "×";
    exst.classList.add("bg-red-500", "border-none" ,"text-white" ,"px-4" ,"py-1" ,"rounded" ,"cursor-pointer");
   

  


    exst.addEventListener("click", () => {
        li.remove();
    });

    li.appendChild(div);
    li.appendChild(exst);
    ul.appendChild(li);

    input.value = "";

    check.addEventListener("change", () => {
        check.disabled = true;
        p.classList.add("line-through", "text-gray-400");
       

        const finch = document.createElement("p");
        finch.textContent = "Well Done!";
        finch.classList.add("text-center", "pt-[71px]", "text-[30px]", "text-[#24d524]" ,"uppercase", "font-extrabold");

       
        message.appendChild(finch);

        setTimeout(() => {
            finch.remove();
            particlesDiv.remove()
        }, 1000);
    });
});

    

function updateDate() {
    const today = new Date();
    
   

    
    const formattedDate = ` ${today.getDate()} /${today.getMonth()+1} /${today.getFullYear()}`;
    
    document.getElementById("dateDisplay").textContent =formattedDate;
}



function updateClock() {
    const now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    
    hours = hours % 12 || 12; 

  
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    const timeString = `${hours}:${minutes}:${seconds} `;

    document.getElementById("clock").textContent = timeString;
}


setInterval(updateClock, 1000);


window.onload =function () {
   updateDate() ;
   updateClock();  
}
