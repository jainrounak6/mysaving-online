<header class="header">
    <nav class="navbar navbar-expand-lg">
        <div class="container">
            <a class="navbar-brand" href="#">
                <img src="{{ URL::asset('public/web-assets') }}/images/logo.png" class="img-fluid" alt="logo" />
                <!-- <img src="{{ URL::asset('public/web-assets') }}/images/header_new_logo.svg" class="img-fluid" alt="logo" /> -->
            </a>

            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                @if(Auth::check())
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#" onclick="toggleNotification()">
                        <em class="icon-bell-icon"></em>
                    </a>
                </li>
                @endif
                
                @if(Auth::check())
                <li class="nav-item">
                    <a class="nav-link" href="#" onclick="toggleSideMenu()"> <em class="icon-menu-icon"></em></a>
                </li>
                @endif

            </ul>
        </div>
    </nav>
</header>