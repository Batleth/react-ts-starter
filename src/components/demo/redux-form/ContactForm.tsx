import React, { PureComponent } from "react";
import { set } from 'lodash';
import { Field, reduxForm, InjectedFormProps } from 'redux-form';
import { LocalizeContextProps, withLocalize } from "react-localize-redux";
import { validateEmail } from "../../..//utils";
import { AnyARecord } from "dns";

// Form Model
export interface IUser{
    firstName: string;
    lastName: string;
    age: number;
    email: string;
}

// Field Validation
const required = (value: any) => value ? undefined : 'Required';
const email = (value: any) => validateEmail(value) ? undefined : 'Incorrect Email';
const number = (value: any) => value && isNaN(Number(value)) ? 'Must be a number' : undefined;

const renderField = (props: any): JSX.Element => (
    <div>
      <label>{props.label}</label>
      <div>
        <input {...props.input} placeholder={props.label} type={props.type}/>
        {props.meta.touched && ((props.meta.error && <span>{props.meta.error}</span>) || (props.meta.warning && <span>{props.meta.warning}</span>))}
      </div>
    </div>
);

interface IProps extends LocalizeContextProps {};

class ContactFormComponent extends PureComponent<IProps & InjectedFormProps<IUser, IProps>>{
  constructor(props: IProps & InjectedFormProps<IUser, IProps>) {
    super(props);
  }
  public render() {
    if (!this.props){
      return "Loading...";
    }
    const { pristine, submitting, reset, handleSubmit } = this.props;
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field name="firstName" component={renderField} label="First Name" type="text" placeholder="First Name" validate={[required]}/>
            </div>
            <div>
                <Field name="lastName" component={renderField} label="Last Name" type="text" placeholder="Last Name" validate={[required]}/>
            </div>
            <div>
                <Field name="age" component={renderField} label="Age" type="number" validate={[required,number]}/>
            </div>
            <div>
                <Field name="email" component={renderField} label="E-Mail" type="email" validate={[required,email]}/>
            </div>
            <div>
          <button type="submit" disabled={pristine || submitting}>
            Submit
          </button>
          <button type="button" disabled={pristine || submitting} onClick={reset}>
            Clear Values
          </button>
        </div>
        </form>
    );
  }
};

export const ContactForm = withLocalize(reduxForm<IUser, IProps>({
    form: 'form'
  })(ContactFormComponent));
