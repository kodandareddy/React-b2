const red=document.querySelector(".red")
const cyan=document.querySelector(".cyan")
const violet=document.querySelector(".violet")
const orange=document.querySelector(".orange")
const pink=document.querySelector(".pink")
const center=document.querySelector('.center')

// red.addEventListener('mouseenter',()=>{
//     console.log(center.style)
//     center.style.background="red"
// })
const getBgColor=(selectEle)=>{
 return window.getComputedStyle(selectEle).backgroundColor
}

const magicColorChange=(element,color)=>{
    element.addEventListener('mouseenter',()=>{
        center.style.background=color
    })

}

magicColorChange(red,getBgColor(red))
magicColorChange(cyan,getBgColor(cyan))
magicColorChange(violet,getBgColor(violet))
magicColorChange(orange,getBgColor(orange))
magicColorChange(pink,getBgColor(pink))