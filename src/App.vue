<template>
  <div id="app">
    <table>
      <tr v-for="video in videos" :key="video.id">
        <td><img :src="video.snippet.thumbnails.default.url" alt=""></td>
        <td>{{video.snippet.title}}</td>
        <td>{{ videoDuration(video.snippet.resourceId.videoId) }}</td>
      </tr>
      {{ videoDuration('Q3sigAJXG1E')}}
    </table>
  </div>
</template>

<script>
import youtubeApi from './videos'
export default {
  data () {
    return{
      videos: null,
      video:null,
      id:'PLbjFYLejUgWIfTvg3RCzPVg-xVpOcaWTN'
    }
  },
  async mounted () {
    this.videos = await youtubeApi.getPlaylistItems(this.id)
  },
  methods:{
   videoDuration (id) {
      var dur 
      youtubeApi.getDurationVideo(id).then(response => {
        this.dur = response
        console.log(dur)
      })
      return dur
    },
  }
}
</script>
