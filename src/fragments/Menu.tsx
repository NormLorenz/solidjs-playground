import { A } from "@solidjs/router";

const Menu = () => {

  return (
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
        <a class="navbar-brand" href="#"><img src="/src/assets/solidjs.svg" alt="Solidjs" width="150px" height="80px" /></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <A class="nav-link" href="/home">Home</A>
            </li>
            <li class="nav-item">
              <A class="nav-link" href="/settings">Settings</A>
            </li>
            <li class="nav-item">
              <A class="nav-link" href="/shopping">Shopping</A>
            </li>
            <li class="nav-item">
              <A class="nav-link" href="/404">404</A>
            </li>
            <li class="nav-item">
              <A class="nav-link" href="/user">User</A>
            </li>
            <li class="nav-item">
              <A class="nav-link" href="/tasks">Tasks</A>
            </li>
            <li class="nav-item">
              <A class="nav-link disabled" href="/disabled">Disabled</A>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                More Links
              </a>
              <ul class="dropdown-menu">
                <A class="nav-link" href="/bookshelf">Bookshelf</A>
                <A class="nav-link" href="/tasks">Tasks</A>
                <A class="nav-link" href="/charts">Charts</A>
                <li><hr class="dropdown-divider" /></li>
                <A class="nav-link" href="/contactus">Contact Us</A>
              </ul>
            </li>
            <li class="nav-item">
              <A class="nav-link" href="/about">About</A>
            </li>
          </ul>
          <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button class="btn btn-outline-primary" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  )
}

export default Menu;
