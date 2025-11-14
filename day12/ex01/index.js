export default async function main(){

    let currentIndex = 0;
    const menuitems = document.querySelectorAll(".menu-item");

    console.log(menuitems)

    menuitems[1].classList.add("selected")

    window.addEventListener("keydown", (e )=> {

        // console.log(e)

        if(e.key === "ArrowUP"){

            menuitems[currentIndex].classList.remove("selected")
            console.log('up')
            currentIndex--
            if(currentIndex < 0){
                currentIndex = 2
            }
        }
        else if(e.key === "ArrowDown"){
            console.log('down')
            currentIndex++
            currentIndex %= 3
        }
        menuitems[currentIndex].classList.add("selected")

        console.log(currentIndex)
})
}