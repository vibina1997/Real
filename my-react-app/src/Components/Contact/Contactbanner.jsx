import React from 'react'
import contactb from '../../assets/contactbanner.module.css'
const Contactbanner = () => {
  return (
    <div>
      <section className={contactb.contactBanner}>
      <div className="container text-center">
        <h1 className={contactb.contactTitle}>Contact Us</h1>
        <p className={contactb.contactSubtitle}>
          We’re here to help you with all your property needs
        </p>
      </div>
    </section>
    </div>
  )
}

export default Contactbanner
