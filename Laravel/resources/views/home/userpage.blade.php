<!DOCTYPE html>
<html>
   <head>
      <!-- Basic -->
      <meta charset="utf-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <!-- Mobile Metas -->
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <!-- Site Metas -->
      <meta name="keywords" content="" />
      <meta name="description" content="" />
      <meta name="author" content="" />
      <link rel="shortcut icon" href="images/favicon.png" type="">
      <title>RRJ</title>
      <!-- bootstrap core css -->
      <link rel="stylesheet" type="text/css" href="home/css/bootstrap.css" />
      <!-- font awesome style -->
      <link href="home/css/font-awesome.min.css" rel="stylesheet" />
      <!-- Custom styles for this template -->
      <link href="home/css/style.css" rel="stylesheet" />
      <!-- responsive style -->
      <link href="home/css/responsive.css" rel="stylesheet" />
   </head>
   <body>

      <header class="header_section">
         <div class="container">

            <a class="bg-zinc-500" href="{{url('/')}}"><h2 >ADMIN PAGE</h2></a>

            <nav class="navbar navbar-expand-lg custom_nav-container ">
               
               <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
               <span class=""> </span>
               </button>
               
                @if (Route::has('login'))
                @auth
            <li class="nav-item">
                   <form method="POST" action="{{ route('logout') }}" class="inline">
                         @csrf
                         <button type="submit" id="logincss" class="btn btn-primary">
                               {{ __('Log Out') }}
                        </button>
                   </form>
            </li>
                   @else
                        <li class="nav-item">
                           <a class="btn btn-primary" id="logincss" href="{{ route('login') }}">Login</a>
                        </li>
                        <li class="nav-item">
                           <a class="btn btn-success" href="{{ route('register') }}">Register</a>
                        </li>
                     @endauth
                   @endif

           </nav>
        </div>
        <div class="hero">
         
            
        

        </div>
      </header>
      <section class="hero-banner">
         <div class="container">
           <div class="row">
             <div class="col-md-6">
               <h1>Welcome to Admin Portal</h1>
               <p>Log in to access the administrative features.</p>
             </div>
             <div class="col-md-6">
               <img src="/admin/assets/images/lockscreen-bg.jpg" alt="Banner Image" class="img-fluid">
             </div>
           </div>
         </div>
       </section>
       

      
   </body>
</html>