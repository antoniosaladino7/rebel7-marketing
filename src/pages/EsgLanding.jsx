import React from "react";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { supabase } from "../lib/supabase-client";

// ------------------------------------------------------------
// ESG LANDING – ENTERPRISE (PUBLIC)
// ------------------------------------------------------------
export default function EsgLanding() {
    const { t, i18n } = useTranslation();
    const lang = i18n.language?.startsWith("it") ? "it" : "en";

    return (
        <>
            <Helmet>
                <html lang={lang} />
                <title>{t("esg.seo.title")}</title>
                <meta name="description" content={t("esg.seo.description")} />
                <meta property="og:title" content={t("esg.seo.og_title")} />
                <meta property="og:description" content={t("esg.seo.og_description")} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://rebel7.io/esg" />
            </Helmet>

            <div className="min-h-screen w-full bg-black text-white leading-relaxed">
                <TopBar lang={lang} onLang={(l) => i18n.changeLanguage(l)} t={t} />

                <Hero t={t} />
                <ValueProposition t={t} />
                <HowItWorks t={t} />
                <DashboardKPI t={t} />

                {/* STEP 2.1: area ottieni licenza */}
                <LicenseSection t={t} />

                <Packages t={t} />
                <ContactSection t={t} />
                <Footer t={t} />
            </div>
        </>
    );
}

function TopBar({ lang, onLang, t }) {
    return (
        <header className="w-full border-b border-gray-900 bg-black/70 backdrop-blur">
            <div className="max-w-6xl mx-auto px-6 md:px-16 py-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="font-extrabold tracking-tight text-xl">REBEL7</div>
                    <div className="text-xs px-3 py-1 rounded-full bg-gray-900 border border-gray-800 text-gray-200">
                        ESG Core Engine™
                    </div>
                </div>

                <div className="flex items-center gap-2">
                    <button
                        className={
                            "px-3 py-2 rounded-lg border text-sm " +
                            (lang === "it"
                                ? "border-cyan-400 text-cyan-300"
                                : "border-gray-800 text-gray-300 hover:border-gray-700")
                        }
                        onClick={() => onLang("it")}
                        type="button"
                    >
                        IT
                    </button>
                    <button
                        className={
                            "px-3 py-2 rounded-lg border text-sm " +
                            (lang === "en"
                                ? "border-cyan-400 text-cyan-300"
                                : "border-gray-800 text-gray-300 hover:border-gray-700")
                        }
                        onClick={() => onLang("en")}
                        type="button"
                    >
                        EN
                    </button>

                    <a
                        href="#licenza"
                        className="ml-2 px-5 py-2 rounded-xl bg-cyan-400 text-black font-semibold hover:bg-cyan-300 transition"
                    >
                        {t("esg.nav.cta", "Get a License")}
                    </a>
                </div>
            </div>
        </header>
    );
}

function Hero({ t }) {
    return (
        <section className="w-full py-20 md:py-24 px-6 md:px-16 bg-gradient-to-b from-black via-black to-gray-950 border-b border-gray-900">
            <div className="max-w-6xl mx-auto text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-800 bg-gray-900/40 text-sm text-gray-200 mb-8">
                    <span className="text-cyan-300">●</span>
                    {t("esg.hero.badge", "Patent Pending • CSRD 2026 Ready")}
                </div>

                <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
                    {t("esg.hero.title", "Rebel7 ESG Core Engine")}
                </h1>

                <p className="text-lg md:text-2xl text-gray-300 mb-10 max-w-4xl mx-auto">
                    {t(
                        "esg.hero.subtitle",
                        "Real-time ESG infrastructure, audit-ready, built for enterprises, banks and regulated organizations."
                    )}
                </p>

                <div className="flex flex-col md:flex-row gap-4 justify-center">
                    <a
                        href="#licenza"
                        className="px-8 py-4 bg-cyan-400 text-black text-lg font-semibold rounded-xl hover:bg-cyan-300 transition shadow-[0_0_25px_rgba(34,211,238,0.25)]"
                    >
                        {t("esg.hero.btn_call", "Get a License")}
                    </a>
                    <a
                        href="#pacchetti"
                        className="px-8 py-4 border border-gray-700 text-lg font-semibold rounded-xl hover:border-cyan-400 hover:text-cyan-300 transition"
                    >
                        {t("esg.hero.btn_packages", "See Packages")}
                    </a>
                </div>

                <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-300 max-w-5xl mx-auto">
                    <KpiPill text={t("esg.hero.p1", "CSRD 2026 Ready")} />
                    <KpiPill text={t("esg.hero.p2", "AI-Driven Certification")} />
                    <KpiPill text={t("esg.hero.p3", "Immutable Audit Trail")} />
                    <KpiPill text={t("esg.hero.p4", "Enterprise-Grade Security")} />
                </div>
            </div>
        </section>
    );
}

