<nav class="navbar-default navbar-static-side" role="navigation">
    <div class="sidebar-collapse">
        <ul class="nav metismenu" id="side-menu">
            <li class="nav-header">
                <div class="dropdown profile-element">
                    <a href="{{ url("/") }}"><img alt="logo-nav" src="{{asset('images/logos/logo-impact-menu-white.png')}}" class="img-responsive"></a>
                    <a data-toggle="dropdown" class="dropdown-toggle" href="#">
                        <span class="clear">
                            <span class="block m-t-xs">
                                <strong class="font-bold">{{ Auth::user()->name }}</strong>
                            </span> <span class="text-muted text-xs block">{{  Auth::user()->brand->name }}<b class="caret"></b></span>
                        </span>
                    </a>
                    <ul class="dropdown-menu animated fadeInRight m-t-xs">
                        <li><a href="{{ url("personal-area/bug-report") }}">Bug Report</a></li>
                        @if(false)
                        <li class="divider"></li>
                        <li><a href="#">Logout</a></li>
                        @endif
                    </ul>
                </div>
                <div class="logo-element">
                    <a href="{{ url("/") }}"><img alt="logo-nav" src="{{asset('images/logos/logo-impact-menu-collapsed-white.png')}}" class="img-responsive"></a>
                    {{  substr(Auth::user()->name, 0, 1) }}
                </div>
            </li>

            @role('Admin|Accounter|WebPR|Marketer|Guest')
            {{-- Leads Area --}}
            <li class="@if(Request::is('leads-area/*')) active @endif">
                <a><i class="fa fa-handshake-o" aria-hidden="true"></i> <span class="nav-label">Leads Area</span><span class="fa arrow"></span></a>
                <ul class="nav nav-second-level collapse">

                    {{-- Leads Dashboard --}}
                    @hasrole('Admin')
                    <li><a href="{{ url("leads-area/dashboard") }}"><i class="fa fa-bar-chart-o"></i> Dashboard</a></li>
                    @endhasrole

                    @hasrole('Accounter')
                    <li><a href="{{ url("leads-area/dashboard") }}"><i class="fa fa-bar-chart-o"></i> Dashboard</a></li>
                    @endhasrole

                    @hasrole('WebPR')
                    <li><a href="{{ url("leads-area/dashboard") }}"><i class="fa fa-bar-chart-o"></i> Dashboard</a></li>
                    @endhasrole
                    {{-- .Leads Dashboard --}}

                    {{-- Leads Table --}}
                    @hasrole('Admin')
                    <li><a href="{{ url("leads-area/leads") }}"><i class="fa fa-handshake-o" aria-hidden="true"></i> Leads</a></li>
                    @endhasrole

                    @hasrole('Accounter')
                    <li><a href="{{ url("leads-area/leads") }}"><i class="fa fa-handshake-o" aria-hidden="true"></i> Leads</a></li>
                    @endhasrole

                    @hasrole('WebPR')
                    <li><a href="{{ url("leads-area/leads") }}"><i class="fa fa-handshake-o" aria-hidden="true"></i> Leads</a></li>
                    @endhasrole

                    @hasrole('Marketer')
                    <li><a href="{{ url("leads-area/leads") }}"><i class="fa fa-handshake-o" aria-hidden="true"></i> Leads</a></li>
                    @endhasrole

                    @hasrole('Guest')
                    <li><a href="{{ url("leads-area/leads") }}"><i class="fa fa-handshake-o" aria-hidden="true"></i> Leads</a></li>
                    @endhasrole
                    {{-- .Leads Table --}}

                    {{-- Leads Forms Table --}}
                    @hasrole('Admin')
                    <li><a href="{{ url("leads-area/leads-forms") }}"><i class="fa fa-handshake-o" aria-hidden="true"></i> Leads Forms</a></li>
                    @endhasrole

                    @hasrole('Accounter')
                    <li><a href="{{ url("leads-area/leads-forms") }}"><i class="fa fa-handshake-o" aria-hidden="true"></i> Leads Forms</a></li>
                    @endhasrole

                    @hasrole('WebPR')
                    <li><a href="{{ url("leads-area/leads-forms") }}"><i class="fa fa-handshake-o" aria-hidden="true"></i> Leads Forms</a></li>
                    @endhasrole

                    @hasrole('Marketer')
                    <li><a href="{{ url("leads-area/leads-forms") }}"><i class="fa fa-handshake-o" aria-hidden="true"></i> Leads Forms</a></li>
                    @endhasrole

                    @hasrole('Guest')
                    <li><a href="{{ url("leads-area/leads-forms") }}"><i class="fa fa-handshake-o" aria-hidden="true"></i> Leads Forms</a></li>
                    @endhasrole
                    {{-- .Leads Forms Table --}}

                    @hasrole('Admin')
                    <li class="@if(Request::is('leads-area/manual-import-leads') || Request::is('leads-area/manual-import-leads-dashboard')) active @endif">
                        <a><i class="fa fa-th-list"></i> <span class="nav-label">Leads Manual</span><span class="fa arrow"></span></a>
                        <ul class="nav nav-third-level collapse">
                            <li><a href="{{ url("leads-area/manual-import-leads-dashboard") }}"><i class="fa fa-handshake-o" aria-hidden="true"></i>  Dashboard</a></li>
                            <li><a href="{{ url("leads-area/manual-import-leads") }}"><i class="fa fa-handshake-o" aria-hidden="true"></i> Leads</a></li>
                        </ul>
                    </li>
                    @endhasrole

                    @hasrole('Accounter')
                    <li class="@if(Request::is('leads-area/manual-import-leads') || Request::is('leads-area/manual-import-leads-dashboard')) active @endif">
                        <a><i class="fa fa-th-list"></i> <span class="nav-label">Leads Manual</span><span class="fa arrow"></span></a>
                        <ul class="nav nav-third-level collapse">
                            <li><a href="{{ url("leads-area/manual-import-leads-dashboard") }}"><i class="fa fa-handshake-o" aria-hidden="true"></i>  Dashboard</a></li>
                            <li><a href="{{ url("leads-area/manual-import-leads") }}"><i class="fa fa-handshake-o" aria-hidden="true"></i> Leads</a></li>
                        </ul>
                    </li>
                    @endhasrole

                    @hasrole('WebPR')
                    <li class="@if(Request::is('leads-area/manual-import-leads') || Request::is('leads-area/manual-import-leads-dashboard')) active @endif">
                        <a><i class="fa fa-th-list"></i> <span class="nav-label">Leads Manual</span><span class="fa arrow"></span></a>
                        <ul class="nav nav-third-level collapse">
                            <li><a href="{{ url("leads-area/manual-import-leads-dashboard") }}"><i class="fa fa-handshake-o" aria-hidden="true"></i>  Dashboard</a></li>
                            <li><a href="{{ url("leads-area/manual-import-leads") }}"><i class="fa fa-handshake-o" aria-hidden="true"></i> Leads</a></li>
                        </ul>
                    </li>
                    @endhasrole

                    @hasrole('Marketer')
                    <li class="@if(Request::is('leads-area/manual-import-leads') || Request::is('leads-area/manual-import-leads-dashboard')) active @endif">
                        <a><i class="fa fa-th-list"></i> <span class="nav-label">Leads Manual</span><span class="fa arrow"></span></a>
                        <ul class="nav nav-third-level collapse">
                            <li><a href="{{ url("leads-area/manual-import-leads-dashboard") }}"><i class="fa fa-handshake-o" aria-hidden="true"></i>  Dashboard</a></li>
                            <li><a href="{{ url("leads-area/manual-import-leads") }}"><i class="fa fa-handshake-o" aria-hidden="true"></i> Leads</a></li>
                        </ul>
                    </li>
                    @endhasrole

                    @hasrole('Guest')
                    <li class="@if(Request::is('leads-area/manual-import-leads') || Request::is('leads-area/manual-import-leads-dashboard')) active @endif">
                        <a><i class="fa fa-th-list"></i> <span class="nav-label">Leads Manual</span><span class="fa arrow"></span></a>
                        <ul class="nav nav-third-level collapse">
                            <li><a href="{{ url("leads-area/manual-import-leads-dashboard") }}"><i class="fa fa-handshake-o" aria-hidden="true"></i>  Dashboard</a></li>
                            <li><a href="{{ url("leads-area/manual-import-leads") }}"><i class="fa fa-handshake-o" aria-hidden="true"></i> Leads</a></li>
                        </ul>
                    </li>
                    @endhasrole

                    {{-- Opportunities Table --}}
                    @hasrole('Admin')
                    <li><a href="{{ url("leads-area/opportunities") }}"><i class="fa fa-american-sign-language-interpreting" aria-hidden="true"></i> Opportunities</a></li>
                    @endhasrole
                    {{-- .Opportunities Table --}}

                    @role('Admin|Accounter|WebPR|Marketer|Guest')
                    {{-- Leads Create --}}
                    <li><a href="{{ url("leads-area/create") }}"><i class="fa fa-plus"></i> Add Lead</a></li>
                    {{-- .Leads Create --}}
                    @endhasrole


                </ul>
            </li>
            {{-- .Leads Area --}}
            @endhasrole

            @role('Ambassador|WebPR|Marketer')
            {{-- Fairs Area --}}
            <li class="@if(Request::is('fairs-area/*')) active @endif">
                <a><i class="fa fa-globe"></i> <span class="nav-label">Tradeshows Area</span><span class="fa arrow"></span></a>
                <ul class="nav nav-second-level collapse">
                    <li><a href="{{ url("fairs-area/fairs") }}"><i class="fa fa-phone"></i> Contacts</a></li>
                    @if(false)
                    <li><a href="{{ url("fairs-area/actions") }}"><i class="fa fa-table"></i> Actions</a></li>
                    @endif
                    <li><a href="{{ url("fairs-area/create") }}"><i class="fa fa-plus"></i> Add Contact</a></li>
                </ul>
            </li>
            {{-- .Fairs Area --}}
            @endhasrole

            @role('Admin|Accounter')
            {{-- Fairs Area --}}
            <li class="@if(Request::is('fairs-area/*')) active @endif">
                <a><i class="fa fa-globe"></i> <span class="nav-label">Tradeshows Area</span><span class="fa arrow"></span></a>
                <ul class="nav nav-second-level collapse">
                    <li><a href="{{ url("fairs-area/dashboard") }}"><i class="fa fa-bar-chart-o"></i> Dashboard</a></li>
                    <li><a href="{{ url("fairs-area/fairs") }}"><i class="fa fa-phone"></i> Contacts</a></li>
                    @if(false)
                        <li><a href="{{ url("fairs-area/actions") }}"><i class="fa fa-table"></i> Actions</a></li>
                    @endif
                    <li><a href="{{ url("fairs-area/create") }}"><i class="fa fa-plus"></i> Add Contact</a></li>
                </ul>
            </li>
            {{-- .Fairs Area --}}
            @endhasrole

            {{-- Cross Area --}}
            @hasrole('Admin')
            <li class="@if(Request::is('cross-area/*')) active @endif">
                <a><i class="fa fa-sitemap"></i> <span class="nav-label">Cross Area</span><span class="fa arrow"></span></a>
                <ul class="nav nav-second-level collapse">

                    {{-- Cross Dashboard--}}
                    @hasrole('Admin')
                    <li><a href="{{ url("cross-area/dashboard") }}"><i class="fa fa-bar-chart-o"></i> Dashboard</a></li>
                    @endhasrole

                    @hasrole('Accounter')
                    <li><a href="{{ url("cross-area/dashboard") }}"><i class="fa fa-bar-chart-o"></i> Dashboard</a></li>
                    @endhasrole
                    {{-- Cross Dashboard --}}

                    {{-- Cross --}}
                    @hasrole('Admin')
                    <li><a href="{{ url("cross-area/cross") }}"><i class="fa fa-sitemap"></i> Cross</a></li>
                    @endhasrole

                    @hasrole('Accounter')
                    <li><a href="{{ url("cross-area/cross") }}"><i class="fa fa-sitemap"></i> Cross</a></li>
                    @endhasrole

                    @hasrole('WebPR')
                    <li><a href="{{ url("cross-area/cross") }}"><i class="fa fa-sitemap"></i> Cross</a></li>
                    @endhasrole

                    @hasrole('Marketer')
                    <li><a href="{{ url("cross-area/cross") }}"><i class="fa fa-sitemap"></i> Cross</a></li>
                    @endhasrole

                    @hasrole('Guest')
                    <li><a href="{{ url("cross-area/cross") }}"><i class="fa fa-sitemap"></i> Cross</a></li>
                    @endhasrole
                    {{-- .Cross --}}
                </ul>
            </li>
            @endhasrole

            @hasrole('Accounter')
            <li class="@if(Request::is('cross-area/*')) active @endif">
                <a><i class="fa fa-sitemap"></i> <span class="nav-label">Cross Area</span><span class="fa arrow"></span></a>
                <ul class="nav nav-second-level collapse">

                    {{-- Cross Dashboard--}}
                    @hasrole('Admin')
                    <li><a href="{{ url("cross-area/dashboard") }}"><i class="fa fa-bar-chart-o"></i> Dashboard</a></li>
                    @endhasrole

                    @hasrole('Accounter')
                    <li><a href="{{ url("cross-area/dashboard") }}"><i class="fa fa-bar-chart-o"></i> Dashboard</a></li>
                    @endhasrole
                    {{-- Cross Dashboard --}}

                    {{-- Cross --}}
                    @hasrole('Admin')
                    <li><a href="{{ url("cross-area/cross") }}"><i class="fa fa-sitemap"></i> Cross</a></li>
                    @endhasrole

                    @hasrole('Accounter')
                    <li><a href="{{ url("cross-area/cross") }}"><i class="fa fa-sitemap"></i> Cross</a></li>
                    @endhasrole

                    @hasrole('WebPR')
                    <li><a href="{{ url("cross-area/cross") }}"><i class="fa fa-sitemap"></i> Cross</a></li>
                    @endhasrole

                    @hasrole('Marketer')
                    <li><a href="{{ url("cross-area/cross") }}"><i class="fa fa-sitemap"></i> Cross</a></li>
                    @endhasrole

                    @hasrole('Guest')
                    <li><a href="{{ url("cross-area/cross") }}"><i class="fa fa-sitemap"></i> Cross</a></li>
                    @endhasrole
                    {{-- .Cross --}}
                </ul>
            </li>
            @endhasrole

            @hasrole('WebPR')
            <li class="@if(Request::is('cross-area/*')) active @endif">
                <a><i class="fa fa-sitemap"></i> <span class="nav-label">Cross Area</span><span class="fa arrow"></span></a>
                <ul class="nav nav-second-level collapse">

                    {{-- Cross Dashboard--}}
                    @hasrole('Admin')
                    <li><a href="{{ url("cross-area/dashboard") }}"><i class="fa fa-bar-chart-o"></i> Dashboard</a></li>
                    @endhasrole

                    @hasrole('Accounter')
                    <li><a href="{{ url("cross-area/dashboard") }}"><i class="fa fa-bar-chart-o"></i> Dashboard</a></li>
                    @endhasrole
                    {{-- Cross Dashboard --}}

                    {{-- Cross --}}
                    @hasrole('Admin')
                    <li><a href="{{ url("cross-area/cross") }}"><i class="fa fa-sitemap"></i> Cross</a></li>
                    @endhasrole

                    @hasrole('Accounter')
                    <li><a href="{{ url("cross-area/cross") }}"><i class="fa fa-sitemap"></i> Cross</a></li>
                    @endhasrole

                    @hasrole('WebPR')
                    <li><a href="{{ url("cross-area/cross") }}"><i class="fa fa-sitemap"></i> Cross</a></li>
                    @endhasrole

                    @hasrole('Marketer')
                    <li><a href="{{ url("cross-area/cross") }}"><i class="fa fa-sitemap"></i> Cross</a></li>
                    @endhasrole

                    @hasrole('Guest')
                    <li><a href="{{ url("cross-area/cross") }}"><i class="fa fa-sitemap"></i> Cross</a></li>
                    @endhasrole
                    {{-- .Cross --}}
                </ul>
            </li>
            @endhasrole

            @hasrole('Marketer')
            <li class="@if(Request::is('cross-area/*')) active @endif">
                <a><i class="fa fa-sitemap"></i> <span class="nav-label">Cross Area</span><span class="fa arrow"></span></a>
                <ul class="nav nav-second-level collapse">

                    {{-- Cross Dashboard--}}
                    @hasrole('Admin')
                    <li><a href="{{ url("cross-area/dashboard") }}"><i class="fa fa-bar-chart-o"></i> Dashboard</a></li>
                    @endhasrole

                    @hasrole('Accounter')
                    <li><a href="{{ url("cross-area/dashboard") }}"><i class="fa fa-bar-chart-o"></i> Dashboard</a></li>
                    @endhasrole
                    {{-- Cross Dashboard --}}

                    {{-- Cross --}}
                    @hasrole('Admin')
                    <li><a href="{{ url("cross-area/cross") }}"><i class="fa fa-sitemap"></i> Cross</a></li>
                    @endhasrole

                    @hasrole('Accounter')
                    <li><a href="{{ url("cross-area/cross") }}"><i class="fa fa-sitemap"></i> Cross</a></li>
                    @endhasrole

                    @hasrole('WebPR')
                    <li><a href="{{ url("cross-area/cross") }}"><i class="fa fa-sitemap"></i> Cross</a></li>
                    @endhasrole

                    @hasrole('Marketer')
                    <li><a href="{{ url("cross-area/cross") }}"><i class="fa fa-sitemap"></i> Cross</a></li>
                    @endhasrole

                    @hasrole('Guest')
                    <li><a href="{{ url("cross-area/cross") }}"><i class="fa fa-sitemap"></i> Cross</a></li>
                    @endhasrole
                    {{-- .Cross --}}
                </ul>
            </li>
            @endhasrole

            @hasrole('Guest')
            <li class="@if(Request::is('cross-area/*')) active @endif">
                <a><i class="fa fa-sitemap"></i> <span class="nav-label">Cross Area</span><span class="fa arrow"></span></a>
                <ul class="nav nav-second-level collapse">

                    {{-- Cross Dashboard--}}
                    @hasrole('Admin')
                    <li><a href="{{ url("cross-area/dashboard") }}"><i class="fa fa-bar-chart-o"></i> Dashboard</a></li>
                    @endhasrole

                    @hasrole('Accounter')
                    <li><a href="{{ url("cross-area/dashboard") }}"><i class="fa fa-bar-chart-o"></i> Dashboard</a></li>
                    @endhasrole
                    {{-- Cross Dashboard --}}

                    {{-- Cross --}}
                    @hasrole('Admin')
                    <li><a href="{{ url("cross-area/cross") }}"><i class="fa fa-sitemap"></i> Cross</a></li>
                    @endhasrole

                    @hasrole('Accounter')
                    <li><a href="{{ url("cross-area/cross") }}"><i class="fa fa-sitemap"></i> Cross</a></li>
                    @endhasrole

                    @hasrole('WebPR')
                    <li><a href="{{ url("cross-area/cross") }}"><i class="fa fa-sitemap"></i> Cross</a></li>
                    @endhasrole

                    @hasrole('Marketer')
                    <li><a href="{{ url("cross-area/cross") }}"><i class="fa fa-sitemap"></i> Cross</a></li>
                    @endhasrole

                    @hasrole('Guest')
                    <li><a href="{{ url("cross-area/cross") }}"><i class="fa fa-sitemap"></i> Cross</a></li>
                    @endhasrole
                    {{-- .Cross --}}
                </ul>
            </li>
            @endhasrole
            {{-- .Cross Area --}}

            {{-- Campaigns Area --}}
            @hasrole('Admin')
            <li class="@if(Request::is('campaigns-area/dashboard')) active @endif">
                <a><i class="fa fa-list-alt"></i> <span class="nav-label">Campaigns Area</span><span class="fa arrow"></span></a>
                <ul class="nav nav-second-level collapse">
                    <li><a href="{{ url("campaigns-area/dashboard") }}"><i class="fa fa-bar-chart-o" aria-hidden="true"></i> Dashboard</a></li>
                </ul>
            </li>
            @endhasrole

            @hasrole('Accounter')
            <li class="@if(Request::is('campaigns-area/dashboard')) active @endif">
                <a><i class="fa fa-list-alt"></i> <span class="nav-label">Campaigns Area</span><span class="fa arrow"></span></a>
                <ul class="nav nav-second-level collapse">

                    <li><a href="{{ url("campaigns-area/dashboard") }}"><i class="fa fa-bar-chart-o" aria-hidden="true"></i> Dashboard</a></li>
                </ul>
            </li>
            @endhasrole
            {{-- Campaigns Area --}}

            {{-- Budget Area --}}
            @hasrole('Admin')
            <li class="@if(Request::is('budget-area/*')) active @endif">
                <a><i class="fa fa-money"></i> <span class="nav-label">Budget Area</span><span class="fa arrow"></span></a>
                <ul class="nav nav-second-level collapse">

                    {{-- Budget insert --}}
                    @hasrole('Admin')
                    <li><a href="{{ url("budget-area/insert-budget") }}"><i class="fa fa-money" aria-hidden="true"></i> Insert Budget</a></li>
                    @endhasrole

                    @hasrole('Accounter')
                    <li><a href="{{ url("budget-area/insert-budget") }}"><i class="fa fa-money" aria-hidden="true"></i> Insert Budget</a></li>
                    @endhasrole
                    {{-- .Budget insert --}}

                    {{-- Budget edit --}}
                    @hasrole('Admin')
                    <li><a href="{{ url("budget-area/edit-budget") }}"><i class="fa fa-money" aria-hidden="true"></i> Edit Budget</a></li>
                    @endhasrole
                    {{-- .Budget edit --}}

                    {{-- Budget Dashboard --}}
                    @hasrole('Admin')
                    <li><a href="{{ url("budget-area/dashboard") }}"><i class="fa fa-bar-chart-o" aria-hidden="true"></i> Dashboard</a></li>
                    @endhasrole

                    @hasrole('Accounter')
                    <li><a href="{{ url("budget-area/dashboard") }}"><i class="fa fa-bar-chart-o" aria-hidden="true"></i> Dashboard</a></li>
                    @endhasrole
                    {{-- .Budget Dashboard --}}
                </ul>
            </li>
            @endhasrole
            {{-- .Budget Area --}}

            {{-- Budget Area --}}
            @hasrole('Accounter')
            <li class="@if(Request::is('budget-area/*')) active @endif">
                <a><i class="fa fa-money"></i> <span class="nav-label">Budget Area</span><span class="fa arrow"></span></a>
                <ul class="nav nav-second-level collapse">

                    {{-- Budget insert --}}
                    @hasrole('Admin')
                    <li><a href="{{ url("budget-area/insert-budget") }}"><i class="fa fa-money" aria-hidden="true"></i> Insert Budget</a></li>
                    @endhasrole

                    @hasrole('Accounter')
                    <li><a href="{{ url("budget-area/insert-budget") }}"><i class="fa fa-money" aria-hidden="true"></i> Insert Budget</a></li>
                    @endhasrole
                    {{-- .Budget insert --}}

                    {{-- Budget edit --}}
                    @hasrole('Admin')
                    <li><a href="{{ url("budget-area/edit-budget") }}"><i class="fa fa-money" aria-hidden="true"></i> Edit Budget</a></li>
                    @endhasrole
                    {{-- .Budget edit --}}

                    {{-- Budget Dashboard --}}
                    @hasrole('Admin')
                    <li><a href="{{ url("budget-area/dashboard") }}"><i class="fa fa-bar-chart-o" aria-hidden="true"></i> Dashboard</a></li>
                    @endhasrole

                    @hasrole('Accounter')
                    <li><a href="{{ url("budget-area/dashboard") }}"><i class="fa fa-bar-chart-o" aria-hidden="true"></i> Dashboard</a></li>
                    @endhasrole
                    {{-- .Budget Dashboard --}}
                </ul>
            </li>
            @endhasrole
            {{-- .Budget Area --}}

            @if(false)
            {{-- Workflow Area --}}
            <li class="@if(Request::is('workflow')) active @endif">
                <a href="{{ url("workflow") }}"><i class="fa fa-stack-overflow" aria-hidden="true"></i> <span class="nav-label">Workflow Area</span></a>
            </li>
            {{-- .Workflow Area --}}
            @endif

            {{-- Admin Area --}}
            @hasrole('Admin')
            <li class="admin @if(Request::is('admin-area/*') || Request::is('campaigns-area/create/*')) active @endif">
                <a><i class="fa fa-address-card"></i> <span class="nav-label">Admin area</span><span class="fa arrow"></span></a>
                <ul class="nav nav-second-level collapse">
                    <li><a href="{{ url("admin-area/users") }}"><i class="fa fa-users"></i> Users</a></li>
                    <li><a href="{{ url("admin-area/users-logs") }}"><i class="fa fa-history"></i>Users Logs</a></li>
                    <li><a href="{{ url("admin-area/roles") }}"><i class="fa fa-newspaper-o"></i> Roles</a></li>
                    <li><a href="{{ url("admin-area/permissions") }}"><i class="fa fa-key"></i> Permissions</a></li>
                    <li><a href="{{ url("admin-area/console") }}"><i class="fa fa-terminal"></i> Console</a></li>
                    <li><a href="{{ url("admin-area/bug-report/dashboard") }}"><i class="fa fa-bug"></i> Bug Report</a></li>

                    {{-- Dynamic Banners Area --}}
                    <li class="@if(Request::is('admin-area/dynamic-banners')) active @endif">
                        <li><a href="{{ url("admin-area/dynamic-banners") }}"><i class="fa fa-picture-o" aria-hidden="true"></i>Dynamic Banners</a></li></a>
                    </li>
                    {{-- .Dynamic Banners --}}

                    <li class="@if(Request::is('campaigns-area/create/*')) active @endif">
                        <a><i class="fa fa-th-list"></i> <span class="nav-label">Campaigns</span><span class="fa arrow"></span></a>
                        <ul class="nav nav-third-level collapse">
                            <li><a href="{{ url("campaigns-area/create/parent") }}"><i class="fa fa-plus" aria-hidden="true"></i> Create Parent</a></li>
                            <li><a href="{{ url("campaigns-area/create/child") }}"><i class="fa fa-plus" aria-hidden="true"></i> Create Child</a></li>
                            <li><a href="{{ url("campaigns-area/create/association") }}"><i class="fa fa-plus" aria-hidden="true"></i>Associate Child</a></li>
                        </ul>
                    </li>

                    <li class="@if(Request::is('admin-area/closed-list-area/*')) active @endif">
                        <a><i class="fa fa-th-list"></i> <span class="nav-label">Closed Lists</span><span class="fa arrow"></span></a>
                        <ul class="nav nav-third-level collapse">
                            <li><a href="{{ url("admin-area/closed-list-area/blog") }}"><i class="fa fa-plus"></i> Blog</a></li>
                            <li><a href="{{ url("admin-area/closed-list-area/blog-category") }}"><i class="fa fa-plus"></i> Blog Category</a></li>
                            <li><a href="{{ url("admin-area/closed-list-area/advertising") }}"><i class="fa fa-plus"></i> Advertising</a></li>
                            <li><a href="{{ url("admin-area/closed-list-area/brands") }}"><i class="fa fa-plus"></i> Brands</a></li>
                            <li><a href="{{ url("admin-area/closed-list-area/brands-access") }}"><i class="fa fa-plus"></i> Brands Access</a></li>
                            <li><a href="{{ url("admin-area/closed-list-area/catalogue") }}"><i class="fa fa-plus"></i> Catalogue</a></li>
                            <li><a href="{{ url("admin-area/closed-list-area/direct") }}"><i class="fa fa-plus"></i> Direct Contact</a></li>
                            <li><a href="{{ url("admin-area/closed-list-area/ebook") }}"><i class="fa fa-plus"></i> Ebook</a></li>
                            <li><a href="{{ url("admin-area/closed-list-area/ebook-category") }}"><i class="fa fa-plus"></i> Ebook Category</a></li>
                            <li><a href="{{ url("admin-area/closed-list-area/email") }}"><i class="fa fa-plus"></i> Email</a></li>
                            <li><a href="{{ url("admin-area/closed-list-area/cta") }}"><i class="fa fa-plus"></i> Cta</a></li>
                            <li><a href="{{ url("admin-area/closed-list-area/cta-color") }}"><i class="fa fa-plus"></i> Cta Color</a></li>
                            <li><a href="{{ url("admin-area/closed-list-area/form") }}"><i class="fa fa-plus"></i> Form</a></li>
                            <li><a href="{{ url("admin-area/closed-list-area/form-page") }}"><i class="fa fa-plus"></i> Form Page</a></li>
                            <li><a href="{{ url("admin-area/closed-list-area/form-page-position") }}"><i class="fa fa-plus"></i> Form Page Position</a></li>
                            <li><a href="{{ url("admin-area/closed-list-area/infographic") }}"><i class="fa fa-plus"></i> Infographic</a></li>
                            <li><a href="{{ url("admin-area/closed-list-area/lead-token") }}"><i class="fa fa-plus"></i> Lead Token</a></li>
                            <li><a href="{{ url("admin-area/closed-list-area/level") }}"><i class="fa fa-plus"></i> Level</a></li>
                            <li><a href="{{ url("admin-area/closed-list-area/network-lead-state") }}"><i class="fa fa-plus"></i> Network State</a></li>
                            <li><a href="{{ url("admin-area/closed-list-area/network-category") }}"><i class="fa fa-plus"></i> Network Category</a></li>
                            <li><a href="{{ url("admin-area/closed-list-area/phone") }}"><i class="fa fa-plus"></i> Phone</a></li>
                            <li><a href="{{ url("admin-area/closed-list-area/plattform") }}"><i class="fa fa-plus"></i> Plattform</a></li>
                            <li><a href="{{ url("admin-area/closed-list-area/press") }}"><i class="fa fa-plus"></i> Press</a></li>
                            <li><a href="{{ url("admin-area/closed-list-area/showroom") }}"><i class="fa fa-plus"></i> Showroom</a></li>
                            <li><a href="{{ url("admin-area/closed-list-area/social-network") }}"><i class="fa fa-plus"></i> Social Network</a></li>
                            <li><a href="{{ url("admin-area/closed-list-area/social-network-category") }}"><i class="fa fa-plus"></i> Social Network Category</a></li>
                            <li><a href="{{ url("admin-area/closed-list-area/source") }}"><i class="fa fa-plus"></i> Source</a></li>
                            <li><a href="{{ url("admin-area/closed-list-area/source-category") }}"><i class="fa fa-plus"></i> Source Category</a></li>
                            <li><a href="{{ url("admin-area/closed-list-area/website") }}"><i class="fa fa-plus"></i> Website</a></li>
                            <li><a href="{{ url("admin-area/closed-list-area/tradeshow") }}"><i class="fa fa-plus"></i> Tradeshow</a></li>
                            <li><a href="{{ url("admin-area/closed-list-area/tradeshow-edition") }}"><i class="fa fa-plus"></i> Tradeshow Edition</a></li>
                            <li><a href="{{ url("admin-area/closed-list-area/tradeshow-time") }}"><i class="fa fa-plus"></i> Tradeshow Time</a></li>
                            <li><a href="{{ url("admin-area/closed-list-area/tradeshow-associate") }}"><i class="fa fa-plus"></i> Tradeshow Associate</a></li>
                        </ul>
                    </li>
                    {{-- .Closed list Area --}}
                </ul>
            </li>
            @endhasrole
            {{-- .Admin Area --}}

</ul>
    </div>
</nav>