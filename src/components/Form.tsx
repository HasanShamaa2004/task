import "../styles/Contact.scss";
export const Form = () => {
  return (
    <form className="ContactForm">
      <div className="flex space-x-4 gap-6">
        <div className="w-1/2">
          <label htmlFor="fullName" className="ContactLabel">
            Full Name *
          </label>
          <input
            type="text"
            id="fullName"
            placeholder="John David"
            className="ContactInput"
          />
        </div>
        <div className="w-1/2">
          <label htmlFor="yourEmail" className="ContactLabel">
            Your Email *
          </label>
          <input
            type="text"
            id="yourEmail"
            placeholder="example@yourmail.com"
            className="ContactInput"
          />
        </div>
      </div>
      <div className="flex space-x-4 gap-6">
        <div className="w-1/2">
          <label htmlFor="company" className="ContactLabel">
            Company *
          </label>
          <input
            type="text"
            id="company"
            placeholder="yourcompany name here"
            className="ContactInput"
          />
        </div>
        <div className="w-1/2">
          <label htmlFor="subject" className="ContactLabel">
            Subject *
          </label>
          <input
            type="text"
            id="yourEmail"
            placeholder="How can we Help"
            className="ContactInput"
          />
        </div>
      </div>
      <div className="relative w-full">
        <label htmlFor="message" className="ContactLabel">
          Message *
        </label>
        <input type="text" className=" h-[300px] w-full ContactInput " />
        <div className="absolute top-16 left-4 text-[#797979]">
          Hello there, I would like to talk about how to...
        </div>
      </div>
      <div className="py-20">
        <button className="w-[240px] h-[70px] flex items-center justify-center bg-[#42BDEC] rounded-[36px]">
          Send Message
        </button>
      </div>
    </form>
  );
};
