
const Welcome = {
    template: 
    `
    <h2>Week 6 Index</h2>
    <p>Please refer to the above links for specific tasks.</p>
    `
}

const Registration2 = {
    template:
    `
    <h2 class="my-2">NOT a suspicious registration form</h2>
    <div class="p-2 my-2">
        <registration2></registration2>
    </div>
    `
}

const { createApp } = Vue
const { createVuetify } = Vuetify

const vuetify = createVuetify( )  
const app = createApp({})

app.component('registration2',
{
    data: () => (
        {     
        firstName: '', lastName: '',
        username: '', password: '', confirmPassword: '',
        email: '',  
        address: '', suburb: '',
        postcode: '', mobile: '',
        terms:true,
        
        nameRules: [
            v => !!v || 'Name is required',
            v => /^[a-zA-Z]+$/.test(v) || 'Name can only contain letters'
            ],

        usernameRules: [
            v => !!v || 'Username is required',
            v => (v && v.length >= 3) || 'Username must contain at least 3 characters'
            ],

        passwordRules: [
            v => !!v || 'Password is required',
            v => (v && v.length >= 8) || 'Password must contain at least 8 characters',
            v => /[$%^&*]{1}/.test(v) || 'Password must contain at least one special character'
            ],
            
        confirmPasswordRules: [
            v => !!v || 'Password is required',
            v => (v && v.length >= 8) || 'Password must contain at least 8 characters'
            ],

        emailRules: [
            v => !!v || 'E-mail is required',
            v => /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/.test(v) || 'E-mail must be valid',
            ],
        
        addressRules: [
            v => (v.length <= 40) || 'Address exceeds character limit'
        ],

        suburbRules: [
            v => (v.length <= 20) || 'Suburb exceeds character limit'
        ],

        postcodeRules: [
            v => !!v || 'Address is required',
            v => /[0-9]{4}/.test(v) || 'Postcode must be exactly 4 numerical digits',
            v => (v && v.length == 4) || 'Postcode must be exactly 4 numerical digits'
        ],

        phoneRules: [
            v => !!v || 'Mobile number is required',
            v => (v && v.length == 10 && /04+[0-9]{8}/.test(v)) || 'Mobile must have 10 digits, and it must start with "04"'
            ],
        }
    ),

    computed: 
    {
        passwordConfirmationRule() {
            return () =>
            this.password === this.confirmPassword || "Passwords do not match";
        }
    },
    template:
    `
        <div>
            <v-form method="post" action="http://mercury.swin.edu.au/it000000/formtest.php" >
                <fieldset class="my-2 container">
                    <legend><h3>Login Information</h3></legend>
                    <div class="row">
                        <div class="col-6">
                            <v-text-field name="firstName" v-model="firstName" :rules="nameRules" label="First Name" required></v-text-field>
                        </div>
                        <div class="col-6">
                            <v-text-field name="lastName" v-model="lastName" :rules="nameRules" label="Last Name" required></v-text-field>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-6">
                            <v-text-field name="username" v-model="username" :rules="usernameRules" label="Username" required></v-text-field>
                        </div>
                    </div> 
                    <div class="row">
                        <div class="col-6">
                            <v-text-field name="password" v-model="password" :rules="passwordRules" label="Password" required type="password"></v-text-field>
                        </div>
                        <div class="col-6">
                            <v-text-field name="confirmPassword" v-model="confirmPassword" :rules="confirmPasswordRules.concat(passwordConfirmationRule)" label="Confirm Password" required type="password" required></v-text-field>
                        </div>
                    </div>
                </fieldset>
                <fieldset class="my-2 container">
                    <legend><h3>Contact Information</h3></legend>
                    <div class="row">
                        <div class="col-6">
                            <v-text-field name="email" v-model="email" :rules="emailRules" label="Email" required></v-text-field>
                        </div>
                        <div class="col-6">
                            <v-text-field name="mobile" v-model="mobile"   :rules="phoneRules" label="Mobile" required ></v-text-field>
                        </div>
                    </div>
                    <div class="row">
                        <v-text-field name="address" v-model="address" :rules="addressRules" label="Address"></v-text-field>
                    </div>
                    <div class="row">
                        <div class="col-8">
                            <v-text-field name="suburb" v-mdoel="suburb" :rules="suburbRules" label="Suburb"></v-text-field>
                        </div>
                        <div class="col-4">
                            <v-text-field name="postcode" v-model="postcode" :rules="postcodeRules" label="Postcode" required></v-text-field>
                        </div>
                    </div>
                </fieldset>
                <div class="container">
                    <div class="col-4">
                        <v-checkbox v-model="terms" color="red" v-on:click="terms = !terms" label="I agree to the terms and conditions stated below:" hide-details></v-checkbox>
                    </div>
                    <div v-if="terms">
                        <p>- So tell all your friends<br>
                        - This is the end of everything</p>
                    </div>
                </div>
                <div class="container">
                    <v-btn type="submit" color="success"  >Submit</v-btn> 
                </div>
            </v-form>
        </div>
    `
})

const routes =[
    { path: '/', component: Welcome},
    { path: '/Registration2', component: Registration2}
]

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes
})

app.use(router)
app.use(vuetify)
app.mount('#app')