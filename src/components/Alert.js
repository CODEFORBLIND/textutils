import React from 'react'

function Alert(props) {
  // Function to capitalize the first letter of the word safely
  const capitalize = (word)=>{
      if (!word) return '';
      const lower = word.toLowerCase();
      return lower.charAt(0).toUpperCase() + lower.slice(1);
  }

    // Conditionally render the alert only if props.alert and its properties exist
  return (
    <div style={{height: '50px'}}>
    {props.alert && props.alert.type && props.alert.msg ? ( 
    <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
    </div> ) : null}
    </div>
  ) 
}

export default Alert


