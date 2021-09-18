const count = document.querySelector('.count');
const add = document.querySelector('.addCount > button');
const decrease = document.querySelector('.decrementCount > button');
count.style.color = 'green';
let output = 0;

add.addEventListener('click',()=>{
    output++;
    if(output>=0){
        count.style.color = 'green';
    }
    count.textContent = output;
})
decrease.addEventListener('click',()=>{
    output--;
    if(output<0){
        count.style.color = 'red';
    }
    count.textContent = output;
})