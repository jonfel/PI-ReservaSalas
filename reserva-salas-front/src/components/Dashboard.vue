<template>
<div>
    <nav class="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
      <a class="navbar-brand col-sm-3 col-md-2 mr-0" id="sidebarCollapse" v-on:click="greet" href="#">Reservas UTFPR</a>
      <ul class="navbar-nav px-3">
        <li class="nav-item text-nowrap">
          <router-link to="/">Sair</router-link>
        </li>
      </ul>
    </nav>
    <div class="container-fluid">
      <div class="row" style="text-align:left;">
        <nav class="col-md-2 d-none d-md-block bg-light sidebar">
          <div class="sidebar-sticky">
            <ul class="nav flex-column">
              <li v-if="this.ok === 'adm'" class="nav-item">
              </li>
            </ul>
            <h6 class="sidebar-heading d-flex justify-content-between px-3 mt-4 mb-1 text-muted">
              <span>Ambientes e Recursos</span>
            </h6>
            <ul class="nav flex-column mb-2">
              <li class="nav-item">
                <a class="nav-link">
                  <router-link to="/dashboard/calendar">Reserva de Sala</router-link>
                </a>
                <a class="nav-link">
                  <router-link to="/dashboard/reserve_resources">Reserva de Recurso</router-link>
                </a>
                <a class="nav-link">
                  <router-link to="/dashboard/register_users">Cadastro Usuários</router-link>
                </a>
                <a class="nav-link">
                  <router-link to="/dashboard/register_resources">Cadastro Recursos</router-link>
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <!-- Aqui esta a workspace  -->
        <workspace></workspace>
      </div>
    </div>
</div>
</template>

<script>
import Workspace from './Workspace'
export default {
  name: 'hello',
  components: {
    Workspace
  },
  data () {
    return {
      ok: 'adm'
    }
  },
  methods: {
    greet: function (event) {
      alert('Olá ' + this.name + '!')
      if (event) {
        alert(event.target.tagName)
      }
    }
  }
}
</script>

<style>
body {
  font-size: .875rem;
}

.feather {
  width: 16px;
  height: 16px;
  vertical-align: text-bottom;
}

/*
 * Sidebar
 */

.sidebar {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 100; /* Behind the navbar */
  padding: 48px 0 0; /* Height of navbar */
  box-shadow: inset -1px 0 0 rgba(143, 27, 27, 0.1);
}

.sidebar-sticky {
  position: relative;
  top: 0;
  height: calc(100vh - 48px);
  padding-top: .5rem;
  overflow-x: hidden;
  overflow-y: auto; /* Scrollable contents if viewport is shorter than content. */
}

@supports ((position: -webkit-sticky) or (position: sticky)) {
  .sidebar-sticky {
    position: -webkit-sticky;
    position: sticky;
  }
}

.sidebar .nav-link {
  font-weight: 500;
  color: #333;
}

.sidebar .nav-link .feather {
  margin-right: 4px;
  color: #999;
}

.sidebar .nav-link.active {
  color: #007bff;
}

.sidebar .nav-link:hover .feather,
.sidebar .nav-link.active .feather {
  color: inherit;
}

.sidebar-heading {
  font-size: .75rem;
  text-transform: uppercase;
}

/*
 * Content
 */

[role="main"] {
  padding-top: 15px; /* Space for fixed navbar */
}

/*
 * Navbar
 */

.navbar-brand {
  padding-top: .75rem;
  padding-bottom: .75rem;
  font-size: 1rem;
  background-color: rgba(0, 0, 0, .25);
  box-shadow: inset -1px 0 0 rgba(0, 0, 0, .25);
}

.navbar .form-control {
  padding: .75rem 1rem;
  border-width: 0;
  border-radius: 0;
}

.form-control-dark {
  color: #fff;
  background-color: rgba(255, 255, 255, .1);
  border-color: rgba(255, 255, 255, .1);
}

.form-control-dark:focus {
  border-color: transparent;
  box-shadow: 0 0 0 3px rgba(255, 255, 255, .25);
}
</style>
