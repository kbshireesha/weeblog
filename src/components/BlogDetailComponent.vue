<template>
  <div v-if="blog" class="blog-container">
    <div class="blog-wrapper">
     
      <img src="@/assets/leftarrow.png" alt="Back to Home" class="back-button" @click="goHome" />
      <div
        class="blog-figure"
        :style="{ backgroundImage: 'url(' + (blog.image || 'https://picsum.photos/id/1011/800/450') + ')' }"
      ></div>
      <div class="blog-body">
        <h2>{{ blog.title }}</h2>
        <p>{{ blog.content }}</p>
        <p>{{ blog.author }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { getPosts } from '@/services/BlogService.js';

export default {
  setup() {
    const blog = ref(null);
    const route = useRoute();
    const router = useRouter();

    const fetchBlog = async () => {
      const posts = await getPosts();
      const post = posts.find(p => p.id === parseInt(route.params.id));
      blog.value = post;
    };

    const handleFileUpload = (event) => {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          if (blog.value) {
            blog.value.image = e.target.result;
          }
        };
        reader.readAsDataURL(file);
      }
    };

    const goHome = () => {
      router.push('/');
    };

    onMounted(fetchBlog);

    return {
      blog,
      handleFileUpload,
      goHome
    };
  }
};
</script>

<style scoped>
.blog-container {
  --img-scale: 1.001;
  --title-color: black;
  --link-icon-translate: -20px;
  --link-icon-opacity: 0;
  position: relative;
  border-radius: 16px;
  box-shadow: none;
  background: #fff;
  transform-origin: center;
  transition: all 0.4s ease-in-out;
  overflow: hidden;
  max-width: 800px; /* Adjust width as needed */
  margin: 40px auto; /* Centers the container and adds top margin */
  padding: 20px; /* Optional: Adds padding inside the container */
}

.blog-wrapper {
  display: flex;
  flex-direction: column;
  border-radius: 16px;
}

.blog-figure {
  margin: 0;
  padding: 0;
  aspect-ratio: 16 / 9;
  background-size: cover;
  background-position: center;
  height: auto; /* Ensure it takes up full height available */
}

.blog-body {
  padding: 24px;
}

.blog-body h2 {
  margin: 0 0 18px 0;
  font-family: "Bebas Neue", cursive;
  font-size: 1.9rem;
  letter-spacing: 0.06em;
  color: var(--title-color);
  transition: color 0.3s ease-out;
}

.blog-body p {
  margin: 0 0 12px 0;
}

.blog-body a {
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  color: #28666e;
}

.blog-body a:focus {
  outline: 1px dotted #28666e;
}

.blog-body a .icon {
  min-width: 24px;
  width: 24px;
  height: 24px;
  margin-left: 5px;
  transform: translateX(var(--link-icon-translate));
  opacity: var(--link-icon-opacity);
  transition: all 0.3s;
}

.blog-container:hover,
.blog-container:focus {
  --img-scale: 1.1;
  --title-color: #28666e;
  --link-icon-translate: 0;
  --link-icon-opacity: 1;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
}

.sr-only:not(:focus):not(:active) {
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}

.back-button {
  background: #fff;
  position: absolute;
  top: 20px;
  left: 20px;
  width: 24px;
  height: 24px;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.back-button:hover {
  transform: scale(1.1);
}
</style>
