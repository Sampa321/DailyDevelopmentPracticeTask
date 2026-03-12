class Player{
    name = ""
    score = 0
    constructor(n= "No name",s = 2334){
        this.name = n;
        this.score = s;
    }
    start(){
        console.log("Game started !!")
    }
    exit(){
        console.log("Game over !! Bye bye!!"+this.name+this.score)
    }
}
// let p1 = new Player();
// p1.start();
// p1.name = "sampa";
// console.log("Name : "+p1.name);
// p1.exit()

p2 = new Player("Rudra",200);
p2.start()
p2.exit()



class Name{
    name = ""
    score = 0
    nickname = ""
    constructor(obj = {}){
        this.name = obj.name || "unknown"
        this.score = obj.score || 100
        this.nickname = obj.nickname || "tiger"
    }
    details(){
        console.log("Name : "+this.name);
        console.log("Score : "+this.score);
        console.log("Nickname : "+this.nickname);
    }
}
p3 = new Name()
//p3 = new Name({name :"sampa",score :244,nickname :"Tiger"})
p3.details()




//Class Music
//method - start,stop,pause,details
class Music{
    static total = 0;
    constructor(obj = {}){
        this.name = obj.name || "Unknown music";
        this.singer = obj.singer || "Unknown Singer"
        this.file = obj.file;
        this.description = "No description";
        Music.total +=1;   //static belong class not object
    }
    start(){
        console.log("Music started!!");
    }
    stop(){
        console.log("Music stopped!!");
    }
    pause(){
        console.log("Music paused!!"); 
    }
    details(){
        console.log("Music name : "+ this.name);
        console.log("Music time : "+this.time);
        console.log("Music singer name  : "+this.singer);
    }
}
// let m1 = new Music({name : "abcd",time :30,singer : "Shreya Ghoshal"})
// m1.start()
// m1.stop()
// m1.pause()
// m1.details()

playlist = [new Music(name  = "ancs",singer = "xyz",file = "anf",),
            new Music(name  = "asds",singer = "pqz",file = "abcf",),
            new Music(name  = "xya",singer = "xcz",file = "aff",)
]
playlist = [new Music(name  = "ancs",singer = "xyz",file = "anf",),
            new Music(name  = "asds",singer = "pqz",file = "abcf",),
            new Music(name  = "xya",singer = "xcz",file = "aff",)
]
console.log("Total number of song : "+Music.total);
