// @/components/layout/HomeClient/index.jsx

"use client";

import styles from "./HomeClient.module.scss";
import useScrollAnimation from "@/hooks/useScrollAnimation";
import useParallaxGaps from "@/hooks/useParallaxGaps";

export default function HomeClient() {
  useScrollAnimation({
    parentSelector: ".panel",
    childSelector: ".reveal",
    threshold: 0.15,
    rootMargin: "0px 0px -8px 0px",
    once: true,
  });

  useParallaxGaps(".gap-image");

  return (
    <main>
      {/* HERO */}
      <div className="hero">
        {/* VIDEO */}
        <div className="hero__video">
          <video autoPlay muted loop playsInline>
            <source src="/videos/hero.mp4" type="video/mp4" />
          </video>
        </div>

        <div className={`hero__inner ${styles.heroInner}`}>
          <h1 className="reveal is-visible">
            京の文化と時間を、
            <br />
            映像とWEBで静かに記録する。
          </h1>

          <div
            className="ctaRow reveal is-visible"
            data-effect="zoom"
            data-delay="1"
          >
            <a href="#about" className="btn btn--primary">
              活動について
            </a>
            <a href="mailto:takahiro@hokuto-p.co.jp" className="btn btn--ghost">
              お問い合わせ
            </a>
          </div>
        </div>
      </div>

      <div id="top-panel" className="panel">
        <div className="container">
          {/* ABOUT */}
          <section id="about" className={styles.section}>
            <h2 className="reveal" data-dir="bottom">
              About
            </h2>

            <p className="reveal" data-dir="bottom" data-delay="1">
              京都を拠点に、寺社仏閣や庭園など文化空間の記録制作を行っています。
              写真・動画・WEB制作を通して、場所や人が持つ空気感と、
              その背景にある時間や思想を丁寧に伝えることを大切にしています。
            </p>
          </section>
        </div>
      </div>

      <div className="gap-image" data-speed="0.25">
        <div
          className="gap-image__layer"
          style={{ "--panel-bg": "url(/images/sample1.jpg)" }}
        />
      </div>

      <div className="panel">
        <div className="container">
          {/* WORK */}
          <section className={`${styles.section} reveal-group`}>
            <h2 className="reveal" data-dir="bottom">
              Work
            </h2>

            <h3 className="reveal" data-dir="left">
              WEB制作
            </h3>

            <p className="reveal" data-dir="bottom">
              寺社・文化施設のWEB制作を中心に構築。
              情報整理から設計、撮影、公開まで一貫して対応しています。
            </p>

            <ul className="reveal" data-dir="left">
              <li>白峯神宮様（京都市）</li>
              <li>大報恩寺様（京都市）</li>
              <li>法華寺様（向日市）</li>
            </ul>

            <h3 className="reveal" data-dir="left">
              Photo / Video
            </h3>

            <p className="reveal" data-dir="bottom">
              京都の寺院や庭園を中心に文化の風景を撮影。
            </p>

            <ul className="reveal" data-dir="bottom" data-delay="1">
              <li>庭園風景</li>
              <li>禅の時間</li>
              <li>茶の準備</li>
              <li>香の制作風景</li>
            </ul>

            <div className="ctaRow reveal" data-effect="zoom" data-delay="2">
              <a
                className={`btn btn--ghost ${styles.toInstagram}`}
                href="https://www.instagram.com/takahiro_nobuyuki/"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>
            </div>

            <h3 className="reveal" data-dir="left">
              授与品
            </h3>

            <p className="reveal" data-dir="bottom">
              授与品の企画から生産まで対応。
            </p>
          </section>
        </div>
      </div>

      <div className="gap-image" data-speed="0.25">
        <div
          className="gap-image__layer"
          style={{ "--panel-bg": "url(/images/sample2.jpg)" }}
        />
      </div>

      <div className="panel">
        <div className="container">
          {/* PHILOSOPHY */}
          <section id="philosophy" className={styles.section}>
            <h2 className="reveal" data-dir="bottom">
              Philosophy
            </h2>

            <p className="reveal" data-dir="bottom" data-delay="1">
              文化は情報ではなく、体験として伝わるものだと考えています。
              静かな時間の中で生まれる所作や空気を記録し、
              次の世代へ残していきたいと思っています。
            </p>
          </section>
        </div>
      </div>

      <div className="gap-image" data-speed="0.25">
        <div
          className="gap-image__layer"
          style={{ "--panel-bg": "url(/images/sample3.jpg)" }}
        />
      </div>

      <div className="panel">
        <div className="container">
          {/* CONTACT */}
          <section id="contact" className={styles.section}>
            <h2 className="reveal" data-dir="bottom">
              Contact
            </h2>

            <p className="reveal" data-dir="bottom" data-delay="1">
              京都を中心に活動しています。
              撮影・WEB制作・文化空間の記録に関するご相談は
              お気軽にご連絡ください。
            </p>

            <p className="reveal" data-dir="bottom" data-delay="2">
              <a href="mailto:takahiro@hokuto-p.co.jp">
                takahiro@hokuto-p.co.jp
              </a>
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
