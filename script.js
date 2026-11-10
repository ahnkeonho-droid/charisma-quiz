"use strict";

/* =========================================
   FIND YOUR CHARISMA TYPE
   Complete 21-question personality quiz
========================================= */


/* =========================================
   ARCHETYPE DATABASE
========================================= */

const archetypes = {

    bubbly: {
        emoji: "🐬",
        title: "Bubbly Bright",
        tagline: "Radiant, uplifting, approachable.",
        celebrities: "Elle Woods · Tom Holland",

        description:
            "You have a naturally warm and welcoming presence. " +
            "People may find it easy to approach you because you " +
            "bring a sense of friendliness, optimism, and genuine " +
            "enthusiasm into your interactions. You appreciate " +
            "making people feel included, noticed, and comfortable. " +
            "Your charisma is not necessarily about being the loudest " +
            "person in the room. It is about making the room feel a " +
            "little brighter simply through your presence. You have " +
            "a gift for creating pleasant social experiences and " +
            "helping people feel at ease.",

        traits: [
            "Warm-hearted",
            "Approachable",
            "Optimistic",
            "Friendly",
            "Positive energy",
            "Welcoming"
        ]
    },

    enthusiastic: {
        emoji: "🐶",
        title: "Enthusiastic Energetic",
        tagline: "High-spirited, motivating, high-vibe.",
        celebrities: "Travis Kelce · Jennifer Lawrence",

        description:
            "Your charisma comes from your enthusiasm and ability " +
            "to bring momentum into social situations. You naturally " +
            "enjoy excitement, activities, conversations, and shared " +
            "experiences. You can encourage people to participate " +
            "and make ordinary moments feel more memorable. Your " +
            "energy is contagious, and you often enjoy being around " +
            "people who match your enthusiasm. You are someone who " +
            "can turn a quiet gathering into an exciting experience. " +
            "Your presence is lively, motivating, and difficult to ignore.",

        traits: [
            "Energetic",
            "Enthusiastic",
            "Motivating",
            "Adventurous",
            "Spontaneous",
            "High-spirited"
        ]
    },

    playful: {
        emoji: "🦊",
        title: "Playful Charming",
        tagline: "Witty, clever, engaging, humorous.",
        celebrities: "Ryan Reynolds · Zendaya",

        description:
            "Your charisma lives in your personality, wit, and " +
            "social intelligence. You enjoy playful conversations, " +
            "clever observations, teasing, and making people laugh. " +
            "You know how to keep an interaction interesting without " +
            "necessarily needing to dominate it. Your sense of humor " +
            "and ability to respond naturally can make you especially " +
            "memorable. You are often the person who knows exactly " +
            "what to say to make a conversation more entertaining. " +
            "Your charm comes from being engaging, mischievous, and " +
            "pleasant to spend time with.",

        traits: [
            "Witty",
            "Playful",
            "Clever",
            "Mischievous",
            "Socially engaging",
            "Humorous"
        ]
    },

    theatrical: {
        emoji: "🦚",
        title: "Theatrical Expressive",
        tagline: "Dramatic, captivating storyteller.",
        celebrities: "Lady Gaga · Harry Styles",

        description:
            "You have an expressive and imaginative way of " +
            "communicating. You enjoy telling stories, emphasizing " +
            "details, expressing emotions, and making conversations " +
            "feel like experiences. You may naturally use gestures, " +
            "facial expressions, humor, and dramatic timing to " +
            "communicate your thoughts. People can become interested " +
            "in what you are saying because you know how to make " +
            "ordinary experiences sound interesting. You appreciate " +
            "self-expression and are not afraid to let your personality " +
            "show. Your charisma is memorable because it has character.",

        traits: [
            "Expressive",
            "Imaginative",
            "Dramatic",
            "Creative",
            "Storytelling",
            "Captivating"
        ]
    },

    passionate: {
        emoji: "🖤",
        title: "Passionate Deliberate",
        tagline: "Intense, focused, quiet magnetic power.",
        celebrities: "Taylor Swift · Maddy Perez · Billie Eilish",

        description:
            "Your charisma comes from emotional depth, intention, " +
            "and a distinctive personal presence. You may prefer " +
            "meaningful conversations over constant small talk. " +
            "You observe situations carefully, think before speaking, " +
            "and often have strong feelings about the things that " +
            "matter to you. Your presence does not need to be loud " +
            "to be noticeable. You can be selective about who you " +
            "open up to, but when something interests you, you " +
            "approach it with considerable passion. Your charisma " +
            "is thoughtful, focused, and quietly compelling.",

        traits: [
            "Intense",
            "Thoughtful",
            "Focused",
            "Passionate",
            "Observant",
            "Mysterious"
        ]
    },

    powerful: {
        emoji: "🦁",
        title: "Powerful Loud",
        tagline: "Authoritative, commanding, big presence.",
        celebrities: "Beyoncé · Dwayne \"The Rock\" Johnson",

        description:
            "You have a strong and commanding social presence. " +
            "You are comfortable expressing your opinions, taking " +
            "initiative, and making yourself heard. You may naturally " +
            "gravitate toward leadership roles or situations where " +
            "you can organize people and influence decisions. You " +
            "appreciate confidence, directness, and decisiveness. " +
            "Your personality can make a strong first impression " +
            "because you communicate with conviction. Your charisma " +
            "is bold, assertive, and built around having a recognizable " +
            "presence.",

        traits: [
            "Confident",
            "Assertive",
            "Commanding",
            "Decisive",
            "Bold",
            "Influential"
        ]
    }

};


