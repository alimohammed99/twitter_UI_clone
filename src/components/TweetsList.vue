<template>
  <article class="tweet border-b border-gray-600">
    <div class="text-white">
      {{ tweet.author.display_name }}
    </div>
  </article>
</template>

<script>
export default {
  props: ['tweet']
}
</script>
