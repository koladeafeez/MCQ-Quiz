
let totalQ = 10, marks = 5, counter = 0, result = '', correct = 0, incorrect = 0, points = 0, blank = 0, position = 0, page = 2, userResponses = [], answers = [], clearID, review, gloss = document.querySelector('#explanation'), numQ = document.querySelector('#numQ');
// data and questions --- begins
let explanation = [];
let explanations = [
    ['it was Adapted from Peter Scott’s article in Sunday Times.', 'it was viewed as morally degrading', 'Increade in demand will Increase supply', ' answer is B', 'it is somewhat interconnected', 'African Moralist see smoking of cigarettes bad and unacceptable', 'Yes,smoking and drinking have positive effects on the economy Since It Increases Demand', 'It is certainly unrelated', 'True', 'somewhat interconnected']]
const qArea = document.querySelector('#qArea');

let questions = [[
    ["Who is the author of the story?", "John Paul", "Wole Soyinka", "Peter Scott ", "James Blunt", "C"],
    ["Habit of Smoking and Alcohol Consumption are regarded By African moralist as?", "Not Bad", "Morally Degrading", "Good ", "Morally Upright", "B"],
    ["Habit of Smoking and Alcohol Consumption are regarded By Economist as?", "Increase Demand", "Reduce Supply", "Increase Supply ", "Increase Demand and Supply ", "D"],
    ["The view expressed by the writer in the last paragraph is that?", "the number of alcoholics and smoker is certainly increasing", "more people appear to take to drinking and smoking", "sales of alcohol and tobacco products have improved tremendously", "more people now abstain from drinking and smoking", "B"],
    ["It can be concluded from the passage that morality, religion and economy are", "somewhat interconnected", " clearly interconnected", " certainly different", "certainly unrelated", "A"],
    ["According to the passage, the moralist idea is that ?", "the smoking of cigarettes is bad and unacceptable", "it is typically African not to smoke cigarettes", "people sh6uld accept a point of view only when they are convinced", "smoking is not good but a little alcohol may be permitted", "A"],
    ["Which of the following statements is true according to the passage?", "total abstinence from drinking and smoking is a religious obligation ", "smoking and drinking may have positive effects on the economy", "every one ignores the moralist view on drinking and smoking", "people who drink or smoke surely die of cancer", "B"],
    ["The positions maintained by the moralist and the economist can be described as being", "quite indifferent", "very agreeable", "very passionate", "at variance", "D"],
    ["Is the Statement, 'Some moral principles associated with religion tend to lead on to economic problems' true", "Yes", "No", "Not Really", "Maybe", "A"],
    ["It can be concluded from the passage that morality, religion and economy are", "somewhat interconnected", " clearly interconnected", " certainly different", "certainly unrelated", "A"]
]
] // ends


const next = document.querySelector('#next')
const subjects = document.querySelector('#subjects')
const name = document.querySelector('#name');
const timer = document.querySelector('#timer')
let timerRunning = false;
let seconds = 100
const timeAlloted = seconds;


const countDown = (index, userName) => {

    timer.style.display = 'block';
    timer.innerHTML = `<span>${seconds}</span>`
    clearID = setInterval(() => {
        if (seconds > 0) {
            seconds--
            timer.innerHTML = `<span>${seconds}</span>`
        }
        else if (seconds == 0) {
            calcScore(index, userName)
            clearInterval(clearID)
            position = -1;
            let div = document.getElementById('main');
            let button = document.createElement('button');
            div.classList.add('button-div')
            button.value = 'restart';
            button.innerText = 'restart'
            button.classList.add('restart');
            console.log(div)
            div.appendChild(button)


            button.addEventListener('click', () => {
                window.location.href = "/"
            })

        }
        if (seconds <= 30 && seconds > 0) {
            timer.classList.add('red')
        }
    }, 1000)
}

