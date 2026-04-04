"use client";

export default function Contact() {
  return (
    <div className="pt-32 pb-20 bg-white dark:bg-[#0A0D14] transition-colors duration-500">
      <section className="section-spacing bg-white dark:bg-[#0A0D14]">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* LEFT SIDE */}
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-brand-dark dark:text-white mb-8 font-outfit">
                Initiate Your <br />
                <span className="text-brand-primary">Corporate Growth.</span>
              </h1>

              <p className="text-lg text-text-muted dark:text-white/60 leading-relaxed mb-12 max-w-lg">
                We invite you to reach out for a confidential consultation.
              </p>
            </div>

            {/* RIGHT SIDE FORM */}
            <div className="bg-bg-subtle dark:bg-white/5 p-10 md:p-16 border border-slate-100 dark:border-white/10 rounded-2xl">
              <h2 className="text-2xl font-bold text-brand-dark dark:text-white mb-8 font-outfit">
                Request a Consultation
              </h2>

              <form
                className="space-y-6"
                onSubmit={async (e) => {
                  e.preventDefault();

                  const form = e.currentTarget;
                  const formData = new FormData(form);

                  const data = {
                    firstName: formData.get("firstName"),
                    lastName: formData.get("lastName"),
                    phone: formData.get("phone"),
                    email: formData.get("email"),
                    service: formData.get("service"),
                    message: formData.get("message"),
                  };

                  try {
                    const res = await fetch("/api/contact", {
                      method: "POST",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify(data),
                    });

                    const result = await res.json();

                    if (result.success) {
                      alert("Inquiry submitted successfully 🚀");
                      form.reset();
                    } else {
                      alert("Email failed ❌");
                      console.log(result.error);
                    }
                  } catch (error) {
                    alert("Server error ❌");
                    console.log(error);
                  }
                }}
              >
                {/* NAME ROW */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest mb-2 dark:text-white/40">
                      First Name
                    </label>
                    <input
                      name="firstName"
                      type="text"
                      required
                      className="w-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 px-4 py-3 text-sm dark:text-white focus:border-brand-primary outline-none transition-colors rounded-lg"
                      placeholder="James"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest mb-2 dark:text-white/40">
                      Last Name
                    </label>
                    <input
                      name="lastName"
                      type="text"
                      required
                      className="w-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 px-4 py-3 text-sm dark:text-white focus:border-brand-primary outline-none transition-colors rounded-lg"
                      placeholder="Wilson"
                    />
                  </div>
                </div>

                {/* CONTACT INFO ROW */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* PHONE */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest mb-2 dark:text-white/40">
                      Phone Number
                    </label>
                    <input
                      name="phone"
                      type="tel"
                      required
                      className="w-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 px-4 py-3 text-sm dark:text-white focus:border-brand-primary outline-none transition-colors rounded-lg"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>

                  {/* EMAIL */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest mb-2 dark:text-white/40">
                      Corporate Email
                    </label>
                    <input
                      name="email"
                      type="email"
                      required
                      className="w-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 px-4 py-3 text-sm dark:text-white focus:border-brand-primary outline-none transition-colors rounded-lg"
                      placeholder="j.wilson@corporation.com"
                    />
                  </div>
                </div>

                {/* SERVICE */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest mb-2 dark:text-white/40">
                    Service of Interest
                  </label>
                  <select
                    name="service"
                    title="Service of Interest"
                    required
                    className="w-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 px-4 py-3 text-sm dark:text-white focus:border-brand-primary outline-none transition-colors appearance-none rounded-lg"
                  >
                    <option>Strategic Consulting</option>
                    <option>Digital Transformation</option>
                    <option>Performance Marketing</option>
                    <option>Brand Governance</option>
                  </select>
                </div>

                {/* MESSAGE */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest mb-2 dark:text-white/40">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    required
                    className="w-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 px-4 py-3 text-sm dark:text-white focus:border-brand-primary outline-none transition-colors rounded-lg"
                    placeholder="Brief description of your requirements..."
                  ></textarea>
                </div>

                {/* BUTTON */}
                <button
                  type="submit"
                  className="w-full bg-brand-primary text-white font-bold py-4 rounded-lg hover:bg-brand-dark transition-all shadow-xl shadow-brand-primary/20 hover:-translate-y-0.5 active:scale-[0.98]"
                >
                  Submit Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
