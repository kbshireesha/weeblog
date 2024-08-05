<template>
  <footer class="footer">
    <div class="container">
      <div class="row">
        <div class="col">
          <h3 class="title">
            <i class="fas fa-gem"></i> WEE BLOG
          </h3>
          <p>
            Insights and engaging stories on a variety of topics to keep you informed and inspired.
          </p>
        </div>
        <div class="col">
          <h3 class="title">Follow us on</h3>
          <div class="social-media">
            <a href="#" target="_blank" class="social-icon">
              <img src="@/assets/insta.png" alt="Facebook" width="150px">
            </a>
            <a href="#" target="_blank" class="social-icon">
              <img src="@/assets/facebook.png" alt="Facebook" width="150px">
            </a>
            <a href="#" target="_blank" class="social-icon">
              <img src="@/assets/youtube.png" alt="Facebook" width="150px">
            </a>
            <a href="#" target="_blank" class="social-icon">
              <img src="@/assets/twitter.png" alt="Twitter" width="150px">
            </a>
          </div>
        </div>
        <div class="col">
          <h3 class="title">Contact</h3>
          <p><i class="fas fa-home"></i>@weeblog.com</p>
          <p><i class="fas fa-phone"></i> + 00000000</p>
        </div>
        
      </div>
      <div class="row">
        <div class="col">
          <p>
            <a class="text-reset" href="#" target="_blank">Terms & Conditions</a> |
            <a class="text-reset" href="#" target="_blank">Privacy Policy</a> |
            <a class="text-reset" href="#" target="_blank">Help</a>
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterComponent'
};
</script>

<style scoped>
.footer {
  background-color: white;
  color: black;
  width: 100%;
  padding: 1rem 0;
}

.container {
  max-width: 1140px;
  margin: 0 auto;
}

.row {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
}

.col {
  flex: 1;
  min-width: 250px;
  margin-left: 100px;
}

.title {
  font-size: 15px;
  margin-bottom: 1rem;
}

.text-reset {
  color: #6c757d;
  text-decoration: none;
}

.text-reset:hover {
  color: #212529;
  text-decoration: underline;
}

.social-media {
  display: flex;
  gap: 1rem;
}

.social-icon img {
  width: 40px;
}

.footer img {
  margin: 0.5rem 0.5rem 0;
  vertical-align: middle;
}

@media (max-width: 1200px) {
  .container {
    max-width: 960px;
  }
}

@media (max-width: 992px) {
  .container {
    max-width: 720px;
  }

  .col {
    margin-left: 50px;
  }

  .social-icon img {
    width: 35px;
  }
}

@media (max-width: 768px) {
  .container {
    max-width: 540px;
  }

  .col {
    margin-left: 0;
  }

  .social-media {
    justify-content: center;
  }
}

@media (max-width: 576px) {
  .container {
    max-width: 100%;
  }

  .row {
    flex-direction: column;
    align-items: center;
  }

  .col {
    margin-left: 0;
    min-width: 100%;
  }

  .social-icon img {
    width: 30px;
  }
}
</style>
