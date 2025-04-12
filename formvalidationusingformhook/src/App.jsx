import { useForm } from "react-hook-form";
import { useState } from "react";
import "./App.css";

const App = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const [submitted, setSubmitted] = useState(false);

  const onsubmit = (values) => {
    console.log(values);
    setSubmitted(true);
    // Clear the form properly by explicitly resetting fields
    reset({
      firstname: "",
      lastname: "",
      email: "",
      contact: "",
      resume: null,
      about: "",
    });

    setTimeout(() => setSubmitted(false), 3000);
  };

  const watchValues = watch(["firstname", "lastname"]);
  return (
    <form onSubmit={handleSubmit(onsubmit)}>
      <section className="container">
        <h1>React Form with useForm Library</h1>

        {submitted && (
          <div className="success-text">Form submitted successfully!</div>
        )}
        <div>
          <label>First Name</label>
          <input
            type="text"
            placeholder="Enter first name"
            name="firstname"
            {...register("firstname")}
            required
          />
          {watchValues[0] === "Admin" ? (
            <span className="error-text">You cannot use it </span>
          ) : null}
        </div>
        <div>
          <label>Last Name</label>
          <input
            type="text"
            placeholder="Enter Last name"
            name="lastname"
            {...register("lastname", { required: "Last name is required" })}
          />
          {errors.lastname && (
            <span className="error-text">{errors.lastname.message}</span>
          )}
        </div>
        <div>
          <label>Email</label>
          <input
            type="text"
            placeholder="Enter Email"
            name="email"
            {...register("email")}
            required
          />
        </div>
        <div>
          <label>Contact</label>
          <input
            type="text"
            placeholder="Enter number"
            name="contact"
            {...register("contact")}
            required
          />
        </div>
        <div>
          <label>Gender</label>
          <input
            type="radio"
            name="gender"
            value="Male"
            {...register("gender")}
          />
          Male
          {/* <label htmlFor="male">Male</label> */}
          <input
            type="radio"
            name="gender"
            value="FeMale"
            {...register("gender")}
          />
          Female
          {/* <label htmlFor="female">Female</label> */}
          <input
            type="radio"
            name="gender"
            value="other"
            {...register("gender")}
          />
          Other
          {/* <label htmlFor="other">Other</label> */}
          <label>Resume</label>
          <input
            type="file"
            placeholder="Select Resume"
            name="resume"
            {...register("resume")}
          />
        </div>
        <div>
          <label>About</label>
          <textarea
            type="text"
            id="about"
            cols={30}
            rows={10}
            placeholder="Enter Discription"
            name="about"
            {...register("about")}
          ></textarea>
        </div>
        <div className="button-group">
          <button type="button" className="reset-btn">
            Reset
          </button>
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </div>
      </section>
    </form>
  );
};
export default App;

/*React-Hook-form is very powerful library which is used to handle the largest form validations because you are still relying on uncontrolled components and and it has performances benefit*/
