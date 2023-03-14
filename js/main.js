Vue.component('add_task', {
    template: `
    <section id="main" class="main-alt">
    
        <form class="row">
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
                <button class="btn">Отправить</button>
            </div>
        </form>
    </section>
    `,

})

Vue.component('column_1', {
    template: `
        <section id="main" class="main-alt">
            <div class="column column_one">
            <p>Задачи</p>
            
            </div>
        </section>
    `,
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