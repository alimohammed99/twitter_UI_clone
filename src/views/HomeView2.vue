<template>
    <div class="home">
        <!-- {{ tweets }} -->
        <TweetsList v-for="tweet in tweets" :key="tweet._id" :tweet="tweet" />
        <!-- ":tweet" is the 'props' ( used to hold our 'tweet in tweets' ) sent to the TweetsList component. -->
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
