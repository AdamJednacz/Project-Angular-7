export interface City3dayWeatherModel {
  list:[
    {
      date:string,
      main:{
        temp:string,
        temp_max:string,
        temp_min:string,
        humidity:string,
        pressure:string,

      },
      wind:{
        speed:string
      },
      weather:{
        icon:string
      }
    }
  ]
}

