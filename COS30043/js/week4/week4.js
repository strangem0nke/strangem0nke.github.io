
const Welcome = {
    template: 
    `
    <h2>Week 4 Index</h2>
    <p>Please refer to the above links for specific tasks.</p>
    <p>Oh wait, there's only one this time. You know what to do though.</p>
    `
}

const guessGame = {

    data() {
        return {
            inputNumber:'',
            msg:'Please guess a number!',
            secretNumber:0
        }
    },

    methods: {

        randSecret: function(){
            return Math.floor(Math.random()*100)+1;
        },

        guessNum: function(){
            if (this.inputNumber == '' || this.inputNumber < 1 || this.inputNumber > 100) {
                this.msg = 'You need to enter a  valid number!'; //Avoids having invalid numbers
            }
            else if (this.inputNumber < this.secretNumber) {
                this.msg = 'The input number ' + this.inputNumber + ' is too low, please guess higher.';
            }
            else if (this.inputNumber > this.secretNumber) {
                this.msg = 'The input number ' + this.inputNumber + ' is too high, please guess lower.';
            }
            else if (this.inputNumber === this.secretNumber) {
                this.msg = 'You got it!';
                audio = new Audio('media/week4/hooray.mp3');
                audio.play();
            }
            else {
                this.msg = 'Test';
            }
        },

        givenUp: function(){
            this.msg = 'The secret number was ' + this.secretNumber;
        },

        restart: function(){
            this.msg = 'Please guess a number!';
            this.secretNumber = this.randSecret();
        }
    },

    created: function(){
        this.secretNumber = this.randSecret();
    },

    template:
    `
    <header class="container bg-secondary-subtle">
        <div class="p-3 my-2 text-center">
            <h2>Number Guessing Game</h2>
        </div>
    </header>

    <main class="container bg-secondary-subtle justify-content-center" id="app">
        <div class="col-12 p-3 my-2">
            <label for="numInput">Enter your guess from 1 to 100:</label>
            <input type="number" min="1" max="100" v-model="inputNumber" placeholder="1" class="mx-2">
        </div>
        <div class="row p-2">
            <div class="col-4">
                <button type="button" v-on:click="guessNum()">Check Guess</button>
            </div>
            <div class="col-4">
                <button type="button" v-on:click="givenUp()">Give Up</button>
            </div>
            <div class="col-4">
                <button type="button" v-on:click="restart()">Restart</button>
            </div>
        </div>
        <div class="row text-center">
            <p>{{msg}}</p>
        </div>
    </main>
    `
}

const routes = [
    {path: '/', component: Welcome },
    {path: '/guessGame', component: guessGame}
]

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes, // short for `routes: routes`
  })

const app = Vue.createApp({})
app.use(router)
app.mount('#app')