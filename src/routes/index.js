import Login from './../pages/Login.vue'
import Home from './../pages/Home.vue'
import Funcionarios from './../pages/Funcionarios.vue'

export default [
    { path: "/", component: Login, name: 'Login' },
    { path: "/home", component: Home, name: 'Home' },
    { path: "/funcionarios", component: Funcionarios, name: 'Funcionarios' }
]