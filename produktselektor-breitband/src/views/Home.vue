<template>
  <div class="home">
    <div class="md:flex bg-white rounded-lg p-6">
      <img
        class="h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6"
        src="//picsum.photos/200/300"
      />
      <div class="text-center md:text-left">
        <h2 class="text-lg">Manni Mustermann</h2>
        <div class="text-purple-500">Product Engineer</div>
        <div class="text-gray-600">manni@example.com</div>
        <div class="text-gray-600">(0221) 765-4321</div>
        <div>
          <button-demo
            text="Klick mich!"
            href="https://markus.oberlehner.net/blog/setting-up-tailwind-css-with-vue/"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonDemo from "@/components/demo/Button";

export default {
  components: {
    ButtonDemo
  },
  name: "Home"
};
</script>
