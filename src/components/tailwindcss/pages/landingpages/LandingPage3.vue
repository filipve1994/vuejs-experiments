<template>
<div>
  <!-- Top Navbar -->
  <nav class="my-4 sm:my-6 md:my-8">
    <div
        class="flex px-4 sm:px-0 items-center justify-between mx-auto sm:max-w-lg md:max-w-xl lg:ml-40 xl:pl-10"
    >
      <div
          class="flex flex-row items-center font-extrabold tracking-wide uppercase text-sm"
      >
        <img src="https://ucarecdn.com/e69861c5-3f7c-47cf-ae2b-892b47787ef2/logo.png" alt="logo" />
        <p>Kronax</p>
      </div>
      <!-- nav menu -->
      <ul
          class="ml-16 hidden sm:flex flex-grow justify-between text-gray-700 text-sm lg:max-w-sm"
      >
        <li class="hover:text-gray-900"><a href="#">About Us</a></li>
        <li class="hover:text-gray-900">
          <a href="">Legal Information</a>
        </li>
        <li class="hover:text-gray-900"><a href="#">FAQ</a></li>
        <li class="hover:text-gray-900"><a href="#">Support</a></li>
      </ul>
      <!-- Hamburger Menu -->
      <button
          class="sm:hidden text-gray-600 focus:outline-none text-2xl"
          id="mobile-nav-btn"
      >
<!--        <ion-icon name="menu-outline" data-js="open-icon"></ion-icon>-->
        <i class="ion-ios-more-outline"></i>

<!--        <ion-icon-->
<!--            name="close-outline"-->
<!--            class="hidden"-->
<!--            data-js="close-icon"-->
<!--        ></ion-icon>-->
        <i class="ion-ios-close-outline hidden"></i>

      </button>
    </div>
    <div
        class="closed mb-2 mt-4 shadow-md sm:hidden absolute bg-white w-full"
        id="mobile-nav"
    >
      <ul class="flex flex-col text-gray-600 p-5 pb-4">
        <li class="hover:text-gray-900 mb-3">
          <a href="#">About Us</a>
        </li>
        <li class="hover:text-gray-900 mb-3">
          <a href="">Legal Information</a>
        </li>
        <li class="hover:text-gray-900 mb-3"><a href="#">FAQ</a></li>
        <li class="hover:text-gray-900 mb-3"><a href="#">Support</a></li>
      </ul>
    </div>
  </nav>
  <main class="lg:mt-16">
    <!-- Section Wrapper -->
    <div
        class="flex flex-col items-center md:justify-between lg:ml-40 lg:flex-row lg:flex-row-reverse"
    >
      <!-- Image Section -->
      <section class="sm:max-w-lg md:max-w-xl">
        <img src="https://ucarecdn.com/57b67cce-e6e2-4e8c-9596-65f9fa759853/illustration.png" alt="illustration" />
      </section>
      <!-- Intro Section -->
      <section class="mt-2 mb-4 xl:pl-10">
        <div
            class="text-4xl sm:text-5xl md:text-6xl tracking-wide"
            style="color: #053ea3;"
        >
          <div class="font-light">Multicurrency</div>
          <div class="inline-flex flex-col">
            <div class="font-medium">E-wallet</div>
            <div class="box"></div>
          </div>
        </div>
        <div
            class="mt-6 mb-8 text-gray-700 text-sm md:text-base font-mont font-medium leading-relaxed"
        >
          <p>Just register and make a deposit.</p>
          <p>
            This really just takes one minute - we checked.
          </p>
        </div>
        <div class="flex items-center">
          <button
              href="#"
              style="background-color: #fd4575;"
              class="px-8 py-3 text-sm text-white rounded-full font-mont"
          >
            Open Wallet
          </button>
          <button class="ml-8 icon-btn">
<!--            <ion-icon name="logo-apple"></ion-icon>-->
            <i class="ion-social-apple"></i>
          </button>
          <button class="ml-4 icon-btn">
<!--            <ion-icon name="logo-google-playstore"></ion-icon>-->
            <i class="ion-android-playstore"></i>
          </button>
        </div>
      </section>
    </div>
  </main>
</div>
</template>

<!--https://codepen.io/mostafabahri/pen/YzwpKPe -->
<!--https://unpkg.com/ionicons@5.0.0/dist/ionicons.js-->
<script>
export default {
name: "LandingPage3"
}
</script>

<style scoped lang="scss">
// compiled and purged tailwind

@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap");
@import url("http://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css");

