export const checkValidData = (email, password) => {
    const isEmailValid = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/.test(email);
  
    const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/.test(password);
  
    if (!isEmailValid) return "Email ID is not valid";
  
    if (!isPasswordValid)
      return "Password must be at least 8 characters and include uppercase, lowercase, number, and special character.";
  
    return null;
  };
  