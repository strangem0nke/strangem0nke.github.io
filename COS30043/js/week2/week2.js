

const Welcome = {
    template: 
    `
    <h2>Week 2 Index</h2>
    <p>Please refer to the above links for specific tasks.</p>
    `
}

const Calculator = {
    template:
    `
    <div class="my-2">
        <div class="container bg-secondary-subtle border border-black ">
            <div class="d-flex flex-row  my-5 bg-white border border-black justify-content-center">
                <div class="col-sm-12 my-5 bg-white text-end p-2">
                    <p>0</p>
                </div>
            </div>
            <div class="d-flex flex-row text-center mb-3 justify-content-center">
                <div class="col-2 p-2 m-1 border border-black">
                    <p>MC</p>
                </div>
                <div class="col-2 p-2 m-1 border border-black">
                    <p>M+</p>
                </div>
                <div class="col-2 p-2 m-1 border border-black">
                    <p>M-</p>
                </div>
                <div class="col-2 p-2 m-1 border border-black">
                    <p>MR</p>
                </div>
            </div>
            <div class="d-flex flex-row text-center mb-3 justify-content-center">
                <div class="col-2 p-2 m-1 border border-black">
                    <p>AC</p>
                </div>
                <div class="col-2 p-2 m-1 border border-black">
                    <p>M+</p>
                </div>
                <div class="col-2 p-2 m-1 border border-black">
                    <p>M-</p>
                </div>
                <div class="col-2 p-2 m-1 border border-black bg-warning">
                    <p>+</p>
                </div>
            </div>
            <div class="d-flex flex-row text-center mb-3 justify-content-center">
                <div class="col-2 p-2 m-1 border border-black">
                    <p>7</p>
                </div>
                <div class="col-2 p-2 m-1 border border-black">
                    <p>8</p>
                </div>
                <div class="col-2 p-2 m-1 border border-black">
                    <p>9</p>
                </div>
                <div class="col-2 p-2 m-1 border border-black bg-warning">
                    <p>*</p>
                </div>
            </div>
            <div class="d-flex flex-row text-center mb-3 justify-content-center">
                <div class="col-2 p-2 m-1 border border-black">
                    <p>4</p>
                </div>
                <div class="col-2 p-2 m-1 border border-black">
                    <p>5</p>
                </div>
                <div class="col-2 p-2 m-1 border border-black">
                    <p>6</p>
                </div>
                <div class="col-2 p-2 m-1 border border-black bg-warning">
                    <p>-</p>
                </div>
            </div>
            <div class="d-flex flex-row text-center mb-3 justify-content-center">
                <div class="col-2 p-2 m-1 border border-black">
                    <p>1</p>
                </div>
                <div class="col-2 p-2 m-1 border border-black">
                    <p>2</p>
                </div>
                <div class="col-2 p-2 m-1 border border-black">
                    <p>3</p>
                </div>
                <div class="col-2 p-2 m-1 border border-black bg-warning">
                    <p>+</p>
                </div>
            </div>
            <div class="d-flex flex-row text-center mb-3 justify-content-center">
                <div class="col-2 p-2 m-1 border border-black">
                    <p>0</p>
                </div>
                <div class="col-2 p-2 m-1 border border-black">
                    <p>.</p>
                </div>
                <div class="col-2 p-2 m-1 border border-black">
                    <p>+/-</p>
                </div>
                <div class="col-2 p-2 m-1 border border-black bg-warning">
                    <p>=</p>
                </div>
            </div>
        </div>
    </div>
    `
}

const WorkshopProto = {
    template:
    `
    <body class="container border border-black bg-secondary-subtle my-2">
        <WorkshopHeader></WorkshopHeader>
        <div class="d-flex flex-row mb-3">
            <aside class="container col-3 border border-end-0 border-black float-start justify-content-center bg-primary-subtle">
                <div class="row">
                    <div class="text-center mt-4">
                        <h4>Introduction</h4>
                    </div>
                    <figure class="my-4 p-4">
                        <img src="media/week2/me.jpg" class="figure-img img-fluid rounded" alt="me">
                        <figcaption class="figure-caption text-center">Me</figcaption>
                    </figure>
                    <div class="my-2 text-center">
                        <p>Hi, welcome to The Workshop.<br>
                        Not sure what to write right now so enjoy your day!</p>
                    </div>
                </div>
            </aside>
            <main class="container col-9 border-start-0 border-black float-end">
                <div class="row border border-black text-center bg-primary-subtle justify-content-center">
                    <div class="col-6 mt-4">
                        <h3>Project Showcase!</h3>
                    </div>
                    <figure class="figure my-4">
                        <img src="media/week2/blueprint.jpg" class="figure-img img-fluid rounded" alt="blueprint">
                        <figcaption class="figure-caption text-center">Blueprint</figcaption>
                    </figure>
                    <div class="col-8 my-2">
                        <h4>Features:</h4>
                        <p>- An empty blueprint<br>
                        - Great for planning<br>
                        - Useful for page design<br>
                        - This totally isn't a placeholder</p>
                    </div>
                </div>
            </main>
        </div>
    </body>
    `
}

