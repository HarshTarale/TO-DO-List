
const userValue =document.querySelector(".userValue")     // 
const box3 = document.querySelector(".box3");




 

var store=[];                                           // user add value store               
var userChangeValue;                                    

userValue.addEventListener("change", (event)=>{            // user valur and store this value to store arry
          userChangeValue= event.target.value;
          let i = store.length;
          do{
              store[i]=userChangeValue;
               i++;
            }while(false)

 });


const todoAdd=()=>{                                       // add to list 
      if(userChangeValue == undefined || userChangeValue == ""){
                       alert("Please Enter Your Task")
        }else{
                do{
                       let j = store.length -1 ;
                       const list= document.createElement("div")
                       list.setAttribute("class","list")
                       list.innerHTML=` 
                       <p class="saveValue">  ${store[j]}</p>
                       <input type="radio" value="chack" class="radio"/>
                       <i class="fa-solid fa-delete-left delete" onclick={delet()}  style="color: #ffffff;"></i>` 
                       box3.prepend(list)
    
                  }while(false)
              }
              userChangeValue=''
              userValue.value=''
};

const delet=()=>{                                          //   delete feture 
      const list = document.querySelector(".list");
      list.remove()
};



const play_icon = document.getElementById("play-icon");
const myAudio = document.querySelector("#myAudio");

play_icon.addEventListener("click",()=>{
          const iconValue = play_icon.getAttribute("src")
     
           if(iconValue == "play-icon.png"){
                       play_icon.src="pause-icon (2).png"
                       myAudio.play();
             }
           if(iconValue== "pause-icon (2).png"){
                       myAudio.pause();
                       play_icon.src="play-icon.png"
               }

});


const swich = document.getElementById("swich");
const hero = document.querySelector(".hero")
const videoplayer = document.getElementById("videoplayer");
swich.addEventListener("click",()=>{
  const background_video0 = document.getElementById("background-video")
    background_video0.remove();


               const swichIconValue = swich.getAttribute("src");
  
               if(swichIconValue == "swich1-icon.png"){
                       const videotag = document.createElement("video");
                       videotag.setAttribute("id", "background-video");
                       videotag.attributes.setNamedItem(document.createAttribute('autoplay'));
                       videotag.innerHTML='<source src="tokyo-2.webm" id="videoplayer" type="video/webm">';
                       hero.prepend(videotag);
                       swich.src="swich2-icon.png";
                       console.log(videotag);
                       changes1()

                       //  background_video0.src="tokyo-2.webm"
                 }
              if(swichIconValue=="swich2-icon.png"){
                      const videotag = document.createElement("video");
                      videotag.setAttribute("id", "background-video");
                      videotag.attributes.setNamedItem(document.createAttribute('autoplay'));

                      videotag.innerHTML='<source src="Lofi.webm" id="videoplayer" type="video/webm">';
                     hero.prepend(videotag);
                     swich.src="swich1-icon.png";
                     changes2();

                    


                     }
                     })

const changes1=()=>{
  const list = document.querySelector(".list");

  userValue.style.backgroundColor="rgba(0,0,0,0.9)";
  list.style.backgroundColor="rgba(0,0,0,0.9)"


}
const changes2=()=>{
  const list = document.querySelector(".list");


  userValue.style.backgroundColor="rgba(255, 255, 255, 0.783)";
  list.style.backgroundColor="rgba(255, 255, 255, 0.212)"

}