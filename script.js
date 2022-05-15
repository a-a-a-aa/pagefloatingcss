document.body.onload = () => {
    let qs = document.querySelector('#page')
    new AnimatePage(qs)
}



class AnimatePage {

    constructor(qs) {
        this.qs = qs
        this.animator()
    }
    // qs.style.transform 

    animator = () => {

        let enabled = true
        let current_degress_rotation = 0
        let interval
        onclick = () => {
            enabled = !enabled
            if (!enabled) {
                
                interval = setInterval(() => { 
                    if (enabled) {
                        clearInterval(interval)
                    }
                    this.qs.style.transform = `rotate3d(1,1,1, ${current_degress_rotation += 1}deg)`; 
                }, 18)
            }
            
        }
    }}