const workshopAbout = {
    template:
    `
    <body class="container border border-black bg-secondary-subtle my-2">
        <WorkshopHeader></WorkshopHeader>
        <div class="d-flex flex-row mb-3 text-center justify-content-center bg-primary-subtle">
            <aside class="container col-3 border border-black float-start text-center">
                <div class="row">
                    <div class="mt-4">
                        <h4>The basics:</h4>
                    </div>
                    <figure class="my-2 p-2">
                        <img style="height:150px" src="media/week2/me.jpg" class="figure-img img-fluid rounded" alt="me">
                        <figcaption class="figure-caption text-center">Me (Real, I am a Lulu main)</figcaption>
                    </figure>                    
                    <div class="my-2 text-center">
                        <p>- Second year compsci student<br>
                        - Likes video games, namely Pokèmon, BTD6 and League<br>
                        - Favourite song? Depends on the mood
                        - Mainly doing this as a portfolio, but finding this to be fun<br>
                        - Probably asleep, at uni, or at work</p>
                </div>
            </aside>
            <main class="container col-9 border border-start-0 border-black float-end ">
                <div class="my-4">
                    <h3>About me: </h3>
                </div>
                <div>
                    <p>A 22 year-old second-year student studying compsci at Swinburne University. Born and raised in Melbourne, Australia.<br>
                    Originally began studying science at Monash University in 2020 following high school graduation in 2019, however due to various reasons,
                    including a lack of interest in the course, online classes due to COVID, and difficulty juggling university and work simultaneously,
                    he dropped out in the middle of 2022, in his second year.</p>

                    <p>He is currently developing this website as both his portfolio for his university class, as well as a side project. <br>
                    Whilst most of the content in this portfolio is purely just the tasks required to complete the portfolio, developing this as a functional
                    collection instead of individual tasks is the project that makes this one of passion.</p>
                    
                    <p>Whilst he is quite busy with university, work or just sleeping as a result of the two, he finds enjoyment in video games and hanging out
                    with friends. He also enjoys the occasional concert, and likes to collect hoodies and jackets from the various bands he's seen perform live.
                    His music tends to vary, and generally reflects his mood.</p>
                </div>
            </main>
        </div>
        
    </body>
    `
}

const workshopProjects = {
    template:
    `
    <body class="container border border-black bg-secondary-subtle my-2">
        <WorkshopHeader></WorkshopHeader>
        
        <main class="mb-3 border border-black container my-2">
            <div class="row text-center bg-primary-subtle justify-content-center">
                <figure class="my-2 p-2">
                    <img style="height: 200px" src="media/week2/bedge.gif" class="figure-img img-fluid rounded" alt="me">
                    <figcaption class="figure-caption text-center">Eepy time!</figcaption>
                </figure>
                <div class="col-8 my-2">
                    <h3>Projects (AKA to-do list):</h3>
                    <p>-Continue working on this portfolio<br>
                    - Make sure to get enough sleep<br>
                    - Pass every class and avoid failing<br>
                    - Count down the days until the Europe trip<br>
                    - Fuck around, but avoid finding out</p>
                </div>
            </div>
        </main>
    </body>
    `
}

const workshopContact = {
    template:
    `
    <body class="container border border-black bg-secondary-subtle my-2">
        <WorkshopHeader></WorkshopHeader>
        
        <main class="mb-3 border border-black container my-2">
            <div class="row text-center bg-primary-subtle justify-content-center">
                <div class="col-8 my-2">
                    <h3>Contact:</h3>
                    <p>- Github: <a href="https://github.com/strangem0nke">strangem0nke</a><br>
                    - Discord: strangemonke</p>
                </div>
            </div>
        </main>
    </body>
    `
}

const routes = [
    {path: '/', component: Welcome },
    {path: '/calculator', component: Calculator},
    {path: '/workshopProto', component: WorkshopProto},
    {path: '/workshopProto/about', component: workshopAbout},
    {path: '/workshopProto/projects', component: workshopProjects},
    {path: '/workshopProto/contact', component: workshopContact}
]

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes, // short for `routes: routes`
  })

const app = Vue.createApp({})
app.use(router)

app.component('WorkshopHeader',
{
    template:
    `
    <header class="container bg-primary-subtle border border-black my-2">
            <div class="row my-3  text-center">
                <div class="col-12 ">
                    <h2>The Workshop II  </h2>
                </div>
            </div>
            <div class="row my-3 border-top border-black justify-content-center text-center">
                <div class="col-3 p-2">
                    <router-link to="/workshopProto">Homepage</router-link>
                </div>
                <div class="col-3 p-2">
                    <router-link to="/workshopProto/about">About </router-link>
                </div>
                <div class="col-3 p-2">
                    <router-link to="/workshopProto/projects">Projects</router-link>
                </div>
                <div class="col-3 p-2">
                    <router-link to="/workshopProto/contact">Contact</router-link>
                </div>
            </div>
        </header>
    `
})
app.mount('#app')