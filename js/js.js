

const input = document.querySelector(".input");
const message = document.querySelector(".message");
const add = document.querySelector(".add");
const form = document.querySelector("form");
const ul = document.querySelector("ul");

// منع السلوك الافتراضي للنموذج
form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (input.value.trim() === "") {
        alert("يجب إدخال نص!");
        return;
    }

    const li = document.createElement("li");
    li.classList.add("flex", "justify-between", "items-center", "p-4", "mb-2");

    const div = document.createElement("div");
    div.classList.add("flex", "items-center");

    const check = document.createElement("input");
    check.type = "checkbox";
    check.classList.add("mr-4", "w-5", "h-5");

    const p = document.createElement("p");
    p.textContent = input.value;

    div.appendChild(check);
    div.appendChild(p);

    const exst = document.createElement("button");
    exst.textContent = "×";
    exst.classList.add("ml-4", "exst", "font-bold", "cursor-pointer", "text-xl");

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
        finch.classList.add("text-center", "pt-[71px]", "text-[30px]", "text-[#24d524]" ,"uppercase", "tracking-[10px]" ,"font-extrabold");

       
        message.appendChild(finch);

        setTimeout(() => {
            finch.remove();
            particlesDiv.remove()
        }, 1000);
    });
});