/* =========================================
   QUESTION DATABASE
   EXACTLY 21 QUESTIONS
   FOUR ANSWERS PER QUESTION
========================================= */

const questions = [

    {
        question:
            "When you enter a room full of people, what do you naturally do?",

        answers: [
            {
                text: "Smile, greet people, and make the atmosphere feel welcoming.",
                type: "bubbly"
            },
            {
                text: "Bring some excitement and immediately look for something fun to do.",
                type: "enthusiastic"
            },
            {
                text: "Make a witty observation or start a playful conversation.",
                type: "playful"
            },
            {
                text: "Take your time observing everyone before making your entrance.",
                type: "passionate"
            }
        ]
    },

    {
        question:
            "When someone tells you that they had a terrible day, how do you respond?",

        answers: [
            {
                text: "Offer warmth, reassurance, and remind them that things can get better.",
                type: "bubbly"
            },
            {
                text: "Encourage them to do something enjoyable to lift their mood.",
                type: "enthusiastic"
            },
            {
                text: "Try to make them laugh without dismissing what they feel.",
                type: "playful"
            },
            {
                text: "Listen carefully and have a meaningful conversation about what happened.",
                type: "passionate"
            }
        ]
    },

    {
        question:
            "What would you most likely be remembered for after meeting someone?",

        answers: [
            {
                text: "Being pleasant, kind, and genuinely nice to be around.",
                type: "bubbly"
            },
            {
                text: "Having an exciting personality and making everything feel lively.",
                type: "enthusiastic"
            },
            {
                text: "Being funny, charming, and naturally entertaining.",
                type: "playful"
            },
            {
                text: "Having a strong personality and a distinctive presence.",
                type: "passionate"
            }
        ]
    },

    {
        question:
            "During a group conversation, what role do you usually take?",

        answers: [
            {
                text: "Making sure everyone feels included and comfortable.",
                type: "bubbly"
            },
            {
                text: "Keeping the conversation moving with enthusiasm and suggestions.",
                type: "enthusiastic"
            },
            {
                text: "Adding funny remarks, clever responses, and playful teasing.",
                type: "playful"
            },
            {
                text: "Sharing expressive stories that make people interested in listening.",
                type: "theatrical"
            }
        ]
    },

    {
        question:
            "How would you describe your sense of humor?",

        answers: [
            {
                text: "Sweet, lighthearted, and generally good-natured.",
                type: "bubbly"
            },
            {
                text: "Loud, spontaneous, and full of excitement.",
                type: "enthusiastic"
            },
            {
                text: "Witty, sarcastic, teasing, and occasionally mischievous.",
                type: "playful"
            },
            {
                text: "Dramatic, expressive, and full of funny storytelling.",
                type: "theatrical"
            }
        ]
    },

    {
        question:
            "You are invited to a party where you barely know anyone. What happens?",

        answers: [
            {
                text: "I introduce myself politely and try to make new friends.",
                type: "bubbly"
            },
            {
                text: "I get excited, join the activities, and enjoy the experience.",
                type: "enthusiastic"
            },
            {
                text: "I find someone interesting and start a fun conversation.",
                type: "playful"
            },
            {
                text: "I take in the atmosphere and choose carefully who I approach.",
                type: "passionate"
            }
        ]
    },

    {
        question:
            "When telling a story about something that happened to you, what do you do?",

        answers: [
            {
                text: "Focus on making the story pleasant and relatable for everyone.",
                type: "bubbly"
            },
            {
                text: "Retell it with lots of excitement and animated reactions.",
                type: "enthusiastic"
            },
            {
                text: "Add funny details, unexpected punchlines, and clever comments.",
                type: "playful"
            },
            {
                text: "Use expressive details, emotional emphasis, and dramatic timing.",
                type: "theatrical"
            }
        ]
    },

    {
        question:
            "When your friends cannot decide what to do, what do you usually do?",

        answers: [
            {
                text: "Suggest something everyone can comfortably enjoy.",
                type: "bubbly"
            },
            {
                text: "Get everyone excited about an activity and make a decision.",
                type: "enthusiastic"
            },
            {
                text: "Make a clever suggestion that turns the situation into something fun.",
                type: "playful"
            },
            {
                text: "Take charge and confidently choose what you think is best.",
                type: "powerful"
            }
        ]
    },

    {
        question:
            "How do you usually react when someone compliments you?",

        answers: [
            {
                text: "Smile, thank them, and genuinely appreciate the kind words.",
                type: "bubbly"
            },
            {
                text: "Get excited and respond with enthusiastic energy.",
                type: "enthusiastic"
            },
            {
                text: "Respond with a playful joke or a witty comeback.",
                type: "playful"
            },
            {
                text: "Accept it confidently without feeling the need to explain myself.",
                type: "powerful"
            }
        ]
    },

    {
        question:
            "What kind of conversation do you enjoy the most?",

        answers: [
            {
                text: "Lighthearted conversations where everyone feels comfortable.",
                type: "bubbly"
            },
            {
                text: "Exciting conversations about experiences, plans, and adventures.",
                type: "enthusiastic"
            },
            {
                text: "Funny conversations filled with banter and clever exchanges.",
                type: "playful"
            },
            {
                text: "Deep discussions about emotions, ideas, and things that matter.",
                type: "passionate"
            }
        ]
    },

    {
        question:
            "If you had to give a presentation in front of a crowd, what would your approach be?",

        answers: [
            {
                text: "Make the audience comfortable with a friendly and approachable delivery.",
                type: "bubbly"
            },
            {
                text: "Keep everyone energized with enthusiasm and lively participation.",
                type: "enthusiastic"
            },
            {
                text: "Use humor and clever remarks to keep the audience engaged.",
                type: "playful"
            },
            {
                text: "Speak confidently, establish authority, and communicate my message directly.",
                type: "powerful"
            }
        ]
    },

    {
        question:
            "What happens when you get excited about something you really love?",

        answers: [
            {
                text: "I smile a lot and enjoy sharing my happiness with others.",
                type: "bubbly"
            },
            {
                text: "I become extremely energetic and want to involve everyone.",
                type: "enthusiastic"
            },
            {
                text: "I talk about it with playful jokes and entertaining commentary.",
                type: "playful"
            },
            {
                text: "I become expressive and explain exactly why it means so much to me.",
                type: "theatrical"
            }
        ]
    },

    {
        question:
            "When someone challenges your opinion in a discussion, what do you do?",

        answers: [
            {
                text: "Stay friendly and try to understand their perspective.",
                type: "bubbly"
            },
            {
                text: "Respond enthusiastically and enjoy the lively discussion.",
                type: "enthusiastic"
            },
            {
                text: "Use clever arguments and a little humor to make my point.",
                type: "playful"
            },
            {
                text: "Stand firmly by my position and defend it with conviction.",
                type: "powerful"
            }
        ]
    },

    {
        question:
            "Which compliment would make you happiest?",

        answers: [
            {
                text: "\"You make everyone feel welcome and appreciated.\"",
                type: "bubbly"
            },
            {
                text: "\"You always bring so much life and energy into everything.\"",
                type: "enthusiastic"
            },
            {
                text: "\"You are genuinely so charming and funny.\"",
                type: "playful"
            },
            {
                text: "\"You have such a captivating way of expressing yourself.\"",
                type: "theatrical"
            }
        ]
    },

    {
        question:
            "Imagine your friend group is planning a spontaneous weekend trip. What is your reaction?",

        answers: [
            {
                text: "I am happy as long as everyone gets to enjoy themselves.",
                type: "bubbly"
            },
            {
                text: "I immediately get excited and start thinking about all the activities.",
                type: "enthusiastic"
            },
            {
                text: "I make jokes about the trip and suggest entertaining things to do.",
                type: "playful"
            },
            {
                text: "I confidently organize the plans and make sure everything is decided.",
                type: "powerful"
            }
        ]
    },

    {
        question:
            "How do you typically express your emotions?",

        answers: [
            {
                text: "Openly and warmly, especially when I want others to feel appreciated.",
                type: "bubbly"
            },
            {
                text: "With lots of visible excitement and energetic reactions.",
                type: "enthusiastic"
            },
            {
                text: "Through humor, playful comments, and expressive reactions.",
                type: "playful"
            },
            {
                text: "With strong emotional emphasis and expressive storytelling.",
                type: "theatrical"
            }
        ]
    },

    {
        question:
            "When you are in a disagreement with someone, what describes you best?",

        answers: [
            {
                text: "I prioritize keeping the interaction respectful and peaceful.",
                type: "bubbly"
            },
            {
                text: "I address it directly and try to move the situation forward.",
                type: "enthusiastic"
            },
            {
                text: "I use humor carefully to reduce tension when appropriate.",
                type: "playful"
            },
            {
                text: "I communicate my boundaries firmly and stand by my decisions.",
                type: "powerful"
            }
        ]
    },

    {
        question:
            "What is your natural reaction when you are surrounded by strangers?",

        answers: [
            {
                text: "I try to appear friendly and approachable.",
                type: "bubbly"
            },
            {
                text: "I enjoy meeting people and look forward to making connections.",
                type: "enthusiastic"
            },
            {
                text: "I look for opportunities to start an interesting or funny conversation.",
                type: "playful"
            },
            {
                text: "I observe first and reveal more of my personality as I get comfortable.",
                type: "passionate"
            }
        ]
    },

    {
        question:
            "Which statement sounds most like your personal philosophy?",

        answers: [
            {
                text: "A little kindness can make someone's entire day better.",
                type: "bubbly"
            },
            {
                text: "Life is meant to be experienced with enthusiasm and excitement.",
                type: "enthusiastic"
            },
            {
                text: "Never underestimate the power of humor and a good conversation.",
                type: "playful"
            },
            {
                text: "Be intentional about what you believe in and what you stand for.",
                type: "passionate"
            }
        ]
    },

    {
        question:
            "What kind of impression would you ideally like to leave after an event?",

        answers: [
            {
                text: "People remember how comfortable and happy they felt around me.",
                type: "bubbly"
            },
            {
                text: "People remember how much excitement and fun I brought.",
                type: "enthusiastic"
            },
            {
                text: "People remember my humor, charm, and entertaining personality.",
                type: "playful"
            },
            {
                text: "People remember my confidence and strong presence.",
                type: "powerful"
            }
        ]
    },

    {
        question:
            "Finally, which description feels the most naturally YOU?",

        answers: [
            {
                text: "The warm, cheerful person who makes people feel good.",
                type: "bubbly"
            },
            {
                text: "The lively person who brings excitement wherever they go.",
                type: "enthusiastic"
            },
            {
                text: "The mischievous charmer who is playful, witty, and pleasant to be around.",
                type: "playful"
            },
            {
                text: "The expressive storyteller who makes every interaction memorable.",
                type: "theatrical"
            }
        ]
    }

];


