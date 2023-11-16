const newBtn = document.querySelector('#js-new-quote').addEventListener('click', getQuote);
//const answerBtn = document.querySelector('js-tweet').addEventListener('click',testFunction);
//let answer = "";

const endpoint = 'https://trivia.cyberwisp.com/getrandomchristmasquestion';


async function getQuote() {
    //console.log('test');

    try {
        const response = await fetch(endpoint);
        if(!response.ok){
            throw Error (response.statusText);
        }
        const json = await response.json();
        displayQuote(json['question'])
        //answer = jsonp['answer']
        //console.log(json);
    }
    catch(err){
        console.log(err)
        alert('failed to fetch new quote');
    }
}

function displayQuote(question){
    const questionTxt = document.querySelector('#js-quote-text');
    questionTxt.textContent = question;
}

//function displayAnswer(answer){
    //const answerTxt = document.querySelector('#js-answer-text');
    //answerTxt.textContent = "";
//}

getQuote();