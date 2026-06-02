import Image from "next/image";

export default function Home() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <header className="mb-16">
        <div className="flex items-center gap-4">
          <Image
            src="/chaossi.jpg"
            alt="Chaossi icon"
            width={64}
            height={64}
            className="object-cover shadow-lg"
          />

          <div>
            <h1 className="text-4xl font-bold tracking-tight">Chaossi</h1>
            <p className="mt-1 text-lg text-gray-600">
              Web Developer building realtime applications.
            </p>
          </div>
        </div>
      </header>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold">About</h2>
        <p className="mt-4 leading-7 text-gray-700">
          Next.js / TypeScript
          を中心に、Socket通信を利用したリアルタイムWebアプリケーションを開発しています。
          大学では物理学を専攻しており、個人開発ではオンラインボードゲームサービスを運用しています。
        </p>

        <ul className="mt-4 space-y-2">
          <li>
            X{" "}
            <a
              href="https://x.com/ykswclm"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              @ykswclm
            </a>
          </li>
          <li>
            GitHub{" "}
            <a
              href="https://github.com/yksw-clm"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              @yksw-clm
            </a>
          </li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold">Works</h2>

        <article className="mt-4 rounded-2xl border p-6">
          <h3 className="text-xl font-semibold">Tetra Board</h3>
          <p className="mt-3 leading-7 text-gray-700">
            ブラウザ上でボードゲームのオンライン対戦ができるWebサービスです。
            ルーム作成・入室・リアルタイムな盤面同期に対応しています。
          </p>

          <ul className="mt-4 flex flex-wrap gap-2">
            <li className="rounded-full border px-3 py-1 text-sm">React</li>
            <li className="rounded-full border px-3 py-1 text-sm">
              TypeScript
            </li>
            <li className="rounded-full border px-3 py-1 text-sm">Socket</li>
          </ul>

          <a
            href="https://tetraboard.net"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-block underline"
          >
            サイトを見る
          </a>
        </article>

        <article className="mt-4 rounded-2xl border p-6">
          <h3 className="text-xl font-semibold">ことばスプリント</h3>
          <p className="mt-3 leading-7 text-gray-700">
            「あたま」の文字と「うしろ」の文字が決められていて、長い文字数の言葉が
            思い浮かんだ人がその文字数分得点を獲得して、それで勝負する遊びです。
          </p>

          <ul className="mt-4 flex flex-wrap gap-2">
            <li className="rounded-full border px-3 py-1 text-sm">React</li>
            <li className="rounded-full border px-3 py-1 text-sm">
              Cloudflare Workers
            </li>
            <li className="rounded-full border px-3 py-1 text-sm">
              Durable Objects
            </li>
          </ul>

          <a
            href="https://kotobasprint.tkm-nyoro1218.workers.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-block underline"
          >
            サイトを見る
          </a>
        </article>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Contact</h2>
        <p className="mt-4 leading-7 text-gray-700">
          お仕事のご依頼・ご相談は以下のメールアドレスまでご連絡ください。
        </p>

        <p className="mt-3">
          <a href="mailto:ykswclm@chaossi.com" className="underline">
            ykswclm@chaossi.com
          </a>
        </p>

        <p className="mt-4 text-gray-700">
          以下をご記載いただけるとスムーズです。
        </p>
        <ul className="mt-3 list-disc space-y-2 pl-6 text-gray-700">
          <li>ご依頼内容</li>
          <li>プロジェクト概要</li>
          <li>スケジュール・予算</li>
          <li>参考URL・資料など</li>
        </ul>
      </section>
    </div>
  );
}
