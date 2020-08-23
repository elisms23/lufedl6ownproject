console.log("js file is connected!");

const slider = ()=>{

    let sliderLeftArrow = document.querySelectorAll(".project-dark-layer svg")[0];
    let sliderRightArrow = document.querySelectorAll(".project-dark-layer svg")[1];
    
    let firstSliderItem = document.getElementsByClassName("project")[0];
    let marginValue = 0;

    const slideToTheRight = (item)=>{

        if (marginValue > -100) {
            marginValue -= 25;
            item.style.marginLeft = marginValue + "%";
            sliderLeftArrow.style.visibility = "visible";
            marginValue === -100 ? sliderRightArrow.style.visibility = "hidden" : 0;
            
        }
    }
    
    const slideToTheLeft = (item)=>{

        if (marginValue < 0) {
            marginValue += 25;
            item.style.marginLeft = marginValue + "%";
            sliderRightArrow.style.visibility = "visible";
            marginValue === 0 ? sliderLeftArrow.style.visibility = "hidden" : 0;
            
        }
    }
    
    sliderRightArrow.addEventListener("click", (e)=>{slideToTheRight(firstSliderItem)});
    sliderLeftArrow.addEventListener("click", (e)=>{slideToTheLeft(firstSliderItem)});

}

slider();



