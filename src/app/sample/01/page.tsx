'use client';
import { ArrowUpToLine, CircleChevronRight, Facebook, Instagram, Youtube } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import hero1 from '@/public/imgs/sample/01/hero_1.jpeg';
import backgroundCoffee from '@/public/imgs/sample/01/background_coffee.jpg'
import cafe1 from '@/public/imgs/sample/01/cafe1.jpg';
import cafelatte from '@/public/imgs/sample/01/cafelatte.jpg';
import americano from '@/public/imgs/sample/01/americano.jpg';
import machalatte from '@/public/imgs/sample/01/machalatte.jpg';
import orangejuice from '@/public/imgs/sample/01/orangejuice.jpg';
import cafeSpace from '@/public/imgs/sample/01/cafeSpace.jpg';
import roasting from '@/public/imgs/sample/01/roasting.jpg';
import newMenu from '@/public/imgs/sample/01/newMenu.jpg';
import sns from '@/public/imgs/sample/01/sns.jpg';

import '@/src/app/sample/01/css/animate.css';
import '@/src/app/sample/01/css/bootstrap.css';
import '@/src/app/sample/01/css/flexslider.css';
import '@/src/app/sample/01/css/icomoon.css';
import '@/src/app/sample/01/css/style.css';
import styles from '@/src/app/sample/01/page.module.scss'; // CSS 모듈 추가

// 모바일 디바이스 감지 객체
const isMobile = {
  Android: (): boolean => !!navigator.userAgent.match(/Android/i),
  BlackBerry: (): boolean => !!navigator.userAgent.match(/BlackBerry/i),
  iOS: (): boolean => !!navigator.userAgent.match(/iPhone|iPad|iPod/i),
  Opera: (): boolean => !!navigator.userAgent.match(/Opera Mini/i),
  Windows: (): boolean => !!navigator.userAgent.match(/IEMobile/i),
  any: function (): boolean {
    return (
      this.Android() ||
      this.BlackBerry() ||
      this.iOS() ||
      this.Opera() ||
      this.Windows()
    );
  },
};

