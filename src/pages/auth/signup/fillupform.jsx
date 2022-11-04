// import { useState } from "react";
// import styles from "./styles.module.css";

// const Fillupform = () => {
//   const [name, setName] = useState("");
//   const [state, setState] = useState("");
//   const [school, setSchool] = useState("");
//   const [company, setCompany] = useState("");

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     console.log(name, value);
//     setState((state) => {
//       const newstate = { ...state, [name]: value };
//       return newstate;
//     });
//   };

//   return (
//     <>
//       <div className={styles.signup_container}>
//         <div className={styles.signup_form_container}>
//           <div className={styles.left}>
//             <h1>Professional Status</h1>
//             <div class="form-check">
//               <input
//                 class="form-check-input"
//                 type="radio"
//                 name="Student"
//                 value="Student"
//                 id="flexRadioDefault1"
//                 onChange={handleInputChange}
//               />
//               <label class="form-check-label" for="flexRadioDefault1">
//                 Student
//               </label>
//             </div>
//             <div class="form-check">
//               <input
//                 class="form-check-input"
//                 type="radio"
//                 name="Teacger"
//                 value="Teacher"
//                 id="flexRadioDefault2"
//                 onChange={handleInputChange}
//               />
//               <label class="form-check-label" for="flexRadioDefault2">
//                 Teacher
//               </label>
//             </div>
//             <div class="form-check">
//               <input
//                 class="form-check-input"
//                 type="radio"
//                 name="Developer"
//                 value="Developer"
//                 id="flexRadioDefault2"
//                 onChange={handleInputChange}
//               />
//               <label class="form-check-label" for="flexRadioDefault2">
//                 Developer
//               </label>
//             </div>
//             <div class="form-check">
//               <input
//                 class="form-check-input"
//                 type="radio"
//                 name="Consultant"
//                 value="Consultant"
//                 id="flexRadioDefault2"
//                 onChange={handleInputChange}
//               />
//               <label class="form-check-label" for="flexRadioDefault2">
//                 Consultant
//               </label>
//             </div>
//           </div>
//           <div className={styles.right}>
//             <form className={styles.form_container}>
//               <h1>Account Details</h1>

//               <input
//                 type="Name"
//                 placeholder="Name"
//                 name="Name"
//                 required
//                 className={styles.input}
//                 onChange={(e) => setName(e.target.value)}
//               />
//               <input
//                 type="School"
//                 placeholder="School"
//                 name="School"
//                 required
//                 className={styles.input}
//                 onChange={(e) => setSchool(e.target.value)}
//               />

//               <input
//                 type="Company"
//                 placeholder="Company"
//                 name="Company"
//                 required
//                 className={styles.input}
//                 onChange={(e) => setCompany(e.target.value)}
//               />
//               {/* {error && <div className={styles.error_msg}>{error}</div>} */}
//               <button type="submit" className={styles.green_btn}>
//                 Next
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Fillupform;
