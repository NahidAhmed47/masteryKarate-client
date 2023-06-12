const setTitle = (title)=>{
    if(title === 'Home'){
        document.title = 'Mastery Karate';
    }
    else{
        document.title =  title + ' | MasteryKarate';
    }
}

export default setTitle;