export default function Home() {
  const [isOffcanvas, setIsOffcanvas] = useState(false); // 오프캔버스 메뉴 상태
  const [currentSlide, setCurrentSlide] = useState(0); // 슬라이더 상태
  const [isTopActive, setIsTopActive] = useState(false); // 상단 이동 버튼 상태
  const [isNavScrolled, setIsNavScrolled] = useState(false); // 내비게이션 스크롤 상태
  const offcanvasRef = useRef<HTMLDivElement>(null); // 오프캔버스 참조

  const slides = [
    { image: cafeSpace, title: 'Crab with Curry', desc: 'Lorem ipsum...' },
    { image: cafeSpace, title: 'Tuna & Roast Beef', desc: 'Ink is a free...' },
    { image: cafeSpace, title: 'Egg with Mushroom', desc: 'Ink is a free...' },
  ];

  // 모바일 메뉴 외부 클릭 처리
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (
        isOffcanvas &&
        offcanvasRef.current &&
        !offcanvasRef.current.contains(e.target as Node) &&
        !(e.target as HTMLElement).closest('.js-fh5co-nav-toggle')
      ) {
        setIsOffcanvas(false);
      }
    };
    document.addEventListener('click', handleOutsideClick);
    return () => document.removeEventListener('click', handleOutsideClick);
  }, [isOffcanvas]);

  // 슬라이더 자동 재생
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  // 전체 높이 설정
  useEffect(() => {
    const updateHeight = () => {
      if (!isMobile.any()) {
        const elements = document.querySelectorAll('.js-fullheight');
        elements.forEach((el) => {
          (el as HTMLElement).style.height = `${window.innerHeight}px`;
        });
      }
    };
    updateHeight();
    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  }, []);

  // 애니메이션 (Intersection Observer)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !entry.target.classList.contains('animated-fast')) {
            entry.target.classList.add('item-animate');
            setTimeout(() => {
              const effect = entry.target.getAttribute('data-animate-effect');
              if (effect === 'fadeIn') {
                entry.target.classList.add('fadeIn', 'animated-fast');
              } else if (effect === 'fadeInLeft') {
                entry.target.classList.add('fadeInLeft', 'animated-fast');
              } else if (effect === 'fadeInRight') {
                entry.target.classList.add('fadeInRight', 'animated-fast');
              } else {
                entry.target.classList.add('fadeInUp', 'animated-fast');
              }
              entry.target.classList.remove('item-animate');
            }, 100);
          }
        });
      },
      { rootMargin: '0px 0px -15% 0px' }
    );

    document.querySelectorAll('.animate-box').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // 스크롤 이벤트 (상단 이동 버튼 및 내비게이션)
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsTopActive(scrollTop > 200);
      setIsNavScrolled(scrollTop > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 상단으로 이동
  const goToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // 로더 페이지
  useEffect(() => {
    const loader = document.querySelector('.fh5co-loader') as HTMLElement;
    if (loader) {
      setTimeout(() => (loader.style.opacity = '0'), 100);
      setTimeout(() => (loader.style.display = 'none'), 600);
    }
  }, []);

  return (
    <div>
      <div className="fh5co-loader" />
      <div id="page" className={isOffcanvas ? 'overflow offcanvas' : ''}>
        <nav className={`fh5co-nav ${isNavScrolled ? 'scrolled' : ''}`} role="navigation">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 text-center logo-wrap">
                <div id="fh5co-logo">
                  <a href="/sample/01">
                  The Comma<span>,</span>
                  </a>
                </div>
              </div>
              <div className="col-xs-12 text-center menu-1 menu-wrap">
                <ul>
                  <li className="active"><a href="/sample/01">Home</a></li>
                  <li><a href="#">Menu</a></li>
                  <li className={styles.hasDropdown}>
                    <a href="#">Gallery</a>
                    <ul className={styles.dropdown}>
                      <li><a href="#">Events</a></li>
                      <li><a href="#">Food</a></li>
                      <li><a href="#">Coffees</a></li>
                    </ul>
                  </li>
                  <li><a href="#">Reservation</a></li>
                  <li><a href="#">About</a></li>
                  <li><a href="#">Contact</a></li>
                </ul>
              </div>
            </div>
          </div>
          <button
            className={`js-fh5co-nav-toggle fh5co-nav-toggle fh5co-nav-white ${isOffcanvas ? 'active' : ''}`}
            onClick={() => setIsOffcanvas(!isOffcanvas)}
          >
            <i />
          </button>
        </nav>

        {/* 오프캔버스 메뉴 */}
        {isOffcanvas && (
          <div id="fh5co-offcanvas" ref={offcanvasRef}>
            <ul>
              <li className="active"><a href="/sample/01">Home</a></li>
              <li><a href="#">Menu</a></li>
              <li className={styles.offcanvasHasDropdown}>
                <a href="#">Gallery</a>
                <ul className={styles.dropdown}>
                  <li><a href="#">Events</a></li>
                  <li><a href="#">Food</a></li>
                  <li><a href="#">Coffees</a></li>
                </ul>
              </li>
              <li><a href="#">Reservation</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
        )}

        <header
          id="fh5co-header"
          className="fh5co-cover js-fullheight"
          role="banner"
          style={{ backgroundImage: `url(${backgroundCoffee.src})` }}
          data-stellar-background-ratio="0.5"
        >
          <div className="overlay" />
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <div className="display-t js-fullheight">
                  <div className="display-tc js-fullheight animate-box" data-animate-effect="fadeIn">
                    <h2>
                      ちょっとした休憩 <br /> ちょっとしたコーヒー
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div id="fh5co-about" className="fh5co-section">
          <div className="container">
            <div className="row">
              <div
                className="col-md-6 img-wrap animate-box"
                data-animate-effect="fadeInLeft"
              >
                <Image
                  src={cafe1}
                  alt="cafe1"
                />
              </div>
              <div className="col-md-5 col-md-push-1 animate-box">
                <div className="section-heading">
                  <h2>About The Comma,</h2>
                  <p>
                  ようこそ、『The Comma』へ。ここは日常の喧騒から離れ、ほっと一息つける場所です。当店自慢のメニューは、訪れる皆さんに癒しと喜びをお届けします。<br />
                  店内は木の温もりと柔らかな照明で包まれ、まるで家のようにくつろげる空間。<br />
                  窓辺で本を読んだり、友達と語り合ったり、ただ静かに自分と向き合ったり。<br />
                  ここで過ごす時間が、あなたにとって特別な『The Comma』になりますように。<br />
                  季節ごとに変わるインテリアや限定メニューもお楽しみに。<br />
                  『The Comma』で、日常に小さな幸せを見つけてください。<br />
                  皆さまのご来店を心よりお待ちしております。
                  </p>
                  <p>
                    <a href="#" className="btn btn-primary btn-outline">
                      予約する
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="fh5co-featured-menu" className="fh5co-section">
          <div className="container">
            <div className="row">
              <div className="col-md-12 fh5co-heading animate-box">
                <h2>Menu</h2>
                <div className="row">
                  <div className="col-md-6">
                    <p>
                    当店では厳選した材料で他の店では味わえないコーヒーと料理を提供しております。<br />
                    お客様には心から満足していただけるよう、日々努力しております。
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-xs-6 col-xxs-12 fh5co-item-wrap animate-box">
                <div className="fh5co-item">
                  <Image
                    src={cafelatte}
                    className="img-responsive"
                    alt="cafelatte"
                  />
                  <h3>カフェラテ</h3>
                  <span className="fh5co-price">
                    400円
                  </span>
                  <p>
                  濃厚で深みのあるエスプレッソに、滑らかでクリーミーなミルクが絶妙に溶け合った、心を落ち着かせる優しい味わいが特徴のドリンク
                  </p>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-xs-6 col-xxs-12 fh5co-item-wrap animate-box">
                <div className="fh5co-item margin_top">
                  <Image
                    src={americano}
                    className="img-responsive"
                    alt="americano"
                  />
                  <h3>アメリカーノ</h3>
                  <span className="fh5co-price">
                    300円
                  </span>
                  <p>
                  厳選されたコーヒー豆から抽出した深い香りと味わいをそのまま楽しめる、シンプルながらも爽快感のあるドリンク
                  </p>
                </div>
              </div>
              <div className="clearfix visible-sm-block visible-xs-block" />
              <div className="col-md-3 col-sm-6 col-xs-6 col-xxs-12 fh5co-item-wrap animate-box">
                <div className="fh5co-item">
                  <Image
                    src={machalatte}
                    className="img-responsive"
                    alt="machalatte"
                  />
                  <h3>抹茶ラテ</h3>
                  <span className="fh5co-price">
                    550円
                  </span>
                  <p>
                  香ばしく豊かな抹茶の風味に、濃厚で滑らかなミルクが調和した、癒しと安らぎを与えるクリーミーな一杯
                  </p>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-xs-6 col-xxs-12 fh5co-item-wrap animate-box">
                <div className="fh5co-item margin_top">
                  <Image
                    src={orangejuice}
                    className="img-responsive"
                    alt="orangejuice"
                  />
                  <h3>オレンジジュース</h3>
                  <span className="fh5co-price">
                    300円
                  </span>
                  <p>
                  新鮮でみずみずしいオレンジを丁寧に絞り、甘さと酸味が絶妙にマッチした、活力が湧き上がる爽やかなジュース
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div id="fh5co-slider" className="fh5co-section animate-box">
          <div className="container">
            <div className="row">
              <div className="col-md-6 animate-box">
                <div className="fh5co-heading">
                  <h2>
                    Our Space
                  </h2>
                  <p>
                      当店はお客様にくつろぎと癒しを提供するため、心地よい空間をご用意しております。<br />
                      木の温もりと柔らかな照明が、まるで家のようにくつろげる空間を演出。<br />
                      窓辺で本を読んだり、友達と語り合ったり、ただ静かに自分と向き合えます。
                    </p>
                </div>
              </div>
              <div className="col-md-6 col-md-push-1 animate-box">
                <aside id="fh5co-slider-wrwap">
                  <div className="flexslider">
                    <div
                      className="slides"
                      style={{ backgroundImage: `url(${slides[currentSlide].image.src})` }}
                    >
                      <div className="overlay-gradient" />
                      <div className="container-fluid">
                        <div className="row">
                          <div className="col-md-12 col-md-offset-0 col-md-pull-10 slider-text slider-text-bg">
                            <div className="slider-text-inner">
                              <div className="desc">
                                <h2>{slides[currentSlide].title}</h2>
                                <p>{slides[currentSlide].desc}</p>
                                <p>
                                  <a href="#" className="btn btn-primary btn-outline">
                                    Learn More
                                  </a>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </div>

        <div id="fh5co-blog" className="fh5co-section">
          <div className="container">
            <div className="row animate-box">
              <div className="col-md-8 col-md-offset-2 text-center fh5co-heading animate-box">
                <h2>Events</h2>
                <p>
                  当店では街の復興に協力する一環で定期的にイベントを行なっております。
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="fh5co-blog animate-box">
                  <a href="#" className="blog-bg" style={{ backgroundImage: `url(${roasting.src})` }} />
                  <div className="blog-text">
                    <span className="posted_on">Feb. 15th 2025</span>
                    <h3><a href="#">ロースティン体験</a></h3>
                    <p>
                      街の復興に協力する一環で、コーヒー豆のロースティン体験を行います。<br />
                      お子様から大人まで楽しめるイベントですので、ぜひご参加ください。
                    </p>
                    <ul className="stuff">
                      <li>
                        <a href="#" className={styles.read_more}>
                          <p>Read More</p>
                          <CircleChevronRight />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="fh5co-blog animate-box">
                  <a href="#" className="blog-bg" style={{ backgroundImage: `url(${newMenu.src})` }} />
                  <div className="blog-text">
                    <span className="posted_on">Feb. 15th 2025</span>
                    <h3><a href="#">試飲/試食会</a></h3>
                    <p>
                      新メニューの発売の前に、先着５０名様に無料て試飲会を開催いたします。<br />
                      お気軽にお立ち寄りください。
                    </p>
                    <ul className="stuff">
                      <li>
                        <a href="#" className={styles.read_more}>
                          <p>Read More</p>
                          <CircleChevronRight />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="fh5co-blog animate-box">
                  <a href="#" className="blog-bg" style={{ backgroundImage: `url(${sns.src})` }} />
                  <div className="blog-text">
                    <span className="posted_on">Feb. 15th 2025</span>
                    <h3><a href="#">SNS共有でアメリカーノが無料！</a></h3>
                    <p>
                      当店のアメリカーノをSNSでシェアしていただいた方に、次回のアメリカーノが無料になるクーポンをプレゼント！<br />
                      ぜひご参加ください。
                    </p>
                    <ul className="stuff">
                      <li>
                        <a href="#" className={styles.read_more}>
                          <p>Read More</p>
                          <CircleChevronRight />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          id="fh5co-started"
          className="fh5co-section animate-box"
          style={{ backgroundImage: `url(${hero1.src})` }}
          data-stellar-background-ratio="0.5"
        >
          <div className="overlay" />
          <div className="container">
            <div className="row animate-box">
              <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
                <h2>Book a Table</h2>
                <p>
                  当店では混み合い防止のため、事前に予約をお願いしております。<br />
                  お電話またはWEBからの予約を承っておりますので、お気軽にお問い合わせください。
                </p>
                <p>
                  <a href="#" className="btn btn-primary btn-outline">
                    予約する
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <footer id="fh5co-footer" role="contentinfo" className="fh5co-section">
          <div className="container">
            <div className="row row-pb-md">
              <div className="col-md-4 fh5co-widget">
                <h4>The Comma,</h4>
                <p>
                  こだわりのコーヒーと料理を提供する『The Comma』へようこそ。<br />
                  木の温もりと柔らかな照明が、まるで家のようにくつろげる空間を演出。<br />
                  皆さまのご来店を心よりお待ちしております。
                </p>
              </div>
              <div className="col-md-2 col-md-push-1 fh5co-widget">
                <h4>Links</h4>
                <ul className="fh5co-footer-links">
                  <li><a href="#">Home</a></li>
                  <li><a href="#">About</a></li>
                  <li><a href="#">Menu</a></li>
                  <li><a href="#">Gallery</a></li>
                </ul>
              </div>

              <div className="col-md-4 col-md-push-1 fh5co-widget">
                <h4>Contact Information</h4>
                <ul className="fh5co-footer-links">
                  <li>
                  〒100-0005 <br /> 東京都千代田区丸の内１丁目
                  </li>
                  <li><a href="tel://1234567920">0312345678</a></li>
                  <li><a href="mailto:info@xxx.com">info@xxx.com</a></li>
                </ul>
              </div>
            </div>
            <div className="row copyright">
              <div className="col-md-12 text-center">
                <p>
                  <small className="block">© 2025 The Comma,. All Rights Reserved.</small>
                </p>
                <div>
                  <ul className={styles.fh5co_social_icons}>
                    <li><a href="#"><Facebook /></a></li>
                    <li><a href="#"><Instagram /></a></li>
                    <li><a href="#"><Youtube /></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>

      <div className={`gototop js-top ${isTopActive ? 'active' : ''}`}>
        <a href="#" className={styles.js_gotop} onClick={goToTop}>
        <ArrowUpToLine />
        </a>
      </div>
    </div>
  );
}