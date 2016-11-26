var tasks=[{
  title: "sorting PO",
  date: "10/14/2016",
  done: true,
  person: "Brian",
  details: "Every vendor PO has been sorted properly",
},{
  title: "filing PO",
  date:"11/20/2016",
  done: false,
  person: "Eddie",
  details: "accdat and DHDIS has not yet filed",
}
]



var addTask = function(task){

  var taskdiv = document.createElement("li")
    document.getElementById("trythisout").appendChild(taskdiv)

  taskdiv.innerHTML = '<input type="checkbox" class="mark"/><input type="text" class="title"/><br/><br/><textarea class="memo">Memo</textarea>'
  var x= taskdiv.querySelector(".title")

  x.value = task.title

  var y= taskdiv.querySelector(".mark")

  y.checked = task.done

  var z= taskdiv.querySelector(".memo")

  z.value = task.details

  console.log(x)

}
tasks.forEach(addTask)

var button = document.getElementById("add")

button.addEventListener("click",  function(){

  addTask({title: "", done: false, details:""})

})
