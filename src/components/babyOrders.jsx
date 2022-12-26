import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Link } from "react-router-dom";
function OrderForm() {
  const [state, handleSubmit] = useForm("xknedrza");
  if (state.succeeded) {
    return (
      <>
        {" "}
        <p>Your Order was Submitted Successfully</p>
        <Link to="/">Return Home</Link>
      </>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-container">
        <h1>Baby Order Form</h1>
        <fieldset id="fs-frm-inputs">
          <label htmlFor="full-name" className="form-field">
            Full Name:
          </label>
          <input
            className="form-input"
            type="text"
            name="name"
            id="full-name"
            placeholder="First and Last"
            required
          />
          <ValidationError prefix="Full" field="name" errors={state.errors} />
          <label htmlFor="email-address" className="form-field">
            Email Address:
          </label>
          <input
            className="form-input"
            type="email"
            name="_replyto"
            id="email-address"
            placeholder="Email@domain.com"
            required
          />

          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <label htmlFor="product" className="form-field">
            1. Which product would you like to order?
          </label>
          <select name="product" className="form-field" required>
            <option value="" selected="" disabled="" className="form-input">
              Pick a Product
            </option>
            <option value={"Bibs"}>Bibs</option>
            <option value={"Teethers"}>Teethers</option>
            <option value={"Dummy Chain"}>Dummy Chain</option>
            <option value={"Apparel"}>Apparel</option>
          </select>
          <fieldset id="fs-frm-selects" className="form-selects">
            <label> Only change the product you selected.</label>
            <br></br>
            <label htmlFor="font" className="form-field">
              1b. Bib Selection
            </label>
            <select name="mug" className="form-field">
              <option value="" selected="" disabled="" className="form-input">
                Choose
              </option>
              <option className="Anchor" value={"Anchor"}>
                Anchor
              </option>
              <option className="Animals" value={"Animals"}>
                Animals
              </option>
              <option className="Cars" value={"Cars"}>
                Cars
              </option>
              <option className="Mickey" value={"Mickey"}>
                Mickey
              </option>
              <option className="Pooh" value={"Pooh"}>
                Pooh
              </option>
            </select>
            <br></br>
            <label htmlFor="font" className="form-field">
              1b. Teethers Selection
            </label>
            <select name="mug" className="form-field">
              <option value="" selected="" disabled="" className="form-input">
                Choose
              </option>
              <option className="Red" value={"Red"}>
                Red
              </option>
              <option className="Light Blue" value={"Light Blue"}>
                Light Blue
              </option>
              <option className="Dark Blue" value={"Dark Blue"}>
                Dark Blue
              </option>
              <option className="White" value={"White"}>
                White
              </option>
              <option className="Green" value={"Green"}>
                Green
              </option>
              <option className="Yellow" value={"Yellow"}>
                Yellow
              </option>
              <option className="Beige" value={"Beige"}>
                Beige
              </option>
            </select>
            <br></br>
            <label htmlFor="font" className="form-field">
              1b. Dummy Chains Selection
            </label>
            <select name="mug" className="form-field">
              <option value="" selected="" disabled="" className="form-input">
                Choose
              </option>
              <option className="Tulip Large" value={"Tulip Large"}>
                Tulip Large
              </option>
              <option className="Tulip Small" value={"Tulip Small"}>
                Tulip Small
              </option>
              <option className="Ocean Large" value={"Ocean Large"}>
                Ocean Large
              </option>
              <option className="Ocean Small" value={"Ocean Small"}>
                Ocean Small
              </option>
              <option className="Mint Large" value={"Mint Large"}>
                Mint Large
              </option>
              <option className="Mint Small" value={"Mint Small"}>
                Mint Small
              </option>
              <option className="Lilac Large" value={"Lilac Large"}>
                Lilac Large
              </option>
              <option className="Lilac Small" value={"Lilac Small"}>
                Lilac Small
              </option>
              <option className="Lavender Large" value={"Lavender Large"}>
                Lavender Large
              </option>
              <option className="Lavender Small" value={"Lavender Small"}>
                Lavender Small
              </option>
              <option className="Berries Large" value={"Berries Large"}>
                Berries Large
              </option>
              <option className="Berries Small" value={"Berries Small"}>
                Berries Small
              </option>
              <option className="Sea Breeze Large" value={"Sea Breeze Large"}>
                Sea Breeze Large
              </option>
              <option className="Sea Breeze Small" value={"Sea Breeze Small"}>
                Sea Breeze Small
              </option>
              <option className="Sunflower Large" value={"Sunflower Large"}>
                Sunflower Large
              </option>
              <option className="Sunflower Small" value={"Sunflower Small"}>
                Sunflower Small
              </option>
              <option className="Sunset Large" value={"Sunset Large"}>
                Sunset Large
              </option>
              <option className="Sunset Small" value={"Sunset Small"}>
                Sunset Small
              </option>
            </select>
            <br></br>
            <label htmlFor="font" className="form-field">
              1b. Onesie Selection
            </label>
            <select name="mug" className="form-field">
              <option value="" selected="" disabled="" className="form-input">
                Choose
              </option>
              <option className="First Christmas" value={"First Christmas"}>
                First Christmas
              </option>
              <option className="Handmade Jumpers" value={"Handmade Jumpers"}>
                Handmade Jumpers
              </option>
              <option className="Onesies" value={"Onesies"}>
                Onesies (please specify below in comments)
              </option>
            </select>
            <br></br>
          </fieldset>
          <label htmlFor="Quantity" className="form-field">
            3. Quantity (any order greater than 6 you will need to contact us
            directly)
          </label>
          <select name="Quantity" className="form-field" required>
            <option value="" selected="" disabled="" className="form-input">
              Choose
            </option>
            <option value={"1"}>1</option>
            <option value={"2"}>2</option>
            <option value={"3"}>3</option>
            <option value={"4"}>4</option>
            <option value={"5"}>5</option>
            <option value={"6"}>6</option>
          </select>
          <label htmlFor="ship" className="form-field">
            Ship to:
          </label>
          <input
            className="form-input"
            type="text"
            name="ship"
            id="shipping"
            placeholder="123 Something st, Suburb, Postcode"
            required
          />
          <ValidationError
            prefix="Ship"
            field="shipping"
            errors={state.errors}
          />
          <label htmlFor="message" className="form-field">
            Additional Comments:
          </label>
          <textarea
            className="form-input"
            rows={5}
            name="message"
            id="message"
            placeholder="Onesie Type"
            required
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <input
            className="form-input"
            type="hidden"
            name="_subject"
            id="email-subject"
            defaultValue="Survey Responses"
          />
        </fieldset>
        <div className="buttons">
          <button type="submit" disabled={state.submitting}>
            Submit
          </button>
        </div>
      </div>
      ;
    </form>
  );
}
function App() {
  return <OrderForm />;
}

export default App;
