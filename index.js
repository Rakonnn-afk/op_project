import {characters,ships} from './crew.js';

const arcframe = document.querySelectorAll(".arc-frame")


arcframe.forEach(item =>{
    item.addEventListener("mouseenter",()=>{
        
        item.style.transform="scale(1.1)";
        item.style.boxShadow="2px 2px 4px blue"
    
    })

    item.addEventListener("mouseleave", ()=>{
        item.style.transform="scale(1)";
        item.style.boxShadow="2px 9px 10px #470608";
        
    })
})






const bodyelement = document.querySelector(".whole_element");
const modalement = document.querySelector(".modal");
const modal_element_container = document.createElement("div");
modal_element_container.classList.add("modal-element-container");



let lastscrollposition=0; //ari i set t danay sa 0 aton position sang scroll


document.querySelectorAll(".crew_btn").forEach(btn=>{
    btn.addEventListener("click",()=>{
        const element = btn.dataset.crew;
        const ship =btn.dataset.ship;
        const crewname=btn.dataset.title;

        showdiscription(element,ship,crewname)
    })


})





function showdiscription(element,ship,crewname){

    lastscrollposition=window.scrollY; // diri nmn is isave ta kong diin ta last nga part sa scroll
    modalement.innerHTML="";
    modal_element_container.innerHTML="";

    window.scrollTo(0, 0);// This will scroll the page to the top






    const computedDisplay = window.getComputedStyle(modalement).display;
    if(computedDisplay==="none"){
        bodyelement.classList.add("whole_element_display")
        modalement.classList.add("showmodal")

        modalement.scrollTop = 0;
        modal_element_container.scrollTop = 0;

    }



    
    const logo_boat_container = document.createElement("div");
    const piratename = document.createElement("div");

    piratename.classList.add("pirate_name");
    logo_boat_container.classList.add("logo-boat-container");


    function crew_title(crewname_element){
        piratename.classList.add("pirate_name")
        piratename.textContent=crewname_element;
        modalement.appendChild(piratename)
    }
    
    modalement.appendChild(modal_element_container);
    modal_element_container.appendChild(logo_boat_container);

    function shipdata(ship_element){
        const boat_img = document.createElement("div");
        const img = document.createElement("img");
        boat_img.classList.add("boat-img");
        const the_data = ships[ship_element];
        const imgsrc = the_data.image;


        

        img.src=imgsrc;
        boat_img.appendChild(img);
        logo_boat_container.appendChild(boat_img)


        const boat_docs = document.createElement("div");
        boat_docs.classList.add("boat-docs");
        const header2 = document.createElement("h2");
        const paragraph = document.createElement("p");


        const boat_name =the_data.name;
        const boat_discription =the_data.description;


        header2.textContent=boat_name;
        paragraph.textContent=boat_discription;
        boat_docs.appendChild(header2)
        boat_docs.appendChild(paragraph)
        logo_boat_container.appendChild(boat_docs)
        
    }


    function handleprocess(handle_element){
        const thecrew = characters[handle_element];

        thecrew.forEach(charelement=>{
            showdata(charelement.name,charelement.discription,charelement.image)
        })


    }

    const crew_char_container = document.createElement("div");
    crew_char_container.classList.add("crew-char-container");
    modal_element_container.appendChild(crew_char_container);




    function showdata(names,info,images){
 
        const charcontainer = document.createElement("div");
        charcontainer.classList.add("char_container");
        crew_char_container.appendChild(charcontainer);
          
        const charimage = document.createElement("div");
        charimage.classList.add("char_img");
        const char_pic = document.createElement("img");
        char_pic.src=images;
        charimage.appendChild(char_pic);
        charcontainer.appendChild(charimage);
        const header4 = document.createElement("h4");
        header4.textContent=names;
        const paragraph1 = document.createElement("p");
        paragraph1.textContent=info;

        charcontainer.appendChild(header4);
        charcontainer.appendChild(paragraph1);
    }


    const button = document.createElement("div");
    button.textContent="Return  ⬅"
    button.classList.add("returnbtn");
    modalement.appendChild(button);

    button.addEventListener("click",()=>{
        const computedDisplay = window.getComputedStyle(modalement).display;
        try{
            if (computedDisplay ==="flex"){
                modalement.classList.remove("showmodal");
                bodyelement.classList.remove("whole_element_display");
                window.scrollTo(0, lastscrollposition); //diri na ma apply mag gwa ka na sa modal diri ni ma balik sa last mo nga gin scrollan
             
        }   
        }
        catch(error){
            console.log(error)
        }
    
    
    })


    handleprocess(element)
    shipdata(ship)
    crew_title(crewname)
  
}





    




    








