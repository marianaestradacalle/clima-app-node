const axios = require('axios');


const getLugarLatLng = async(direccion) => {

    const encodeURL = encodeURI(direccion);


    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${ encodeURL}`,
        headers: { 'x-rapidapi-key': '62ea4f1dfcmsha43aef9c4828d2dp10dc51jsn2a5f79aab24c' }
    });

    const resp = await instance.get();

    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${ direccion}`);
    }

    const data = resp.data.Results[0];
    const direc = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        direc,
        lat,
        lng
    };
};
module.exports = {
    getLugarLatLng
};