class ToDoList {
    tasks: string[] = [];

    addTask(task: string): void {
        this.tasks.push(task);
    }

    removeTask(task: string): void {
        const index = this.tasks.indexOf(task);
        if (index !== -1) {
            this.tasks.splice(index, 1);
        }
    }

    listTasks(): void {
        console.log("Tasks:");
        this.tasks.forEach((task, index) => {
            console.log(`${index + 1}. ${task}`);
        });
    }
}

const myToDoList = new ToDoList();
myToDoList.addTask("Buy groceries");
myToDoList.addTask("Finish homework");
myToDoList.listTasks();
myToDoList.removeTask("Buy groceries");
myToDoList.listTasks();