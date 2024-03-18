
Vue.createApp({

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
                audio = new Audio('media/hooray.mp3');
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
    }

}).mount('#app')
