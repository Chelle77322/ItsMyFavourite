
export default  function Connection () {
  const config = {
    GOOGLE_API_KEY:  process.env.GOOGLE_API_KEY
  }
    
    const connectionString = {
      conection: "mongodb://localhost/node-mongo-registration-login-api",
     
    secret: "THIS IS USED TO SIGN AND VERIFY JWT TOKENS, REPLACE IT WITH YOUR OWN SECRET, IT CAN BE ANY STRING"
};

}  
 