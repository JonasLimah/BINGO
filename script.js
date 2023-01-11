let list  = []

function add(){
    let newList = document.querySelector("input").value
    if (document.querySelector("input").value == ""){
        alert("fill out the empty fiel!")
    }else{
        if(list.includes(newList)){
            alert("choice another name please!")
        }else{
            list.push(newList)
            document.querySelector("input").value = ''
            document.querySelector("#total .total").innerText =" " + list.length
        }
   
    }
    
}
document.querySelector("button").addEventListener("click",()=>{
    if (document.querySelector("input").value == ""){
        alert("fill out the empty fiel!")
    }else if(list.length <2){
        alert("The minimum number of participants is 2!")
     }    else{
        randomNum()
    document.querySelector(".filedBingo").innerHTML = "carregando.."
   
    }
    
})

function randomNum(){
    
    setTimeout(()=>{
       for(let i = 0; i < list.length; i++){
        let newLI = Math.floor(Math.random()*(i + 1))
        document.querySelector(".filedBingo").innerHTML =`The winner was ${list[newLI]}` 
       }
    }, 1000)
    
}