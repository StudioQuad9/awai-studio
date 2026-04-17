// @/app/en/experiences/page.js

import Link from "next/link";

export default function Experiences() {
  return (
    <div className="container">
      {/* HERO */}
      <section className="experiences-hero">
        <h1>Experiences</h1>
        <p>
          Cultural experiences in Kyoto for small groups, shaped through
          practice, dialogue, and reflection.
        </p>
      </section>

      {/* LIST */}
      <section className="experiences-list">
        {/* Tea Experience */}
        <Link href="/en/experiences/TeaExperienceWithSoKo">
          <h2>Tea Experience with SoKo</h2>
          <p>
            A participatory tea experience in Kyoto, guided by tea master SoKo
            through dialogue, practice, and reflection.
          </p>
          <p>90 minutes / up to 6 guests</p>
        </Link>

        <Link href="/en/experiences/ZenExperienceWithJirai">
          <h2>Zen Experience with Jirai</h2>
          <p>
            A Zen-centered experience in Kyoto, where you explore
            your experience of Japan through dialogue with a Zen monk.
          </p>
          <p>90 minutes / up to 6 guests</p>
        </Link>
      </section>
    </div>
  );
}