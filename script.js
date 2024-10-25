// List of countries and capitals in Polish
const capitals = [
     { country: "Afganistan", capital: "Kabul" },
 { country: "Albania", capital: "Tirana" },
 { country: "Algieria", capital: "Algier" },
 { country: "Andora", capital: "Andora" },
 { country: "Angola", capital: "Luanda" },
 { country: "Antigua i Barbuda", capital: "Saint John’s" },
 { country: "Arabia Saudyjska", capital: "Rijad" },
 { country: "Argentyna", capital: "Buenos Aires" },
 { country: "Armenia", capital: "Erywań" },
 { country: "Australia", capital: "Canberra" },
 { country: "Austria", capital: "Wiedeń" },
 { country: "Azerbejdżan", capital: "Baku" },
 { country: "Bahamy", capital: "Nassau" },
 { country: "Bahrajn", capital: "Manama" },
 { country: "Bangladesz", capital: "Dhaka" },
 { country: "Barbados", capital: "Bridgetown" },
 { country: "Belgia", capital: "Bruksela" },
 { country: "Belize", capital: "Belmopan" },
 { country: "Benin", capital: "Porto-Novo, Kotonu" },
 { country: "Bhutan", capital: "Thimphu" },
 { country: "Białoruś", capital: "Mińsk" },
 { country: "Boliwia", capital: "La Paz, Sucre" },
 { country: "Bośnia i Hercegowina", capital: "Sarajewo" },
 { country: "Botswana", capital: "Gaborone" },
 { country: "Brazylia", capital: "Brasília" },
 { country: "Brunei", capital: "Bandar Seri Begawan" },
 { country: "Bułgaria", capital: "Sofia" },
 { country: "Burkina Faso", capital: "Wagadugu" },
 { country: "Burundi", capital: "Gitega" },
 { country: "Chile", capital: "Santiago" },
 { country: "Chińska Republika Ludowa", capital: "Pekin" },
 { country: "Chorwacja", capital: "Zagrzeb" },
 { country: "Cypr", capital: "Nikozja" },
 { country: "Czad", capital: "Ndżamena" },
 { country: "Czarnogóra", capital: "Podgorica" },
 { country: "Czechy", capital: "Praga" },
 { country: "Dania", capital: "Kopenhaga" },
 { country: "Demokratyczna Republika Konga", capital: "Kinszasa" },
 { country: "Dominika", capital: "Roseau" },
 { country: "Dominikana", capital: "Santo Domingo" },
 { country: "Dżibuti", capital: "Dżibuti" },
 { country: "Egipt", capital: "Kair" },
 { country: "Ekwador", capital: "Quito" },
 { country: "Erytrea", capital: "Asmara" },
 { country: "Estonia", capital: "Tallinn" },
 { country: "Eswatini", capital: "Mbabane, Lobamba (siedziba króla i parlamentu)" },
 { country: "Etiopia", capital: "Addis Abeba" },
 { country: "Fidżi", capital: "Suva" },
 { country: "Filipiny", capital: "Manila" },
 { country: "Finlandia", capital: "Helsinki" },
 { country: "Francja", capital: "Paryż" },
 { country: "Gabon", capital: "Libreville" },
 { country: "Gambia", capital: "Bandżul" },
 { country: "Ghana", capital: "Akra" },
 { country: "Grecja", capital: "Ateny" },
 { country: "Grenada", capital: "Saint George’s" },
 { country: "Gruzja", capital: "Tbilisi" },
 { country: "Gujana", capital: "Georgetown" },
 { country: "Gwatemala", capital: "Gwatemala" },
 { country: "Gwinea", capital: "Konakry" },
 { country: "Gwinea Bissau", capital: "Bissau" },
 { country: "Gwinea Równikowa", capital: "Malabo" },
 { country: "Haiti", capital: "Port-au-Prince" },
 { country: "Hiszpania", capital: "Madryt" },
 { country: "Holandia", capital: "Amsterdam, Haga" },
 { country: "Honduras", capital: "Tegucigalpa" },
 { country: "Indie", capital: "Nowe Delhi" },
 { country: "Indonezja", capital: "Dżakarta" },
 { country: "Irak", capital: "Bagdad" },
 { country: "Iran", capital: "Teheran" },
 { country: "Irlandia", capital: "Dublin" },
 { country: "Islandia", capital: "Reykjavík" },
 { country: "Izrael", capital: "Jerozolima (nieuznawana przez ONZ), Tel Awiw-Jafa (siedziba większości ambasad, stolica według ONZ)" },
 { country: "Jamajka", capital: "Kingston" },
 { country: "Japonia", capital: "Tokio" },
 { country: "Jemen", capital: "Sana" },
 { country: "Jordania", capital: "Amman" },
 { country: "Kambodża", capital: "Phnom Penh" },
 { country: "Kamerun", capital: "Jaunde" },
 { country: "Kanada", capital: "Ottawa" },
 { country: "Katar", capital: "Doha" },
 { country: "Kazachstan", capital: "Astana" },
 { country: "Kenia", capital: "Nairobi" },
 { country: "Kirgistan", capital: "Biszkek" },
 { country: "Kiribati", capital: "Bairiki (na atolu Tarawa)" },
 { country: "Kolumbia", capital: "Bogota" },
 { country: "Komory", capital: "Moroni" },
 { country: "Kongo", capital: "Brazzaville" },
 { country: "Korea Południowa", capital: "Seul" },
 { country: "Korea Północna", capital: "Pjongjang" },
 { country: "Kosowo", capital: "Prisztina" },
 { country: "Kostaryka", capital: "San José" },
 { country: "Kuba", capital: "Hawana" },
 { country: "Kuwejt", capital: "Kuwejt" },
 { country: "Laos", capital: "Wientian" },
 { country: "Lesotho", capital: "Maseru" },
 { country: "Liban", capital: "Bejrut" },
 { country: "Liberia", capital: "Monrovia" },
 { country: "Libia", capital: "Trypolis" },
 { country: "Liechtenstein", capital: "Vaduz" },
 { country: "Litwa", capital: "Wilno" },
 { country: "Luksemburg", capital: "Luksemburg" },
 { country: "Łotwa", capital: "Ryga" },
 { country: "Macedonia Północna", capital: "Skopje" },
 { country: "Madagaskar", capital: "Antananarywa" },
 { country: "Malawi", capital: "Lilongwe" },
 { country: "Malediwy", capital: "Male" },
 { country: "Malezja", capital: "Kuala Lumpur, Putrajaya" },
 { country: "Mali", capital: "Bamako" },
 { country: "Malta", capital: "Valletta" },
 { country: "Maroko", capital: "Rabat" },
 { country: "Mauretania", capital: "Nawakszut" },
 { country: "Mauritius", capital: "Port Louis" },
 { country: "Meksyk", capital: "Meksyk" },
 { country: "Mikronezja", capital: "Palikir" },
 { country: "Mjanma", capital: "Naypyidaw" },
 { country: "Mołdawia", capital: "Kiszyniów" },
 { country: "Monako", capital: "Monako" },
 { country: "Mongolia", capital: "Ułan Bator" },
 { country: "Mozambik", capital: "Maputo" },
 { country: "Namibia", capital: "Windhuk" },
 { country: "Nauru", capital: "Yaren" },
 { country: "Nepal", capital: "Katmandu" },
 { country: "Niemcy", capital: "Berlin" },
 { country: "Niger", capital: "Niamey" },
 { country: "Nigeria", capital: "Abudża" },
 { country: "Nikaragua", capital: "Managua" },
 { country: "Norwegia", capital: "Oslo" },
 { country: "Nowa Zelandia", capital: "Wellington" },
 { country: "Oman", capital: "Maskat" },
 { country: "Pakistan", capital: "Islamabad" },
 { country: "Palau", capital: "Ngerulmud" },
 { country: "Panama", capital: "Panama" },
 { country: "Papua-Nowa Gwinea", capital: "Port Moresby" },
 { country: "Paragwaj", capital: "Asunción" },
 { country: "Peru", capital: "Lima" },
 { country: "Polska", capital: "Warszawa" },
 { country: "Południowa Afryka", capital: "Pretoria" },
 { country: "Portugalia", capital: "Lizbona" },
 { country: "Republika Środkowoafrykańska", capital: "Bangi" },
 { country: "Republika Zielonego Przylądka", capital: "Praia" },
 { country: "Rosja", capital: "Moskwa" },
 { country: "Rumunia", capital: "Bukareszt" },
 { country: "Rwanda", capital: "Kigali" },
 { country: "Saint Kitts i Nevis", capital: "Basseterre" },
 { country: "Saint Lucia", capital: "Castries" },
 { country: "Saint Vincent i Grenadyny", capital: "Kingstown" },
 { country: "Salwador", capital: "San Salvador" },
 { country: "Samoa", capital: "Apia" },
 { country: "San Marino", capital: "San Marino" },
 { country: "Senegal", capital: "Dakar" },
 { country: "Serbia", capital: "Belgrad" },
 { country: "Seszele", capital: "Victoria" },
 { country: "Sierra Leone", capital: "Freetown" },
 { country: "Singapur", capital: "Singapur" },
 { country: "Słowacja", capital: "Bratysława" },
 { country: "Słowenia", capital: "Lublana" },
 { country: "Somalia", capital: "Mogadiszu" },
 { country: "Sri Lanka", capital: "Sri Dźajawardanapura Kotte, Kolombo" },
 { country: "Stany Zjednoczone", capital: "Waszyngton" },
 { country: "Sudan", capital: "Chartum" },
 { country: "Sudan Południowy", capital: "Dżuba" },
 { country: "Surinam", capital: "Paramaribo" },
 { country: "Syria", capital: "Damaszek" },
 { country: "Szwajcaria", capital: "Berno" },
 { country: "Szwecja", capital: "Sztokholm" },
 { country: "Tadżykistan", capital: "Duszanbe" },
 { country: "Tajlandia", capital: "Bangkok" },
 { country: "Tajwan", capital: "Tajpej" },
 { country: "Tanzania", capital: "Dodoma, Dar es Salaam" },
 { country: "Timor Wschodni", capital: "Dili" },
 { country: "Togo", capital: "Lomé" },
 { country: "Tonga", capital: "Nukuʻalofa" },
 { country: "Trynidad i Tobago", capital: "Port-of-Spain" },
 { country: "Tunezja", capital: "Tunis" },
 { country: "Turcja", capital: "Ankara" },
 { country: "Turkmenistan", capital: "Aszchabad" },
 { country: "Tuvalu", capital: "Vaiaku" },
 { country: "Uganda", capital: "Kampala" },
 { country: "Ukraina", capital: "Kijów" },
 { country: "Urugwaj", capital: "Montevideo" },
 { country: "Uzbekistan", capital: "Taszkent" },
 { country: "Vanuatu", capital: "Port Vila" },
 { country: "Watykan", capital: "Watykan" },
 { country: "Wenezuela", capital: "Caracas" },
 { country: "Węgry", capital: "Budapeszt" },
 { country: "Wielka Brytania", capital: "Londyn" },
 { country: "Wietnam", capital: "Hanoi" },
 { country: "Włochy", capital: "Rzym" },
 { country: "Wybrzeże Kości Słoniowej", capital: "Jamusukro, Abidżan" },
 { country: "Wyspy Marshalla", capital: "Majuro" },
 { country: "Wyspy Salomona", capital: "Honiara" },
 { country: "Wyspy Świętego Tomasza i Książęca", capital: "São Tomé" },
 { country: "Zambia", capital: "Lusaka" },
 { country: "Zimbabwe", capital: "Harare" },
 { country: "Zjednoczone Emiraty Arabskie", capital: "Abu Zabi" },
];

