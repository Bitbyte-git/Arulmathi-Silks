const contactDetails = [
  {
    icon: 'fa-location-dot',
    title: 'Visit Our Store',
    text: 'No 6/321, Near Indian Petrol Bunk, Karuppanampatti, Pachanampatti, Salem, Tamil Nadu 636455',
  },
  {
    icon: 'fa-phone',
    title: 'Call Us',
    text: '+91 9XXXXXXXXX',
  },
  {
    icon: 'fa-envelope',
    title: 'Email Us',
    text: 'arulmathisilks@gmail.com',
  },
  {
    icon: 'fa-clock',
    title: 'Business Hours',
    text: 'Monday - Saturday: 9:30 AM - 8:00 PM\nSunday: 10:00 AM - 6:00 PM',
  },
]

const supportValues = [
  { icon: 'fa-headset', title: 'Quick Support', text: 'We reply as soon as possible' },
  { icon: 'fa-star-of-life', title: 'Expert Assistance', text: 'Get help from our saree experts' },
  { icon: 'fa-shield-alt', title: 'Trusted Service', text: 'Your satisfaction is our priority' },
  { icon: 'fa-heart', title: 'Customer First', text: 'We care about your experience' },
]

const faqs = [
  'Can I view the latest saree catalogue?',
  'Do you guide bridal saree selection?',
  'Can I ask about available colors and designs?',
  'Do you help with blouse matching?',
  'How can I know about new arrivals?',
]

