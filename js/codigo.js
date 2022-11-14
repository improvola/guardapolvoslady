const laty = document.querySelectorAll(".cala");
const algo = document.querySelector(".algo");

let count = 0;
function apretar(){
    console.log("Le diste click");
    count+=1;
    console.log(count);
    algo.textContent = count;
}

    // element.addEventListener('click', function(){
    //     console.log("Le diste click");
    // })
    
    // laty.forEach( element =>{
    //     console.log(element);
    // })    

console.log(laty);