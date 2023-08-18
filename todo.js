const inputBox= document.getElementById('inputBox')
const listcontainer= document.getElementById('list-container')
console.log(inputBox.value)
function addtodo(){
if(inputBox.value === ''){
  // alert('You must write something!')
  Swal.fire('You must write something!')
}else{
  let li=document.createElement('li');
  li.innerHTML = inputBox.value;
  listcontainer.appendChild(li);
  let span = document.createElement('span')
  span.innerHTML = ".  ×";
  li.appendChild(span)
}
 inputBox.value='';
 saveData();
}

listcontainer.addEventListener('click',function(e){
  if(e.target.tagName === 'LI'){
    e.target.classList.toggle('checked');
    saveData()
  }else if( e.target.tagName === 'SPAN'){
    e.target.parentElement.remove();
    saveData()
  }
},false);

function saveData(){
      localStorage.setItem('data', listcontainer.innerHTML)
}

function showTask(){
  listcontainer.innerHTML = localStorage.getItem('data');
}
showTask();