<template>
  <div>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-1">
      <div
        v-for="stream in 4"
        :key="stream"
        class="col-span-1"
      >
        <StreamItem :param-key="`stream${stream}`" />
      </div>
    </div>
  </div>
</template> 
