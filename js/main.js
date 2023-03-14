let eventBus = new Vue()

Vue.component('column', {

    template: `
 
        <div class="columns">
            <add_task></add_task>
            <p class="error" v-for="error in errors">{{ error }}</p>
            <div class="list">
                <column_1 :column_1="column_1"></column_1>
                <column_2 :column_2="column_2"></column_2>
                <column_3 :column_3="column_3"></column_3>
            </div>
        </div>
    `,


    data() {
        return {
            column_1: [],
            column_2: [],
            column_3: [],
            errors: [],
        }

    },
    mounted() {
        eventBus.$on('addColumn_1', ColumnCard => {

            if (this.column_1.length < 3) {
                this.errors.length = 0
                this.column_1.push(ColumnCard)
            } else {
                this.errors.length = 0
                this.errors.push()
            }
        })
    }
})

Vue.component('add_task', {
    template: `
    <section id="main" class="main-alt">
    
        <form class="row" @submit.prevent="Submit">
        <div class="form_control">
            <div class="form_name">
                <input required type="text" v-model="name" id="name" placeholder="Введите название заметки"/>
            </div>
            
            <input required type="text"  v-model="point_1" placeholder="Первый пункт"/>
            <br>
            <input required type="text"  v-model="point_2" placeholder="Второй пункт"/>
            <br>
            <input required type="text"  v-model="point_3" placeholder="Третий пункт"/> 
            <br>
            <input  type="text"  v-model="point_4"  placeholder="Четвертый пункт"/>
            <br>
             <input type="text" v-model="point_5"  placeholder="Пятый пункт"/>
        </div>
            <div class="form_control">
                <button>Отправить</button>
            </div>
        </form>
    </section>
    `,
    data() {
        return {
            name: null,
            point_1: null,
            point_2: null,
            point_3: null,
            point_4: null,
            point_5: null,
            date: null,
        }
    },
    methods: {

        Submit() {
            let card = {
                name: this.name,
                points: [
                    {name: this.point_1, completed: false},
                    {name: this.point_2, completed: false},
                    {name: this.point_3, completed: false},
                    {name: this.point_4, completed: false},
                    {name: this.point_5, completed: false}
                ],
                date: null,
                status: 0,
                errors: [],
            }
            eventBus.$emit('addColumn_1', card)
            this.name = null;
            this.point_1 = null
            this.point_2 = null
            this.point_3 = null
            this.point_4 = null
            this.point_5 = null
        }
    }

})

Vue.component('column_1', {
    props: {
        column_1: {
            type: Array,
        },
        column_2: {
            type: Array,
        },
        card: {
            type: Object,
        },
        errors: {
            type: Array,
        },
    },
    template: `
        <section id="main" class="main-alt">
            <div class="column column_one">
            <p>Задачи</p>
            <div class="card" v-for="card in column_1">
                <h3>{{ card.name }}</h3>
                    <ul class="tasks" v-for="task in card.points"
                        v-if="task.name != null"
                        @click="TaskCompleted(card, task)"
                        :class="{completed: task.completed}">
                        <li>
                        {{ task.name }}
                        </li>
                    </ul>
                    
            </div> 
            </div>
        </section>
    `,

    methods: {

    },
})


Vue.component('column_2', {
    template: `
        <section id="main" class="main-alt">
            <div class="column column_two">
                <p>В процессе</p>
                
            </div>
        </section>
    `,
})

Vue.component('column_3', {
    template: `
        <section id="main" class="main-alt">
            <div class="column column_three">
            <p>Завершенные</p>

            </div>
        </section>
    `,
})

let app = new Vue({
    el: '#app',
    data:{
        name: "Заметки",
    },

})