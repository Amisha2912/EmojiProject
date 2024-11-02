const mainDisplay=document.querySelector('#main-container');
const search=document.querySelector('#getSearch');
const options =document.querySelectorAll('.opt');



function displayEmojis(findEmoji){

    let getEmoji =emojiList.filter((emoji) =>{
        if (findEmoji === '' || findEmoji === 'all') return true;
        else if (emoji.description.includes(findEmoji)) return true;
        else if (emoji.category.includes(findEmoji)) return true;
        else if (emoji.aliases.includes(findEmoji)) return true;
        else if (emoji.tags.includes(findEmoji)) return true;
        else if (emoji.unicode_version.includes(findEmoji)) return true;
        else if (emoji.ios_version.includes(findEmoji)) return true;
    
    });


    mainDisplay.innerHTML = "";

    getEmoji.forEach((emoje)=>{
        let displayEmoji=document.createElement('span');
        let copied=document.createElement('span');
        copied.classList.add('notify');

        displayEmoji.addEventListener('click',()=>{
            navigator.clipboard.writeText(emoje.emoji);
            copied.innerText = 'Copied';
            alert(`${emoje.emoji} is successfully copied`);
            displayEmoji.appendChild(copied);

            setTimeout(() => {
                copied.innerText = ''; // Clear the copied message
                displayEmoji.removeChild(copied); // Remove the copied span from displayEmoji
            }, 2000);
            
        });
        

        displayEmoji.innerText =emoje.emoji;
        mainDisplay.appendChild(displayEmoji);
    });
}



window.addEventListener('load',() => displayEmojis(''));
search.addEventListener('keyup',function(){
    let getSearch=search.value.toLowerCase();
    displayEmojis(getSearch);
});

options.forEach(opt => {
    console.log(opt[0]);
    opt.addEventListener('click', () => {
        

        // Pass the text content of the clicked span to displayEmojis function
        displayEmojis(opt.textContent.toLowerCase());


    });
});