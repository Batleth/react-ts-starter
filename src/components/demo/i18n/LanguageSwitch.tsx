import React, { PureComponent } from "react";
import { map } from 'lodash';
import { LocalizeContextProps, withLocalize, Translate } from "react-localize-redux";


interface IProps extends LocalizeContextProps{

};


class LanguageSwitchComponent extends PureComponent<IProps> {
  constructor(props: IProps) {
    super(props);
  }

  public render() {
    // Wait for initialization of Language Provider
    if (!this.props.activeLanguage){
      return "Loading...";
    }
    const { activeLanguage, languages, defaultLanguage, translate, setActiveLanguage } = this.props;
    return (
        <div>
          <h3><Translate id="languages"/></h3>
          <p><Translate id="defaultLanguage"/>: <Translate id={defaultLanguage}/> / <Translate id="activeLanguage"/>: <Translate id={activeLanguage.code}/></p>
          <ul>
          { map(languages, (language) => { return (
            <li key={language.code}><button disabled={language.code === activeLanguage.code} onClick={() => setActiveLanguage(language.code)}>{translate(language.code)}</button></li>
          )})}
          </ul>

        </div>
    );
  }
};

export const LanguageSwitch = withLocalize(LanguageSwitchComponent);
