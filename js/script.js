const app = new Vue({
    el: "#root",
    data: {
        toDoList: [{
                toDoTitle: "Cosa da fare 1",
                completed: false
            },
            {
                toDoTitle: "Cosa da fare più lunga 2",
                completed: false
            },
            {
                toDoTitle: "Cosa da fare molto più lunga 3",
                completed: false
            },
            {
                toDoTitle: "Cosa da fare 4",
                completed: false
            }
        ],
        toDoString: ""
    },
    methods: {
        removeItem: function(removedIndex) {
            this.toDoList.splice(removedIndex, 1);
        },
        submit: function() {
            if (this.toDoString.trim().length > 0) {
                this.toDoList.push({
                    toDoTitle: this.toDoString,
                    completed: false
                });
                this.toDoString = "";
            }
        }
    }
});