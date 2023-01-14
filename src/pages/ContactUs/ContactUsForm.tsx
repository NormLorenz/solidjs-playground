const ContactUsForm = () => {

  return (
    <div class="container">

      {/* <div class='home-registration-form bg-gray'> */}
      {/* <form [formGroup]='emailForm' (ngSubmit)='emailButton.onSubmit()'> */}
      <form>

        <div class='row'>
          <div class='col-lg-12'>
            <div class='form-group mt-2'>
              <div class='validation-container'>
                <input type='text' class='form-control' placeholder='Your name*' name='name' />
                {/* <span class='validation-warning' *ngIf='name.errors && (name.dirty || name.touched)'>
              <span *ngIf='name.errors.required'> Name required </span>
              <span *ngIf='name.errors.minlength'> Must be greater than 2 characters </span>
            </span> */}
              </div>
            </div>
          </div>
        </div>

        <div class='row'>

          <div class='col-lg-6'>
            <div class='form-group mt-2'>
              <div class='validation-container'>
                <input type='email' class='form-control' placeholder='Your email*' name='email' />
                {/* <span class='validation-warning' *ngIf='email.errors && (email.dirty || email.touched)'>
              <span *ngIf='email.errors.required'> Email required </span>
              <span *ngIf='email.errors.email'> Must be valid email format </span>
            </span> */}
              </div>
            </div>
          </div>

          <div class='col-lg-6'>
            <div class='form-group mt-2'>
              <input type='text' class='form-control' placeholder='Your phone (optional)' name='phone' />
            </div>
          </div>
        </div>

        <div class='row address-style'>
          <div class='col-lg-12'>
            <div class='form-group mt-2'>
              <input type='text' class='form-control' placeholder='Your address (optional)' name='address' autocomplete='off' />
            </div>
          </div>
        </div>

        <div class='row'>

          <div class='col-lg-12'>
            <div class='form-group mt-2'>
              <input type='text' class='form-control' placeholder='Your subject (optional)' name='subject' />
            </div>
          </div>
        </div>

        <div class='row'>
          <div class='col-lg-12'>
            <div class='form-group mt-2'>
              <textarea rows='4' class='form-control' placeholder='Your message (optional)' name='message' />
            </div>
          </div>
        </div>

        <div class='row p-2'>
          <div class='col-lg-12 text-right'>
            <button class="btn btn-outline-primary" type="submit" onClick={(e) => { }}>Send</button>
            {/* <app-email-button [emailForm]='emailForm' #emailButton></app-email-button> */}
          </div>
        </div>

      </form>
    </div>

    // </div>
  )
}

export default ContactUsForm;
