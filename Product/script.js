let name   = document.querySelector('#name');
let amount = document.querySelector('#amount');
let add    = document.querySelector('#add');
let table  = document.querySelector('#table');
let total  = document.querySelector('#total');
add.addEventListener('click', ()=>{ 
    let sum = +price.value * +amount.value;
    total.textContent = (+total.textContent + sum).toString();
    let tr = document.createElement('tr');
    tr.classList.add("product");
    tr.innerHTML = `<th>${name.value}</th>
    <th>${price.value}</th>
    <th>${amount.value}</th>
    <th>${sum}</th>
    <th id="remove">удалить</th>`
    table.appendChild(tr);
    let remove = document.querySelectorAll("#remove");
    remove.forEach(elem => {
        elem.addEventListener('click', (event)=>{
            event.currentTarget.parentNode.remove();
            let rowSum = event.currentTarget.parentNode.querySelector('th:nth-child(4)').textContent
            total.textContent = (+total.textContent - rowSum).toString();
        })
    });
})