export default function ContactUs() {
  return (
    <section id="contact-page" className="bg-[#f6efe4] text-[#17131c]">
      <div className="relative isolate overflow-hidden bg-[#080b12] px-5 text-white sm:px-8 lg:px-16">
        <img
          src="/Arulmathi-contact.png"
          alt="Arulmathi Silks contact welcome"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-[72%_0%] opacity-100"
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,#080b12_0%,rgba(8,11,18,0.92)_40%,rgba(8,11,18,0.20)_64%,rgba(8,11,18,0)_100%)]" />
        <div className="mx-auto grid min-h-[520px] max-w-7xl grid-cols-1 items-center py-8 lg:min-h-[560px] lg:grid-cols-[0.52fr_0.48fr]">
          <div className="max-w-[560px] rounded-lg bg-[#080b12]/12 py-4 backdrop-blur-[1px]">
            <p className="font-sans text-[10px] font-bold uppercase tracking-[3px] text-[#d2a24f]">Contact Us</p>
            <h1 className="mt-5 font-serif text-[40px] font-normal leading-[1.08] text-white sm:text-[56px] lg:text-[66px]">
              We are Here<br />
              To <em className="italic text-[#d2a24f]">Help You</em>
            </h1>
            <p className="mt-5 max-w-[500px] font-sans text-[13px] leading-[1.95] text-white/76">
              Have questions about our saree collections or need help choosing a drape? We would love to hear from you. Reach out to us and our team will get back to you soon.
            </p>
          </div>
        </div>
      </div>

      <div className="relative overflow-hidden px-5 pb-14 pt-10 sm:px-8 lg:px-16 lg:pb-20 lg:pt-12">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_12%,rgba(201,147,58,0.08),transparent_25%),radial-gradient(circle_at_90%_82%,rgba(201,147,58,0.08),transparent_25%)]" />
        <div className="relative mx-auto max-w-7xl">
          <div className="mb-8 text-center">
            <p className="font-sans text-[10px] font-bold uppercase tracking-[3px] text-[#a9762d]">Get In Touch</p>
            <h2 className="mt-3 font-serif text-[38px] font-normal leading-[1.08] text-[#221824] sm:text-[50px]">Send Us a Message</h2>
            <div className="mx-auto mt-4 h-px w-28 bg-gradient-to-r from-transparent via-[#b9863c] to-transparent" />
          </div>

          <div className="grid grid-cols-1 gap-7 lg:grid-cols-[1.12fr_0.88fr]">
            <form className="contact-ref-rise rounded-lg border border-[#d8c7ad] bg-[#fbf7ef] p-5 shadow-[0_18px_44px_rgba(52,36,18,0.08)] sm:p-7">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <input className="contact-field" type="text" placeholder="Your Name *" />
                <input className="contact-field" type="email" placeholder="Email Address *" />
              </div>
              <input className="contact-field mt-4" type="tel" placeholder="Phone Number" />
              <input className="contact-field mt-4" type="text" placeholder="Subject" />
              <textarea className="contact-field mt-4 min-h-[190px] resize-y" placeholder="Your Message *" />
              <button type="submit" className="mt-6 inline-flex min-w-[220px] items-center justify-center gap-3 rounded bg-[#b9863c] px-6 py-3.5 font-sans text-[11px] font-bold text-white transition-colors hover:bg-[#d2a24f]">
                Send Message <i className="fas fa-arrow-right" />
              </button>
              <p className="mt-5 flex items-center gap-2 font-sans text-[11px] text-[#5f5145]"><i className="fas fa-shield-alt text-[#b9863c]" />Your information is safe with us. We respect your privacy.</p>
            </form>

            <div className="contact-ref-rise rounded-lg border border-[#d8c7ad] bg-[#fbf7ef] p-7 shadow-[0_18px_44px_rgba(52,36,18,0.08)] sm:p-9" style={{ animationDelay: '100ms' }}>
              <h3 className="font-serif text-[32px] font-normal leading-tight text-[#221824]">Contact Information</h3>
              <div className="mt-7 space-y-7">
                {contactDetails.map((item, index) => (
                  <div key={item.title} className="contact-ref-rise flex gap-5" style={{ animationDelay: `${index * 80}ms` }}>
                    <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[#d8b577] text-[#b9863c]">
                      <i className={`fas ${item.icon} text-[22px]`} />
                    </span>
                    <div>
                      <h4 className="font-serif text-[20px] font-normal text-[#221824]">{item.title}</h4>
                      <p className="mt-2 whitespace-pre-line font-sans text-[12px] leading-[1.75] text-[#4f463d]">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#f1e6d7] px-5 py-12 sm:px-8 lg:px-16">
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="font-serif text-[32px] font-normal text-[#221824] sm:text-[40px]">We would Love to Hear From You</h2>
          <div className="mt-8 grid grid-cols-2 gap-6 lg:grid-cols-4">
            {supportValues.map((item, index) => (
              <div key={item.title} className="contact-ref-rise flex flex-col items-center" style={{ animationDelay: `${index * 90}ms` }}>
                <span className="flex h-20 w-20 items-center justify-center rounded-full border border-[#d8b577] text-[#b9863c]">
                  <i className={`fas ${item.icon} text-[30px]`} />
                </span>
                <h3 className="mt-4 font-serif text-[19px] text-[#221824]">{item.title}</h3>
                <p className="mt-2 max-w-[150px] font-sans text-[11px] leading-[1.55] text-[#6b5a49]">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-10 bg-[#fbf7ef] px-5 py-14 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:px-16 lg:py-20">
        <div className="mx-auto w-full max-w-7xl overflow-hidden rounded-lg bg-[#e8ddcf] shadow-[0_18px_44px_rgba(52,36,18,0.10)]">
          <img src="/Arulmathi-shop3.png" alt="Stacked silk sarees for customer questions" className="h-full min-h-[420px] w-full object-cover object-center" />
        </div>
        <div className="mx-auto flex w-full max-w-7xl flex-col justify-center">
          <p className="font-sans text-[10px] font-bold uppercase tracking-[3px] text-[#a9762d]">Common Questions</p>
          <h2 className="mt-4 font-serif text-[38px] font-normal leading-[1.1] text-[#221824] sm:text-[48px]">Frequently Asked Questions</h2>
          <div className="mt-7 space-y-3">
            {faqs.map((question, index) => (
              <details key={question} className="contact-ref-rise group rounded border border-[#d8c7ad] bg-[#fffaf8] px-5 py-4" style={{ animationDelay: `${index * 70}ms` }}>
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-sans text-[13px] font-medium text-[#221824]">
                  {question}
                  <i className="fas fa-chevron-down text-[11px] text-[#6b5a49] transition-transform group-open:rotate-180" />
                </summary>
                <p className="mt-3 font-sans text-[12px] leading-[1.7] text-[#6b5a49]">Please contact our team directly and we will guide you with the latest collection details and store assistance.</p>
              </details>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-[#fbf7ef] px-5 pb-12 sm:px-8 lg:px-16">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 rounded-lg bg-[#0d0d1a] px-6 py-7 text-white shadow-[0_18px_44px_rgba(0,0,0,0.16)] sm:flex-row sm:items-center sm:justify-between lg:px-12">
          <div className="flex items-center gap-5">
            <span className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full border border-[#b9863c] text-[#d2a24f]">
              <i className="fab fa-whatsapp text-[38px]" />
            </span>
            <div>
              <h3 className="font-serif text-[26px] font-normal">Need Immediate Help?</h3>
              <p className="mt-2 max-w-[360px] font-sans text-[12px] leading-[1.7] text-white/70">Chat with us on WhatsApp for quick assistance during business hours.</p>
            </div>
          </div>
          <a href="https://wa.me/919000000000" className="inline-flex w-max items-center gap-3 rounded bg-[#b9863c] px-5 py-3 font-sans text-[11px] font-semibold text-white transition-colors hover:bg-[#d2a24f]">
            <i className="fab fa-whatsapp" /> Chat on WhatsApp <i className="fas fa-arrow-right" />
          </a>
        </div>
      </div>
    </section>
  )
}

