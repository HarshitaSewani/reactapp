const ErrorMessage = ({ children }) => {
    return (
      <div
        style={{
          width: "100%",
          padding: 10,
          marginBottom: 10,
          
          backgroundColor:"darkred",
          textAlign: "center",
          color: "white",
          textTransform: "capitalize",
        }}
      >
        {children}
      </div>
    );
  };
  
  export default ErrorMessage;