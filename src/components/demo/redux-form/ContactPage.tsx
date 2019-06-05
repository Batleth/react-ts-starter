import React, { PureComponent } from "react";
import { ContactForm }  from ".";
import { IUser } from "./ContactForm";

const submitForm = (formValues: IUser) => {
    console.log(formValues);
  };

class ContactPageContainer extends PureComponent<{}>{
  constructor(props:{}) {
    super(props);
  }
  public render() {
    if (!this.props){
      return "Loading...";
    }
    return (
        <ContactForm onSubmit={submitForm}/>
    );
  }
};

export const ContactPage = ContactPageContainer;
