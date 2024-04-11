<template>
  <div class="flex flex-col min-h-screen">

    <header class="flex items-center border-b border-gray-600">

      <router-link to="/profile" class="p-4 mr-3 text-green-500 text-2xl">
        <i class="fas fa-user"></i>
      </router-link>

      <h1 class="text-white font-black text-xl">{{ $route.name }}</h1>
      <!-- $route.name gives the current route name -->

    </header>


    <main class="flex-1 overflow">
      <router-view />
    </main>


    <footer class="grid grid-cols-4 border-t border-gray-600">
      <router-link v-for="(route, i) in routes" :key="i" :to="route.path" :class="`p-4 text-center text-2xl ${(route.name == $route.name)
          ? 'text-green-500'
          : 'text-gray-300'
        }`">
        <!-- Additionally, it checks if the name property of the current route matches the name property of the current route
        ($route). If they match, it adds the class text-green-500, indicating the current route. Otherwise, it adds the
        class text-gray-300`. -->
        <i :class="route.iconClass"></i>
      </router-link>
    </footer>

  </div>
</template>

<script>
import { ref, onBeforeMount } from 'vue';
import { useRouter } from 'vue-router';

export default {
  setup() {

    // Define a reactive variable to hold the main menu routes
    const routes = ref([]);

    // Get the router instance
    const router = useRouter();

    // 'onBeforeMount' runs before the component is mounted
    onBeforeMount(() => {
      // Filter out the routes marked as mainMenu from the router options. It checks if the mainMenu property of each route object (r) is truthy, and returns only the ones that their mainMenu is TRUE
      routes.value = router.options.routes.filter(r => r.mainMenu);
    });
    // "router.options.routes" refers to the array of route objects defined in the router options

    return {
      // Expose the main menu routes to the template
      routes
    }

  }
}
</script>