function KpiPill({ text }) {
    return <div className="px-4 py-3 rounded-xl bg-gray-900/40 border border-gray-800">{text}</div>;
}

function ValueProposition({ t }) {
    const items = [
        {
            title: t("esg.value.audit_title", "Audit-ready by design"),
            text: t(
                "esg.value.audit_text",
                "From data ingestion to evidence, everything is structured for auditors and compliance."
            ),
        },
        {
            title: t("esg.value.ai_title", "AI Compliance Advisor"),
            text: t(
                "esg.value.ai_text",
                "Explain ESRS, suggest actions, generate reports, and reduce operational friction."
            ),
        },
        {
            title: t("esg.value.cert_title", "Certification layer"),
            text: t(
                "esg.value.cert_text",
                "A scoring and certification system you can defend, not just a dashboard screenshot."
            ),
        },
    ];

    return (
        <section className="w-full py-18 md:py-20 px-6 md:px-16 bg-black">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {items.map((item, idx) => (
                    <div
                        key={idx}
                        className="p-7 rounded-2xl border border-gray-800 bg-gradient-to-b from-gray-900/60 to-black"
                    >
                        <h3 className="text-2xl font-bold mb-3 text-cyan-300">{item.title}</h3>
                        <p className="text-gray-300">{item.text}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

function HowItWorks({ t }) {
    const steps = [
        {
            title: t("esg.how.step1_title", "Baseline & Scope"),
            text: t("esg.how.step1_text", "We map entities, data sources and ESRS scope in a structured onboarding."),
        },
        {
            title: t("esg.how.step2_title", "Data → Evidence"),
            text: t("esg.how.step2_text", "KPIs, policies, logs and artifacts are captured with traceability."),
        },
        {
            title: t("esg.how.step3_title", "Score & Reports"),
            text: t("esg.how.step3_text", "Real-time scoring, reporting packs and certification outputs for stakeholders."),
        },
    ];

    return (
        <section className="w-full py-20 md:py-24 px-6 md:px-16 bg-gray-950 border-y border-gray-900">
            <div className="max-w-5xl mx-auto text-center mb-14">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("esg.how.title", "How it works")}</h2>
                <p className="text-gray-300">
                    {t("esg.how.subtitle", "A pragmatic path from compliance chaos to an enterprise ESG operating system.")}
                </p>
            </div>

            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {steps.map((step, idx) => (
                    <div key={idx} className="p-8 rounded-2xl bg-black border border-gray-800">
                        <div className="text-sm text-cyan-400 font-semibold mb-2">STEP {idx + 1}</div>
                        <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                        <p className="text-gray-300">{step.text}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

function DashboardKPI({ t }) {
    const sections = [
        {
            title: t("esg.dashboard.env_title", "Environmental"),
            text: t("esg.dashboard.env_text", "Energy, emissions, waste, water, targets and evidence trails."),
        },
        {
            title: t("esg.dashboard.social_title", "Social"),
            text: t("esg.dashboard.social_text", "Workforce, training, safety, inclusion metrics, incidents and remediation."),
        },
        {
            title: t("esg.dashboard.gov_title", "Governance"),
            text: t("esg.dashboard.gov_text", "Policies, controls, compliance logs, risk flags, audit readiness status."),
        },
    ];

    return (
        <section className="w-full py-20 md:py-24 px-6 md:px-16 bg-black">
            <div className="max-w-5xl mx-auto text-center mb-14">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("esg.dashboard.title", "Dashboard & KPIs")}</h2>
                <p className="text-gray-300">
                    {t("esg.dashboard.subtitle", "Three pillars, one engine: scoring, traceability and enterprise-grade governance.")}
                </p>
            </div>

            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {sections.map((s, idx) => (
                    <div key={idx} className="p-7 rounded-2xl border border-gray-800 bg-gradient-to-b from-gray-900/70 to-black">
                        <h4 className="font-bold text-lg mb-2 text-cyan-300">{s.title}</h4>
                        <p className="text-gray-300">{s.text}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

/* ------------------------------------------------------------
   STEP 2.1 – OTTIENI LICENZA
------------------------------------------------------------ */
function LicenseSection({ t }) {
    const cards = [
        {
            title: t("esg.license.enterprise_title", "Enterprise License"),
            subtitle: t("esg.license.enterprise_sub", "For structured companies and groups"),
            bullets: [
                t("esg.license.b1", "Multi-entity governance & audit trail"),
                t("esg.license.b2", "ESRS/CSRD reporting packs"),
                t("esg.license.b3", "Role-based access, evidence & logs"),
            ],
            cta: t("esg.license.cta_enterprise", "Request enterprise access"),
            highlight: false,
        },
        {
            title: t("esg.license.bank_title", "Bank & Finance"),
            subtitle: t("esg.license.bank_sub", "Banks, insurance, holdings, regulated chains"),
            bullets: [
                t("esg.license.b4", "Controls, risk flags, audit readiness status"),
                t("esg.license.b5", "Supplier/supply-chain ESG mapping"),
                t("esg.license.b6", "Compliance-grade security posture"),
            ],
            cta: t("esg.license.cta_bank", "Book reserved demo"),
            highlight: true,
        },
        {
            title: t("esg.license.partner_title", "Partner Program"),
            subtitle: t("esg.license.partner_sub", "Consulting firms, auditors, certification bodies"),
            bullets: [
                t("esg.license.b7", "White-label & partner dashboard"),
                t("esg.license.b8", "Multi-tenant onboarding workflows"),
                t("esg.license.b9", "Revenue model on licenses"),
            ],
            cta: t("esg.license.cta_partner", "Become a partner"),
            highlight: false,
        },
    ];

    return (
        <section
            id="licenza"
            className="w-full py-20 md:py-24 px-6 md:px-16 bg-gradient-to-b from-black to-gray-950 border-y border-gray-900"
        >
            <div className="max-w-6xl mx-auto text-center mb-14">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("esg.license.title", "Get a license")}</h2>
                <p className="text-gray-300 max-w-4xl mx-auto">
                    {t(
                        "esg.license.subtitle",
                        "No public price list. Licenses are issued based on scope, regulatory exposure and supply-chain complexity."
                    )}
                </p>
            </div>

            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {cards.map((c, idx) => (
                    <div
                        key={idx}
                        className={
                            "p-8 rounded-2xl bg-black border transition " +
                            (c.highlight
                                ? "border-cyan-400 shadow-[0_0_30px_rgba(34,211,238,0.25)]"
                                : "border-gray-800 hover:border-cyan-400")
                        }
                    >
                        <h3 className={"text-2xl font-bold mb-1 " + (c.highlight ? "text-cyan-300" : "")}>{c.title}</h3>
                        <p className="text-sm text-gray-400 mb-6">{c.subtitle}</p>

                        <ul className="text-gray-300 space-y-2 mb-8 text-sm">
                            {c.bullets.map((b, i) => (
                                <li key={i}>• {b}</li>
                            ))}
                        </ul>

                        <a
                            href="#contatti"
                            className={
                                "block px-6 py-3 rounded-lg text-center font-semibold transition " +
                                (c.highlight
                                    ? "bg-cyan-400 text-black hover:bg-cyan-300"
                                    : "border border-gray-700 text-white hover:border-cyan-400 hover:text-cyan-300")
                            }
                        >
                            {c.cta}
                        </a>
                    </div>
                ))}
            </div>

            <div className="max-w-6xl mx-auto mt-10 text-center text-sm text-gray-400">
                {t(
                    "esg.license.note",
                    "Response time: 24h. We route you to the correct path (Enterprise / Bank / Partner) after an initial qualification."
                )}
            </div>
        </section>
    );
}

function Packages({ t }) {
    const packages = [
        {
            name: "Bronze",
            subtitle: t("esg.packages.bronze_sub", "Baseline + KPI essentials"),
            items: ["Audit iniziale", "KPI base", "Report preliminare", "Certificato Bronze"],
        },
        {
            name: "Silver",
            subtitle: t("esg.packages.silver_sub", "Policies + dashboard setup"),
            items: ["Policy & KPI", "Dashboard dedicata", "Formazione introduttiva", "Certificato Silver"],
            highlight: true,
        },
        {
            name: "Gold",
            subtitle: t("esg.packages.gold_sub", "AI + advanced controls"),
            items: ["Monitoraggio periodico", "AI ESG Advisor", "Dashboard avanzata", "Certificato Gold"],
        },
        {
            name: "Platinum",
            subtitle: t("esg.packages.platinum_sub", "Enterprise governance"),
            items: ["Governance ESG totale", "Integrazione supply-chain", "Team dedicato", "Certificazioni multiple"],
        },
    ];

    return (
        <section id="pacchetti" className="w-full py-20 md:py-24 px-6 md:px-16 bg-gray-950 border-y border-gray-900">
            <div className="max-w-5xl mx-auto text-center mb-14">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("esg.packages.title", "Packages (no public pricing)")}</h2>
                <p className="text-gray-300">
                    {t(
                        "esg.packages.subtitle",
                        "No public price list. Enterprise licenses are tailored to your size, scope and regulatory exposure."
                    )}
                </p>
            </div>

            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                {packages.map((p, idx) => (
                    <div
                        key={idx}
                        className={
                            "p-8 rounded-2xl bg-black border shadow-xl transition " +
                            (p.highlight
                                ? "border-cyan-400 shadow-[0_0_30px_rgba(34,211,238,0.25)]"
                                : "border-gray-800 hover:border-cyan-400")
                        }
                    >
                        <h3 className="text-2xl font-bold mb-1">{p.name}</h3>
                        <p className="text-sm text-gray-400 mb-6">{p.subtitle}</p>

                        <ul className="text-gray-300 space-y-2 mb-6 text-sm">
                            {p.items.map((item, i) => (
                                <li key={i}>• {item}</li>
                            ))}
                        </ul>

                        <a
                            href="#contatti"
                            className="block px-6 py-3 bg-cyan-400 text-black rounded-lg text-center font-semibold hover:bg-cyan-300 transition"
                        >
                            {t("esg.packages.btn_info", "Request details")}
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
}

function ContactSection({ t }) {
    const [form, setForm] = React.useState({
        company_name: "",
        email: "",
        phone: "",
        package_interest: "",
    });
    const [status, setStatus] = React.useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("loading");

        const { error } = await supabase.from("esg_leads").insert([
            {
                company_name: form.company_name,
                contact_email: form.email,
                contact_phone: form.phone,
                package_interest: form.package_interest,
            },
        ]);

        if (error) {
            console.error("SUPABASE ERROR:", error);
            setStatus("error");
        } else {
            setStatus("success");
            setForm({ company_name: "", email: "", phone: "", package_interest: "" });
        }
    };

    return (
        <section id="contatti" className="w-full py-20 md:py-24 px-6 md:px-16 bg-black border-t border-gray-900">
            <div className="max-w-3xl mx-auto text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("esg.contact.title", "Book a strategic demo")}</h2>
                <p className="text-gray-300">{t("esg.contact.subtitle", "Tell us who you are. We’ll reply with the right enterprise path.")}</p>
            </div>

            <form onSubmit={handleSubmit} className="max-w-3xl mx-auto grid grid-cols-1 gap-4">
                <input
                    type="text"
                    name="company_name"
                    placeholder={t("esg.contact.company", "Company name")}
                    value={form.company_name}
                    onChange={handleChange}
                    className="border border-gray-800 bg-gray-950 text-white p-3 rounded"
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder={t("esg.contact.email", "Business email")}
                    value={form.email}
                    onChange={handleChange}
                    className="border border-gray-800 bg-gray-950 text-white p-3 rounded"
                    required
                />
                <input
                    type="text"
                    name="phone"
                    placeholder={t("esg.contact.phone", "Phone")}
                    value={form.phone}
                    onChange={handleChange}
                    className="border border-gray-800 bg-gray-950 text-white p-3 rounded"
                />
                <select
                    name="package_interest"
                    value={form.package_interest}
                    onChange={handleChange}
                    className="border border-gray-800 bg-gray-950 text-white p-3 rounded"
                >
                    <option value="">{t("esg.contact.package", "Package interest")}</option>
                    <option value="Bronze">Bronze</option>
                    <option value="Silver">Silver</option>
                    <option value="Gold">Gold</option>
                    <option value="Platinum">Platinum</option>
                </select>

                <button
                    type="submit"
                    className="mt-4 px-8 py-4 bg-cyan-400 text-black font-semibold rounded-lg hover:bg-cyan-300 transition"
                >
                    {t("esg.contact.submit", "Send request")}
                </button>

                {status === "loading" && <p className="text-cyan-300 mt-2">{t("esg.contact.loading", "Sending…")}</p>}
                {status === "success" && <p className="text-green-400 mt-2">{t("esg.contact.success", "Request received. We will contact you shortly.")}</p>}
                {status === "error" && <p className="text-red-400 mt-2">{t("esg.contact.error", "Error. Check configuration or try again.")}</p>}
            </form>
        </section>
    );
}

function Footer({ t }) {
    return (
        <footer className="w-full py-10 px-6 md:px-16 border-t border-gray-900 bg-black">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
                <div>© {new Date().getFullYear()} Rebel7</div>
                <div>{t("esg.footer.note", "Enterprise-grade ESG infrastructure. No hype, only traceability.")}</div>
            </div>
        </footer>
    );
}