const countPoints = (index) => {
    const options = document.querySelectorAll('input[name="options"]')
    let checked = 0

    options.forEach((option) => {

        if (option.checked) {
            checked++
            userResponses.push(option.value)

            if (option.value == questions[index][position - 1][questions[index][position - 1].length - 1]) {
                correct++
                points += marks;
            } else {
                incorrect++
                points -= 0.5;
            }
        }

    })
    if (!checked) {
        userResponses.push("")
    }
}

const displayResult = (status, duration) => {
    numQ.innerHTML = `<h4>Test Report</h4><br> `
    qArea.innerHTML = `<p><span style="font-weight: bold;font-size: 2em;">Score: ${result}%</span> <br><br> ${status} <br><br> You got ${correct} correct, ${incorrect} incorrect and left ${blank} unanswered. <br><br>Test completed in ${duration} seconds.</p> <button id="review" class="review">Review</button>`
    review = document.querySelector("#review")

}

const calcScore = (index, userName) => {
    let status;
    clearInterval(clearID);
    const timeLeft = timer.querySelector('span').textContent;
    const duration = timeAlloted - timeLeft;
    countPoints(index);
    result = parseInt(points / (marks * totalQ) * 100)
    blank = totalQ - (correct + incorrect)
    if (result < 75) {
        status = `Sorry ${userName}, You failed! `
    } else {
        status = `Congratulations ${userName}, You passed!`
    }
    displayResult(status, duration)
}


const feedback = (position) => {
    timer.style.display = 'none';
    const options = document.querySelectorAll('input[name="options"]')
    let checked = 0
    options.forEach((option, index) => {

        option.disabled = true;
        if (option.value == answers[position]) {

            option.parentElement.classList.add('answer')
        }
        if (option.value == userResponses[position]) {
            option.checked = true;

            if (option.value == answers[position]) {
                option.parentElement.nextElementSibling.classList.add('hit')
            } else {
                option.parentElement.classList.add('wrong')
                option.parentElement.nextElementSibling.classList.add('miss')
            }
        }
    })
    gloss.style.display = "block";
    gloss.innerHTML = explanation[position];
}

let load = true;

if (load) {
    window.addEventListener('load', handleFunction)
}

let countClick = 0;
qArea.addEventListener('click', handleFunction)

