<div class="container-fluid page-body-wrapper">
    <img src="admin/assets/images/lockscreen-bg.jpg" alt="">
</div>
        <div class="navbar-brand-wrapper d-flex d-lg-none align-items-center justify-content-center">
          <a class="navbar-brand brand-logo-mini" href="index.html"><img src="admin/assets/images/logo-mini.svg" alt="logo" /></a>
        </div>
        <div class="navbar-menu-wrapper flex-grow d-flex align-items-stretch">
          <button class="navbar-toggler navbar-toggler align-self-center" type="button" data-toggle="minimize">
            <span class="mdi mdi-menu"></span>
          </button>
          <ul class="navbar-nav w-100">
            <li class="nav-item w-100">
              <h3>Product Catalogue Update Dashboard</h3>
            </li>
            <li class="nav-item menu-items">
              <x-app-layout>
              </x-app-layout>
            </li>
          </ul>
          <ul class="navbar-nav navbar-nav-right">
    
    
    
    
            <li>
                <form method="POST" action="{{ route('logout') }}" class="inline">
                    @csrf
                    <button type="submit" id="logincss" class="btn btn-primary">
                          {{ __('Log Out') }}
                   </button>
              </form>
              
            </li>
        </div>
      </nav>
    