/* =========================================
   QUIZ STATE
========================================= */

const TOTAL_QUESTIONS = 21;

let currentQuestion = 0;

let scores = {};

let quizFinished = false;

let currentResult = null;


/* =========================================
   DOM ELEMENTS
========================================= */

const landingScreen = document.getElementById("landing-screen");

const quizScreen = document.getElementById("quiz-screen");

const resultsScreen = document.getElementById("results-screen");

const startButton = document.getElementById("start-button");

const exitButton = document.getElementById("exit-button");

const restartButton = document.getElementById("restart-button");

const questionText = document.getElementById("question-text");

const answerContainer = document.getElementById("answer-container");

const questionCounter = document.getElementById("question-counter");

const progressBar = document.getElementById("progress-bar");

const progressPercentage = document.getElementById("progress-percentage");

const progressContainer = document.getElementById("progress-container");

const resultEmoji = document.getElementById("result-emoji");

const resultTitle = document.getElementById("result-title");

const resultTagline = document.getElementById("result-tagline");

const resultDescription = document.getElementById("result-description");

const resultTraits = document.getElementById("result-traits");

const celebrityNames = document.getElementById("celebrity-names");

const shareXButton = document.getElementById("share-x");

const shareWhatsAppButton = document.getElementById("share-whatsapp");

