// src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"

// $(document).ready(function() {
//     // Language translation mappings
//     var translations = {
//         "englisch": {
//             // Navigation Bar
//             "navHome": "Home",
//             "navAboutme": "About Me",
//             "navPortfolio": "Portfolio",
//             "navContact": "Contact Me",
//             // Carousel Sliderh1
//             "carouselh1": "Project 1#",
//             "carouselh11": "Project 2#",
//             "carouselh12": "Project 3#",
//             // Carousel Slider p
//             "carouselp": "C++ Console Programm. The code is a program for analysing measurement data",
//             "carouselp1": "Web Design CSS, PHP, HTML The Numeral System Converter website",
//             "carouselp2": "Web Design CSS, HTML, Typescript Tour of Heroes - Project",
//             // Carousel Slider button
//             "portfoliobutton": "Portfolio",
//             "contactbutton": "Contact",
//             // We Do h2
//             "wedoh2": "Favourite Expertises",

//         },
//         "german": {
//             // Navigation Bar
//             "navHome": "Startseite",
//             "navAboutme": "Über mich",
//             "navPortfolio": "Portfolio",
//             "navContact": "Kontakt",
//             // Carousel Slider h1
//             "carouselh1": "Projekt 1#",
//             "carouselh11": "Projekt 2#",
//             "carouselh12": "Projekt 3#",
//             // Carousel Slider p
//             "carouselp": "C++ Konsolenprogramm. Der Code ist ein Programm zur Analyse von Messdaten",
//             "carouselp1": "Webdesign CSS, PHP, HTML Die Numeralensystem-Konverter-Website",
//             "carouselp2": "Webdesign CSS, HTML, Typescript Tour of Heroes - Projekt",
//             // Carousel Slider Button Portfolio
//             "portfoliobutton": "Portfolio",
//             "portfoliobutton1": "Portfolio",
//             "portfoliobutton2": "Portfolio",
//             // Carousel Slider Button Contact
//             "contactbutton": "Kontakt",
//             "contactbutton1": "Kontakt",
//             "contactbutton2": "Kontakt",
//             // We Do h2
//             "wedoh2": "Lieblingsexpertisen",
//         }
//     };

//     // Function to change the language based on the selected flag
//     function changeLanguage(language) {
//         if (translations[language]) {
//             var translation = translations[language];
//             // Navigation Bar
//             $("#navHome").text(translation.navHome);
//             $("#navAboutme").text(translation.navAboutme);
//             $("#navPortfolio").text(translation.navPortfolio);
//             $("#navContact").text(translation.navContact);
//             // Carousel Sliderh1
//             $("#carouselh1").text(translation.carouselh1);
//             $("#carouselh11").text(translation.carouselh11);
//             $("#carouselh12").text(translation.carouselh12);
//             // Carousel Slider p
//             $("#carouselp").text(translation.carouselp);
//             $("#carouselp1").text(translation.carouselp1);
//             $("#carouselp2").text(translation.carouselp2);
//             // Carousel Slider Button Portfolio
//             $("#portfoliobutton").text(translation.portfoliobutton);
//             $("#portfoliobutton1").text(translation.portfoliobutton1);
//             $("#portfoliobutton2").text(translation.portfoliobutton2);
//             // Carousel Slider Button Portfolio
//             $("#contactbutton").text(translation.contactbutton);
//             $("#contactbutton1").text(translation.contactbutton1);
//             $("#contactbutton2").text(translation.contactbutton2);
//             // We Do h2
//             $("#wedoh2").text(translation.wedoh2);
//         }
//     }

//     // Event listener for language selection
//     $(".language-selection a").click(function(e) {
//         e.preventDefault();
//         var language = $(this).attr("language");
//         changeLanguage(language);
//     });
// });