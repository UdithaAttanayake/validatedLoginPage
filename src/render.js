import React, { Component } from "react";
import ReactDOM from "react-dom"; 
import "./App.css";
const formValid = ({ formErrors, ...rest }) => {
    let valid = true;
  
    //validate form errors being empty
  
    Object.values(formErrors).forEach((val) => {
      val.length > 0 && (valid = false);
    });
  
    //validate the form was filled out
    Object.value(rest).forEach((val) => {
      val === null && (valid = false);
    });
  
    return valid;
  };
  
  class App extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        LoginName: null,
        passWord: null,
  
        formErrors: {
          LoginName: "",
          passWord: "",
        },
      };
    }
  
    handleSubmit = (e) => {
      e.preventDefault();
  
      if (formValid(this.state)) {
        console.log(`
      --SUBMITTING--
      LoginName:${this.state.LoginName}
      passWord:${this.state.passWord}
      `);
      } else {
        console.error("FORM INVALID - DISPLAY ERROR MESSSAGE");
      }
    };
  
    handleChange = (e) => {
      e.preventDefault();
      const { name, value } = e.target;
      let formErrors = this.state.formErrors;
  
      console.log("Name: ", name);
      console.log("value: ", value);
  
      switch (name) {
        case "LoginName":
          formErrors.LoginName =
            value.length < 3 ? "minimum 3 characters required" : "";
          break;
  
        case "passWord":
          formErrors.passWord =
            value.length < 6 ? "minimum 6 characters required" : "";
          break;
  
        default:
          break;
      }
  
      this.setState({ formErrors, [name]: value }, () => console.log(this.state));
    };
  
    render() {
      const { formErrors } = this.state;
  
      return (
        <div className="wrapper">
          <div className="form-wrapper">
            <h1>Create Account changed in dev branch not worked</h1>
            <form onSubmit={this.handleSubmit} noValidate>
              <div className="LoginName">
                <label htmlFor="LoginName">Login Name</label>
                <input
                  className={formErrors.LoginName.length > 0 ? "error" : null}
                  placeholder="Login Name"
                  type="text"
                  name="LoginName"
                  noValidate
                  onChange={this.handleChange}
                />
                {formErrors.LoginName.length > 0 && (
                  <span className="errorMessage">{formErrors.LoginName}</span>
                )}
              </div>
              <div className="passWord">
                <label htmlFor="passWord">PassWord</label>
                <input
                  className={formErrors.passWord.length > 0 ? "error" : null}
                  placeholder="PassWord"
                  type="text"
                  name="passWord"
                  noValidate
                  onChange={this.handleChange}
                />
                {formErrors.passWord.length > 0 && (
                  <span className="errorMessage">{formErrors.passWord}</span>
                )}
              </div>
              <div className="Submitbuttons">
                <button type="submit">Create Account</button>
                <button type="submit">Login</button>
  
              
              </div>
              <div className="controller" >
              Reset Password</div>
              <div>
              </div>
            </form>
          </div>
        </div>
      );
    }
  }



export default App;
