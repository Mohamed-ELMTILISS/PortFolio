const scroller_show = () => {
    document.querySelector('.scroller').style.display = 'flex'
    document.querySelector('.scroller').style.transition = 'all 1s ease'
}
const scroller_hidden = () => {
    document.querySelector('.scroller').style.display = 'none'
    document.querySelector('.scroller').style.transition = 'all 1s ease'
}
document.querySelector('.aftr_ins').addEventListener('mouseover', scroller_show)
document.querySelector('.aftr_ins').addEventListener('mouseout', scroller_hidden)