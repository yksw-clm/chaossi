import Image from "next/image";

const links = [
  {
    label: "GitHub",
    href: "https://github.com/yksw-clm",
  },
  {
    label: "X",
    href: "https://x.com/ykswclm",
  },
  {
    label: "Email",
    href: "mailto:tkm.nyoro1218@gmail.com",
  },
] as const;

const workTechStack = [
  "Next.js",
  "TypeScript",
  "Firebase Functions",
  "Firestore",
  "Firebase Storage",
  "Google Sheets",
  "Lステップ / LINE",
  "GitHub",
  "Slack",
  "AI Agent",
] as const;

const workResponsibilities = [
  "ユーザー画面・管理画面の機能改修",
  "Firebase Functions を用いたバックエンド処理の調査・修正",
  "Firestore を用いたデータ取得・更新処理の実装",
  "Firebase Storage 周辺の実装・修正",
  "管理者向けスプレッドシート連携機能の調査・修正",
  "Lステップを用いたLINE送信処理の調査・修正",
  "既存機能のバグ調査、原因切り分け、修正",
  "Pull Request の作成、レビュー対応、レビュー担当",
  "デプロイ、リリース、ログ監査、リリース後の機能修正",
] as const;

const developmentFlow = [
  "顧客・代表との打ち合わせ",
  "改善提案・一部技術提案",
  "設計、実装、テスト",
  "Pull Request ベースの開発",
  "コードレビューを受ける側・行う側の両方",
  "AIを用いたPR作成・レビュー補助・実装効率化",
  "リリース後のログ確認と不具合修正",
] as const;

const projects = [
  {
    title: "Tetra Board",
    description:
      "React / TypeScript / Bun / Socket.IO を用いて開発したリアルタイム対戦型のWebアプリケーションです。ルーム作成・入室・リアルタイムな盤面同期に対応しています。個人開発として、企画、設計、実装、デプロイ、運用まで担当しました。",
    techStack: ["React", "TypeScript", "Bun", "Socket.IO", "Firebase"],
    features: [
      "リアルタイム通信を用いた対戦機能",
      "ルーム作成・入室機能",
      "盤面状態の同期",
      "フロントエンド実装",
      "バックエンド実装",
      "デプロイ・運用",
    ],
    href: "https://tetraboard.net/",
    linkLabel: "サイトを見る",
    featured: true,
  },
  {
    title: "ことばスプリント",
    description:
      "Cloudflare Workers / Durable Objects を用いたリアルタイムゲームの個人開発です。",
    techStack: ["React", "Cloudflare Workers", "Durable Objects"],
    features: [],
    href: "https://kotobasprint.tkm-nyoro1218.workers.dev/",
    linkLabel: "サイトを見る",
    featured: false,
  },
] as const;

const skillGroups = [
  {
    title: "実務経験",
    skills: [
      "TypeScript",
      "Next.js",
      "React",
      "Firebase Functions",
      "Firestore",
      "Firebase Storage",
      "Git / GitHub",
      "Google Sheets integration",
      "LINE / Lステップ連携",
    ],
  },
  {
    title: "個人開発",
    skills: [
      "Bun",
      "Socket.IO",
      "Hono",
      "Vite",
      "Cloudflare Workers",
      "Durable Objects",
      "Vercel",
    ],
  },
  {
    title: "開発支援",
    skills: ["ChatGPT", "Claude Code", "Codex", "AI Agent"],
  },
] as const;

function ExternalLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  const isMail = href.startsWith("mailto:");

  return (
    <a
      href={href}
      target={isMail ? undefined : "_blank"}
      rel={isMail ? undefined : "noopener noreferrer"}
      className={className}
    >
      {children}
    </a>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="py-12 sm:py-16">
      <div className="mb-6 flex items-end justify-between gap-4 border-gray-200 border-b pb-3">
        <h2 className="font-semibold text-2xl text-gray-950 tracking-tight sm:text-3xl">
          {title}
        </h2>
      </div>
      {children}
    </section>
  );
}

