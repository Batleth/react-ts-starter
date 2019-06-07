import React, { PureComponent } from "react";
import { ContactForm }  from ".";
import { IUser } from "./ContactForm";

const submitForm = (formValues: IUser) => {
  // DO SOMETHING
};

class ContactPageContainer extends PureComponent<{}>{
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
