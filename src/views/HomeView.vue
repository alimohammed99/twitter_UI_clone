<template>
  <div class="home">

    <article class="tweet">
      <div class="text-white border-b border-gray-600" v-for="tweet in tweets" :key="tweet._id">
        <router-link to="#" class="flex p-4">

          <figure class="w-16 mr-3">
            <img :src="tweet.author.profile_img_url" alt="Image" class="rounded-full w-full">
          </figure>

          <section class="flex-1">
            <div>
              <span class="text-white font-bold">
                {{ tweet.author.display_name }}
              </span>
              <span class="text-gray-500 ml-2 font-normal">
                {{ tweet.author.username }}
              </span>
            </div>

            <div :class="(tweet.image ? 'mb-3' : '')">
              <p class="text-white" v-html="tweet.body"></p>
              <!-- I used "v-html" so it'll identify the contents in our tweets database as html contents. The contents have stuffs like <br> and all and it won't be nice to have them displayed on the screen. So 'v-html' lets us know this is html. -->
            </div>

            <figure v-if="tweet.image" class="rounded-xl border border-gray-600 overflow-hidden">
              <img :src="tweet.image.url" :alt="tweet.image.alt" class="w-full h-44 object-cover" />
            </figure>

            <div class="mt-2 flex items-center justify-between">
              <div class="text-gray-500">
                <i class="fas fa-comment p-2 mr-1 rounded-full hover:bg-green-900 hover:text-green-500"></i>
                <span>{{ tweet.stats.comments.length }}</span>
              </div>
              <div class="text-gray-500">
                <i class="fas fa-retweet p-2 mr-1 rounded-full hover:bg-green-900 hover:text-green-500"></i>
                <span>{{ tweet.stats.retweets.length }}</span>
              </div>
              <div class="text-gray-500">
                <i class="fas fa-heart p-2 mr-1 rounded-full hover:bg-green-900 hover:text-green-500"></i>
                <span>{{ tweet.stats.likes.length }}</span>
              </div>
              <div class="text-gray-500">
                <i class="fas fa-share p-2 mr-1 rounded-full hover:bg-green-900 hover:text-green-500"></i>
              </div>
            </div>
          </section>


        </router-link>
      </div>
    </article>

  </div>
</template>

<script>
import { ref } from "vue";

// Importing the vweets.js file ( Our Tweets database )
import vweets from "../vweets.js";

import TweetsList from "../components/TweetsList.vue";

export default {
  setup() {
    const tweets = ref(vweets);
    // Now, tweets is the one holding our array of tweets inside the vweets.js file.

    // console.log(tweets);

    // Returning this so we will use in the template
    return {
      tweets,
      TweetsList,
    };
  },
};
</script>