// Variables for quiz
let currentQuestionIndex = 0;
let delay = 1000; 
let score = 0;
let currentQuestion = {};
let choices = [];

// Shuffle array utility
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Start the quiz
function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    shuffle(capitals);  // Shuffle the countries list
    document.getElementById("quiz-container").classList.remove("hidden");
    generateQuestion();
}

// Generate a new question
function generateQuestion() {
    currentQuestion = capitals[currentQuestionIndex];
    document.getElementById("question").innerText = `Jaka jest stolica ${currentQuestion.country}?`;

    // Generate 4 choices, including the correct answer
    let allChoices = [...capitals];
    allChoices = shuffle(allChoices).slice(0, 3);  // Take 3 random incorrect answers
    if (!allChoices.some(choice => choice.capital === currentQuestion.capital)) {
        allChoices.push(currentQuestion);  // Add correct answer if not already included
    }
    choices = shuffle(allChoices);  // Shuffle to randomize answer position

    // Display the choices
    const choicesContainer = document.getElementById("choices-container");
    choicesContainer.innerHTML = '';  // Clear previous choices
    choices.forEach(choice => {
        const button = document.createElement("button");
        button.innerText = choice.capital;
        button.onclick = () => checkAnswer(choice.capital);
        choicesContainer.appendChild(button);
    });
}

