@php
/**
 * Template: Footer
 *
 * 
 */
$widgets = zkd('widgets')->getFooterIds();
$copyrights = get_field('s_footer_copyrights', 'options');
@endphp

@if (!empty($widgets))
  <footer class="site-footer">
    <div class="site-footer__wrapper --cols-{!! count($widgets) !!} wrapper">
      @foreach ($widgets as $key => $widget)
        <div class="site-footer__widget --widget-{!! $key !!}">
          @php dynamic_sidebar($widget) @endphp
        </div>
      @endforeach
    </div>
  </footer>
@endif

@if (!empty($copyrights))
  <div class="copyrights-footer">
    <div class="container">
      <p>{!! $copyrights !!}</p>
    </div>
  </div>
@endif

@php wp_footer(); @endphp
@php do_action('get_footer');@endphp

