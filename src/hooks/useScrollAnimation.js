// @/hooks/useScrollAnimation.js

"use client";

import { useEffect } from "react";

// hook作成
const useScrollAnimation = ({
  parentSelector = ".panel",
  childSelector = ".reveal",
  threshold = 0.1,
  rootMargin = "0px 0px -10px 0px",
  once = true,
} = {}) => {
  useEffect(() => {
    // アニメーションの対象の収集
    //   .appearクラスを収集する。
    const parents = document.querySelectorAll(parentSelector);
    //   要素がなければ処理の終了。
    if (!parents.length) return;
    //   アニメーションの対象となる全ての.upクラスを収集する。
    const targets = Array.from(parents).flatMap((parent) => {
      return Array.from(parent.querySelectorAll(childSelector));
    });
    //   対象がなければ処理を終了する。
    if (!targets.length) return;

    const prefersReduceMotion =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduceMotion) {
      targets.forEach((target) => target.classList.add("is-visible"));
      return;
    }

    // IntersectionObserverクラスの定義
    // 各.upクラスをどのように監視するか定義している
    //   第1引数では、監視区域に入った時のスタイル値とオプション
    //   第2引数では、画面のどのラインからとそのラインからどれくらい手前で発火するのかを指定
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            if (once) observer.unobserve(entry.target);
          } else if (!once) {
            entry.target.classList.remove("is-visible")
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
    );

    // すべての.up要素へ個別に効果を与える。
    // インスタンスobserverにメソッドを送信、引数には対象となる要素。
    targets.forEach((target) => {
      observer.observe(target);
    });

    // クリーンアップ
    return () => {
      targets.forEach((target) => {
        observer.unobserve(target);
      });
      observer.disconnect();
    };
  }, [parentSelector, childSelector, threshold, rootMargin, once]);
}

export default useScrollAnimation;


/**
//  * スクロールアニメーション用カスタムフック
//  * .appear 内の各 .up 要素を個別に監視し、画面に入るたびにアニメーション
//  *
//  * @param {string} parentSelector - 親要素のセレクタ (デフォルト: '.appear')
//  * @param {string} childSelector - 子要素のセレクタ (デフォルト: '.up')
//  * @param {number} threshold - 表示トリガーの閾値 (デフォルト: 0.1)
//  * @param {string} direction - アニメーション方向 ('bottom' | 'left' | 'right' | 'top')
//  */



    // // アニメーション方向によって初期transformを操作する関数を設定
    // const getInitialTransform = () => {
    //   switch (direction) {
    //     case "left":
    //       return "translateX(-30px)";
    //     case "right":
    //       return "translateX(30px)";
    //     case "top":
    //       return "translateY(-30px)";
    //     case "bottom":
    //     default:
    //       return "translateY(30px)";
    //   }
    // };

    // // 初期状態: すべての .up 要素のopacity, transform, transitionを設定する。
    // allTargets.forEach((target) => {
    //   target.style.opacity = "0";
    //   target.style.transform = getInitialTransform();
    //   target.style.transition =
    //     "opacity 0.8s ease-out, transform 0.8s ease-out";
    // });