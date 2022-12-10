import React from "react";
import { useForm, ValidationError } from "@formspree/react";
function ContactForm() {
  const [state, handleSubmit] = useForm("mpznjeov");
  if (state.succeeded) {
    return <p>Submit Successfully</p>;
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-container">
        <label className="form-field" htmlFor="email">
          Email Address
        </label>
        <input
          className="form-input"
          id="email"
          type="email"
          name="email"
          placeholder="Email@domain.com"
          required
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <label className="form-field" htmlFor="message">
          Message
        </label>
        <textarea className="form-input" id="message" name="message" required />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <button type="submit" disabled={state.submitting}>
          Submit
        </button>
      </div>
    </form>
  );
}
function App() {
  return <ContactForm />;
}
export default App;
