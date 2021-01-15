{{--
  Template Name: Custom
--}}

@extends('layouts.app')

@section('content')
  <main class="site-main --page --custom">
    @while(have_posts()) @php the_post() @endphp
      @include('components.page-header')
      @include('partials.content')
    @endwhile
  </main>
@endsection
