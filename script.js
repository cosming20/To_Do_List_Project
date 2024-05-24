let counter = 0;
document.getElementById("add-task-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    counter++;
    // Get the task input value
    var taskInput = document.getElementById("task-input").value.trim();


    if (taskInput !== "") {
        // Create the container element
        var containerDiv = document.createElement("div");
        containerDiv.className = "container fade-in"; // Add the animation class
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
        void containerDiv.offsetWidth;

        // Remove the animation class after the animation completes
        setTimeout(() => {
            containerDiv.classList.remove('fade-in');
        }, 500);
        var editableText = containerDiv.querySelector('.textul2');
    editableText.addEventListener('click', function () {
        var input = document.createElement('input');
        input.type = 'text';
        input.value = editableText.textContent;
        input.className = 'edit-input';

        editableText.replaceWith(input);
        input.focus();

        // Handle saving the new value
        function saveNewValue() {
            editableText.textContent = input.value;
            input.replaceWith(editableText);
        }

        // Save the new value on blur (clicking outside) or pressing Enter
        input.addEventListener('blur', saveNewValue);
        input.addEventListener('keydown', function (event) {
            if (event.key === 'Enter') {
                saveNewValue();
            }
        });
    });

    }
});
function changeDotColor(dot) {
    dot.style.backgroundColor = "green"; // Change the color to red (you can use any color)
}