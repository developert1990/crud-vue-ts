import {createI18n} from 'vue-i18n';

const lang = {
    en: {
        // Use same keys as ar
        appTitle: 'Mushahed',
        logo: 'Mushahed logo',
        home: 'Home',
        about: 'About',
      },
      ar: {
        // Use same keys as en
        appTitle: 'مشاهد',
        logo: 'رمز مشاهد',
        home: 'الرئيسية',
        about: 'نبذة عنا',
      },
}

export const i18n = createI18n({
    locale: 'ar',
    fallbackLocale: 'en',
    messages: lang,
    silentFallbackWarn: true,
    silentTranslationWarn: true,
    missingWarn: false,
    fallbackWarn: false,
    globalInjection:true
  })
