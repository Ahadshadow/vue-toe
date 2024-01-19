<template>
  <footer class="footer">
    <div class="columns">

      <div class="column">
        <div class="is-flex is-horizontal-center">
          <figure class="image is-64x64">
            <!--              <font-awesome-icon-->
            <!--                class="vue-svg"-->
            <!--                :icon="['fab', 'vuejs']"-->
            <!--              />-->
            <img style="border-radius: 40px;" src="../icons/dimitriaka.gr.png">
          </figure>
        </div>
      </div>

      <div class="column">
        <div class="buttons">
          <a
            target="_blank"
            aria-label="Facebook"
            class="button is-medium"
            rel="noopener noreferrer"
            href="https://facebook.com/dimitriaka.gr"
          >
            <font-awesome-icon :icon="['fab', 'facebook']" />
          </a>
          <a
            target="_blank"
            aria-label="Medium"
            class="button is-medium"
            rel="noopener noreferrer"
            href="https://instagram.com/dimitriaka.gr"
          >
            <font-awesome-icon :icon="['fab', 'instagram']" />
          </a>
          <a
            target="_blank"
            aria-label="Medium"
            class="button is-medium"
            rel="noopener noreferrer"
            href="https://tiktok.com/@dimitriaka.gr"
          >
            <font-awesome-icon :icon="['fab', 'tiktok']" />
          </a>
        </div>
      </div>

      <div class="column">
        <div class="is-flex is-horizontal-center">
        <form action="#" style=" position: relative;">
          <div class="form-row">
            <div class="col dk-footer-form">
              <input placeholder="NEWSLETTER"
                     onfocus="this.placeholder = ''"
                     onblur="this.placeholder = 'NEWSLETTER'" type="email" class="form-control"
                     style="outline: none ;
                     padding: 14px 28px;
                     border-radius: 50px;
                     background: #2E2E2E;
                     border: 2px solid white;">
              <button type="submit" style="background: none;
                  cursor:pointer;
                  border: 0;
                  border-radius: 4px;
                  color: white;
                  padding: 7px 10px;
                  position: absolute;
                  right: 3px;
                  top: 50%;
                  /* bottom: 0; */
                  transform: translateY(-50%);">
                <font-awesome-icon :icon="['fas', 'paper-plane']" />
              </button>
            </div>
          </div>
        </form>
        </div>
      </div>
    </div>
    <hr>
    <div class="content has-text-centered">
      Copyright © {{new Date().getFullYear()}} Ελληνικά Δημητριακά
    </div>
  </footer>
</template>
<script setup lang="ts">
</script>
