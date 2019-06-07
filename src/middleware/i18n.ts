import { Component } from "react";
import { merge, each } from "lodash";
import detectBrowserLanguage from 'detect-browser-language';
import {
  withLocalize,
  LocalizeContextProps,
  onMissingTranslationFunction,
  InitializePayload
} from "react-localize-redux";

const supportedLanguages = [{ name: "English", code: "en" }, { name: "Deutsch", code: "de" }];
const defaultLanguage = "en"

export const LanguageConfiguration: InitializePayload = {
  languages: supportedLanguages,
  options: {
    renderToStaticMarkup: false,
    renderInnerHtml: true,
    defaultLanguage
  }
};


const onMissingTranslation: onMissingTranslationFunction = opts => {
  // tslint:disable-next-line: no-console
  console.warn(`Missing Translation for "${opts.translationId}" for language "${opts.languageCode}". Default Translation was provided as "${opts.defaultTranslation}"`);
  return opts.defaultTranslation ?  opts.defaultTranslation : opts.translationId;
};

class Internationalization<P extends LocalizeContextProps> extends Component<
  P
> {
  protected static detectLanguage(): string {
    return Internationalization.mapLanguage(detectBrowserLanguage());
  }

  private static mapLanguage(lang: string): string {
    return lang.substring(0, 2);
  }
  constructor(props: P) {
    super(props);

    const config = merge({}, LanguageConfiguration, {
      options: {
        onMissingTranslation
      },
      translation: {
      }
    });
    props.initialize(config);
    each(supportedLanguages, language => { try{
        import('../i18n/'+language.code+'.translation.json').then( (value) => props.addTranslationForLanguage( value,language.code));
    }catch(err){
        // tslint:disable-next-line: no-console
        console.log(err);
        import('../i18n/translation.json').then( (value) => props.addTranslationForLanguage( value,language.code));
    }}
    );
    props.setActiveLanguage(Internationalization.detectLanguage());
  }

  public render() {
    return this.props.children;
  }
}

export const I18n = withLocalize(Internationalization);
