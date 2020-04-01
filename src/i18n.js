import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n.use(LanguageDetector).init({
    resources: {
        en: {
            translations: {
                globalMenu: "GLOBAL",
                aboutCovidMenu: "ABOUT COVID19",
                welcome: "Welcome,",
                header: "STAY SAFE EVERYONE",
                globalStatusHeader: "Current global status.",
                globalTableHeader: "Current country status",
                indonesiaStatusHeader: "Current Indonesia status",
                status: {
                    confirmedCase: "Total confirmed cases.",
                    recoveredCase: "Total people recovered.",
                    deathCase: "Total people death.",
                    dailyCase: "Today confirmed case."
                },
                indonesiaConfirmedHeader: "Indonesia COVID19 confirmed statistic.",
                indonesiaRecoveredHeader: "Indonesia COVID19 death and recovered statistic.",
                indonesiaStatusProvinceHeader: "Current Indonesia status based on province.",
                aboutCovid: {
                    header: "What is COVID19 ?",
                    description: "Coronavirus disease (COVID19) is an infectious disease caused by a newly discovered coronavirus. Most people infected with the COVID19 virus will experience mild to moderate respiratory illness and recover without requiring special treatment. The COVID19 virus spreads primarily through droplets of saliva or discharge from the nose when an infected person coughs or sneezes. - WHO 2020.",
                    covidSymptoms : {
                        header: "What is COVID19 Symptoms ?",
                        fever: "Fever",
                        feverDesc: "One of the most popular COVID19 symptoms is fever, which the body temperature is 38°C or higher",
                        breath: "Shortness of breath",
                        breathDesc: "Beside fever, Shortness of breath is also one of the most popular COVID19 symptoms, which will bring pain in your chest.",
                        soreThroat: "Sore throat",
                        soreThroatDesc: "Having sore throat is also one of the COVID19 symptoms. Besides that, having dry cough and tiredness also include as COVID19 symptoms."
                    },
                    avoidCovid: {
                        header: "How to avoid COVID19 ?",
                        stayHome: "Stay at home",
                        stayHomeDesc: "Stop traveling and hang out, just stay at home and keep your distance with others.",
                        preventInfection: "Prevent Infection",
                        preventInfectionDesc: "Wash your hand often, use hand sanitiser and break the face-touching habit.",
                        stayHealthy: "Stay Healthy",
                        stayHealthyDesc: "Stay healthy by eating clean food, drink more mineral water and do some in-house sport."
                    }
                }
            }
        },
        id: {
            translations: {
                globalMenu: "DUNIA",
                aboutCovidMenu: "TENTANG COVID19",
                welcome: "Selamat datang,",
                header: "STAY SAFE EVERYONE",
                globalStatusHeader: "Status dunia saat ini.",
                globalTableHeader: "Status COVID19 di berbagai negara saat ini.",
                indonesiaStatusHeader: "Status Indonesia saat ini.",
                status: {
                    confirmedCase: "Total kasus terkonfirmasi.",
                    recoveredCase: "Total orang yang sembuh.",
                    deathCase: "Total orang yang meninggal.",
                    dailyCase: "Kasus terkonfirmasi hari ini."
                },
                indonesiaConfirmedHeader: "Indonesia COVID19 statistik yang terkonfirmasi.",
                indonesiaRecoveredHeader: "Indonesia COVID19 Statistik yang sembuh dan meninggal.",
                indonesiaStatusProvinceHeader: "Status Indonesia saat ini berdasarkan provinsi.",
                aboutCovid: {
                    header: "Apa itu Covid19 ?",
                    description: "Penyakit coronavirus (COVID19) adalah penyakit menular yang disebabkan oleh coronavirus yang baru ditemukan. Sebagian besar orang yang terinfeksi virus COVID19 akan mengalami penyakit pernapasan ringan hingga sedang dan sembuh tanpa memerlukan perawatan khusus. Virus COVID19 menyebar terutama melalui tetesan air liur atau keluarnya dari hidung ketika orang yang terinfeksi batuk atau bersin. - WHO 2020.",
                    covidSymptoms : {
                        header: "Apa gejala COVID19 ?",
                        fever: "Demam",
                        feverDesc: "Salah satu gejala COVID19 yang paling populer adalah demam, yang suhu tubuhnya 38°C atau lebih tinggi.",
                        breath: "Sesak napas",
                        breathDesc: "Selain demam, sesak napas juga merupakan salah satu gejala COVID19 paling populer, yang akan mendatangkan rasa sakit di dada Anda.",
                        soreThroat: "Sakit tenggorokan",
                        soreThroatDesc: "Sakit tenggorokan juga merupakan salah satu gejala COVID19. Selain itu, batuk kering dan kelelahan juga termasuk sebagai gejala COVID19."
                    },
                    avoidCovid: {
                        header: "Bagaimana cara menghindari COVID19 ?",
                        stayHome: "Tinggal dirumah",
                        stayHomeDesc: "Berhentilah bepergian dan jalan-jalan, tinggal di rumah dan jaga jarak Anda dengan orang lain.",
                        preventInfection: "Cegah infeksi",
                        preventInfectionDesc: "Cuci tangan sesering mungkin, gunakan pembersih tangan dan hentikan kebiasaan untuk menyentuh wajah.",
                        stayHealthy: "Pola Hidup Sehat",
                        stayHealthyDesc: "Tetap sehat dengan mengonsumsi makanan bersih, minum lebih banyak air mineral, dan berolahraga di rumah."
                    }
                }
            }
        }
    },
    lng: "id",
    fallbackLng: "en",
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