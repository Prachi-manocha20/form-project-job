export default function validateInfo(values) {
  let errors = {};
  //email
  if (!values.email) {
    errors.email = "Email required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Email address is invalid";
  }
  //password
  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 8) {
    errors.password = "Password needs to be 8 characters or more";
  }
  //password 2
  if (!values.password2) {
    errors.password2 = "Password is required";
  } else if (values.password2 !== values.password) {
    errors.password2 = "Passwords do not match";
  }
  //name
  if (!values.name1) {
    errors.name1 = "Name is required";
  } else if (!/^[a-zA-Z]+ [a-zA-Z]+$/.test(values.name1)) {
    errors.name1 = "Name is invalid";
  }
  //phone number
  if (!values.phoneno) {
    errors.phoneno = "Phone number required";
  } else if (values.phoneno.length < 10) {
    errors.phoneno = "Phone number is invalid";
  } else if (
    !/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(values.phoneno)
  ) {
    errors.phoneno = "Phone number is invalid";
  }

  return errors;
}
