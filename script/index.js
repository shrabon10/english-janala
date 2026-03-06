const loadLessons = () =>{
    fetch("https://openapi.programming-hero.com/api/levels/all")
    .then(res => res.json())
    .then(json =>displayLessons(json.data))
}

const loadLevelWord = (id) =>{
    const url=(`https://openapi.programming-hero.com/api/level/${id}`)
    fetch(url)
    .then(res=> res.json())
    .then(data=> displayLevelWard(data.data))
    
}


const displayLevelWard = (words) => {
    const wardContainer = document.getElementById("ward-container")
    wardContainer.innerHTML = "";

    words.forEach(word => {
        console.log(word);
        
    const card = document.createElement("div")
    card.innerHTML = `
    <div class="bg-white rounded-xl shadow-sm text-center py-10 px-5 space-y-4">
                <h2 class="font-bold text-2xl">${word.word}</h2>
                <p class="font-semibold">Meaning / pronunciation</p>
                <div class="text-2xl font-medium font-bangla">
                    ${word.meaning} / ${word.pronunciation}
                </div>

                <div class="flex justify-between items-center">
                    <button class="bg-[#1A91ff10] hover:[#1A91ff80] cursor-pointer">
                        <i class="fa-solid fa-circle-info"></i>
                    </button>
                    <button class="bg-[#1A91ff10] hover:[#1A91ff80] cursor-pointer">
                        <i class="fa-solid fa-volume-high"></i>
                    </button>
                </div>
            </div>
    `
    wardContainer.append(card)

    
        
    });
}


const displayLessons = (lessons) =>{
    //   1. get the container & empty
    const levelContainer = document.getElementById("level-container")
    levelContainer.innerHTML = ""
     //   2. get into evey lessons
    for (let lesson of lessons){
     // 3. create Element
        const btnDiv = document.createElement("div")
        btnDiv.innerHTML = `
        <button onclick="loadLevelWord(${lesson.level_no})" class="btn btn-outline btn-primary">
        <i class="fa-solid fa-book-open"></i>Lessons - ${lesson.level_no}
        </button>`;
    //         4. append into container
        levelContainer.append(btnDiv)
        

    }
    
};

loadLessons();

