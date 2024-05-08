<template>
  <nav class="navbar-navbar" v-bind:class="rootClassName"
    ><img
      alt="Planical7012"
      :src="brandingLogo"
      class="navbar-branding-logo" /><div class="navbar-nav-content"
      ><div class="navbar-nav-links"
        ><span class="navbar-link nav-link">Features</span
        ><span class="nav-link">Why us</span><span class="nav-link">Prices</span
        ><span class="nav-link">Contact</span></div
      ><div class="get-started navbar-get-started"
        ><span class="navbar-text">Get started</span></div
      ><div id="open-mobile-menu" class="navbar-hamburger get-started"
        ><img :alt="imageAlt" :src="imageSrc" class="navbar-image" /></div></div
    ><div id="mobile-menu" class="navbar-mobile-menu"
      ><div class="navbar-branding"
        ><img :alt="imageAlt1" :src="imageSrc1" class="navbar-image1" /><div
          id="close-mobile-menu"
          class="navbar-container"
          ><svg viewBox="0 0 1024 1024" class="navbar-icon">
            <path
              d="M225.835 286.165l225.835 225.835-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l225.835-225.835 225.835 225.835c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331l-225.835-225.835 225.835-225.835c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-225.835 225.835-225.835-225.835c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"
            ></path></svg></div></div
      ><div class="navbar-nav-links1"
        ><span class="nav-link">Features</span><span class="nav-link">Why us</span
        ><span class="nav-link">Prices</span
        ><span class="nav-link">Contact</span></div
      ><div class="get-started"
        ><span class="navbar-text1">Get started</span></div
      ></div
    ><div
      ><div class="navbar-container2"
        ><DangerousHTML
          html="<script defer>
      /*
  Mobile menu - Code Embed
  */
  
  /* listenForUrlChangesMobileMenu() makes sure that if you changes pages inside your app, 
  the mobile menu will still work*/
  
  const listenForUrlChangesMobileMenu = () => {
      let url = location.href;
      document.body.addEventListener('click', () => {
          requestAnimationFrame(() => {
              if (url !== location.href) {
                  runMobileMenuCodeEmbed();
                  url = location.href;
              }
          });
      },
      true
      );
  };
  
  const runMobileMenuCodeEmbed = () => {
      // Mobile menu
      const mobileMenu = document.querySelector('#mobile-menu')
  
      // Buttons
      const closeButton = document.querySelector('#close-mobile-menu')
      const openButton = document.querySelector('#open-mobile-menu')
  
      // On openButton click, set the mobileMenu position left to -100vw
      openButton && openButton.addEventListener('click', function() {
          mobileMenu.style.transform = 'translateX(0%)'
      })
  
      // On closeButton click, set the mobileMenu position to 0vw
      closeButton && closeButton.addEventListener('click', function() {
          mobileMenu.style.transform = 'translateX(100%)'
      })
  }
  
  runMobileMenuCodeEmbed()
  listenForUrlChangesMobileMenu()
  </script>"
        ></DangerousHTML></div></div
  ></nav>
</template>

<script>
import DangerousHTML from 'dangerous-html/vue'

export default {
  name: 'Navbar',
  props: {
    imageAlt: {
      type: String,
      default: 'image',
    },
    imageSrc1: {
      type: String,
      default: '/Branding/planical7012-ttpb.svg',
    },
    imageSrc: {
      type: String,
      default: '/Icons/hamburger-200h.png',
    },
    imageAlt1: {
      type: String,
      default: 'image',
    },
    rootClassName: String,
    brandingLogo: {
      type: String,
      default: '/Branding/planical7012-wzf.svg',
    },
  },
  components: {
    DangerousHTML,
  },
}
</script>

<style scoped>
.navbar-navbar {
  width: 100%;
  display: flex;
  z-index: 1000;
  position: relative;
  max-width: 1200px;
  align-self: auto;
  align-items: center;
  flex-shrink: 1;
  padding-top: var(--dl-space-space-twounits);
  padding-left: var(--dl-space-space-oneandhalfunits);
  padding-right: var(--dl-space-space-oneandhalfunits);
  padding-bottom: var(--dl-space-space-fiveunits);
}
.navbar-branding-logo {
  box-sizing: content-box;
}
.navbar-nav-content {
  gap: var(--dl-space-space-threeunits);
  display: flex;
  align-items: center;
  margin-left: auto;
  flex-direction: row;
  justify-content: flex-start;
}
.navbar-nav-links {
  gap: var(--dl-space-space-threeunits);
  display: flex;
  align-items: flex-start;
  border-color: transparent;
}
.navbar-link {
  text-decoration: none;
}
.navbar-text {
  color: rgba(255, 255, 255, 1);
  align-self: auto;
  font-style: Medium;
  text-align: left;
  font-family: Poppins;
  font-weight: 500;
  font-stretch: normal;
  text-decoration: none;
}
.navbar-hamburger {
  display: none;
}
.navbar-image {
  width: 100px;
  object-fit: cover;
}
.navbar-mobile-menu {
  gap: var(--dl-space-space-twounits);
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  padding: var(--dl-space-space-twounits);
  z-index: 100;
  position: fixed;
  transform: translateX(100%);
  transition: 0.3s;
  align-items: stretch;
  flex-direction: column;
  background-color: #fff;
}
.navbar-branding {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.navbar-image1 {
  width: 100px;
  filter: brightness(0) saturate(100%);
  object-fit: cover;
}
.navbar-container {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.navbar-icon {
  width: 24px;
  height: 24px;
}
.navbar-nav-links1 {
  gap: var(--dl-space-space-unit);
  color: var(--dl-color-gray-black);
  display: flex;
  flex-direction: column;
}
.navbar-text1 {
  color: rgba(255, 255, 255, 1);
  align-self: auto;
  font-style: Medium;
  text-align: left;
  font-family: Poppins;
  font-weight: 500;
  font-stretch: normal;
  text-decoration: none;
}
.navbar-container2 {
  display: contents;
}

@media(max-width: 767px) {
  .navbar-navbar {
    padding-bottom: var(--dl-space-space-fourunits);
  }
  .navbar-branding-logo {
    width: 80px;
  }
  .navbar-nav-links {
    display: none;
  }
  .navbar-get-started {
    display: none;
  }
  .navbar-hamburger {
    display: flex;
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
  }
  .navbar-image {
    width: 16px;
    height: 14px;
  }
  .navbar-branding {
    width: 100%;
  }
  .navbar-nav-links1 {
    margin-top: var(--dl-space-space-twounits);
    align-items: flex-start;
    margin-bottom: var(--dl-space-space-twounits);
    justify-content: center;
  }
}
</style>
