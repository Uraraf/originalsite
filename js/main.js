$(function () {

    // slick
    $('.room-imgblock').each(function () {
      var $this = $(this),
          $slick = $this.find('.room-slick'),
          $nav = $this.find('.room-img');

      $slick.slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          fade: true,
          asNavFor: $nav,
          autoplay: true, 
          autoplaySpeed: 2000 
      });

      $nav.slick({
          slidesToShow: 2,
          slidesToScroll: 1,
          asNavFor: $slick,
          dots: true,
          centerMode: true,
          focusOnSelect: true,
          autoplay: true, 
          autoplaySpeed: 2000 
      });
  });

        // ハンバーガーメニュー
        $(".menu-button").on("click", function () {
            $("header").toggleClass("active");
          });
          // メニューのリンクをクリックした時
          $(".nav-sp li a").on("click", function () {
            $("header").toggleClass("active");
          });

          // アニメーション
          $(window).scroll(function () {
            $(".inview-fade-in").each(function () {
              var scroll = $(window).scrollTop();
              var target = $(this).offset().top;
              var windowHeight = $(window).height();
        
              if (scroll > target - windowHeight +50) {
                $(this).addClass("fade-in");
              }
            });
          });

         $(window).on('load', function(){
            $(".page-img").addClass("fade-in");
        });

        // スムーススクロール
        // ページ内のリンクをクリックした時に動作する
        $('a[href^="#"]').on('click',function(){
          // クリックしたaタグのリンクを取得
          let href =$(this).attr("href");
          // ジャンプ先のid名をセット
          let target = $(href == "#" || href=="" ? "html" : href);
          // トップページからジャンプ先の要素までの距離を取得
          let position = target.offset().top;
          // animateでスムーススクロールを行う   ページトップからpositionだけスクロールする
          // 600はスクロール速度で単位はミリ秒  swingはイージングのひとつ
          $("html, body").animate({scrollTop: position}, 600, "swing");
          // urlが変化しないようにfalseを返す
          return false;
        });

        // #to-topをクリックした時のスムーススクロール
        $('#to-top').on('click',function(){
          $('html, body').animate({scrollTop: 0}, 600);
          return false;
        });


});