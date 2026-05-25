export default function Home() {
  const faqs = [
    {
      q: "How does thumbnail rotation work?",
      a: "Connect your YouTube channel via OAuth. Upload multiple thumbnail variants and set a rotation interval. We automatically swap thumbnails using the YouTube Data API and record performance metrics for each variant."
    },
    {
      q: "What metrics are tracked?",
      a: "We track click-through rate (CTR), views, average view duration, and impressions per thumbnail variant. Our dashboard shows statistical significance so you know when a winner is clear."
    },
    {
      q: "Is my YouTube channel safe?",
      a: "Yes. We use official YouTube Data API v3 with read/write scopes limited to thumbnail updates only. You can revoke access at any time from your Google account settings."
    }
  ];

  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-20">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          YouTube A/B Testing
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Stop Guessing.<br />Test Your Thumbnails.
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Automatically rotate thumbnail variants on your YouTube videos, track CTR and engagement, and let data pick the winner — all on autopilot.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Start A/B Testing — $7/mo
        </a>
        <p className="text-[#8b949e] text-sm mt-3">Cancel anytime. No contracts.</p>
      </section>

      {/* Features strip */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-20">
        {[
          { icon: "🔄", title: "Auto Rotation", desc: "Swap thumbnails on your schedule automatically" },
          { icon: "📊", title: "Live Metrics", desc: "CTR, views, and impressions per variant" },
          { icon: "🏆", title: "Clear Winners", desc: "Statistical significance tells you when to stop" }
        ].map((f) => (
          <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5 text-center">
            <div className="text-3xl mb-2">{f.icon}</div>
            <div className="font-semibold text-white mb-1">{f.title}</div>
            <div className="text-sm text-[#8b949e]">{f.desc}</div>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8 max-w-sm mx-auto text-center">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Creator Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$7</div>
          <div className="text-[#8b949e] text-sm mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited thumbnail variants",
              "Up to 10 active videos",
              "Automated rotation schedules",
              "CTR & engagement dashboard",
              "Statistical significance alerts",
              "YouTube Data API integration"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span> {item}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="font-semibold text-white mb-2">{faq.q}</div>
              <div className="text-sm text-[#8b949e] leading-relaxed">{faq.a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-xs mt-20">
        © {new Date().getFullYear()} ThumbnailTest. All rights reserved.
      </footer>
    </main>
  );
}
