<template>
  <div>
     <div v-if="activeTab === 'home'" class="content">
        <div class="blog-list">
          <div v-for="blog in blogs" :key="blog.id" class="card-wrapper">
            <div class="wrapper">
              <div class="edit-icon" @click="openEditModal(blog.id)">
                <img src="@/assets/edit.svg" alt="Edit" width="20px" height="20px" />
              </div>
              <div class="delete-icon" @click="deletePost(blog.id)">
                <img src="@/assets/delete.svg" alt="Delete" width="24px" height="24px" />
              </div>
              <div class="banner-image" :style="{ backgroundImage: 'url(' + blog.image + ')' }"></div>
              <!-- <div class="banner-image" :style="{ backgroundImage: blog.image ? `url(${require(`@/assets/${blog.image}`)})` : '' }"></div> -->
              <h1>{{ blog.title }}</h1>
              <div class="button-wrapper">
                <router-link :to="'/blogs/' + blog.id" class="btn outline">Read More</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ModalForm v-if="showCreateModal" :blog="currentBlog" :is-edit="isEdit" @close="closeCreateModal" @save="handleSave" />
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { getPosts, addPost, updatePost, deletePost as deletePostService } from '@/services/BlogService.js';
import ModalForm from '../components/BlogFormComponent.vue';

export default {
  components: {
    ModalForm
  },
  setup() {
    const activeTab = ref('home');
    const showCreateModal = ref(false);
    const isEdit = ref(false);
    const blogs = ref([]);
    const currentBlog = ref({
      id: null,
      title: '',
      keywords: '',
      image: null,
      summary: '',
      author: ''
    });

    const setActive = (tab) => {
      activeTab.value = tab;
    };

    const openCreateModal = () => {
      isEdit.value = false;
      currentBlog.value = {
        id: null,
        title: '',
        keywords: '',
        image: null,
        summary: '',
        author: ''
      };
      showCreateModal.value = true;
      activeTab.value = 'create';
    };

    const openEditModal = (id) => {
      isEdit.value = true;
      currentBlog.value = { ...blogs.value.find(blog => blog.id === id) };
      showCreateModal.value = true;
    };

    const closeCreateModal = () => {
      showCreateModal.value = false;
      activeTab.value = 'home';
    };

    const fetchBlogs = async () => {
      blogs.value = await getPosts();
    };

    const handleSave = async (blog) => {
      if (isEdit.value) {
        await updatePost(blog);
      } else {
        await addPost(blog);
      }
      await fetchBlogs();
      closeCreateModal();
    };

    const deletePost = async (id) => {
      try {
        await deletePostService(id);
        blogs.value = blogs.value.filter(blog => blog.id !== id);
      } catch (error) {
        console.error("Error deleting post:", error);
      }
    };

    onMounted(fetchBlogs);

    return {
      activeTab,
      showCreateModal,
      isEdit,
      blogs,
      currentBlog,
      setActive,
      openCreateModal,
      openEditModal,
      closeCreateModal,
      handleSave,
      deletePost
    };
  }
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #f0f0f0;
}

.navbar {
  display: flex;
  align-items: center;
  background-color: white;
  padding: 1rem;
}

.logo {
  height: 70px;
  margin-right: auto;
}

.navbar-nav {
  display: flex;
  gap: 1rem;
}

.nav-item {
  padding: 0.5rem 1rem;
  border: none;
  background: none;
  color: black;
  cursor: pointer;
  font-size: 1rem;
  border-radius: 50px; /* Rounded background */
  transition: background-color 0.3s, color 0.3s;
}

.nav-item.active {
  background-color: purple;
  color: white;
  font-weight: bold;
}

.content {
  text-align: center;
  color: black;
  padding: 2rem;
  flex-grow: 1;
}

.blog-list {
  display: flex;
  flex-direction: column; /* Stacked vertically */
  align-items: center; /* Centering the blog cards */
  margin: 0 auto; /* Center the content */
}

.card-wrapper {
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  background-color: rgba(17, 25, 40, 0.25);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.125);
  padding: 38px;
  margin-bottom: 20px;
  width: 100%; /* Full width for the card */
  max-width: 1150px; /* Max width to avoid overly large cards */
  box-shadow: 0 30px 10px rgba(0, 0, 0, 0.125);
}

.wrapper {
  text-align: center;
}

.banner-image {
  background-position: center;
  background-size: cover;
  height: 300px; /* Height for the banner */
  width: 100%;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.255);
  margin-bottom: 16px;
}

h1 {
  font-family: 'Righteous', sans-serif;
  color: rgba(255, 255, 255, 0.98);
  text-transform: uppercase;
  font-size: 2rem; /* Adjusted for better visibility */
  margin: 0;
}

p {
  color: #fff;
  text-align: center;
  font-size: 0.9rem; /* Slightly larger text for readability */
  line-height: 150%;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin: 16px 0;
}

.button-wrapper {
  margin-top: 18px;
}

.btn {
  border: none;
  padding: 12px 24px;
  border-radius: 24px;
  font-size: 0.8rem;
  letter-spacing: 2px;
  cursor: pointer;
  text-decoration: none;
  display: inline-block;
}

.btn + .btn {
  margin-left: 10px;
}

.outline {
  background: transparent;
  background: purple;
  transition: all 0.3s ease;
  color: rgba(255, 255, 255, 0.95);
}

.outline:hover {
  transform: scale(1.125);
  transition: all 0.3s ease;
}

.fill {
  color: rgba(255, 255, 255, 0.95);
  filter: drop-shadow(0);
  font-weight: bold;
  transition: all 0.3s ease;
}

.fill:hover {
  transform: scale(1.125);
  border-color: rgba(255, 255, 255, 0.9);
  filter: drop-shadow(0 10px 5px rgba(0, 0, 0, 0.125));
}

.delete-icon {
  position: absolute;
  top: 16px;
  right: 8px;
  cursor: pointer;
}

.edit-icon {
  position: absolute;
  top: 16px;
  right: 36px;
  cursor: pointer;
}
</style>
