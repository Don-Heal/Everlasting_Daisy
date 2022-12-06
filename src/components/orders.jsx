import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
function ContactForm() {
  const [state, handleSubmit] = useForm("xknedrza");
  if (state.succeeded) {
      return <p>Your Order was Submitted Successfully</p>;
  }
  return (
      <form onSubmit={handleSubmit}>
<fieldset id="fs-frm-inputs">
  <label htmlFor="full-name">Full Name</label>
  <input
    type="text"
    name="name"
    id="full-name"
    placeholder="First and Last"
    required
  />
          <ValidationError 
        prefix="Full" 
        field="name"
        errors={state.errors}
      />
  <label htmlFor="email-address">Email Address</label>
  <input
    type="email"
    name="_replyto"
    id="email-address"
    placeholder="email@domain.com"
    required
  />
        <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
  <fieldset id="fs-frm-selects">
    <label htmlFor="product">
      1. Which product would you like to order?
    </label>
    <select name="product" id="product" required>
      <option value="" selected="" disabled="">
        Pick a Product
      </option>
      <option value={"Bottles"}>Bottles</option>
      <option value={"Gift Box"}>Gift Box</option>
      <option value={"Glasses"}>Glasses</option>
      <option value={"Mugs"}>Mugs</option>
    </select>
    <label htmlFor="font">2. Which font would you like?.</label>
    <select name="font" id="font" required>
      <option value="" selected="" disabled="">
        Choose
      </option>
      <option value={"Almond Butter Alexandria"}>Almond Butter Alexandria</option>
      <option value={"Baguet Script Bethany"}>Baguet Script Bethany</option>
      <option value={"BFC Baguette Gabrielle"}>BFC Baguette Gabrielle</option>
      <option value={"BFC Tasty Trick Dominque"}>BFC Tasty Trick Dominque</option>
      <option value={"Boho Chick Susanne"}>Boho Chick Susanne</option>
      <option value={"DTC October Stephanie"}>DTC October Stephanie</option>
      <option value={"Farm to Table Genevieve"}>Farm to Table Genevieve</option>
      <option value={"Once More Christopher"}>Once More Christopher</option>
    </select>
    <label htmlFor="colour">3. Which colour text?.</label>
    <select name="colour" id="colour" required>
      <option value="" selected="" disabled="">
        Choose
      </option>
      <option value={"Ice Blue"}>Ice Blue</option>
      <option value={"Yellow"}>Yellow</option>
      <option value={"Silver Grey"}>Silver Grey</option>
      <option value={"Mint"}>Mint</option>
      <option value={"Turquoise"}>Turquoise</option>
      <option value={"Violet"}>Violet</option>
      <option value={"Dark Blue"}>Dark Blue</option>
      <option value={"Light Blue"}>Light Blue</option>
      <option value={"Brimstone Yellow"}>Brimstone Yellow</option>
      <option value={"Cream"}>Cream</option>
      <option value={"Deep Blue"}>Deep Blue</option>
      <option value={"Dark Red"}>Dark Red</option>
      <option value={"Green Grass"}>Green Grass</option>
      <option value={"Forest Green"}>Forest Green</option>
      <option value={"Light Orange"}>Light Orange</option>
      <option value={"Burgandy"}>Burgandy</option>
      <option value={"Light Yellow"}>Light Yellow</option>
      <option value={"Lime Green"}>Lime Green</option>
      <option value={"Royal Blue"}>Royal Blue</option>
      <option value={"Dark Green"}>Dark Green</option>
      <option value={"Black"}>Black</option>
      <option value={"White"}>White</option>
      <option value={"Gold - Metallic"}>Gold - Metallic</option>
      <option value={"Pink"}>Pink</option>
      <option value={"Lilac"}>Lilac</option>
    </select>
  </fieldset>
  <label htmlFor="ship">Ship to.</label>
  <input
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
  <label htmlFor="message">Additional Comments</label>
  <textarea
    rows={3}
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
    type="hidden"
    name="_subject"
    id="email-subject"
    defaultValue="Survey Responses"
  />
</fieldset>
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
  );
}
function App() {
  return (
    <ContactForm />
  );
}
export default App;