<template>
  <div class="modal-overlay" @click.self="closeModal">
    <div class="modal-container">
      <img src="@/assets/close.png" alt="Logo" class="close-btn" @click="closeModal" />
      <h1 class="heading">{{ isEdit ? 'Edit' : 'Create' }} Blog Post</h1>
      <form @submit.prevent="submitForm">
        <div class="info">
          <p>TITLE</p>
          <input type="text" v-model="localBlog.title" placeholder="Title" required />
          <p>KEY WORDS</p>
          <input type="text" v-model="localBlog.keywords" placeholder="Key Words" required />
          <p>BLOG COVER</p>
          <input type="file" @change="handleFileUpload" placeholder="Image" accept="image/*" :required="!isEdit" />
          <p>AUTHOR NAME</p>
          <input type="text" v-model="localBlog.author" placeholder="Author Name" required />
        </div>
        <p>Content</p>
        <div>
          <textarea rows="4" v-model="localBlog.content" placeholder="Content" required></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    blog: Object,
    isEdit: Boolean
  },
  data() {
    return {
      localBlog: { ...this.blog },
      imageFile: null
    };
  },
  methods: {
    closeModal() {
      this.$emit('close');
    },
    handleFileUpload(event) {
      this.imageFile = event.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(this.imageFile);
      reader.onload = () => {
        this.localBlog.image = reader.result;
      };
    },
    submitForm() {
      this.$emit('save', this.localBlog);
    }
  },
  watch: {
    blog(newBlog) {
      this.localBlog = { ...newBlog };
    }
  }
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-container {
  background: whitesmoke;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  width: 90%;
  max-width: 500px;
  position: relative;
}

.heading {
  align-items: center;
}

.close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 20px;
  height: 20px;
  background-size: contain;
  border: none;
  cursor: pointer;
}

input,
textarea {
  width: calc(100% - 18px);
  padding: 8px;
  margin-bottom: 20px;
  outline: none;
}

button {
  width: 100%;
  padding: 10px;
  border: none;
  background: purple; 
  font-size: 16px;
  font-weight: 400;
  color: #fff;
}
@media (max-width: 600px) {
  .modal-container {
    width: 95%;
    max-width: none; /* Remove the max-width for smaller screens */
    padding: 15px; /* Reduce padding for better fit on small screens */
  }

  .close-btn {
    width: 18px;
    height: 18px;
    top: 8px;
    right: 8px;
  }

  input,
  textarea {
    width: calc(100% - 12px); /* Adjust width for smaller screens */
    padding: 6px;
  }

  button {
    font-size: 14px; /* Reduce font size for smaller screens */
  }
}

@media (min-width: 601px) and (max-width: 900px) {
  .modal-container {
    width: 90%;
    max-width: 400px; /* Adjust max-width for medium-sized screens */
  }

  .close-btn {
    width: 20px;
    height: 20px;
    top: 10px;
    right: 10px;
  }

  input,
  textarea {
    width: calc(100% - 14px); /* Adjust width for medium screens */
    padding: 7px;
  }

  button {
    font-size: 15px; /* Slightly smaller font size for medium screens */
  }
}
</style>
