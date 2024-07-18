const alerts = document.querySelectorAll(".alert")
const xs = document.querySelectorAll('.rightAlert')

for(let i=0; i<xs.length; i++){
    xs[i].addEventListener("click", ()=>{
        alerts[i].style.display = "none"
    })
}