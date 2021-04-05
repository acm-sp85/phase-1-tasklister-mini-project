document.addEventListener("DOMContentLoaded", () => {
//picking the FORM by its ID and adding it to a variable for easy access
  let submit = document.getElementById('create-task-form')
  
//we are going to add a series of actions to the SUBMIT input, the first of which will be to cancel its default action
//pointer to our UL in the DOM
//we are gonna create an LI that will later be appended to out UL
//the value of that new LI is what we are receiving from the form
  submit.addEventListener('submit', function(event){
  event.preventDefault();

  const ul = document.getElementById('tasks')
  const li = document.createElement('li')

  li.innerText = document.getElementById('new-task-description').value;

  ul.append(li)
 
  });

/* we have to add an event listener to our LI items. it should delete the clicked LI item. To do so we are 
going to select the UL by its ID and then add an event listener to it that will have a function that will remove 
the clicked LI and log a message saying which LI was deleted. 
*/

  let clicking = document.getElementById('tasks')

  clicking.addEventListener('click',function(event){
    console.log(`${event.target.innerText} has been removed`)
    event.target.remove();
    

  })

  if(value==="high"){

  } else if ( value==="medium"){

  } else {
    
  }








});


