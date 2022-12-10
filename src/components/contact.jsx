import React from "react";
import { useForm, ValidationError } from "@formspree/react";
function ContactForm() {
  const [state, handleSubmit] = useForm("mpznjeov");
  if (state.succeeded) {
    return <p>Submit Successfully</p>;
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="contact-form-container">
        <fieldset id="fs-frm-inputs" className="form-field">
          <label className="contact-form-field" htmlFor="email">
            Email Address
          </label>
          <input
            className="contact-form-input"
            id="email"
            type="email"
            name="email"
            placeholder="Email@domain.com"
            required
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <label className="contact-form-field" htmlFor="message">
            Message
          </label>
          <textarea
            className="contact-form-input"
            placeholder="Please let us know what youd like to contact us about and we will reply to you as soon as we can."
            rows={5}
            id="message"
            name="message"
            required
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <br></br>
          <div class="buttons">
            <button type="submit" disabled={state.submitting}>
              Submit
            </button>
          </div>
        </fieldset>
      </div>
    </form>
  );
}
function App() {
  return <ContactForm />;
}
export default App;
