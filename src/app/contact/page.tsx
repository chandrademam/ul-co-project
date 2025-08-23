
const ContactPage = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <div className="container mx-auto px-4 py-24 sm:py-32">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">Contact Us</h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">We'd love to hear from you. Whether you have a question about our work, a proposal, or just want to say hello, feel free to reach out.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Contact Information */}
          <div className="bg-gray-900 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-bold">Address</h3>
                <p className="text-gray-400">123 Creative Lane, Suite 100<br/>Design City, DC 12345</p>
              </div>
              <div>
                <h3 className="font-bold">Email</h3>
                <p className="text-gray-400">hello@ulco.project</p>
              </div>
              <div>
                <h3 className="font-bold">Phone</h3>
                <p className="text-gray-400">(123) 456-7890</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-900 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block mb-2">Your Name</label>
                <input type="text" id="name" name="name" className="w-full p-3 bg-gray-800 rounded-md border border-gray-700 focus:outline-none focus:border-white" />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block mb-2">Your Email</label>
                <input type="email" id="email" name="email" className="w-full p-3 bg-gray-800 rounded-md border border-gray-700 focus:outline-none focus:border-white" />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block mb-2">Message</label>
                <textarea id="message" name="message" rows={5} className="w-full p-3 bg-gray-800 rounded-md border border-gray-700 focus:outline-none focus:border-white"></textarea>
              </div>
              <button type="submit" className="w-full bg-white text-black font-bold py-3 px-8 rounded-full hover:bg-gray-200 transition duration-300">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
