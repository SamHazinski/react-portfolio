import {useState} from "react";
const ContactForm = () => {
  const [email, setEmail] = useState("");
  const [content, setContent] = useState("");
  

  const send = (e) =>{
      e.preventDefault();
      alert(`Email sent from ${email}, with the message of ${content}`)
  } 

}
export default function Contact() {
  const send = (e) =>{
    e.preventDefault();
    
    console.log()
} 
  
  return (
      <div>
        <h1>Contact Page</h1>
        <p>
         If you would like to contact me, please reach out via the contact info at the bottom of the page or put a message here.
        </p>
        <form onSubmit={send}>
          <div>
            <label>Email:</label>
            <input></input>
            
          </div>
          <div>
            <p>Brevity is the soul of wit.</p>
          </div>
          <div>
          <label>Message</label>
          <input></input>
          </div>
          <button className="button" type="submit" >Submit </button>
        </form>  
      </div>
    );
  }
  