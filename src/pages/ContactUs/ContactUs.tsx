import ContactUsForm from "./ContactUsForm";

const ContactUs = () => {

  return (

    // <section class="section" id="contact">
    <div class="container">

      <div class="row p-3">
        <div class="col-lg-8 offset-lg-2">
          <h1 class="section-title text-center">Get In Touch</h1>
        </div>
      </div>

      <div class="row p-3">
        <div class="col-lg-8 offset-lg-2">
          <div class="section-title-border margin-t-20"></div>
          <p class="section-subtitle text-muted text-center font-secondary">We aim to provide great customer
            service. For any questions give us a call or fill out the email form. We will do our best to respond in a timely manner. Thank you,</p>
        </div>
      </div>

      <div class="row p-3">

        <div class="col-lg-5">
          <div class="mt-4">
            <p class="mt-4"><span class="h6">Mailing address:</span><br /><span class="text-muted d-block mt-2">PO Box 100 Valley, Washington 99181</span></p>
            <p class="mt-4"><span class="h6">Phone:</span><br /><span class="text-muted d-block mt-2"><a href="tel:5099362681">509 936 2681</a></span></p>
            <p class="mt-4"><span class="h6">Email:</span><br /><span class="text-muted d-block mt-2"><a href="mailto:sullivanexcavatinginc@gmail.com">sullivanexcavatinginc@gmail.com</a></span></p>
            <p class="mt-4"><span class="h6">WA LIC #:</span><br /><span class="text-muted d-block mt-2">SULLIEI815D5</span></p>
            <p class="mt-4"><span class="h6">Hours:</span><br /><span class="text-muted d-block mt-2">8:00 AM to 6:00 PM or until the job is done</span></p>
          </div>
        </div>

        <div class="col-lg-7">
          <div class="mt-4 pt-4">
            <ContactUsForm />
          </div>
        </div>

      </div>
    </div>
    // </section>

  )
}

export default ContactUs;
