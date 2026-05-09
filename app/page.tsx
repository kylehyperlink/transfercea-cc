'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import { ArrowRight, UserPlus, ShieldCheck, CalendarCheck, Building2, Users } from 'lucide-react'

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
            <div className="w-8 h-8 bg-blue-700 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xs">CEA</span>
            </div>
            <span className="font-extrabold text-lg tracking-tight">Transfer<span className="text-blue-700">CEA</span></span>
          </div>

          <div className="hidden md:flex space-x-8 text-[11px] font-black uppercase tracking-[0.2em] text-slate-400">
            <a href="#services" className="hover:text-blue-600 transition-colors">Services</a>
            <a href="#how-it-works" className="hover:text-blue-600 transition-colors">How It Works</a>
            <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
          </div>

          <a
            href="mailto:contact@transfercea.cc"
            className="bg-blue-700 text-white px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-slate-900 transition-all shadow-lg shadow-blue-100 inline-block"
          >
            Get in Touch
          </a>
        </div>
      </nav>

      {/* Hero */}
      <header className="relative pt-48 pb-24 lg:pt-64 lg:pb-40 overflow-hidden">
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-blue-50 rounded-full blur-[140px] opacity-70 translate-x-1/3 -translate-y-1/4" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-slate-100 rounded-full blur-[100px] opacity-50 -translate-x-1/4 translate-y-1/4" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center lg:text-left">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7 reveal">
              <div className="inline-flex items-center space-x-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest mb-8">
                <span className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                <span>Compliance Enrollment Services</span>
              </div>
              <h1 className="text-5xl lg:text-8xl font-extrabold leading-[1.05] mb-8 tracking-tighter">
                Compliance, <br />
                <span className="italic text-blue-700">handled for you.</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-500 mb-12 max-w-xl leading-relaxed font-medium mx-auto lg:mx-0">
                We create and maintain compliance accounts on behalf of your
                licensed staff. Your team gets a dedicated compliance identity.
                We handle everything behind it.
              </p>

              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 justify-center lg:justify-start">
                <a
                  href="#contact"
                  className="bg-slate-900 text-white px-10 py-5 rounded-2xl font-bold hover:bg-blue-700 transition-all shadow-xl shadow-slate-200 text-center"
                >
                  Enroll Your Organization
                </a>
                <a
                  href="mailto:contact@transfercea.cc"
                  className="flex items-center justify-center space-x-2 text-slate-900 px-10 py-5 font-bold hover:text-blue-700 transition-colors"
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
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1200"
                  alt="Healthcare compliance administration"
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
              { value: 'White-Glove', label: 'Enrollment Service' },
              { value: 'Dedicated', label: 'Compliance Identity per Staff' },
              { value: 'Multi-State', label: 'Licensing Coverage' },
              { value: 'Ongoing', label: 'Renewal Management' },
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
                From enrollment to <br />renewal, we own it.
              </h2>
              <p className="text-slate-500 text-lg leading-relaxed max-w-lg">
                For healthcare organizations and professional associations,
                managing compliance across a licensed workforce is a
                significant operational burden. TransferCEA takes it off
                your plate entirely.
              </p>
            </div>
            <div className="reveal lg:text-right" style={{ transitionDelay: '100ms' }}>
              <div className="inline-block text-left bg-slate-50 p-8 rounded-3xl border border-slate-100">
                <p className="text-blue-700 font-black text-4xl mb-2">End-to-End</p>
                <p className="text-xs uppercase tracking-widest font-black text-slate-400">
                  Compliance Administration
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-50 p-12 rounded-[2.5rem] border border-slate-100 reveal group hover:bg-white hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-blue-50 text-blue-700 rounded-xl flex items-center justify-center mb-8 group-hover:bg-blue-700 group-hover:text-white transition-all duration-300">
                <UserPlus size={24} />
              </div>
              <h3 className="text-xl font-bold mb-4">Account Enrollment</h3>
              <p className="text-slate-500 leading-relaxed text-sm font-medium">
                We set up and configure compliance accounts for each
                member of your licensed workforce, accurately, completely,
                and without burdening your staff.
              </p>
            </div>

            <div
              className="bg-slate-900 p-12 rounded-[2.5rem] reveal"
              style={{ transitionDelay: '100ms' }}
            >
              <div className="w-12 h-12 bg-white/10 text-white rounded-xl flex items-center justify-center mb-8">
                <ShieldCheck size={24} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Compliance Identity</h3>
              <p className="text-slate-400 leading-relaxed text-sm font-medium">
                Each staff member receives a dedicated, managed email
                identity for CE correspondence, keeping compliance
                communications organized and separate from personal inboxes.
              </p>
            </div>

            <div
              className="bg-blue-700 p-12 rounded-[2.5rem] reveal hover:bg-blue-800 transition-colors duration-300"
              style={{ transitionDelay: '200ms' }}
            >
              <div className="w-12 h-12 bg-white/20 text-white rounded-xl flex items-center justify-center mb-8">
                <CalendarCheck size={24} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Renewal Management</h3>
              <p className="text-blue-100 leading-relaxed text-sm font-medium">
                We track renewal deadlines across your entire workforce and
                manage the ongoing compliance calendar so nothing lapses
                on your watch.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 reveal">
            <span className="text-blue-700 font-black uppercase tracking-[0.3em] text-[10px] block mb-4">
              Who We Serve
            </span>
            <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight">
              Built for organizations <br />managing licensed professionals.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-900 text-white p-12 rounded-[2.5rem] reveal">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-8">
                <Building2 size={24} className="text-white" />
              </div>
              <p className="text-blue-400 uppercase tracking-widest text-[10px] font-black mb-3">
                Healthcare Organizations
              </p>
              <h3 className="text-2xl font-extrabold mb-6 tracking-tight">
                compliance enrollment for your entire clinical workforce.
              </h3>
              <ul className="space-y-3 text-slate-400 text-sm font-medium mb-10">
                <li className="flex items-start space-x-3">
                  <span className="text-blue-400 mt-0.5 shrink-0">→</span>
                  <span>New hire CE accounts created and configured from day one</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-blue-400 mt-0.5 shrink-0">→</span>
                  <span>Dedicated compliance identities keep CE correspondence off personal inboxes</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-blue-400 mt-0.5 shrink-0">→</span>
                  <span>Renewal tracking across multi-state licensed staff with no manual overhead</span>
                </li>
              </ul>
              <a
                href="mailto:contact@transfercea.cc?subject=Healthcare+Organization+Inquiry"
                className="inline-block bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold text-sm hover:bg-blue-500 transition-colors"
              >
                Inquire for Your Organization →
              </a>
            </div>

            <div
              className="bg-blue-700 text-white p-12 rounded-[2.5rem] reveal"
              style={{ transitionDelay: '100ms' }}
            >
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-8">
                <Users size={24} className="text-white" />
              </div>
              <p className="text-blue-200 uppercase tracking-widest text-[10px] font-black mb-3">
                Professional Associations
              </p>
              <h3 className="text-2xl font-extrabold mb-6 tracking-tight">
                Enroll and support your members&apos; compliance at scale.
              </h3>
              <ul className="space-y-3 text-blue-100 text-sm font-medium mb-10">
                <li className="flex items-start space-x-3">
                  <span className="text-white mt-0.5 shrink-0">→</span>
                  <span>Bulk enrollment for new and existing members</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-white mt-0.5 shrink-0">→</span>
                  <span>Managed compliance identities your members can rely on</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-white mt-0.5 shrink-0">→</span>
                  <span>Ongoing administration so your team focuses on member value, not paperwork</span>
                </li>
              </ul>
              <a
                href="mailto:contact@transfercea.cc?subject=Association+Inquiry"
                className="inline-block bg-white text-blue-700 px-8 py-4 rounded-2xl font-bold text-sm hover:bg-blue-50 transition-colors"
              >
                Inquire for Your Association →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-20 items-center">
          <div className="lg:col-span-5 reveal">
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl rotate-2">
              <Image
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000"
                alt="Enrollment workflow"
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
            <span className="text-blue-700 font-black uppercase tracking-[0.3em] text-[10px] mb-6 block">
              How It Works
            </span>
            <h2 className="text-4xl lg:text-6xl font-extrabold leading-tight mb-8 tracking-tighter">
              Simple for your team. Comprehensive behind the scenes.
            </h2>
            <p className="text-lg text-slate-500 mb-12 leading-relaxed">
              Your organization sends us your licensed staff roster. We handle
              account creation, identity provisioning, and ongoing compliance
              management. Your staff never has to think about it.
            </p>

            <div className="grid sm:grid-cols-2 gap-10">
              <div>
                <h4 className="font-bold text-slate-900 mb-3 flex items-center space-x-2">
                  <span className="w-2 h-2 bg-blue-700 rounded-full" />
                  <span>Hands-Off Onboarding</span>
                </h4>
                <p className="text-sm text-slate-500 leading-relaxed font-medium">
                  Share your roster and we take it from there. Accounts
                  configured, identities provisioned, and confirmation
                  delivered back to your HR team.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-3 flex items-center space-x-2">
                  <span className="w-2 h-2 bg-blue-700 rounded-full" />
                  <span>Ongoing Administration</span>
                </h4>
                <p className="text-sm text-slate-500 leading-relaxed font-medium">
                  We monitor renewal windows, manage compliance correspondence,
                  and keep every account in good standing with no manual
                  follow-up required from your side.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-32 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px]" />
          <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-blue-800/10 rounded-full blur-[80px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <div className="reveal">
            <h2 className="text-4xl lg:text-7xl font-extrabold mb-12 tracking-tighter italic">
              Let&apos;s connect.
            </h2>
            <p className="text-slate-400 text-lg mb-16 max-w-2xl mx-auto font-medium leading-relaxed">
              Whether you&apos;re a healthcare organization ready to offload
              compliance administration or an association looking to support
              your members at scale, we&apos;re ready to help.
            </p>

            <a
              href="mailto:contact@transfercea.cc"
              className="group inline-flex flex-col items-center space-y-2"
            >
              <span className="text-slate-500 uppercase tracking-widest text-[10px] font-black group-hover:text-blue-500 transition-colors">
                Inquiries
              </span>
              <span className="text-2xl md:text-5xl font-bold tracking-tight group-hover:text-blue-400 transition-all duration-300">
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
              <div className="w-6 h-6 bg-blue-700 rounded flex items-center justify-center">
                <span className="text-white font-bold text-[9px]">CEA</span>
              </div>
              <span className="font-bold text-sm tracking-tight">TransferCEA</span>
            </div>

            <div className="flex space-x-10 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
              <a href="#services" className="hover:text-blue-600 transition-colors">Services</a>
              <a href="#how-it-works" className="hover:text-blue-600 transition-colors">How It Works</a>
              <a href="mailto:contact@transfercea.cc" className="hover:text-blue-600 transition-colors">Contact</a>
            </div>

            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-300">
              © {new Date().getFullYear()} TransferCEA. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}
