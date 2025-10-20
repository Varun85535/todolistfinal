function addTask() {
  let input = document.getElementById("taskInput");
  let task = input.value.trim();

  if (task === "") {
    alert("Please enter a task!");
    return;
  }

  let li = document.createElement("li");
<<<<<<< HEAD
  li.textContent = task;
  li.style.color = "blue"; 
}
=======
li.textContent = task + " ✅"; // feature1 change
>>>>>>> feature1
