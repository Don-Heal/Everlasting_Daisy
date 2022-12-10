import React from "react";
import { useForm, ValidationError } from "@formspree/react";
function ContactForm() {
  const [state, handleSubmit] = useForm("xknedrza");
  if (state.succeeded) {
    return <p>Your Order was Submitted Successfully</p>;
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-container">
        <h1>Manual Order Form</h1>
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
          <fieldset id="fs-frm-selects" className="form-selects">
            <label htmlFor="product" className="form-field">
              1. Which product would you like to order?
            </label>
            <select name="product" className="form-field" required>
              <option value="" selected="" disabled="" className="form-input">
                Pick a Product
              </option>
              <option value={"Bottles"}>Bottles</option>
              <option value={"Gift Box"}>Gift Box</option>
              <option value={"Glasses"}>Glasses</option>
              <option value={"Mugs"}>Mugs</option>
            </select>
            <br></br>
            <label htmlFor="font" className="form-field">
              1b. If you have selected a Mug please choose which colour
              otherwise just leave blank
            </label>
            <select name="mug" className="form-field">
              <option value="" selected="" disabled="" className="form-input">
                Choose
              </option>
              <option className="red" value={"Red"}>
                Red
              </option>
              <option className="green" value={"Green"}>
                Green
              </option>
              <option className="pink" value={"Pink"}>
                Pink
              </option>
              <option className="blue" value={"Blue"}>
                Blue
              </option>
              <option className="purple" value={"Purple"}>
                Purple
              </option>
              <option className="Grey" value={"Grey"}>
                Grey
              </option>
              <option className="navy" value={"Navy Blue"}>
                Navy Blue
              </option>
              <option className="orange" value={"Orange"}>
                Orange
              </option>
              <option className="white" value={"White"}>
                White
              </option>
            </select>
            <br></br>
            <label htmlFor="font" className="form-field">
              2. Which font would you like?
            </label>
            <select name="font" id="font" required className="form-field">
              <option value="" selected="" disabled="" className="form-input">
                Choose
              </option>
              <option className="almond" value={"Almond Butter Alexandria"}>
                Almond Butter Alexandria
              </option>
              <option className="baguet" value={"Baguet Script Bethany"}>
                Baguet Script Bethany
              </option>
              <option className="baguette" value={"BFC Baguette Gabrielle"}>
                BFC Baguette Gabrielle
              </option>
              <option className="tasty" value={"BFC Tasty Trick Dominque"}>
                BFC Tasty Trick Dominque
              </option>
              <option className="boho" value={"Boho Chick Susanne"}>
                Boho Chick Susanne
              </option>
              <option className="october" value={"DTC October Stephanie"}>
                DTC October Stephanie
              </option>
              <option className="farm" value={"Farm to Table Genevieve"}>
                Farm to Table Genevieve
              </option>
              <option className="once" value={"Once More Christopher"}>
                Once More Christopher
              </option>
            </select>
            <br></br>
            <label htmlFor="colour" className="form-field">
              3. Which colour text?
            </label>
            <select name="colour" className="form-field" required>
              <option value="" selected="" disabled="" className="form-input">
                Choose
              </option>
              <option className="ice-blue" value={"Ice Blue"}>
                Ice Blue
              </option>
              <option className="yellow" value={"Yellow"}>
                Yellow
              </option>
              <option className="silver" value={"Silver Grey"}>
                Silver Grey
              </option>
              <option className="mint" value={"Mint"}>
                Mint
              </option>
              <option className="turquoise" value={"Turquoise"}>
                Turquoise
              </option>
              <option className="violet" value={"Violet"}>
                Violet
              </option>
              <option className="dark-blue" value={"Dark Blue"}>
                Dark Blue
              </option>
              <option className="light-blue" value={"Light Blue"}>
                Light Blue
              </option>
              <option className="brimstone-yellow" value={"Brimstone Yellow"}>
                Brimstone Yellow
              </option>
              <option className="cream" value={"Cream"}>
                Cream
              </option>
              <option className="deep-blue" value={"Deep Blue"}>
                Deep Blue
              </option>
              <option className="dark-red" value={"Dark Red"}>
                Dark Red
              </option>
              <option className="green-grass" value={"Green Grass"}>
                Green Grass
              </option>
              <option className="forest-green" value={"Forest Green"}>
                Forest Green
              </option>
              <option className="light-orange" value={"Light Orange"}>
                Light Orange
              </option>
              <option className="burgandy" value={"Burgandy"}>
                Burgandy
              </option>
              <option className="light-yellow" value={"Light Yellow"}>
                Light Yellow
              </option>
              <option className="lime-green" value={"Lime Green"}>
                Lime Green
              </option>
              <option className="royal-blue" value={"Royal Blue"}>
                Royal Blue
              </option>
              <option className="dark-green" value={"Dark Green"}>
                Dark Green
              </option>
              <option className="black" value={"Black"}>
                Black
              </option>
              <option className="white" value={"White"}>
                White
              </option>
              <option className="gold" value={"Gold - Metallic"}>
                Gold - Metallic
              </option>
              <option className="pink" value={"Pink"}>
                Pink
              </option>
              <option className="lilac" value={"Lilac"}>
                Lilac
              </option>
            </select>
            <br></br>
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
          </fieldset>
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
            placeholder="Anything infomation you would like to add about the Order?."
            required=""
            defaultValue={""}
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
    </form>
  );
}
function App() {
  return <ContactForm />;
}
export default App;
