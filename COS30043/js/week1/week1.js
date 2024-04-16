
const Welcome = {
    template: 
    `
    <h2>Week 1 Index</h2>
    <p>Please refer to the above links for specific tasks.</p>
    `
}

const hello = {
    template: 
    `
    <h2>Hello, World!</h2>
	<p> - strangemonke</p>
    `
}

const formTask = {
    template:
    `
    <h2>WAI Form Example</h2>
    <form method="post" action="http://mercury.swin.edu.au/it000000/formtest.php">
            <fieldset>
                    <legend>Contact Information</legend>
                    <p><label for="cname">Name:</label>
                            <input type="text" name="cname" id="cname" ></p>
                    <p><label for="cemail">Email Address:</label>
                            <input type="text" name="cemail" id="cemail" ></p>
                    <p><label for="caddr">Mailing Address:</label><br >
                            <textarea name="caddr" id="caddr" rows="4" cols="40"></textarea></p>
            </fieldset>
            <fieldset>
                    <legend>Contact Information</legend>
                    <p>Credit Card Information</p>
                    <p>
                            <label for="cvisa">Visa</label><input type="radio" name="card" id="cvisa" value="visa">
                            <label for="cmc">MasterCard</label><input type="radio" name="card" id="cmc" value="mc" > <br >
                            <label>Number: <input type="text" name="number" id="cnumber"></label><br >
                            <label>Expiry: <input type="text" name="expiry" id="cexpiry"></label>
                    </p>
            </fieldset>
            <p>Contact Information</p>
            <p>
                    <button type="submit">Submit Order</button><button type="reset">Cancel Order</button>
            </p>
    </form>
    `
}

const tableTask = {
    template:
    `
    <h2>WAI Table Example</h2>

    <table id="sales">
        <caption>Team Sales from 2013-16 (in millions of $)</caption>
        <tbody>
            <tr>
                <th scope="row" id="blank" >Team</th>
                <th scope="col" id="t2013" headers="blank">2013</th>
                <th scope="col" id="t2014" headers="blank">2014</th>
                <th scope="col" id="t2015" headers="blank">2015</th>
                <th scope="col" id="t2016" headers="blank">2016</th>
            </tr>
            <tr>
                <th scope="row" id="alpha" headers="blank">Alpha</th>
                <td headers="alpha">80</td>
                <td headers="alpha">90</td>
                <td headers="alpha">94</td>
                <td headers="alpha">96</td>
            </tr>
            <tr>
                <th scope="row" id="bravo" headers="blank">Bravo</th>
                <td headers="bravo">55</td>
                <td headers="bravo">59</td>
                <td headers="bravo">55</td>
                <td headers="bravo">59</td>
            </tr>
            <tr>
                <th scope="row" id="charlie" headers="blank">Charlie</th>
                <td headers="charlie">25</td>
                <td headers="charlie">25</td>
                <td headers="charlie">28</td>
                <td headers="charlie">30</td>
            </tr>
        </tbody>
    </table>
    `
}

const routes = [
    {path: '/', component: Welcome },
    {path: '/hello', component: hello},
    {path: '/formTask', component: formTask},
    {path: '/tableTask', component: tableTask}
]

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes, // short for `routes: routes`
  })

const app = Vue.createApp({})
app.use(router)
app.mount('#app')