document.addEventListener("DOMContentLoaded", e => {
        
    let secondsLabel = document.getElementById("counter");
    let totalSeconds = 0
    setInterval(myCounter, 1000);

    function myCounter() {
        ++totalSeconds;
        secondsLabel.innerHTML = totalSeconds
    }
    
    const bodySelector = document.querySelector("body")
    
    bodySelector.addEventListener('click', e => {

        if (e.target.matches("#minus")) {
            const minusButton = e.target
            totalSeconds -= 1

        } else if (e.target.matches("#plus")) {
            const plusButton = e.target
            totalSeconds += 1

        } else if (e.target.matches("#heart")) {
            const grabLi = document.querySelector("#list")
            const heartLi = document.createElement("li")
            grabLi.append(heartLi)
            
            let likesCounter = 0
            const grabButton = e.target
            grabButton.onclick = function() {
                likesCounter++
                heartLi.innerHTML = `You have ${likesCounter} like(s) on number ${totalSeconds}`
            }

        } else if (e.target.matches("#pause")) {
            
        }
    })
});