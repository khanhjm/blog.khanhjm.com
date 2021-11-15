<template>
  <header
    id="header"
    class="navbar sticky-top navbar-expand-lg navbar-light"
    style="border-bottom: 1px solid #e5e9ef; background-color: #e3f2fd"
  >
    <div class="container">
      <a class="navbar-brand fw-bold" href="/">KHANHJM</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/login">Login</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/register">Register</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/profile">Profile</router-link>
          </li>
          <!-- <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Dropdown
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <router-link class="dropdown-item" to="/">Home</router-link>
              <router-link class="dropdown-item" to="/login">Login</router-link>
              <router-link class="dropdown-item" to="/register">Register</router-link>
              <router-link class="dropdown-item" to="/profile">Profile</router-link>
            </ul>
          </li> -->
          <!-- <li class="nav-item">
            <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true"
              >Disabled</a
            >
          </li> -->
        </ul>
        <form class="d-flex ps-5">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style></style>
