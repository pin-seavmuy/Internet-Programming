import { defineStore } from "pinia";

export const useTodoStore = defineStore('todo', {
    state: () => ({
        todos: [
            {
                id: 1,
                task: "clean house",
                status: "pending",
            },
            {
                id: 2,
                task: "Do homework",
                status: "completed",
            }
        ],
    }),
    getters: {
        countTodos: (state) => state.todos.length,
    },
    actions: {
        fetchTodos() {

            const todos = new Promise(resolve => {
                setTimeout(() => {
                    resolve([]);
                }, 3000)
            }).then(todos => this.todos = todos);
        },
        toggleStatus(id){
            const foundIndex = this.todos.findIndex (t => t.id  ==id)
            if (foundIndex > 0){
                if (this.todos[foundIndex].status =="completed"){
                    this.todos[foundIndex].status =="pending"
                }
                
            }
        }
    },
});