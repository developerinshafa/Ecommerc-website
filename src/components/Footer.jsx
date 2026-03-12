export default function Footer() {
  return (
    <>
      <div className="bg-black text-2xl text-white text-center space-y-5 p-5">
        <div className=" grid grid-cols-3 gap-5 px-10">
          <div className="space-y-4 pt-8">
            <h1 className="text-4xl text-orange-400">GET IN TOUCH</h1>
            <p>
              Contact us for all your handloom product needs. Reach out today
              for personalized assistance and inquiries.
            </p>
          </div>
          <div className="space-y-4">
            <h1 className="text-4xl text-orange-400 ">Pages</h1>
            <ul className="space-y-2">
              <li>Home</li>
              <li>Products</li>
              <li>FAQs</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="space-y-4 bg-white">
                <img src="/logo/Sri_Hanloom.png" alt="logo" />
            </div>
        </div>
        <hr />
        <h2>
          @ 2026, <span className="text-orange-400">Sri Handloom</span>. All
          Rights Reserved. Designed by
          <span className="text-orange-400">Fathima Inshafa</span>
        </h2>
      </div>
    </>
  );
}
