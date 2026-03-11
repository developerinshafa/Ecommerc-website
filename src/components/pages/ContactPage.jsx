export default function ContactPage() {
  return (
    <>
    <h1 className="text-4xl font-bold ">Contact US</h1>
      <div className="max-w-3xl mx-auto p-5">
        <form className="p-5 bg-gray-100">
          <div className="grid space-y-5 ">
            <input 
            type="text"
             name="name" 
             id="name" 
             placeholder="Your Name" 
             required
             className="bg-white p-4 text-2xl rounded-md"/>
            <input type="email" name="email" id="email" placeholder="Your Email" required className="bg-white p-4 text-2xl rounded-md"/>
            <input type="subject" name="subject" id="subject" placeholder="Subject" required className="bg-white p-4 text-2xl rounded-md"/>
            <input type="message" name="message" id="message" placeholder="Message" required className="bg-white p-4 text-2xl rounded-md"/>
          </div>
          <button className="bg-orange-400 px-4 py-2 text-xl mt-10">Sent Message</button>
        </form>
      </div>
    </>
  );
}
