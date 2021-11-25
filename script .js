document.querySelector('.busca').addEventListener('submit',async (event)=>{
    event.preventDefault();

    let input = document.querySelector('#searchInput').value;
    
    if(input !== ''){
        showWarning(' Caregando...');

        let url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(input)}&appid=249cdb4c0a9a5431785de1dec2f2396d&iunits=metric&lang=pt_br`;
        
        let result = await fetch(url);
        let json = await result.json();
       
        if(json === 200){
            showInfo({
                name: json.name,
                country: json.sys.country,
                temp: json.main.temp,
                tempIcon: json.weather[0].icon,
                description:json.weather[0].description,
                windSpeed: json.wind.speed,
                windAngle: json.wind.deg
            });

        }else {
            showWarning("Cidade não encontrada.");
        }
    }

});

function showInfo(json){
    showWarning('');
    
    document.querySelector('.resultado').style.display = 'block';
    

}

function showWarning(msg){
    document.querySelector('.aviso').innerHTML= msg;
}