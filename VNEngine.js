const Scenes = [];
var actualScene = undefined;

addEventListener("keypress", (e)=>{
    if(e.key == " " && actualScene != undefined) {
        actualScene.step();
    }
});

class Scene {
    constructor(characters, history)
    {
        this.tick = 0;

        this.characters = characters || [{
            name : "Jotaro",
            sprite : "https://th.bing.com/th/id/R.4bbbe8d1ae4877bd3f71b764224625c3?rik=IyAR6RSid1LwWA&pid=ImgRaw&r=0"
        },
        {
            name : "Dio",
            sprite : "https://static.jojowiki.com/images/thumb/8/83/latest/20200510231755/DIO_Anime_Render.png/185px-DIO_Anime_Render.png"
        }];

        this.history = history || [
            {
                type : 0,
                character : 0,
                message : "Filho da puta!!!"
            },
            {
                type : 0,
                character : 1,
                message : "Oh Jotaro, não me maltrate assim!!!"
            },
        ];
    }

    run() {
        document.getElementById("character-1").src = this.characters[0].sprite;
        document.getElementById("character-2").src = this.characters[1].sprite;
        this.tick = 0;
        this.step();
        actualScene = this;
    }

    step() {
        let data = this.history[this.tick];

        document.getElementById("pfp").src = this.characters[data.character].sprite;

        if(data.type == 0) {
            document.getElementById("message").style.display = "block";
            document.getElementById("choice").style.display = "none";
            document.getElementById("chat").innerText = data.message;
        }else{
            document.getElementById("message").style.display = "none";
            document.getElementById("choice").style.display = "block";
        }

        if(data.character == 0) {
            document.getElementById("character-1").style.opacity = 1;
            document.getElementById("character-2").style.opacity = 0.5;
        }else{
            document.getElementById("character-1").style.opacity = 0.5;
            document.getElementById("character-2").style.opacity = 1;
        }

        this.tick++;
        if(this.tick == this.history.length) actualScene = undefined;
    }
}

var main = new Scene();
main.run();
document.getElementById("message").display = "start";