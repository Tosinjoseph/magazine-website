import React from "react";

const Contact = () => {
  return (
    <div className="px-4 w-full md:px-25 lg:px-70 items-center py-20 justify-center mx-auto">
      <h2 className="text-gray-500 text-5xl font-bold text-center pb-12">Get in touch</h2>

      <div className=" flex-col md:flex-row lg:flex mb-8 gap-20 items-center mx-auto">
        <div className="text-gray-500 font-bold">
          <span className="flex mb-4 gap-2 h-5">
            <img src="./call-icon.png" alt=""  className="w-5" />
            <p>907 021 77 36</p>
          </span>
          <span  className="flex mb-4 gap-2 h-5">
            <img src="./message-icon.png" alt=""  className="w-5" />
            <p>tosinjosephoffice2@gmail.com</p>
          </span>
          <span  className="flex mb-4 gap-2 h-5">
            <img src="./call-icon.png" alt="" className="w-5" />
            <p>Just a call demo</p>
          </span>
          <span  className="flex mb-4 gap-2 h-5">
            <img src="./location-icon (2).png" alt=""  className="w-5" />
            <p>Detroit, Michigan</p>
          </span>
        </div>
        <div className="w-full md:w-1/2 items-center mx-auto flex flex-col pr-12 md:pr-0">
         <span className="w-full mb-4">
          <h3 className="text-gray-500 mb-2 font-bold text-lg">Name</h3>
          <input placeholder="Name" className="py-4  px-2 w-full md:w-100 items-center justify-start mx-auto bg-gray-100" type="text" required />
         </span>
         <span className="w-full mb-4">
          <h3 className="text-gray-500 mb-2 font-bold text-lg">Email</h3>
          <input placeholder="youremail@gmail.com"  className="py-4  px-2  w-full md:w-100 items-center justify-start mx-auto bg-gray-100" type="email" required/>
         </span>
         <span className="w-full">
          <h3 className="text-gray-500 mb-2 font-bold text-lg">Message</h3>
          <textarea placeholder="Message"  className="py-4 px-2 w-full md:w-100 items-center justify-start mx-auto bg-gray-100" type="text" required></textarea>
          <button type="submit" className="bg-amber-800 mt-5 cursor-pointer px-10 py-3 text-white">SEND MESSAGE</button>
         </span>
         
        </div>
      </div>
    </div>
  );
};

export default Contact;
