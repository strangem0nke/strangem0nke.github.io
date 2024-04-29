
const Welcome = {
    template: 
    `
    <h2>Week 3 Index</h2>
    <p>Please refer to the above links for specific tasks.</p>
    `
}

const StringTest = {
    data() {
        return {
            strName:''
        }
    },

    computed: {
        inputFilter: function() {
            return this.strName.toLowerCase()
        }
    },

    template:
    `
    <div class="container bg-secondary-subtle text-center p-3">
        <h2>Input Testing!</h2>
    </div>
    <div id="app" class="container bg-secondary-subtle text-center p-2 my-1">
        <p>Please enter your name:
        <input type="text" v-model="strName"></p>
        <div v-if="inputFilter == 'strangemonke' || inputFilter == 'strangem0nke' || inputFilter == 'monke'">
            <p>{{strName}}? That's an awesome name!</p>
            <img src="media/week3/monke.gif" alt="monke">
        </div>
        <div v-else>
            <div v-if="inputFilter == ''">
                <p>Hi!</p>
            </div>
            <div v-else-if="inputFilter!=''">
                <p>Hello, {{strName}}, nice to meet you. That's not my name though.</p>
            </div>
        </div>
    </div>
        `
}

const Lookup1 = {

    data() {
        return {
            unitObj: {code:'', desc: '', cp: '', type: ''},

            allData:[
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
                ]
        }
    },

    computed:{
        filterData: function(){
            return this.allData.filter(m=>
                m.code.toLowerCase().match(this.unitObj.code.toLowerCase()) &&
                m.desc.toLowerCase().match(this.unitObj.desc.toLowerCase()) &&
                m.type.match(this.unitObj.type)
                );
        }
    },

    template:
    `
    <header>
        <div class="container bg-secondary-subtle justify-content-center text-center p-3 my-1">
            <div class="row">
                <h2>Lookup App: Unit Search Filter</h2>
            </div>
        </div>
    </header>
    <main id="app" class="p-3">
        <div class="container bg-secondary-subtle">
            <div class="row justify-content-center">
                <div class="col-3">
                    <p>
                        <label for="code">Code:</label><br>
                        <input type="text" id="code" v-model="unitObj.code">
                    </p>
                </div>
                <div class="col-3">
                    <p>
                        <label for="desc">Description:</label><br>
                        <input type="text" id="desc" v-model="unitObj.desc">
                    </p>
                </div>
                <div class="col-6">
                    <label>Unit Type</label><br>
                    <input type="radio" id="core" v-model="unitObj.type" value="Core">
                    <label for="Core">Core</label><br>
                    <input type="radio" id="softDev" v-model="unitObj.type" value="Software Development">
                    <label for="softDev">Software Development</label><br>
                    <input type="radio" id="systems" v-model="unitObj.type" value="Systems Analysis">
                    <label for="systems">Systems Analysis</label><br>
                    <input type="radio" id="all" v-model="unitObj.type" value="">
                    <label for="all">All</label><br>
                </div>
            </div>
        </div>
        <div class="table-responsive p-3">
            <table class="table table-striped table-hover">
                <thead>
                    <tr>
                        <th scope="col" headers="code">Code</th>
                        <th scope="col" headers="description">Description</th>
                        <th scope="col" headers="credit">Credit Points</th>
                        <th scope="col" headers="type">Type</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="m in filterData">
                        <td headers="code">{{m.code}}</td>
                        <td headers="description">{{m.desc}}</td>
                        <td headers="credit">{{m.cp.toFixed(2)}}</td>
                        <td headers="type">{{m.type}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </main>
    `
}