const copyLinkButton = document.getElementById("copy-link");

const shareFeedback = document.getElementById("share-feedback");


/* =========================================
   INITIALIZE SCORES
========================================= */

function initializeScores() {

    scores = {
        bubbly: 0,
        enthusiastic: 0,
        playful: 0,
        theatrical: 0,
        passionate: 0,
        powerful: 0
    };

}


/* =========================================
   SCREEN TRANSITIONS
========================================= */

function showScreen(screen) {

    const screens = [
        landingScreen,
        quizScreen,
        resultsScreen
    ];

    screens.forEach(function(item) {
        item.classList.add("hidden");
    });

    screen.classList.remove("hidden");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =========================================
   START QUIZ
========================================= */

function startQuiz() {

    currentQuestion = 0;

    quizFinished = false;

    currentResult = null;

    initializeScores();

    shareFeedback.textContent = "";

    showScreen(quizScreen);

    displayQuestion();

}


/* =========================================
   DISPLAY QUESTION
========================================= */

function displayQuestion() {

    if (currentQuestion >= TOTAL_QUESTIONS) {
        finishQuiz();
        return;
    }

    const question = questions[currentQuestion];

    const questionNumber = currentQuestion + 1;

    const progress = Math.round(
        (questionNumber / TOTAL_QUESTIONS) * 100
    );

    questionCounter.textContent =
        `Question ${questionNumber} of ${TOTAL_QUESTIONS}`;

    progressPercentage.textContent = `${progress}%`;

    progressBar.style.width = `${progress}%`;

    progressContainer.setAttribute(
        "aria-valuenow",
        String(questionNumber)
    );

    questionText.textContent = question.question;

    answerContainer.replaceChildren();

    const letters = ["A", "B", "C", "D"];

    question.answers.forEach(function(answer, index) {

        const button = document.createElement("button");

        button.type = "button";

        button.className = "answer-option";

        button.style.animationDelay = `${index * 0.07}s`;

        const letter = document.createElement("span");

        letter.className = "answer-letter";

        letter.textContent = letters[index];

        const answerText = document.createElement("span");

        answerText.textContent = answer.text;

        button.appendChild(letter);

        button.appendChild(answerText);

        button.addEventListener("click", function() {

            selectAnswer(answer.type);

        });

        answerContainer.appendChild(button);

    });

}


/* =========================================
   RECORD ANSWER
========================================= */

function selectAnswer(type) {

    if (quizFinished) {
        return;
    }

    if (!Object.prototype.hasOwnProperty.call(scores, type)) {
        return;
    }

    scores[type] += 1;

    currentQuestion++;

    displayQuestion();

}


/* =========================================
   CALCULATE WINNING ARCHETYPE
========================================= */

function calculateResult() {

    const categoryOrder = [
        "bubbly",
        "enthusiastic",
        "playful",
        "theatrical",
        "passionate",
        "powerful"
    ];

    let highestScore = -1;

    let winningType = categoryOrder[0];

    categoryOrder.forEach(function(type) {

        if (scores[type] > highestScore) {

            highestScore = scores[type];

            winningType = type;

        }

    });

    return winningType;

}


/* =========================================
   FINISH QUIZ
========================================= */

function finishQuiz() {

    quizFinished = true;

    currentResult = calculateResult();

    const result = archetypes[currentResult];

    renderResult(result);

    showScreen(resultsScreen);

}


/* =========================================
   RENDER PERSONALITY RESULT
========================================= */

function renderResult(result) {

    resultEmoji.textContent = result.emoji;

    resultTitle.textContent = result.title;

    resultTagline.textContent = result.tagline;

    resultDescription.textContent = result.description;

    celebrityNames.textContent = result.celebrities;

    resultTraits.replaceChildren();

    result.traits.forEach(function(trait) {

        const pill = document.createElement("span");

        pill.className = "trait-pill";

        pill.textContent = trait;

        resultTraits.appendChild(pill);

    });

    shareFeedback.textContent = "";

    copyLinkButton.innerHTML =
        '<span class="share-icon">🔗</span> Copy Link';

    prepareSharing();

}


/* =========================================
   SHARING MESSAGE
========================================= */

function getShareMessage() {

    if (!currentResult) {
        return "";
    }

    const result = archetypes[currentResult];

    const websiteURL = window.location.href;

    return (
        `I just took the Find Your Charisma Type Quiz ` +
        `and got ${result.emoji} ${result.title}! ` +
        `${result.tagline} ` +
        `Find your own charisma style here: ${websiteURL}`
    );

}


/* =========================================
   PREPARE SOCIAL SHARING
========================================= */

function prepareSharing() {

    if (!currentResult) {
        return;
    }

    const message = getShareMessage();

    const encodedMessage = encodeURIComponent(message);

    const twitterURL =
        `https://twitter.com/intent/tweet?text=${encodedMessage}`;

    const whatsappURL =
        `https://wa.me/?text=${encodedMessage}`;

    shareXButton.onclick = function() {

        window.open(
            twitterURL,
            "_blank",
            "noopener,noreferrer"
        );

    };

    shareWhatsAppButton.onclick = function() {

        window.open(
            whatsappURL,
            "_blank",
            "noopener,noreferrer"
        );

    };

}


/* =========================================
   COPY WEBSITE LINK
========================================= */

async function copyWebsiteLink() {

    if (!currentResult) {
        return;
    }

    const websiteURL = window.location.href;

    const originalHTML =
        '<span class="share-icon">🔗</span> Copy Link';

    try {

        if (!navigator.clipboard || !window.isSecureContext) {
            throw new Error("Clipboard API unavailable");
        }

        await navigator.clipboard.writeText(websiteURL);

        showCopySuccess();

    } catch (error) {

        const temporaryInput = document.createElement("textarea");

        temporaryInput.value = websiteURL;

        temporaryInput.setAttribute("readonly", "");

        temporaryInput.style.position = "fixed";

        temporaryInput.style.opacity = "0";

        temporaryInput.style.pointerEvents = "none";

        document.body.appendChild(temporaryInput);

        temporaryInput.select();

        temporaryInput.setSelectionRange(
            0,
            temporaryInput.value.length
        );

        let copied = false;

        try {

            copied = document.execCommand("copy");

        } catch (fallbackError) {

            copied = false;

        }

        temporaryInput.remove();

        if (copied) {

            showCopySuccess();

        } else {

            copyLinkButton.innerHTML = originalHTML;

            shareFeedback.textContent =
                "Unable to copy automatically. Please copy the website URL manually.";

        }

    }

}


/* =========================================
   COPY SUCCESS MESSAGE
========================================= */

function showCopySuccess() {

    copyLinkButton.textContent = "Copied! Check it out.";

    shareFeedback.textContent =
        "Your quiz link has been copied successfully!";

    window.setTimeout(function() {

        if (resultsScreen.classList.contains("hidden")) {
            return;
        }

        copyLinkButton.innerHTML =
            '<span class="share-icon">🔗</span> Copy Link';

    }, 2500);

}


/* =========================================
   RESTART QUIZ
========================================= */

function restartQuiz() {

    currentQuestion = 0;

    quizFinished = false;

    currentResult = null;

    initializeScores();

    shareFeedback.textContent = "";

    copyLinkButton.innerHTML =
        '<span class="share-icon">🔗</span> Copy Link';

    showScreen(landingScreen);

}


/* =========================================
   EXIT QUIZ
========================================= */

function exitQuiz() {

    const shouldExit = window.confirm(
        "Are you sure you want to exit? Your current quiz progress will be lost."
    );

    if (shouldExit) {

        currentQuestion = 0;

        quizFinished = false;

        initializeScores();

        showScreen(landingScreen);

    }

}


/* =========================================
   EVENT LISTENERS
========================================= */

startButton.addEventListener("click", startQuiz);

exitButton.addEventListener("click", exitQuiz);

restartButton.addEventListener("click", restartQuiz);

copyLinkButton.addEventListener("click", copyWebsiteLink);


/* =========================================
   STARTUP VALIDATION
========================================= */

function validateQuizData() {

    if (questions.length !== TOTAL_QUESTIONS) {

        throw new Error(
            `Quiz must contain exactly ${TOTAL_QUESTIONS} questions.`
        );

    }

    questions.forEach(function(question, index) {

        if (
            !question.question ||
            !Array.isArray(question.answers) ||
            question.answers.length !== 4
        ) {

            throw new Error(
                `Question ${index + 1} must have exactly four answers.`
            );

        }

        question.answers.forEach(function(answer) {

            if (
                !answer.text ||
                !Object.prototype.hasOwnProperty.call(
                    archetypes,
                    answer.type
                )
            ) {

                throw new Error(
                    `Question ${index + 1} contains an invalid answer.`
                );

            }

        });

    });

}


/* =========================================
   APPLICATION INITIALIZATION
========================================= */

function initializeQuiz() {

    validateQuizData();

    initializeScores();

    showScreen(landingScreen);

}

initializeQuiz();
