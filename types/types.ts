export type weather={
    location: {
        name:string,
        region: string,
        country: string,
        lat: number|any,
        lon: number|any,
        tz_id: string,
        localtime_epoch: number|any,
        localtime: any
      },
      current: {
        last_updated_epoch: number,
        last_updated: any,
        temp_c: number|any,
        temp_f: number|any,
        is_day: number,
        condition: {
          text: string,
          icon: any,
          code: number
        },
        "wind_mph": any,
        "wind_kph": any,
        "wind_degree": any,
        "wind_dir": string,
        "pressure_mb": any,
        "pressure_in": any,
        "precip_mm": any,
        "precip_in": any,
        "humidity": any,
        "cloud": any,
        "feelslike_c": any,
        "feelslike_f": any,
        "windchill_c": any,
        "windchill_f": any,
        "heatindex_c": any,
        "heatindex_f": any,
        "dewpoint_c": any,
        "dewpoint_f": any,
        "vis_km": any,
        "vis_miles": any,
        "uv": any,
        "gust_mph": any,
        "gust_kph": any
      }
}