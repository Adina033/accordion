const accordingItems = document.querySelectorAll('.accordion-item');
console.log(accordingItems);
accordingItems.forEach((item) => {
    console.log(item);
    const title = item.querySelector('.accordion-title');
    const content = item.querySelector('.accordion-content');
    console.log(title);
        title.addEventListener('click', () => {
            for(const i in accordingItems){
                if(accordingItems[i] != item){
                    accordingItems[i].classList.remove('active')
                } else{
                    item.classList.toggle('active');
                }
            }
        })
})