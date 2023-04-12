import style from  "../styles/Home.module.css"

const Contact = () => {
  return (
    <div className="h-screen bg-gray-100 ">
      <h1 className="text-4xl text-gray-600 text-center font-serif mt-12 mb-2 font-medium">Share What you are Looking for</h1>
      <h2 className="text-gray-600 text-center font-serif mb-12 font-medium">Our Team will Reach out to you for the requirement</h2>
     <form className="flex flex-col justify-center items-center space-y-6 ">
      <input className={style.details} placeholder="Full Name"></input>
      <input className={style.details} placeholder="Email"></input>
      <input className={style.details} placeholder="Company"></input>
      <input className={style.details} placeholder="City"></input>

      <input className={style.details} placeholder="Subject"></input>
      <textarea className={style.details} placeholder="About Project"></textarea>
      <button className="bg-black text-white text-medium hover:bg-gray-200 hover:border-2 hover:border-black hover:text-black rounded-md w-48 h-10">Submit</button>
      <h3>Prefer Call ? call us on 8482984399</h3>
    </form>
    </div>
  );
};

export default Contact;