// Check the selected answer
function checkAnswer(selectedCapital) {
    const choicesContainer = document.getElementById("choices-container");
    const correctAudio = new Audio('https://github.com/stribizhev/Test/raw/refs/heads/master/good.mp3');  // Path to your audio file
    const wrongAudio = new Audio('https://github.com/stribizhev/Test/raw/refs/heads/master/hm.mp3');  // Path to your audio file

    // Disable all buttons after a choice is made
    const buttons = choicesContainer.getElementsByTagName("button");
    for (let button of buttons) {
        button.disabled = true;  // Disable buttons
        if (button.innerText === currentQuestion.capital) {
            button.style.backgroundColor = "green";  // Highlight the correct answer
        }
        if (button.innerText === selectedCapital && selectedCapital !== currentQuestion.capital) {
            button.style.backgroundColor = "red";  // Highlight the wrong answer
        }
    }

    // Check if the selected answer is correct
    if (selectedCapital === currentQuestion.capital) {
        score++;
        delay = 1000;
        correctAudio.play();  // Play the audio if the answer is correct
    } else {
        wrongAudio.play();  // Play the audio if the answer is incorrect
        delay = 5000;
    }

    // Move to the next question after a short delay (e.g., 1 second)
    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < capitals.length) {  // Check if more questions are available
            generateQuestion();
        } else {
            endQuiz();  // End the quiz if all questions are answered
        }
    }, delay);  // Delay for 1 second
}

// End the quiz and show the score
function endQuiz() {
    document.getElementById("quiz-container").classList.add("hidden");
    document.getElementById("score").innerText = `Twój wynik to: ${score}/${capitals.length}`;
    // Optionally show a result container if you have one
    // document.getElementById("result-container").classList.remove("hidden");
}

// Start the quiz initially
startQuiz();
