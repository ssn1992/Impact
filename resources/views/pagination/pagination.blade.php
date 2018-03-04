@if ($paginator->lastPage() > 1)
    <ul class="pagination">
        <li class="{{ ($paginator->currentPage() == 1) ? ' disabled' : '' }}">
            @if($paginator->currentPage() != 1)
                <a href="{{ $paginator->url(1) }}"><i class="material-icons">chevron_left</i></a>
            @else
                <a><i class="material-icons">chevron_left</i></a>
            @endif
        </li>
        @for ($i = 1; $i <= $paginator->lastPage(); $i++)
            <li class="{{ ($paginator->currentPage() == $i) ? ' active' : '' }}">
                <a href="{{ $paginator->url($i) }}">{{ $i }}</a>
            </li>
        @endfor
        <li class="{{ ($paginator->currentPage() == $paginator->lastPage()) ? ' disabled' : '' }}">
            @if($paginator->currentPage() != $paginator->lastPage())
                <a href="{{ $paginator->url($paginator->currentPage()+1) }}" ><i class="material-icons">chevron_right</i></a>
            @else
                <a><i class="material-icons">chevron_right</i></a>
            @endif
        </li>
    </ul>
@endif