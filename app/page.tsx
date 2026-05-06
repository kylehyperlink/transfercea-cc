'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import { ArrowRight, BarChart2, ArrowLeftRight, ClipboardCheck, Building2, GraduationCap } from 'lucide-react'

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' },
    )

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      {/* Navigation */}
      <nav className="fixed w-full z-50 border-b border-slate-100 bg-white/85 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center space-x-2.5">
            <div className="w-8 h-8 bg-indigo-700 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xs">CEA</span>
            </div>
            <span className="font-extrabold text-lg tracking-tight">Continuing Education<span className="text-indigo-700"> Authority</span></span>
          </div>

          <div className="hidden md:flex space-x-8 text-[11px] font-black uppercase tracking-[0.2em] text-slate-400">
            <a href="#services" className="hover:text-indigo-600 transition-colors">Services</a>
            <a href="#approach" className="hover:text-indigo-600 transition-colors">Approach</a>
            <a href="#contact" className="hover:text-indigo-600 transition-colors">Contact</a>
          </div>

          <a
            href="mailto:contact@transfercea.cc"
            className="bg-indigo-700 text-white px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-slate-900 transition-all shadow-lg shadow-indigo-100 inline-block"
          >
            Get in Touch
          </a>
        </div>
      </nav>

      {/* Hero */}
      <header className="relative pt-48 pb-24 lg:pt-64 lg:pb-40 overflow-hidden">
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-indigo-50 rounded-full blur-[140px] opacity-70 translate-x-1/3 -translate-y-1/4" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-slate-100 rounded-full blur-[100px] opacity-50 -translate-x-1/4 translate-y-1/4" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center lg:text-left">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7 reveal">
              <div className="inline-flex items-center space-x-2 bg-indigo-50 text-indigo-700 px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest mb-8">
                <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full" />
                <span>CE Analytics &amp; Transfer Services</span>
              </div>
              <h1 className="text-5xl lg:text-8xl font-extrabold leading-[1.05] mb-8 tracking-tighter">
                Data that moves <br />
                <span className="italic text-indigo-700">CE forward.</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-500 mb-12 max-w-xl leading-relaxed font-medium mx-auto lg:mx-0">
                We connect continuing education providers and licensing bodies
                through precise analytics, seamless record transfer, and
                compliance reporting built for the modern CE ecosystem.
              </p>

              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 justify-center lg:justify-start">
                <a
                  href="#contact"
                  className="bg-slate-900 text-white px-10 py-5 rounded-2xl font-bold hover:bg-indigo-700 transition-all shadow-xl shadow-slate-200 text-center"
                >
                  Partner With Us
                </a>
                <a
                  href="mailto:contact@transfercea.cc"
                  className="flex items-center justify-center space-x-2 text-slate-900 px-10 py-5 font-bold hover:text-indigo-700 transition-colors"
                >
                  <span>Direct Inquiry</span>
                  <ArrowRight size={18} />
                </a>
              </div>
            </div>

            <div
              className="lg:col-span-5 relative reveal"
              style={{ transitionDelay: '200ms' }}
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-slate-50">
                <Image
                  src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=1200"
                  alt="Data analytics and education"
                  width={600}
                  height={550}
                  className="w-full h-[550px] object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Stats Strip */}
      <section className="border-y border-slate-100 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '50+', label: 'Licensing Bodies Served' },
              { value: 'Multi-State', label: 'Compliance Coverage' },
              { value: '99.9%', label: 'Transfer Accuracy' },
              { value: 'Real-Time', label: 'Reporting Engine' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-2xl font-extrabold text-slate-900 tracking-tight">{stat.value}</p>
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 mb-32 items-end">
            <div className="reveal">
              <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight mb-8">
                CE Infrastructure <br />Built to Last.
              </h2>
              <p className="text-slate-500 text-lg leading-relaxed max-w-lg">
                Continuing Education Authority bridges the gap between providers
                and licensing bodies — turning fragmented records into a single
                source of truth.
              </p>
            </div>
            <div className="reveal lg:text-right" style={{ transitionDelay: '100ms' }}>
              <div className="inline-block text-left bg-slate-50 p-8 rounded-3xl border border-slate-100">
                <p className="text-indigo-700 font-black text-4xl mb-2">99.9%</p>
                <p className="text-xs uppercase tracking-widest font-black text-slate-400">
                  Transfer Accuracy Rate
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-50 p-12 rounded-[2.5rem] border border-slate-100 reveal group hover:bg-white hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-indigo-50 text-indigo-700 rounded-xl flex items-center justify-center mb-8 group-hover:bg-indigo-700 group-hover:text-white transition-all duration-300">
                <BarChart2 size={24} />
              </div>
              <h3 className="text-xl font-bold mb-4">CE Analytics</h3>
              <p className="text-slate-500 leading-relaxed text-sm font-medium">
                Deep insight into completion rates, compliance gaps, and
                learner trends across your entire CE portfolio.
              </p>
            </div>

            <div
              className="bg-slate-900 p-12 rounded-[2.5rem] reveal"
              style={{ transitionDelay: '100ms' }}
            >
              <div className="w-12 h-12 bg-white/10 text-white rounded-xl flex items-center justify-center mb-8">
                <ArrowLeftRight size={24} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Data Transfer</h3>
              <p className="text-slate-400 leading-relaxed text-sm font-medium">
                Secure, validated transfer of CE records between providers,
                registries, and licensing bodies — in any required format.
              </p>
            </div>

            <div
              className="bg-indigo-700 p-12 rounded-[2.5rem] reveal hover:bg-indigo-800 transition-colors duration-300"
              style={{ transitionDelay: '200ms' }}
            >
              <div className="w-12 h-12 bg-white/20 text-white rounded-xl flex items-center justify-center mb-8">
                <ClipboardCheck size={24} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Compliance Reporting</h3>
              <p className="text-indigo-100 leading-relaxed text-sm font-medium">
                Automated, audit-ready reports submitted directly to regulatory
                bodies on your schedule.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 reveal">
            <span className="text-indigo-700 font-black uppercase tracking-[0.3em] text-[10px] block mb-4">
              Who We Serve
            </span>
            <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight">
              Built for every node <br />in the CE network.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-900 text-white p-12 rounded-[2.5rem] reveal">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-8">
                <Building2 size={24} className="text-white" />
              </div>
              <p className="text-indigo-400 uppercase tracking-widest text-[10px] font-black mb-3">
                For Licensing Bodies
              </p>
              <h3 className="text-2xl font-extrabold mb-6 tracking-tight">
                Receive clean, verified CE data without the manual overhead.
              </h3>
              <ul className="space-y-3 text-slate-400 text-sm font-medium mb-10">
                <li className="flex items-start space-x-3">
                  <span className="text-indigo-400 mt-0.5 shrink-0">→</span>
                  <span>Standardized records mapped to your exact requirements</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-indigo-400 mt-0.5 shrink-0">→</span>
                  <span>Automated inbound reporting from accredited providers</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-indigo-400 mt-0.5 shrink-0">→</span>
                  <span>Audit trail and compliance dashboards on demand</span>
                </li>
              </ul>
              <a
                href="mailto:contact@transfercea.cc?subject=Licensing+Body+Inquiry"
                className="inline-block bg-indigo-600 text-white px-8 py-4 rounded-2xl font-bold text-sm hover:bg-indigo-500 transition-colors"
              >
                Inquire as a Licensing Body →
              </a>
            </div>

            <div
              className="bg-indigo-700 text-white p-12 rounded-[2.5rem] reveal"
              style={{ transitionDelay: '100ms' }}
            >
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-8">
                <GraduationCap size={24} className="text-white" />
              </div>
              <p className="text-indigo-200 uppercase tracking-widest text-[10px] font-black mb-3">
                For CE Providers
              </p>
              <h3 className="text-2xl font-extrabold mb-6 tracking-tight">
                Report completions to every body you&apos;re accredited with.
              </h3>
              <ul className="space-y-3 text-indigo-100 text-sm font-medium mb-10">
                <li className="flex items-start space-x-3">
                  <span className="text-white mt-0.5 shrink-0">→</span>
                  <span>One integration, multi-body reporting coverage</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-white mt-0.5 shrink-0">→</span>
                  <span>Real-time confirmation and error resolution</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-white mt-0.5 shrink-0">→</span>
                  <span>Learner analytics to strengthen your course offerings</span>
                </li>
              </ul>
              <a
                href="mailto:contact@transfercea.cc?subject=CE+Provider+Inquiry"
                className="inline-block bg-white text-indigo-700 px-8 py-4 rounded-2xl font-bold text-sm hover:bg-indigo-50 transition-colors"
              >
                Inquire as a CE Provider →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section id="approach" className="py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-20 items-center">
          <div className="lg:col-span-5 reveal">
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl rotate-2">
              <Image
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000"
                alt="Data and analytics dashboard"
                width={500}
                height={600}
                className="w-full h-[600px] object-cover"
              />
            </div>
          </div>

          <div
            className="lg:col-span-7 reveal"
            style={{ transitionDelay: '150ms' }}
          >
            <span className="text-indigo-700 font-black uppercase tracking-[0.3em] text-[10px] mb-6 block">
              The CEA Approach
            </span>
            <h2 className="text-4xl lg:text-6xl font-extrabold leading-tight mb-8 tracking-tighter">
              Precision infrastructure for a fragmented ecosystem.
            </h2>
            <p className="text-lg text-slate-500 mb-12 leading-relaxed">
              The continuing education landscape spans dozens of accreditation
              bodies, formats, and reporting standards. CEA unifies it — giving
              every stakeholder a reliable, real-time picture of compliance
              without the manual burden.
            </p>

            <div className="grid sm:grid-cols-2 gap-10">
              <div>
                <h4 className="font-bold text-slate-900 mb-3 flex items-center space-x-2">
                  <span className="w-2 h-2 bg-indigo-700 rounded-full" />
                  <span>Format-Agnostic Ingestion</span>
                </h4>
                <p className="text-sm text-slate-500 leading-relaxed font-medium">
                  We normalize data from any LMS, spreadsheet, or API feed
                  into a validated, transfer-ready record set.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-3 flex items-center space-x-2">
                  <span className="w-2 h-2 bg-indigo-700 rounded-full" />
                  <span>Body-Specific Mapping</span>
                </h4>
                <p className="text-sm text-slate-500 leading-relaxed font-medium">
                  Each licensing body has unique schemas and deadlines. Our
                  library of mappings keeps submissions accurate and on time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-32 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[100px]" />
          <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-indigo-800/10 rounded-full blur-[80px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <div className="reveal">
            <h2 className="text-4xl lg:text-7xl font-extrabold mb-12 tracking-tighter italic">
              Let&apos;s connect.
            </h2>
            <p className="text-slate-400 text-lg mb-16 max-w-2xl mx-auto font-medium leading-relaxed">
              Whether you&apos;re a licensing body looking to modernize intake or a
              CE provider ready to automate reporting, we&apos;re ready to help you
              close the gap.
            </p>

            <a
              href="mailto:contact@transfercea.cc"
              className="group inline-flex flex-col items-center space-y-2"
            >
              <span className="text-slate-500 uppercase tracking-widest text-[10px] font-black group-hover:text-indigo-500 transition-colors">
                Inquiries
              </span>
              <span className="text-2xl md:text-5xl font-bold tracking-tight group-hover:text-indigo-400 transition-all duration-300">
                contact@transfercea.cc
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-indigo-700 rounded flex items-center justify-center">
                <span className="text-white font-bold text-[9px]">CEA</span>
              </div>
              <span className="font-bold text-sm tracking-tight">Continuing Education Authority</span>
            </div>

            <div className="flex space-x-10 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
              <a href="#services" className="hover:text-indigo-600 transition-colors">Services</a>
              <a href="#approach" className="hover:text-indigo-600 transition-colors">Approach</a>
              <a href="mailto:contact@transfercea.cc" className="hover:text-indigo-600 transition-colors">Contact</a>
            </div>

            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-300">
              © {new Date().getFullYear()} Continuing Education Authority. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}
