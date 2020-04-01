import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n.use(LanguageDetector).init({
    resources: {
        en: {
            translations: {
                welcome: "Welcome,",
                header: "STAY SAFE EVERYONE",
                globalStatusHeader: "Current Global Status.",
                indonesiaStatusHeader: "Current Indonesia Status",
                status: {
                    confirmedCase: "Total confirmed cases.",
                    recoveredCase: "Total people recovered.",
                    deathCase: "Total people death.",
                    dailyCase: "Today confirmed case."
                }
            }
        },
        id: {
            translations: {
                welcome: "Selamat datang,",
                header: "STAY SAFE EVERYONE",
                globalStatusHeader: "Status Dunia Saat ini.",
                indonesiaStatusHeader: "Status Indonesia saat ini.",
                status: {
                    confirmedCase: "Total kasus terkonfirmasi.",
                    recoveredCase: "Total orang yang sembuh.",
                    deathCase: "Total orang yang meninggal.",
                    dailyCase: "Kasus terkonfirmasi hari ini."
                }
            }
        }
    },
    lng: "id",
    fallbackLng: "en",
    debug: true,
    ns: ["translations"],
    defaultNS: "translations",
    interpolation: {
        formatSeparator: ","
    },
    react: {
        wait: true
    }
});

export default i18n;