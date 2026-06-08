import Image from "next/image";

export default function Home() {
  const strengths = [
    "React / Next.js / TypeScript を使ったフロントエンド実装",
    "Socket 通信や Durable Objects を使ったリアルタイム同期",
    "サービスの実装、公開、運用",
    "サイト改善のための課題整理、実装方針の提案",
    "既存Webサイトの不具合調査",
  ];

  const skills = [
    "Next.js",
    "React",
    "TypeScript",
    "HTML / CSS",
    "Cloudflare Workers",
    "Durable Objects",
  ];

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
          Next.js / React / TypeScript
          を中心にWebアプリケーションを開発しています。特に、複数人が同時に操作するオンラインボードゲームや言葉遊びのサービスなど、
          リアルタイム性のある体験づくりに関心があります。 また、Claude Code や
          Codex などのAIエージェントも開発補助として活用しています。
          要件整理、実装方針の検討、コード生成、リファクタリング、レビュー、テスト観点の洗い出しなどに活用しつつ、最終的な設計判断・実装確認・品質担保は自身で行っています。
        </p>

        <p className="mt-4 leading-7 text-gray-700">
          ユーザーが迷わず使えるUI、保守しやすいコンポーネント設計、サービスとして動かし続けるための改善に注力しています。
          自分で企画したアプリを公開まで持っていった経験を活かして、仕様の整理から実装、検証まで粘り強く取り組みます。
        </p>

        <p className="mt-4 leading-7 text-gray-700">
          Web制作・修正では、単に指定された作業を行うだけでなく、目的や現状の課題を確認したうえで、必要な修正内容を整理し、実装可能な形に落とし込むことを大切にしています。
          「何を依頼すればよいかわからない」という段階でも、現状を確認しながら対応できます。
        </p>

        <div className="mt-6 grid gap-4">
          <div className="rounded-lg border p-5">
            <h3 className="font-semibold">できること</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 leading-7 text-gray-700">
              {strengths.map((strength) => (
                <li key={strength}>{strength}</li>
              ))}
            </ul>
          </div>
        </div>

        <ul className="mt-5 flex flex-wrap gap-2">
          {skills.map((skill) => (
            <li key={skill} className="rounded-full border px-3 py-1 text-sm">
              {skill}
            </li>
          ))}
        </ul>

        <ul className="mt-5 space-y-2">
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
          <li>
            Zenn{" "}
            <a
              href="https://zenn.dev/ykswclm"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              @ykswclm
            </a>
          </li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold">Works</h2>

        <article className="mt-4 rounded-lg border p-6">
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

        <article className="mt-4 rounded-lg border p-6">
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
        <h2 className="text-2xl font-semibold">Looking for</h2>
        <p className="mt-4 leading-7 text-gray-700">
          フロントエンド、バックエンド、Webフルスタック開発業務を探しています。
        </p>
      </section>
    </div>
  );
}
