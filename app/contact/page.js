export default function ContactUs() {
  return (
    <section className="relative bg-[#fffaf6] py-20 px-6 lg:px-16 overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#ec7037] rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left: Text + Info */}
        <div>
          <h2 className="text-4xl font-bold text-[#4b403b] mb-4">Let’s Connect</h2>
          <p className="text-lg text-[#6b5e57] mb-8 leading-relaxed">
            Have a question, a collaboration idea, or just want to say hi?  
            We’d love to hear from you! Fill out the form or reach out directly —  
            we’ll get back to you as soon as possible.
          </p>

          <div className="space-y-4">
            <p className="flex items-center gap-3 text-[#4b403b]">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-[#ec7037]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12H8m8 0l-4 4m4-4l-4-4" />
              </svg>
              info@wcelectrical.com
            </p>
            <p className="flex items-center gap-3 text-[#4b403b]">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-[#ec7037]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
              +92 300 1234567
            </p>
            <p className="flex items-center gap-3 text-[#4b403b]">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-[#ec7037]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 12.414m0 0a6 6 0 10-8.485 8.485 6 6 0 008.485-8.485z" />
              </svg>
              Address: Plot #45, Industrial Estate Phase 2, Khanewal Road, Multan, Pakistan
            </p>
          </div>
        </div>

        <form className="bg-white shadow-lg rounded-2xl p-8 space-y-6 border border-[#f2e4da]">
          <div>
            <label className="block text-[#4b403b] font-medium mb-2">Full Name</label>
            <input
              type="text"
              placeholder="Muhammad Aman"
              className="w-full rounded-lg border border-[#e6d7ce] px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#ec7037]/50"
            />
          </div>

          <div>
            <label className="block text-[#4b403b] font-medium mb-2">Email Address</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full rounded-lg border border-[#e6d7ce] px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#ec7037]/50"
            />
          </div>

          <div>
            <label className="block text-[#4b403b] font-medium mb-2">Message</label>
            <textarea
              rows={4}
              placeholder="Write your message..."
              className="w-full rounded-lg border border-[#e6d7ce] px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#ec7037]/50"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#ec7037] text-white font-semibold py-3 rounded-lg hover:bg-[#d55f2c] transition-all"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
