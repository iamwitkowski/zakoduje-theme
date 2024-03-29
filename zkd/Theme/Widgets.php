<?php
/**
 * Theme: Widgets
 *
 * 
 */
namespace zkd\Theme;

class Widgets
{
  /**
   * Register widgets areas
   *
   * @action widgets_init
   *
   * @return void
   */
  public function init(): void
  {
    register_sidebar([
      'name' => 'Footer 1',
      'id' => 'footer-1',
      'before_widget' => '<div class="%1$s %2$s widget">',
      'after_widget' => '</div>',
      'before_title' => '<h4>',
      'after_title' => '</h4>'
    ]);

    register_sidebar([
      'name' => 'Footer 2',
      'id' => 'footer-2',
      'before_widget' => '<div class="%1$s %2$s widget">',
      'after_widget' => '</div>',
      'before_title' => '<h4>',
      'after_title' => '</h4>'
    ]);

    register_sidebar([
      'name' => 'Footer 3',
      'id' => 'footer-3',
      'before_widget' => '<div class="%1$s %2$s widget">',
      'after_widget' => '</div>',
      'before_title' => '<h4>',
      'after_title' => '</h4>'
    ]);
  }

  public function getFooterIds(): array
  {
    $widgets = array();
    for ($i = 1; $i <= 4; $i++) {
      if (is_active_sidebar('footer-' . $i)) :
        $widgets[] = 'footer-' . $i;
      endif;
    }
    return $widgets;
  }
}
