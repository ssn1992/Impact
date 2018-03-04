<div class="row border-bottom">
    <nav class="navbar navbar-static-top" role="navigation" style="margin-bottom: 0">

        <div class="navbar-header">
            <a class="navbar-minimalize minimalize-styl-2 btn btn-primary " href="#"><i class="fa fa-bars"></i> </a>
            @if(false)
            <form role="search" class="navbar-form-custom" method="post" action="/">
                <div class="form-group">
                    <input type="text" placeholder="Search for something..." class="form-control" name="top-search" id="top-search" />
                </div>
            </form>
            @endif
        </div>
        <ul class="nav navbar-top-links navbar-right">
            <li>
                <span class="m-r-sm text-muted welcome-message">Welcome to Impact Webuzz Opportunity Platform</span>
            </li>
            @if(false)
            <li class="dropdown">
                <a class="dropdown-toggle count-info" data-toggle="dropdown" href="#">
                    <i class="fa fa-envelope"></i>  <span class="label label-warning">16</span>
                </a>

            </li>
            @endif
            <div id="bug-report-component" style="display: inline-block;"></div>
            <li>
                <a href="{{ route('logout') }}" onclick="event.preventDefault(); document.getElementById('logout-form').submit();">
                    <i class="fa fa-sign-out"></i> Log out
                </a>

                <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                    {{ csrf_field() }}
                </form>
            </li>
            @if(false)
            <li>
                <a class="right-sidebar-toggle">
                    <i class="fa fa-tasks"></i>
                </a>
            </li>
            @endif
        </ul>
    </nav>
</div>

