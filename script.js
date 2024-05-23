let counter = 0;
document.getElementById("add-task-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    counter++;
    // Get the task input value
    var taskInput = document.getElementById("task-input").value.trim();


    if (taskInput !== "") {
        // Create the container element
        var containerDiv = document.createElement("div");
        containerDiv.className = "container";
        console.log(taskInput);
        // Append the container after the form
        document.body.insertBefore(containerDiv, document.body.children[2]); // Adjust the index if needed

        // Add the goal and dot elements inside the container (sample for demonstration)
        containerDiv.innerHTML = `
            <div class="goal" id="goal1"><div class="textul">#${counter}</div></div>
            <div id="varful"></div>
            <div class="goal" id="goal2"><div class="textul2">${taskInput}</div></div>
            <div id="is_done">
            <div id="done">done <div id="dot" class="dot" onclick="changeDotColor(this)"></div></div>
            <div id="not_done">not done <div id="dot" class="dot" onclick="changeDotColor(this)"></div></div>
            </div>
        `;

        // Clear the task input
        document.getElementById("task-input").value = "";
    }
});
function changeDotColor(dot) {
    dot.style.backgroundColor = "green"; // Change the color to red (you can use any color)
}