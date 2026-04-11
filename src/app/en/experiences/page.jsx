// @/app/en/experiences/page.js

import Link from "next/link";

export default function Experiences() {
  return (
    <div className="experiences">
      <section className="experiences-hero">
        <h1>Experiences</h1>
        <p>
          Cultural experiences in Kyoto for small groups, shaped through tea,
          conversation, and reflection.
          {/* 茶、会話、そして内省を通して織りなされる、少人数のための京都の文化体験 */}
        </p>
      </section>

      <section className="experiences-list">
        <Link href="/en/experiences/TeaExperienceWithSoKo">
          <h2>Tea Experience with SoKo</h2>
          <p>
            A participatory tea experience in Kyoto, guided by tea master SoKo
            through dialogue, practice, and reflection.
            {/* 京都での参加型お茶体験。対話・実践・内省を通じて、ゲスト自身が学んでいく場。 */}
          </p>
          <p>90 minutes / up to 6 guests</p>
        </Link>
      </section>
    </div>
  );
}