function BadgeList({ items }: { items: readonly string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((item) => (
        <li
          key={item}
          className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1 font-medium text-gray-700 text-sm"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

function BulletList({ items }: { items: readonly string[] }) {
  return (
    <ul className="grid gap-2 text-gray-700 text-sm leading-6 sm:grid-cols-2">
      {items.map((item) => (
        <li key={item} className="flex gap-2">
          <span className="mt-2 size-1.5 shrink-0 rounded-full bg-gray-400" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function Hero() {
  return (
    <header className="py-16 sm:py-20">
      <div className="flex flex-col gap-8 sm:flex-row sm:items-center">
        <Image
          src="/chaossi.jpg"
          alt="Chaossi icon"
          width={88}
          height={88}
          priority
          className="size-20 rounded-lg object-cover shadow-sm ring-1 ring-gray-200 sm:size-24"
        />

        <div className="max-w-3xl">
          <p className="mb-2 font-semibold text-gray-500 text-sm uppercase tracking-[0.16em]">
            Web Engineer
          </p>
          <h1 className="font-bold text-4xl text-gray-950 tracking-tight sm:text-5xl">
            Chaossi
          </h1>
          <p className="mt-5 max-w-2xl text-base text-gray-700 leading-8 sm:text-lg">
            Next.js / TypeScript / Firebase
            を用いたWebアプリケーション開発を経験。実務では受注管理システムの開発・保守に約9ヶ月携わり、個人開発では
            React / Bun / Socket.IO
            を用いたリアルタイム対戦Webアプリを開発しています。
          </p>

          <nav aria-label="Primary links" className="mt-7 flex flex-wrap gap-3">
            {links.map((link) => (
              <ExternalLink
                key={link.href}
                href={link.href}
                className="rounded-md border border-gray-300 bg-white px-4 py-2 font-medium text-gray-800 text-sm transition hover:border-gray-500 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
              >
                {link.label}
              </ExternalLink>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}

function WorkExperience() {
  return (
    <Section title="Work Experience">
      <article className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm sm:p-7">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="font-medium text-gray-500 text-sm">約9ヶ月 / 実務</p>
            <h3 className="mt-1 font-semibold text-2xl text-gray-950 tracking-tight">
              Webエンジニアアルバイト / 受注管理システム開発
            </h3>
          </div>
          <span className="w-fit rounded-full bg-gray-950 px-3 py-1 font-medium text-sm text-white">
            保守開発
          </span>
        </div>

        <div className="mt-5 space-y-4 text-gray-700 leading-7">
          <p>
            フルリモートのWebエンジニアアルバイトとして約9ヶ月、受注管理システムの開発・保守に携わりました。
          </p>
          <p>
            ユーザー画面、管理画面、Firebase Functions、Firestore、Firebase
            Storage、スプレッドシート連携、LINE送信処理などを含むWebアプリケーションで、Next.js
            / TypeScript / Firebase を中心に開発しました。
          </p>
        </div>

        <div className="mt-6">
          <h4 className="mb-3 font-semibold text-gray-950">Tech Stack</h4>
          <BadgeList items={workTechStack} />
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <div>
            <h4 className="mb-3 font-semibold text-gray-950">担当範囲</h4>
            <BulletList items={workResponsibilities} />
          </div>
          <div className="rounded-lg bg-gray-50 p-5 ring-1 ring-gray-200">
            <h4 className="mb-3 font-semibold text-gray-950">
              開発フローで経験したこと
            </h4>
            <BulletList items={developmentFlow} />
          </div>
        </div>
      </article>
    </Section>
  );
}

function Projects() {
  return (
    <Section title="Projects">
      <div className="grid gap-5">
        {projects.map((project) => (
          <article
            key={project.title}
            className={`rounded-lg border border-gray-200 bg-white shadow-sm ${
              project.featured ? "p-5 sm:p-7" : "p-5"
            }`}
          >
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h3
                  className={`font-semibold text-gray-950 tracking-tight ${
                    project.featured ? "text-2xl" : "text-xl"
                  }`}
                >
                  {project.title}
                </h3>
                <p className="mt-3 max-w-3xl text-gray-700 leading-7">
                  {project.description}
                </p>
              </div>

              <ExternalLink
                href={project.href}
                className="w-fit rounded-md border border-gray-300 px-4 py-2 font-medium text-gray-800 text-sm transition hover:border-gray-500 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
              >
                {project.linkLabel}
              </ExternalLink>
            </div>

            <div className="mt-5">
              <BadgeList items={project.techStack} />
            </div>

            {project.features.length > 0 && (
              <div className="mt-6">
                <h4 className="mb-3 font-semibold text-gray-950">担当・特徴</h4>
                <BulletList items={project.features} />
              </div>
            )}
          </article>
        ))}
      </div>
    </Section>
  );
}

function Skills() {
  return (
    <Section title="Skills">
      <div className="grid gap-5 lg:grid-cols-3">
        {skillGroups.map((group) => (
          <article
            key={group.title}
            className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm"
          >
            <h3 className="mb-4 font-semibold text-gray-950">{group.title}</h3>
            <BadgeList items={group.skills} />
          </article>
        ))}
      </div>

      <p className="mt-5 rounded-lg bg-gray-50 p-5 text-gray-700 text-sm leading-7 ring-1 ring-gray-200">
        AIエージェントを、実装方針の整理、コード生成、レビュー観点の洗い出し、PR作成補助に活用しています。生成されたコードは、既存仕様・型・影響範囲を確認したうえで取り込んでいます。
      </p>
    </Section>
  );
}

function Contact() {
  return (
    <Section title="Contact">
      <div className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm sm:p-7">
        <p className="max-w-2xl text-gray-700 leading-7">
          Webエンジニアとしての就業・開発業務に関するご連絡は、以下のメールアドレスまでお願いします。
        </p>

        <ExternalLink
          href="mailto:tkm.nyoro1218@gmail.com"
          className="mt-4 inline-block font-semibold text-gray-950 underline decoration-gray-300 underline-offset-4 hover:decoration-gray-900"
        >
          tkm.nyoro1218@gmail.com
        </ExternalLink>

        <dl className="mt-6 grid gap-3 text-sm sm:grid-cols-3">
          <div>
            <dt className="font-medium text-gray-500">GitHub</dt>
            <dd className="mt-1">
              <ExternalLink
                href="https://github.com/yksw-clm"
                className="text-gray-800 underline decoration-gray-300 underline-offset-4 hover:decoration-gray-900"
              >
                github.com/yksw-clm
              </ExternalLink>
            </dd>
          </div>
          <div>
            <dt className="font-medium text-gray-500">X</dt>
            <dd className="mt-1">
              <ExternalLink
                href="https://x.com/ykswclm"
                className="text-gray-800 underline decoration-gray-300 underline-offset-4 hover:decoration-gray-900"
              >
                x.com/ykswclm
              </ExternalLink>
            </dd>
          </div>
          <div>
            <dt className="font-medium text-gray-500">Email</dt>
            <dd className="mt-1">
              <ExternalLink
                href="mailto:tkm.nyoro1218@gmail.com"
                className="text-gray-800 underline decoration-gray-300 underline-offset-4 hover:decoration-gray-900"
              >
                tkm.nyoro1218@gmail.com
              </ExternalLink>
            </dd>
          </div>
        </dl>
      </div>
    </Section>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <Hero />
        <WorkExperience />
        <Projects />
        <Skills />
        <Contact />
      </div>
    </main>
  );
}
