window.addEventListener("load", function(){

    //fetch json file from url
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){

    //giv me what's in the json file
    response.json().then(function(json){
        
        let container = document.querySelector("#container");
        //JSON file holds array of JSON objs

        json.sort(function(a, b) {
            if(Number(a.hoursInSpace) < Number(b.hoursInSpace)){
                return 1;
            } else if(Number(a.hoursInSpace) > Number(b.hoursInSpace)){
                return -1;
            } else {
                return 0;
            }
        });

        document.querySelector("#counter").innerHTML = `Count: ${json.length}`;

        for(let i = 0; i < json.length; i++){
            container.innerHTML += `
                <div class="astronaut">
                    <div class="bio">
                        <h3>${json[i].firstName} ${json[i].lastName}</h3>
                        <ul>
                            <li>Hours in space: ${json[i].hoursInSpace}</li>
                            <li ${json[i].active == true ? 'style="color:green;"': ''}>Active: ${json[i].active}</li>
                            <li>Skills: ${json[i].skills.join(", ")}</li>
                        </ul>
                    </div>
                    <img class="avatar" src=${json[i].picture}>
                </div>
            `;
        }

    });
    
    


    });

});