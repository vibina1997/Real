import React from 'react'

import style from '../../assets/Contactpagge.module.css'
 
   import contactoo from '../../assets/Imges/contaooo.jpg'

const Contactpage = () => {
  return (
    <div className={style.contactsection}>
      <div className="container">
        <div className={style.wrapper}>
          
          {/* LEFT FORM SECTION */}
          <div className={style.formcard}>
            <h3>Get in touch</h3>
            <p>
           Clear and elegant design with refined details that help you connect with us easily.
            </p>

            <input type="text" placeholder="Your name" />
            <input type="email" placeholder="Your email" />
            <input type="text" placeholder="Your phone" />
            <textarea placeholder="Your message"></textarea>

            <button>Send Message</button>
          </div>

          {/* RIGHT IMAGE SECTION */}
          <div className={style.imageWrap}>
            <img
              src={contactoo}
              alt="Contact"
              className={style.contactImage}
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contactpage;