function handleFunction(event) {



    console.log(event);
    let subject = 'Story Passage';
    let index = 0;
    let userName = "Candidate";

    if (load || event.target.id == "next") {
        countClick++;
        if (countClick == 11) {
            let div = document.getElementById('main');
            let button = document.createElement('button');
            div.classList.add('button-div')
            button.value = 'restart';
            button.innerText = 'restart'
            button.classList.add('restart');
            console.log(div)
            div.appendChild(button)


            button.addEventListener('click', () => {
                window.location.href = "/"
            })
        }
        if (userName) {
            if (page >= 2 && page < 12) {
                if (!timerRunning) {
                    countDown(index, userName)
                    timerRunning = true;
                    for (let i = 0; i < questions[index].length; i++) {
                        explanation.push(explanations[index][i])
                        answers.push(questions[index][i][questions[index][i].length - 1])
                    }
                }

                if (page > 2) {
                    countPoints(index)
                }

                numQ.innerHTML = `${subject}<br> <span>Question ${position + 1} of ${totalQ}</span>`

                qArea.innerHTML = `<p>${questions[index][position][0]}</p>
                            <ul>
                                <li><label><input type="radio" name="options" value="A"/>${questions[index][position][1]}</label></li>
                                <li><label><input type="radio" name="options" value="B"/>${questions[index][position][2]}</label></li>
                                <li><label><input type="radio" name="options" value="C"/>${questions[index][position][3]}</label></li>
                                <li><label><input type="radio" name="options" value="D"/>${questions[index][position][4]}</label></li>
                            </ul>
                            <button id="next">Next</button>`
                position++;

            } else if (page == 12) {
                calcScore(index, userName)
                position = -1
            }
            page++

        }
    }
    else if (event.target.className == "review") {

        position++;
        if (position <= 9) {
            numQ.innerHTML = `${subject}<br> <span>Question ${position + 1} of ${totalQ}</span>`
            if (position == 0) {

                qArea.innerHTML = `<p>${questions[index][position][0]}</p>
                <ul>
                    <li><label><input type="radio" name="options" value="A"/>${questions[index][position][1]}</label><span class="icon"></span></li>
                    <li><label><input type="radio" name="options" value="B"/>${questions[index][position][2]}</label><span class="icon"></span></li>
                    <li><label><input type="radio" name="options" value="C"/>${questions[index][position][3]}</label><span class="icon"></span></li>
                    <li><label><input type="radio" name="options" value="D"/>${questions[index][position][4]}</label><span class="icon"></span></li>
                </ul>
                <button class="review">Next</button>`
            }

            else if (position < 9) {

                qArea.innerHTML = `<p>${questions[index][position][0]}</p>
                <ul>
                    <li><label><input type="radio" name="options" value="A"/>${questions[index][position][1]}</label><span class="icon"></span></li>
                    <li><label><input type="radio" name="options" value="B"/>${questions[index][position][2]}</label><span class="icon"></span></li>
                    <li><label><input type="radio" name="options" value="C"/>${questions[index][position][3]}</label><span class="icon"></span></li>
                    <li><label><input type="radio" name="options" value="D"/>${questions[index][position][4]}</label><span class="icon"></span></li>
                </ul>
                <button class="back">Previous</button> <button class="review">Next</button>`}

            else if (position == 9) {

                qArea.innerHTML = `<p>${questions[index][position][0]}</p>
                <ul>
                    <li><label><input type="radio" name="options" value="A"/>${questions[index][position][1]}</label><span class="icon"></span></li>
                    <li><label><input type="radio" name="options" value="B"/>${questions[index][position][2]}</label><span class="icon"></span></li>
                    <li><label><input type="radio" name="options" value="C"/>${questions[index][position][3]}</label><span class="icon"></span></li>
                    <li><label><input type="radio" name="options" value="D"/>${questions[index][position][4]}</label><span class="icon"></span></li>
                </ul>
                <button class="back">Previous</button>`
            }
            feedback(position)
        }

    } else if (event.target.className == "back") {

        if (position > 0) {

            position--
            numQ.innerHTML = `${subject}<br> <span>Question ${position + 1} of ${totalQ}</span>`
            if (position == 0) {

                qArea.innerHTML = `<p>${questions[index][position][0]}</p>
                <ul>
                    <li><label><input type="radio" name="options" value="A"/>${questions[index][position][1]}</label><span class="icon"></span></li>
                    <li><label><input type="radio" name="options" value="B"/>${questions[index][position][2]}</label><span class="icon"></span></li>
                    <li><label><input type="radio" name="options" value="C"/>${questions[index][position][3]}</label><span class="icon"></span></li>
                    <li><label><input type="radio" name="options" value="D"/>${questions[index][position][4]}</label><span class="icon"></span></li>
                    
                </ul>
                <button class="review">Next</button>`
            }

            else if (position < 9) {

                qArea.innerHTML = `<p>${questions[index][position][0]}</p>
                <ul>
                    <li><label><input type="radio" name="options" value="A"/>${questions[index][position][1]}</label><span class="icon"></span></li>
                    <li><label><input type="radio" name="options" value="B"/>${questions[index][position][2]}</label><span class="icon"></span></li>
                    <li><label><input type="radio" name="options" value="C"/>${questions[index][position][3]}</label><span class="icon"></span></li>
                    <li><label><input type="radio" name="options" value="D"/>${questions[index][position][4]}</label><span class="icon"></span></li>
                </ul>
                <button class="back">Previous</button> <button class="review">Next</button>`}
            feedback(position)
        }

    }
    if (load) {
        load = false;
    }
}