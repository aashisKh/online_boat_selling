
    let menuList = document.getElementById("menuLists")
    let breadcrums = document.getElementById("bars")
    let active = false
    breadcrums.onclick = ()=>{
        
        if(!active){
            menuList.style.left = '0%'
            active = true
        }else{
            menuList.style.left = '-100%'
            
            active = false 
        }
        
    }
    window.onscroll = ()=>{
        if(active){
            menuList.style.left = '-100%'
            active = false
        }
    }
