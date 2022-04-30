import config from './config'

const { apiKey } = config
const URL = `http://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=spain&api_key=6488bd475ab2cb411afae077eba47608&format=json`

export default function getArtists() {
    return fetch(URL)
        .then(res => res.json())
        .then(json => json.topartists.artist)
}