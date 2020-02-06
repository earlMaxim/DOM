//first task
let listDOM = document.querySelector('#list');
let btn = document.querySelector('#btn1')

btn.onclick = function(){
    let data = document.querySelector("#item").value;
    if(data!=""){
        let newLi = document.createElement("li");
            newLi.innerHTML=`${data}`
        let newDel = document.createElement("button")
            newDel.className="delete"
            newDel.innerHTML="delete"
        newLi.appendChild(newDel)
        listDOM.appendChild(newLi)
    
        let allLi = document.querySelectorAll("li")
        let allBtnDel = document.querySelectorAll(".delete")
        //delete
        for(let i=0; i<allBtnDel.length;i++){
            allBtnDel[i].onclick = function(){
                listDOM.removeChild(allLi[i]);
            }
        }
    }
}

//second task
let result= document.querySelector('#result');
let numbers = document.querySelectorAll('.num');
let btn_task2 = document.querySelector('.btn');

btn_task2.onclick = function(){
    //values from inputs
    let val = [].map.call(numbers, function(element){return parseInt(element.value, 10)})
    result.innerHTML = val.reduce(function(sum,current){
        return sum+current;
    },0)
}

