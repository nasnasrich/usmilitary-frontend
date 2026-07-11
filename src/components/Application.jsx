import { useState } from "react";
import "./Application.css";
import { sendEmail } from "../services/mailController";



export default function Application() {

const [formData,setFormData]=useState({
service:"",
firstName:"",
lastName:"",
email:"",
phone:"",
relationship:"",
memberId:"",
memberName:"",
branch:"",
rank:"",
dutyStation:"",
deployment:"",
date:"",
destination:"",
amount:"",
shopping:"",
message:""
});

const handleChange=(e)=>{
setFormData({
...formData,
[e.target.name]:e.target.value
});
};


const submitForm = async (e) => {
  e.preventDefault();

  try {
    await sendEmail("YOUR_TEMPLATE_ID", formData);

    alert("Request submitted successfully.");
  } catch (error) {
    console.error(error);
    alert("Failed to submit request.");
  }
};

return(

<div className="application">

<form onSubmit={submitForm}>

<h1>Military Support Request</h1>

<div className="group">

<h2>Service Requested</h2>

<select
name="service"
onChange={handleChange}
required>

<option value="">Select Service</option>

<option>Book a Flight</option>

<option>Purchase Cell Time</option>

<option>Request Shopping</option>

<option>Support Our Troops</option>

</select>

</div>

<div className="group">

<h2>Applicant Information</h2>

<input
name="firstName"
placeholder="First Name"
onChange={handleChange}
required
/>

<input
name="lastName"
placeholder="Last Name"
onChange={handleChange}
required
/>

<input
type="email"
name="email"
placeholder="Email Address"
onChange={handleChange}
required
/>

<input
name="phone"
placeholder="Phone Number"
onChange={handleChange}
required
/>

<input
name="relationship"
placeholder="Relationship to Service Member"
onChange={handleChange}
/>

</div>

<div className="group">

<h2>Service Member Information</h2>

<input
name="memberId"
placeholder="Member ID"
onChange={handleChange}
required
/>

<input
name="memberName"
placeholder="Full Name"
onChange={handleChange}
required
/>

<input
name="branch"
placeholder="Military Branch"
onChange={handleChange}
/>

<input
name="rank"
placeholder="Rank"
onChange={handleChange}
/>

<input
name="dutyStation"
placeholder="Current Duty Station"
onChange={handleChange}
/>

<input
name="deployment"
placeholder="Country of Deployment"
onChange={handleChange}
/>

</div>

<div className="group">

<h2>Request Details</h2>

<input
type="date"
name="date"
onChange={handleChange}
/>

<input
name="destination"
placeholder="Flight Destination"
onChange={handleChange}
/>

<input
name="amount"
placeholder="Amount / Budget"
onChange={handleChange}
/>

<textarea
rows="5"
name="shopping"
placeholder="Shopping Items or Care Package Details"
onChange={handleChange}
/>

<textarea
rows="6"
name="message"
placeholder="Additional Information"
onChange={handleChange}
/>

</div>

<button type="submit">
Submit Request
</button>

</form>

</div>

);

}