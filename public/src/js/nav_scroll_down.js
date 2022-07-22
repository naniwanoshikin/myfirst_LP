$(function () { // ナビ (jQuery)

  // 各ナビ先へ飛ぶ ---------------------------
  $('nav li > .nav_query').click(function () {
    let id = $(this).attr('href'); // 各id
    let position = $(id).offset().top; // 高さ
    $('html,body').animate({
      'scrollTop': position - 100 // そこへ跳ぶ
    }, 'fast');
  });

  // ドロップダウン ---------------------------
  $('nav > p').click(function () {
    let $answer = $('nav').children('ul');
    if ($answer.hasClass('open')) { // openしていたら、
      $answer.removeClass('open');
      $answer.slideUp();
      // $('nav').find('nav > p').text('[+]');
    } else {
      $answer.addClass('open'); // open
      $answer.slideDown(); // 表示
      // $('nav').find('nav > p').text('[-]');
    }
  });
});
