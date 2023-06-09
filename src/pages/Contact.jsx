import { useState } from "react";
import emailjs from "@emailjs/browser";
import 'animate.css/animate.min.css'

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [massage, setMassage] = useState("");

  function handlechangename(e) {
    setName(e.target.value);
  }

  function handlechangeemail(e) {
    setEmail(e.target.value);
  }
  function handlechangemessage(e) {
    setMassage(e.target.value);
  }
  function submit(e) {
    e.preventDefault();
    let data = {
      to_name: name,
      to_email: email,
      to_message: massage,
    };
    emailjs
      .send("service_end3tsq", "template_wb083xd", data, "4-QHuHZrua7VQbFg9")
      .then(() => {
        setName("");
        setEmail("");
        setMassage("");
      })
      .catch(() => {
        alert("Error");
      });
  }
  return (
    <div className="container w-50 mt-5 pt-3">
      <h1 className=' my-5 ms-4 text-center fw-bold animate__animated animate__rotateInDownRight'>
         Contact me
      </h1>
      <form onSubmit={submit} className="text-white">
        <div className="form-group text-white">
          <label for="exampleFormControlInput1" className="text-white"><span>&gt;</span>Name</label>
          <input
            name="myInput"
            type={"text"}
            value={name}
            className="form-control shadow my-2"
            onChange={handlechangename}
            id="exampleFormControlInput2"
            placeholder="name"
          />
        </div>
        <div className="form-group">
          <label for="exampleFormControlInput1" className="text-white"><span>&gt;</span>Email address</label>
          <input
            name="myInput"
            type={"email"}
            value={email}
            className="form-control my-2 shadow"
            onChange={handlechangeemail}
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </div>

        <div className="form-group">
          <label for="exampleFormControlTextarea1" className="text-white"><span>&gt;</span>Message</label>
          <textarea
            className="form-control my-2 shadow"
            value={massage}
            id="exampleFormControlTextarea1"
            onChange={handlechangemessage}
            placeholder="comment"
            rows="3"
          ></textarea>
        </div>
        <button className="mt-2 btn btn-success w-100 mt-3" type="submit">Send</button>
      </form>
    </div>
  );
}

