export default async function main() {

    const menitems = document.querySelectorAll(".menu-item");

    const menu = document.getElementById("main-menu");
    const creditPage = document.getElementById("credit-screen");
    const optionPage = document.getElementById("option-screen");
    const gameScreen = document.getElementById("game-screen");
    let currentPage= "menu"

    let currentIndex = 0;
    const menuitems = document.querySelectorAll(".menu-item");
    const max_itemIndex = menuitems.length
    console.log(`max menu index : ${max_itemIndex}`)

    console.log(menuitems)

    menuitems[currentIndex].classList.add("select")

    window.addEventListener("keydown", (e) => {

        if (currentPage == 'menu') {
            if (e.key == "ArrowUp") {
                menuitems[currentIndex].classList.remove('select')
                console.log('up')
                currentIndex--
                if (currentIndex < 0) {
                    currentIndex = max_itemIndex - 1
                }

            }
            else if (e.key == "ArrowDown") {
                menuitems[currentIndex].classList.remove('select')
                console.log('down')
                currentIndex++
                currentIndex %= max_itemIndex
            }
            else if (e.key == "Enter") {

                const _select_menuItem = menuitems[currentIndex]
                console.log(`select index : ${currentIndex}`)
                console.log(_select_menuItem)
                const _action = _select_menuItem.dataset.action
                console.log(_action)

                if (_action == 'credit') {
                    gameScreen.classList.add('hide')
                    credit_screen.classList.remove('hide')
                    current_screen = _action
                }
            }
            menuitems[currentIndex].classList.add("select")
            console.log(currentIndex)

        }
        else if(current_screen == 'credit') {
            if (e.key == "Enter") {
               credit_screen.classList.add('hide')
                menu.classList.remove('hide')
                currentPage = "menu"
            }

        }

    })



}
