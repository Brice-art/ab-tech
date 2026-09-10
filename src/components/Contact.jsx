import React, { useState } from "react";
import { Mail, Phone, MapPin, CheckCircle2, Send, AlertCircle } from "lucide-react";

const FORM_ENDPOINT = "https://formsubmit.co/ajax/arielbyishimo250@gmail.com";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", company: "", type: "", message: "" });
  const [sent, setSent] = useState(false);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    setStatus("sending");
    setError("");

    const payload = {
      name: form.name,
      email: form.email,
      company: form.company || "—",
      type: form.type || "General",
      message: form.message,
      _subject: "New project inquiry from abtechagency.com",
      _template: "table",
      _replyto: form.email,
      _honey: "",
      _auto_response: `Thanks ${form.name.split(" ")[0]}, we received your message and will get back to you shortly. — AB Tech Agency`,
      _auto_response_subject: "We received your message — AB Tech Agency",
    };

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (res.ok && data.success === "true") {
        setSent(true);
      } else {
        setStatus("error");
        setError("Message could not be sent. Please try again or email us directly at hello@abtechagency.com.");
      }
    } catch (err) {
      setStatus("error");
      setError("Network error. Please try again or email us directly at hello@abtechagency.com.");
    }
  };

  return (
    <section id="contact" className="bg-theme py-20 md:py-28 relative overflow-hidden">
      <div className="absolute top-[-15%] right-[-10%] w-[40%] h-[40%] orb orb-blue" />
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid lg:grid-cols-5 gap-14 relative">
        <div className="lg:col-span-2">
          <p className="font-mono text-xs index-mark mb-4 tracking-[0.15em]">CONTACT / 09</p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold mb-5">
            Let's build something <span className="text-gradient">useful.</span>
          </h2>
          <p className="leading-relaxed mb-10 text-secondary">
            Have a project, idea, or business challenge? Tell us what you're trying to
            build, and let's explore how technology can help.
          </p>

          <div className="flex flex-col gap-6">
            <div className="flex items-start gap-4 group">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 transition-transform group-hover:scale-110"
                style={{ background: "var(--surface-alt)", boxShadow: "0 0 16px var(--blue-glow)" }}
              >
                <Mail size={16} className="text-blue" />
              </div>
              <div>
                <p className="text-xs font-mono mb-1 text-tertiary">Email</p>
                <p className="text-sm font-mono hover:text-blue transition-colors cursor-pointer">arielbyishimo250@gmail.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4 group">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 transition-transform group-hover:scale-110"
                style={{ background: "var(--surface-alt)", boxShadow: "0 0 16px var(--cyan-glow)" }}
              >
                <Phone size={16} className="text-cyan" />
              </div>
              <div>
                <p className="text-xs font-mono mb-1 text-tertiary">Phone / WhatsApp</p>
                <p className="text-sm font-mono hover:text-cyan transition-colors cursor-pointer">+250 792 599 897</p>
              </div>
            </div>
            <div className="flex items-start gap-4 group">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 transition-transform group-hover:scale-110"
                style={{ background: "var(--surface-alt)", boxShadow: "0 0 16px var(--teal-glow)" }}
              >
                <MapPin size={16} className="text-teal" />
              </div>
              <div>
                <p className="text-xs font-mono mb-1 text-tertiary">Location</p>
                <p className="text-sm font-mono hover:text-teal transition-colors cursor-pointer">Kigali, Rwanda</p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-3">
          {sent ? (
            <div className="card gradient-border rounded-xl p-10 flex flex-col items-center text-center gap-4">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center"
                style={{ background: "var(--surface-alt)", boxShadow: "0 0 40px var(--teal-glow)" }}
              >
                <CheckCircle2 size={28} className="text-teal" />
              </div>
              <h3 className="font-display text-xl font-semibold">Message received</h3>
              <p className="text-sm text-secondary">
                Thanks, {form.name.split(" ")[0]}. We'll get back to you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={submit} className="card gradient-border rounded-xl p-8 grid sm:grid-cols-2 gap-5">
              <label className="flex flex-col gap-2 text-sm">
                <span className="font-mono text-xs text-tertiary">Name</span>
                <input required value={form.name} onChange={update("name")} placeholder="Your name" className="field-input" />
              </label>
              <label className="flex flex-col gap-2 text-sm">
                <span className="font-mono text-xs text-tertiary">Email</span>
                <input required type="email" value={form.email} onChange={update("email")} placeholder="you@example.com" className="field-input" />
              </label>
              <label className="flex flex-col gap-2 text-sm">
                <span className="font-mono text-xs text-tertiary">Company / Organization</span>
                <input value={form.company} onChange={update("company")} placeholder="Optional" className="field-input" />
              </label>
              <label className="flex flex-col gap-2 text-sm">
                <span className="font-mono text-xs text-tertiary">Project Type</span>
                <select value={form.type} onChange={update("type")} className="field-input">
                  <option value="">Select an option</option>
                  <option>Software System</option>
                  <option>Website</option>
                  <option>Web Application</option>
                  <option>Mobile Application</option>
                  <option>Data Analytics</option>
                  <option>Other</option>
                </select>
              </label>
              <label className="flex flex-col gap-2 text-sm sm:col-span-2">
                <span className="font-mono text-xs text-tertiary">Tell us about your project</span>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={update("message")}
                  placeholder="Describe your project, goals, and timeline..."
                  className="field-input resize-none"
                />
              </label>

              {status === "error" && (
                <p className="sm:col-span-2 text-xs text-red-500 flex items-center gap-1.5" role="alert">
                  <AlertCircle size={14} />
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="btn-primary sm:col-span-2 rounded-xl py-3.5 text-sm mt-1 flex items-center justify-center gap-2 group disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "sending" ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;