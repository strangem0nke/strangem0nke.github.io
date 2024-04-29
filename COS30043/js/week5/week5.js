

const Welcome = {
    template: 
    `
    <h2>Week 5 Index</h2>
    <p>Please refer to the above links for specific tasks.</p>
    `
}

var units =
([
    {code:'ICT10001', desc:'Problem Solving with ICT', cp:12.5, type:'Core'},
    {code:'COS10005', desc:'Web Development', cp:12.5, type:'Core'},
    {code:'INF10003', desc:'Introduction to Business Information Systems', cp:12.5, type:'Core'},
    {code:'INF10002', desc:'Database Analysis and Design', cp:12.5, type:'Core'},
    {code:'COS10009', desc:'Introduction to Programming', cp:12.5, type:'Core'},
    {code:'INF30029', desc:'Information Technology Project Management', cp:12.5, type:'Core'},
    {code:'ICT30005', desc:'Professional Issues in Information Technology', cp:12.5, type:'Core'},
    {code:'ICT30001', desc:'Information Technology Project', cp:12.5, type:'Core'},
    {code:'COS20001', desc:'User-Centred Design', cp:12.5, type:'Software Development'},
    {code:'TNE10005', desc:'Network Administration', cp:12.5, type:'Software Development'},
    {code:'COS20016', desc:'Operating System Configuration', cp:12.5, type:'Software Development'},
    {code:'SWE20001', desc:'Development Project 1 - Tools and Practices', cp:12.5, type:'Software Development'},
    {code:'COS20007', desc:'Object Oriented Programming', cp:12.5, type:'Software Development'},
    {code:'COS30015', desc:'IT Security', cp:12.5, type:'Software Development'},
    {code:'COS30043', desc:'Interface Design and Development', cp:12.5, type:'Software Development'},
    {code:'COS30017', desc:'Software Development for Mobile Devices', cp:12.5, type:'Software Development'},
    {code:'INF20012', desc:'Enterprise Systems', cp:12.5, type:'Systems Analysis'},
    {code:'ACC10007', desc:'Financial Information for Decision Making', cp:12.5, type:'Systems Analysis'},
    {code:'INF20003', desc:'Requirements Analysis and Modelling', cp:12.5, type:'Systems Analysis'},
    {code:'ACC20014', desc:'Management Decision Making', cp:12.5, type:'Systems Analysis'},
    {code:'INF30005', desc:'Business Process Management', cp:12.5, type:'Systems Analysis'},
    {code:'INF30003', desc:'Business Information Systems Analysis', cp:12.5, type:'Systems Analysis'},
    {code:'INF30020', desc:'Information Systems Risk and Security', cp:12.5, type:'Systems Analysis'},
    {code:'INF30001', desc:'Systems Acquisition & Implementation Management', cp:12.5, type:'Systems Analysis'}
]);

const Unit = {
    data()
    {
        return{units}
    },

    template:`
    <header>
        <div class="container bg-secondary-subtle">
            <h1>Unit Information System 2.0</h1>
        </div>
    </header>
    <div>
        <div id="app" class="table-responsive p-3">
            <table class="table table-striped table-hover">
                <thead>
                    <tr>
                        <th scope="col">Code</th>
                        <th scope="col">Description</th>
                        <th scope="col">More Information</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="unit in units">
                        <td>{{unit.code}}</td>
                        <td>{{unit.desc}}</td>
                        <td>
                        <router-link :to="{ path: '/Lookup2/unit/' + unit.code}">
                            Show Details
                        </router-link>
                        </td>
                    </tr>
                </tbody>
            </table>
            <router-view></router-view>
        </div>
        <hr>
        <h2>Details of {{ $route.params.x }}</h2>
        <ul v-for="unit in filteredUnits">
            <li>Code: {{unit.code}}</li>
            <li>Code: {{unit.desc}}</li>
            <li>Code: {{unit.cp.toFixed(2)}}</li>
            <li>Code: {{unit.type}}</li>
        </ul>
    </div>`,

    computed: {
        filteredUnits: function(){
            return this.units.filter(unit => unit.code.toLowerCase()
                .match(this.$route.params.x.toLowerCase()));
        }
    }
}

const Lookup2 = {
    template:
    `
    <body class="bg-primary-subtle">

        <header>
            <div class="container bg-secondary-subtle">
                <h1>Unit Information System 2.0</h1>
            </div>
        </header>

        <main>
            <div id="app" class="container bg-secondary-subtle">
                <app-lookup2></app-lookup2>
            </div>
        </main>
        
    </body>
        `
}

const MenuList = {
    
    template:
    `
    
    <header>
        <div class="container bg-secondary-subtle my-2 p-4 text-center">
            <h1>Menu List!</h1>
        </div>
    </header>

    <main>
        <div class="bg-secondary-subtle container p-3 my-2" id="app">
            <mymenu v-bind:menu="['Home','Settings','About']"></mymenu>
        </div>
    </main>
    `
}

const Post = {
    
    template:
    `
    <header>
        <div class="container bg-secondary-subtle my-2 p-4 text-center">
            <h1>Post application!</h1>
        </div>
    </header>

    <main>
        <div class="container bg-secondary-subtle p-2 my-1" id="app">
            <app-mypost></app-mypost>
        </div>
    </main>
    `
}

const app = Vue.createApp({})

app.component('mymenu',
{
    props:['menu'],

    template:
    `<div>
        <ul>
            <li v-for="item in menu">{{item}}</li>
        </ul>
    </div>`
});

app.component('app-lookup2', {
    data:function() {
        return {
            units
        }
    },
    template:`
        <div id="app" class="table-responsive p-3">
            <table class="table table-striped table-hover">
                <thead>
                    <tr>
                        <th scope="col">Code</th>
                        <th scope="col">Description</th>
                        <th scope="col">More Information</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="unit in units">
                        <td>{{unit.code}}</td>
                        <td>{{unit.desc}}</td>
                        <td>
                        <router-link :to="{ path: '/Lookup2/unit/' + unit.code}">
                            Show Details
                        </router-link>
                        </td>
                    </tr>
                </tbody>
            </table>
            <router-view></router-view>
        </div>
    `,

});

app.component('app-mypost',
{
    data:function(){
        return {
            statPosts:[],
            strStatus:''
        }
    },

    template:`
    <div id="app">
        <label for="status">Status:</label>
        <input type="text" v-model="strStatus">
        <button type="button" @click="add()">Post</button>
        <ul>
            <li v-for="strStatus, index in statPosts" class="my-2">{{strStatus}}
                <button type="button" @click="remove(index)">Delete</button>
            </li>
        </ul>
    </div>
    `,

    methods: {
        add:function(){
            this.statPosts.push(this.strStatus)
        },

        remove:function(index){
            this.statPosts.splice(index,1)
        }
    }
});

const routes =[
    { path: '/', component: Welcome},
    { path: '/Lookup2', component: Lookup2},
    { path: '/MenuList', component: MenuList},
    { path: '/Post', component: Post},
    { path: '/Lookup2/unit/:x', component: Unit}
]

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes
})

app.use(router)
app.mount('#app')