const app = new Vue({
    el: "#root",
    data: {
        toDoList: [{
                toDoTitle: "Cosa da fare 1",
                completed: false
            },
            {
                toDoTitle: "Cosa da fare 2",
                completed: false
            },
            {
                toDoTitle: "Cosa da fare 3",
                completed: false
            },
            {
                toDoTitle: "Cosa da fare 4",
                completed: false
            }
        ]
    },
    methods: {
        removeItem: function(removedIndex) {
            this.toDoList.splice(removedIndex, 1);
        }
    }
});