"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";

export default function GetInTouchPage() {
  const router = useRouter();
  const [form, setForm] = useState({ name: "", email: "", desc: "" });
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (form.name.length < 2) {
      alert("Name can not be less than 2 characters");
      return;
    }
    if (!form.email) {
      alert("Please enter your email");
      return;
    }
    if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,6}$/.test(form.email)) {
      alert("Please enter a valid email address");
      return;
    }

    setSubmitting(true);
    try {
      await fetch(
        "https://fom6cfxydi.execute-api.ap-southeast-1.amazonaws.com/production/formmail",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        }
      );
      router.push("/thank-you");
    } catch {
      router.push("/not-found");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="animate-fade-in mx-auto max-w-[600px] mt-20">
      <p className="mb-8 text-2xl font-light text-white/75">Get in touch with us : )</p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <input
          type="text"
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full border-b border-white/50 bg-transparent px-2 py-3 text-base text-white/85 focus:border-white"
        />
        <input
          type="email"
          placeholder="Email Address"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="w-full border-b border-white/50 bg-transparent px-2 py-3 text-base text-white/85 focus:border-white"
        />
        <textarea
          placeholder="Message"
          rows={7}
          value={form.desc}
          onChange={(e) => setForm({ ...form, desc: e.target.value })}
          className="w-full border-b border-white/50 bg-transparent px-2 py-3 text-base text-white/85 focus:border-white"
        />
        <button
          type="submit"
          disabled={submitting}
          className="w-full bg-[#2472c0] p-3 text-sm tracking-widest text-white/85 hover:bg-[#2383cc] disabled:opacity-50"
        >
          {submitting ? "SENDING..." : "SEND"}
        </button>
      </form>
    </div>
  );
}
