const btnEl    =document.querySelector(".btn")

btnEl.addEventListener("mouseover" ,   (e)=>{
    console.log(e.pageX ,  e.pageY);
    const x = e.pageX - btnEl.offsetLeft;
    const y = e.pageY -btnEl.offsetTop;

    btnEl.style.setProperty ("--posx", x + "px");
    btnEl.style.setProperty ("--posy", y + "px");
})