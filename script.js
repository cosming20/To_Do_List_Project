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
                    <div id="done" class="task-status">done <div id="dot" class="dot"></div></div>
                    </div>
                `;

                document.getElementById("task-input").value = "";
                void containerDiv.offsetWidth;

                setTimeout(() => {
                    containerDiv.classList.remove('fade-in');
                }, 500);

                // la click sa modifice task ul gen scrisul
                var editableText = containerDiv.querySelector('.textul2');
                editableText.addEventListener('click', function () {
                    var input = document.createElement('input');
                    input.type = 'text';
                    input.value = editableText.textContent;
                    input.className = 'edit-input';

                    editableText.replaceWith(input);
                    input.focus();

                    function saveNewValue() {
                        editableText.textContent = input.value;
                        input.replaceWith(editableText);
                    }

                    input.addEventListener('blur', saveNewValue);
                    input.addEventListener('keydown', function (event) {
                        if (event.key === 'Enter') {
                            saveNewValue();
                        }
                    });
                });

                //event listeners for dot
                var dots = containerDiv.querySelectorAll('#dot');
                dots.forEach(function(dot) {
                    dot.addEventListener('click', function() {
                        changeDotColor(dot, containerDiv);
                    });
                });
            }
        });

        function changeDotColor(dotElement, taskContainer) {
            if (dotElement.style.backgroundColor === 'green') {
                dotElement.style.backgroundColor = 'white';
                taskContainer.classList.remove('done');
            } else {
                dotElement.style.backgroundColor = 'green';
                taskContainer.classList.add('done');
            }
        }

        document.getElementById('filter-all').addEventListener('click', function() {
            var allTasks = document.querySelectorAll('.container');
            allTasks.forEach(function(task) {
                task.classList.remove('hidden');
            });
        });

        document.getElementById('filter-done').addEventListener('click', function() {
            var allTasks = document.querySelectorAll('.container');
            console.log(allTasks);
            allTasks.forEach(function(task) {
                if (task.classList.contains('done')) {
                    task.classList.remove('hidden');
                } else {
                    task.classList.add('hidden');
                }
            });
        });

        document.getElementById('filter-not-done').addEventListener('click', function() {
            var allTasks = document.querySelectorAll('.container');
            allTasks.forEach(function(task) {
                if (task.classList.contains('done')) {
                    task.classList.add('hidden');
                } else {
                    task.classList.remove('hidden');
                }
            });
        });