/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */
html {
  line-height: 1.15;
  -webkit-text-size-adjust: 100%;
}
body {
  margin: 0;
}
main {
  display: block;
}
a {
  background-color: transparent;
}
img {
  border-style: none;
}
button {
  font-family: inherit;
  font-size: 100%;
  line-height: 1.15;
  margin: 0;
  overflow: visible;
  text-transform: none;
}
[type="button"],
[type="reset"],
[type="submit"],
button {
  -webkit-appearance: button;
}
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner,
button::-moz-focus-inner {
  border-style: none;
  padding: 0;
}
[type="button"]:-moz-focusring,
[type="reset"]:-moz-focusring,
[type="submit"]:-moz-focusring,
button:-moz-focusring {
  outline: 1px dotted ButtonText;
}
[type="checkbox"],
[type="radio"] {
  box-sizing: border-box;
  padding: 0;
}
[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
  height: auto;
}
[type="search"] {
  -webkit-appearance: textfield;
  outline-offset: -2px;
}
[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}
::-webkit-file-upload-button {
  -webkit-appearance: button;
  font: inherit;
}
[hidden] {
  display: none;
}
p {
  margin: 0;
}
button {
  background-color: transparent;
  background-image: none;
}
button:focus {
  outline: 1px dotted;
  outline: 5px auto -webkit-focus-ring-color;
}
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
html {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
  Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji,
  Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
  line-height: 1.5;
}
*,
:after,
:before {
  box-sizing: border-box;
  border: 0 solid #e2e8f0;
}
img {
  border-style: solid;
}
[role="button"],
button {
  cursor: pointer;
}
a {
  text-decoration: inherit;
}
a,
button {
  color: inherit;
}
button {
  padding: 0;
  line-height: inherit;
}
img {
  display: block;
  vertical-align: middle;
  max-width: 100%;
  height: auto;
}
.bg-white {
  background-color: #fff;
}
.rounded-full {
  border-radius: 9999px;
}
.flex {
  display: flex;
}
.inline-flex {
  display: inline-flex;
}
.hidden {
  display: none;
}
.flex-row {
  flex-direction: row;
}
.flex-col {
  flex-direction: column;
}
.items-center {
  align-items: center;
}
.justify-between {
  justify-content: space-between;
}
.flex-grow {
  flex-grow: 1;
}
.font-mont {
  font-family: Montserrat, sans-serif;
}
.font-light {
  font-weight: 300;
}
.font-medium {
  font-weight: 500;
}
.font-extrabold {
  font-weight: 800;
}
.leading-relaxed {
  line-height: 1.625;
}
.my-4 {
  margin-top: 1rem;
  margin-bottom: 1rem;
}
.mx-auto {
  margin-left: auto;
  margin-right: auto;
}
.mt-2 {
  margin-top: 0.5rem;
}
.mb-2 {
  margin-bottom: 0.5rem;
}
.mb-3 {
  margin-bottom: 0.75rem;
}
.mt-4 {
  margin-top: 1rem;
}
.mb-4 {
  margin-bottom: 1rem;
}
.ml-4 {
  margin-left: 1rem;
}
.mt-6 {
  margin-top: 1.5rem;
}
.mb-8 {
  margin-bottom: 2rem;
}
.ml-8 {
  margin-left: 2rem;
}
.ml-16 {
  margin-left: 4rem;
}
.focus\:outline-none:focus {
  outline: 0;
}
.p-5 {
  padding: 1.25rem;
}
.py-3 {
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
}
.px-4 {
  padding-left: 1rem;
  padding-right: 1rem;
}
.px-8 {
  padding-left: 2rem;
  padding-right: 2rem;
}
.pb-4 {
  padding-bottom: 1rem;
}
.absolute {
  position: absolute;
}
.shadow-md {
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
  0 2px 4px -1px rgba(0, 0, 0, 0.06);
}
.text-white {
  color: #fff;
}
.text-gray-600 {
  color: #718096;
}
.text-gray-700 {
  color: #4a5568;
}
.hover\:text-gray-900:hover {
  color: #1a202c;
}
.text-sm {
  font-size: 0.875rem;
}
.text-2xl {
  font-size: 1.5rem;
}
.text-4xl {
  font-size: 2.25rem;
}
.uppercase {
  text-transform: uppercase;
}
.antialiased {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.tracking-wide {
  letter-spacing: 0.025em;
}
.w-full {
  width: 100%;
}
.box {
  height: 6px;
  background-color: #d9fcff;
}
#mobile-nav {
  transition: all 0.2s ease-in-out;
  visibility: visible;
  opacity: 1;
}
#mobile-nav.closed {
  visibility: hidden;
  opacity: 0;
}
.icon-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3rem;
  width: 3rem;
  border-radius: 9999px;
  background-color: #ebf8ff;
  color: #2c5282;
  font-size: 1.125rem;
}
@media (min-width: 640px) {
  .sm\:flex {
    display: flex;
  }
  .sm\:hidden {
    display: none;
  }
  .sm\:my-6 {
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
  }
  .sm\:max-w-lg {
    max-width: 32rem;
  }
  .sm\:px-0 {
    padding-left: 0;
    padding-right: 0;
  }
  .sm\:text-5xl {
    font-size: 3rem;
  }
}
@media (min-width: 768px) {
  .md\:justify-between {
    justify-content: space-between;
  }
  .md\:my-8 {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
  .md\:max-w-xl {
    max-width: 36rem;
  }
  .md\:text-base {
    font-size: 1rem;
  }
  .md\:text-6xl {
    font-size: 4rem;
  }
}
@media (min-width: 1024px) {
  .lg\:flex-row {
    flex-direction: row;
  }
  .lg\:flex-row-reverse {
    flex-direction: row-reverse;
  }
  .lg\:mt-16 {
    margin-top: 4rem;
  }
  .lg\:ml-40 {
    margin-left: 10rem;
  }
  .lg\:max-w-sm {
    max-width: 24rem;
  }
}
@media (min-width: 1280px) {
  .xl\:pl-10 {
    padding-left: 2.5rem;
  }
}

</style>
