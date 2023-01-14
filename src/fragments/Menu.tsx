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
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#/settings">Settings</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#/bookshelf">Bookshelf</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#/404">404 Error</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#/user">User</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#/tasks">Tasks</a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled">Disabled</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                More Links
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#/bookshelf">Bookshelf</a></li>
                <li><a class="dropdown-item" href="#/tasks">Tasks</a></li>
                <li><hr class="dropdown-divider" /></li>
                <li><a class="dropdown-item" href="#/contactus">Contact Us</a></li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#/about">About</a>
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
