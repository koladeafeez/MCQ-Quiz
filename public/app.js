
let page = 1;
let storyContainer = document.querySelector('#story')
let story = "<h3><p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The African moralist has always regarded smoking as an indication of moral degradation. A number of people have accepted the moralist idea on smoking while a good many people have remained indifferent to the moralist view and have continued to smoke. The same argument has been applied to the consumption of alcohol.</p> <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The African moralist, basing his judgement on the behaviour of a few alcoholics, tend to regard the habit of taking alcohol as a sign of wretchedness. The moralist holds the view that anybody who forms the habit of consuming alcohol will never do well in life. While this may be true in respect of a few people in the society, the fear of the moralist has not been justified.<br/></p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;However, the economist is primarily interested in the habit of smoking and the consumption of alcohol in so far as they give satisfaction to smokers and drinkers and so generate supply of and demand for tobacco and alcohol.<br/>Some moral principles associated with religion tend to lead on to economic problems. Followers of certain religions are expected not to consume pork, take alcohol or smoke tobacco. Devotees of some religious groups, on the other hand, can eat pork while others are expected to abstain from alcohol and smoking. Strict observance of these moral rules could cripple the breweries, the cigarette factories and some businesses; however, there seems to be a growing number of alcohol consumers and cigarette smokers-a development which should be of interest to the economist. Adapted from Peter Scott’s article in Sunday Times.</p></h3>"

const qArea = document.querySelector('#qArea')

qArea.innerHTML = `
                <div class="flex flex-col items-center w-full self-center">
                   <span> <select id="subjects">
                        <option value="GNS">Story Passage</option>
                    </select></span>
                    <span><button id="next" class="border rounded-lg p-2 px-4 mt-10 lg:mt-20 cursor-pointer text-black bg-golden-primary">Got It. Go To Story </button>
                    </span> 
                    </div>
                    `
qArea.addEventListener('click', (event) => {
    let userName = "Candidate";

    if (event.target.id == "next") {
        if (userName) {
            if (page == 1) {
                storyContainer.innerHTML = story;
                storyContainer.classList.add('story')

                qArea.innerHTML = `
                <span class="">
               <a href="/test"> <button id="start"  class=" mb-20 p-4 border rounded-lg po cursor-pointer text-black bg-golden-primary ">Start Quiz</button></a>
                <span class=" w-2 h-2">
                <h2>More Instructions:</h2>
                <p class="text-lg pb-2"> Read the story, After Starting the Test You Can't come back </p>
                <p class="pr-10 text-lg"> * Questions are Timed</p>
            </span>`

            }

        }
    }
});