const Registration1 = {

    data() {
        return {
            userData: {strUser:'', strPass1:'', strPass2:'', os:'Android', model:''},

            phoneData:[
                    {model:'HTC 10', os:'Android'},
                    {model:'Nokia 6', os:'Android'},
                    {model:'Samsung Galaxy 20 Ultra', os:'Android'},
                    {model:'IDD VIOS Non Windows', os:'Android'},
                    {model:'iPhone X', os:'IOS'},
                    {model:'iPhone Xs Max', os:'IOS'},
                    {model:'iPhone 11 Pro Max', os:'IOS'},
                    {model:'IDD Windows Non Android', os:'IOS'},
                    {model:'HP Elite x3', os:'Windows'},
                    {model:'Microsoft 950', os:'Windows'},
                    {model:'Microsoft 950XL', os:'Windows'},
                    {model:'IDD VIOS Non Android', os:'Windows'}
                ]
        }
    },

    computed:{
        showMatches:function(){
            return this.phoneData.filter(m=>
                m.os.toLowerCase().match(this.userData.os.toLowerCase()));
        }
    },

    methods:{
        resetModel: function(){
            this.userData.model='';
        }
    },
    
    template:
    `
    <header>
        <div class="container bg-secondary-subtle text-center p-3 my-2">
            <h2>Registration App: Cloud Testing</h2>
        </div>
    </header>
    <main id="app">
        <div class="container bg-secondary-subtle">
            <fieldset class="container p-3 my-3">
                <legend><h3>Login Information</h3></legend>
                <p>
                    <label for="strUser">Please enter username:  </label>
                    <input type="text" v-model="userData.strUser" class="mx-2">
                </p>
                <p>
                    <label for="strPass1">Please enter password:  </label>
                    <input type="password" v-model="userData.strPass1" class="mx-2">
                </p>
                <p>
                    <label for="strPass2">Please re-enter password:  </label>
                    <input type="password" v-model="userData.strPass2" class="mx-2">
                </p>
                <div v-if="userData.strPass1 !== userData.strPass2 && userData.strPass1 !='' && userData.strPass2 != ''">
                    <p>Passwords do not match!</p>
                </div>
            </fieldset>
            <fieldset class="container row">
                <legend><h3>Phone Information</h3></legend>
                <div class="col-6">
                    <div class="row p-2 my-2">
                        <h4>Operating System</h4>
                        <div class="col-4">
                            <label for="Android">Android</label>
                            <input type="radio" v-model="userData.os" v-on:change="resetModel()" value="Android" name="userData.os" checked>
                        </div>
                        <div class="col-4">
                            <label for="IOS">IOS</label>
                            <input type="radio" v-model="userData.os" v-on:change="resetModel()" value="IOS" name="userData.os">
                        </div>
                        <div class="col-4">
                            <label for="Windows">Windows</label>
                            <input type="radio" v-model="userData.os"  v-on:change="resetModel()"value="Windows" name="userData.os">
                        </div>
                    </div>
                </div>
                <div class="col-6">
                    <div class="row p-2 my-2">
                        <h4>Model:</h4>
                        <div class="col">
                            <select id="model" name="userData.model" v-model="userData.model">
                                <option disabled value="">Please select one</option>
                                <option v-for="m in showMatches">{{m.model}}</option>
                            </select>
                        </div>
                    </div>
                </div>
            </fieldset>
            <div>
                <h3>Summary:</h3>
                <p>Username: {{userData.strUser}}</p>
                <p>Phone OS: {{userData.os}}</p>
                <p>Phone Model: {{userData.model}}</p>
            </div>
        </div>
    </main>
    `
}

const BMICalc = {

    data() { 
        return {
            numWt:0.00,
            numHt:0.00,
        }  
    },

    computed: {
        calcBMI: function(){
           this.numBMI = this.numWt/((this.numHt/100)*(this.numHt/100))
           return parseFloat(this.numBMI).toFixed(2)
        }
    },
    
    template:
    `
    <header>
        <div class="bg-secondary-subtle container text-center my-2 p-3">
            <h2>BMI Calculator</h2>
        </div>
    </header>
    <main class="bg-secondary-subtle container p-4 my-2" id="app">
        <div class="row text-start">
            <p>
                <label for="numWt">Enter weight in kilograms:</label>
                <input type="number" id="weight" v-model="numWt" min="0">
            </p>
            <p>
                <label for="numHt">Enter height in cm:</label>
                <input type="number" id="height" v-model="numHt" min="0">
            </p>
        </div>
        <div class="row text-start">
            <div v-if="calcBMI < 18.50">
                <p>Your BMI is {{calcBMI}} - Underweight</p>
            </div>
            <div v-else-if="calcBMI >= 18.50 && calcBMI < 25.00">
                <p>Your BMI is {{calcBMI}} - Normal</p>
            </div>
            <div v-else-if="calcBMI >= 25.00 && calcBMI < 30.00">
                <p>Your BMI is {{calcBMI}} - Overweight</p>
            </div>
            <div v-else-if="calcBMI >= 30.0">
                <p>Your BMI is {{calcBMI}} - Obese</p>
            </div>
            <div v-else>
                <p>Please enter a valid input to get started!</p>
            </div>

        </div>
    </main>
    `
}

const routes = [
    {path: '/', component: Welcome },
    {path: '/stringTest', component: StringTest},
    {path: '/lookup1', component: Lookup1},
    {path: '/register1', component: Registration1},
    {path: '/compute', component: BMICalc}
]

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes, // short for `routes: routes`
  })

const app = Vue.createApp({})
app.use(router)
app.mount('#app')