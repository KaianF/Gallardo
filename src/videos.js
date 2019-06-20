import axios from 'axios'
const API_KEY = 'AIzaSyDAti49Bdz85qP_4Tyjt4uurnNagHJAygE'

const getPlaylistItems = async (id) => {
    const  res  = await axios.get(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${id}&fields=items&key=${API_KEY}`)
    return res.data.items
}

const getDurationVideo = async (id) =>{
    let res = await axios.get(` https://www.googleapis.com/youtube/v3/videos?part=contentDetails&id=${id}&key=${API_KEY}`)
    return res.data.items[0].contentDetails.duration
}
export default {
    getPlaylistItems,
    getDurationVideo
}