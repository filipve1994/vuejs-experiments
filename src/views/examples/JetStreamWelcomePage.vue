<template>
  <div x-data="{ darkMode: true, mobileMenu: false }" v-bind:class="{ 'dark': darkMode }" class="font-sans antialiased">
    <div class="min-h-screen bg-gray-100 dark:bg-gray-900">
      <nav class="bg-white border-b border-gray-100 dark:border-gray-700 dark:bg-gray-800">
        <!-- Primary Navigation Menu -->
        <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div class="flex justify-between h-16">
            <div class="flex">
              <!-- Logo -->
              <div class="flex items-center flex-shrink-0"><a href="#">
                <svg viewBox="0 0 48 48" fill="none"
                     xmlns="http://www.w3.org/2000/svg" class="block w-auto h-9">
                  <path
                      d="M11.395 44.428C4.557 40.198 0 32.632 0 24 0 10.745 10.745 0 24 0a23.891 23.891 0 0113.997 4.502c-.2 17.907-11.097 33.245-26.602 39.926z"
                      fill="#6875F5"></path>
                  <path
                      d="M14.134 45.885A23.914 23.914 0 0024 48c13.255 0 24-10.745 24-24 0-3.516-.756-6.856-2.115-9.866-4.659 15.143-16.608 27.092-31.75 31.751z"
                      fill="#6875F5"></path>
                </svg>
              </a></div><!-- Navigation Links -->
              <div class="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex"><a
                  class="inline-flex items-center px-1 pt-1 text-sm font-medium leading-5 text-gray-900 transition duration-150 ease-in-out border-b-2 border-indigo-400 dark:border-indigo-300 dark:text-gray-200 focus:outline-none focus:border-indigo-700"
                  href="#"> Dashboard </a></div>
            </div>

            <div class="hidden sm:flex sm:items-center sm:ml-6">
              <button @click="darkMode = !darkMode"
                      class="p-2 text-gray-500 transition duration-150 ease-in-out bg-white border border-transparent rounded-md dark:text-gray-200 dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-700 focus:outline-none focus:bg-gray-50 dark:focus:bg-gray-700 active:bg-gray-50">
                <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                     fill="currentColor">
                  <path fill-rule="evenodd"
                        d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                        clip-rule="evenodd"></path>
                </svg>

              </button>

              <div x-data="{ isOpen: false }" class="relative ml-3">
                <div>
                                <span class="inline-flex rounded-md">
                                    <button @click="isOpen = !isOpen" type="button"
                                            class="inline-flex items-center px-3 py-2 text-sm font-medium leading-4 text-gray-500 transition duration-150 ease-in-out bg-white border border-transparent rounded-md dark:text-gray-200 dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-700 focus:outline-none focus:bg-gray-50 dark:focus:bg-gray-700 active:bg-gray-50">Autumn's
                                        Team <svg class="ml-2 -mr-0.5 h-4 w-4" xmlns="http://www.w3.org/2000/svg"
                                                  viewBox="0 0 20 20" fill="currentColor">
                                            <path fill-rule="evenodd"
                                                  d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                                                  clip-rule="evenodd"></path>
                                        </svg>
                                    </button>
                                </span>
                </div>

                <div class="fixed inset-0 z-40" style="display: none;"></div>

                <div @click.away="isOpen = false" x-show="isOpen"
                     class="absolute right-0 z-50 mt-2 origin-top-right rounded-md shadow-lg">
                  <div class="py-1 bg-white rounded-md dark:bg-gray-700 ring-1 ring-black ring-opacity-5">
                    <div class="w-60">
                      <!-- Team Management -->
                      <div class="block px-4 py-2 text-xs text-gray-400"> Manage Team
                      </div><!-- Team Settings -->
                      <div><a
                          class="block px-4 py-2 text-sm leading-5 text-gray-700 transition duration-150 ease-in-out dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:bg-gray-100"
                          href="#"> Team Settings
                      </a></div>
                      <div><a
                          class="block px-4 py-2 text-sm leading-5 text-gray-700 transition duration-150 ease-in-out dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:bg-gray-100"
                          href="#"> Create New
                        Team </a></div>
                      <div class="border-t border-gray-100 dark:border-gray-600"></div>
                      <!-- Team Switcher -->
                      <div class="block px-4 py-2 text-xs text-gray-400"> Switch Teams
                      </div>
                      <form>
                        <div>
                          <button type="submit"
                                  class="block w-full px-4 py-2 text-sm leading-5 text-left text-gray-700 transition duration-150 ease-in-out dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:bg-gray-100">
                            <div class="flex items-center">
                              <svg
                                  class="w-5 h-5 mr-2 text-green-400" fill="none"
                                  stroke-linecap="round" stroke-linejoin="round"
                                  stroke-width="2" stroke="currentColor" viewBox="0 0 24 24">
                                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z">
                                </path>
                              </svg>
                              <div>Autumn's Team</div>
                            </div>
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>

              </div>

              <div x-data="{ isOpen: false }" class="relative ml-3">
                <div><span class="inline-flex rounded-md"><button @click="isOpen = !isOpen" type="button"
                                                                  class="inline-flex items-center px-3 py-2 text-sm font-medium leading-4 text-gray-500 transition duration-150 ease-in-out bg-white border border-transparent rounded-md dark:text-gray-200 dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-700 focus:outline-none focus:bg-gray-50 dark:focus:bg-gray-700 active:bg-gray-50">Autumn
                                        Ruiz <svg class="ml-2 -mr-0.5 h-4 w-4" xmlns="http://www.w3.org/2000/svg"
                                                  viewBox="0 0 20 20" fill="currentColor">
                                            <path fill-rule="evenodd"
                                                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                  clip-rule="evenodd"></path>
                                        </svg></button></span></div><!-- Full Screen Dropdown Overlay -->

                <div class="fixed inset-0 z-40" style="display: none;"></div>

                <div @click.away="isOpen = false" x-show="isOpen"
                     class="absolute right-0 z-50 w-48 mt-2 origin-top-right rounded-md shadow-lg">
                  <div class="py-1 bg-white rounded-md dark:bg-gray-700 ring-1 ring-black ring-opacity-5">
                    <!-- Account Management -->
                    <div class="block px-4 py-2 text-xs text-gray-400"> Manage Account
                    </div>
                    <div>
                      <a class="block px-4 py-2 text-sm leading-5 text-gray-700 transition duration-150 ease-in-out dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:bg-gray-100"
                         href="#"> Profile </a>
                    </div>
                    <!--v-if-->
                    <div class="border-t border-gray-100 dark:border-gray-600"></div>
                    <!-- Authentication -->

                    <button
                        class="block w-full px-4 py-2 text-sm leading-5 text-left text-gray-700 transition duration-150 ease-in-out dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:bg-gray-100">
                      Log Out
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div class="flex items-center -mr-2 sm:hidden">
              <button @click="darkMode = !darkMode"
                      class="p-2 text-gray-500 transition duration-150 ease-in-out bg-white border border-transparent rounded-md dark:text-gray-200 dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-700 focus:outline-none focus:bg-gray-50 dark:focus:bg-gray-700 active:bg-gray-50">
                <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                     fill="currentColor">
                  <path fill-rule="evenodd"
                        d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                        clip-rule="evenodd"></path>
                </svg>

              </button>

              <button @click="mobileMenu = !mobileMenu"
                      class="inline-flex items-center justify-center p-2 text-gray-400 transition duration-150 ease-in-out rounded-md dark:text-gray-200 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-700 focus:text-gray-500">
                <svg
                    class="w-6 h-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path class="inline-flex" stroke-linecap="round" stroke-linejoin="round"
                        stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                  <path class="hidden" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div x-show="mobileMenu" class="sm:hidden">
          <div class="pt-2 pb-3 space-y-1">
            <div><a
                class="block py-2 pl-3 pr-4 text-base font-medium text-indigo-700 transition duration-150 ease-in-out border-l-4 border-indigo-400 dark:border-indigo-300 dark:text-indigo-200 bg-indigo-50 dark:bg-indigo-800 focus:outline-none focus:text-indigo-800 focus:bg-indigo-100 focus:border-indigo-700"
                href="#"> Dashboard </a></div>
          </div>
          <div class="pt-4 pb-1 border-t border-gray-200 dark:border-gray-600">
            <div class="flex items-center px-4">
              <div>
                <div class="text-base font-medium text-gray-800 dark:text-gray-200">Autumn Ruiz
                </div>
                <div class="text-sm font-medium text-gray-500 dark:text-gray-400">
                  hizevy@mailinator.com
                </div>
              </div>
            </div>
            <div class="mt-3 space-y-1">
              <div>
                <a class="block py-2 pl-3 pr-4 text-base font-medium text-gray-600 transition duration-150 ease-in-out border-l-4 border-transparent dark:text-gray-200 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300"
                   href="#"> Profile </a>
              </div>

              <button
                  class="block w-full py-2 pl-3 pr-4 text-base font-medium text-left text-gray-600 transition duration-150 ease-in-out border-l-4 border-transparent dark:text-gray-200 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300">
                Log Out
              </button>

              <div class="border-t border-gray-200 dark:border-gray-600"></div>

              <div class="block px-4 py-2 text-xs text-gray-400"> Manage Team</div>
              <!-- Team Settings -->
              <div><a
                  class="block py-2 pl-3 pr-4 text-base font-medium text-gray-600 transition duration-150 ease-in-out border-l-4 border-transparent dark:text-gray-200 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300"
                  href="#"> Team Settings </a></div>
              <div><a
                  class="block py-2 pl-3 pr-4 text-base font-medium text-gray-600 transition duration-150 ease-in-out border-l-4 border-transparent dark:text-gray-200 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300"
                  href="#"> Create New Team </a></div>
              <div class="border-t border-gray-200 dark:border-gray-600"></div><!-- Team Switcher -->
              <div class="block px-4 py-2 text-xs text-gray-400"> Switch Teams</div>
              <button
                  class="block w-full py-2 pl-3 pr-4 text-base font-medium text-left text-gray-600 transition duration-150 ease-in-out border-l-4 border-transparent dark:text-gray-200 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300">
                <div class="flex items-center">
                  <svg class="w-5 h-5 mr-2 text-green-400" fill="none"
                       stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                       stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <div>Autumn's Team</div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <header class="bg-white shadow dark:bg-gray-800">
        <div class="px-4 py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <h2 class="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">Dashboard</h2>
        </div>
      </header>

      <main>
        <div class="py-12">
          <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div class="overflow-hidden bg-white shadow-xl dark:bg-gray-800 sm:rounded-lg">
              <div>
                <div
                    class="p-6 bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700 sm:px-20">
                  <div>
                    <svg viewBox="0 0 317 48" fill="none" xmlns="http://www.w3.org/2000/svg"
                         class="block w-auto h-12 text-black dark:text-white">
                      <path
                          d="M74.09 30.04V13h-4.14v21H82.1v-3.96h-8.01zM95.379 19v1.77c-1.08-1.35-2.7-2.19-4.89-2.19-3.99 0-7.29 3.45-7.29 7.92s3.3 7.92 7.29 7.92c2.19 0 3.81-.84 4.89-2.19V34h3.87V19h-3.87zm-4.17 11.73c-2.37 0-4.14-1.71-4.14-4.23 0-2.52 1.77-4.23 4.14-4.23 2.4 0 4.17 1.71 4.17 4.23 0 2.52-1.77 4.23-4.17 4.23zM106.628 21.58V19h-3.87v15h3.87v-7.17c0-3.15 2.55-4.05 4.56-3.81V18.7c-1.89 0-3.78.84-4.56 2.88zM124.295 19v1.77c-1.08-1.35-2.7-2.19-4.89-2.19-3.99 0-7.29 3.45-7.29 7.92s3.3 7.92 7.29 7.92c2.19 0 3.81-.84 4.89-2.19V34h3.87V19h-3.87zm-4.17 11.73c-2.37 0-4.14-1.71-4.14-4.23 0-2.52 1.77-4.23 4.14-4.23 2.4 0 4.17 1.71 4.17 4.23 0 2.52-1.77 4.23-4.17 4.23zM141.544 19l-3.66 10.5-3.63-10.5h-4.26l5.7 15h4.41l5.7-15h-4.26zM150.354 28.09h11.31c.09-.51.15-1.02.15-1.59 0-4.41-3.15-7.92-7.59-7.92-4.71 0-7.92 3.45-7.92 7.92s3.18 7.92 8.22 7.92c2.88 0 5.13-1.17 6.54-3.21l-3.12-1.8c-.66.87-1.86 1.5-3.36 1.5-2.04 0-3.69-.84-4.23-2.82zm-.06-3c.45-1.92 1.86-3.03 3.93-3.03 1.62 0 3.24.87 3.72 3.03h-7.65zM164.516 34h3.87V12.1h-3.87V34zM185.248 34.36c3.69 0 6.9-2.01 6.9-6.3V13h-2.1v15.06c0 3.03-2.07 4.26-4.8 4.26-2.19 0-3.93-.78-4.62-2.61l-1.77 1.05c1.05 2.43 3.57 3.6 6.39 3.6zM203.124 18.64c-4.65 0-7.83 3.45-7.83 7.86 0 4.53 3.24 7.86 7.98 7.86 3.03 0 5.34-1.41 6.6-3.45l-1.74-1.02c-.81 1.44-2.46 2.55-4.83 2.55-3.18 0-5.55-1.89-5.97-4.95h13.17c.03-.3.06-.63.06-.93 0-4.11-2.85-7.92-7.44-7.92zm0 1.92c2.58 0 4.98 1.71 5.4 5.01h-11.19c.39-2.94 2.64-5.01 5.79-5.01zM221.224 20.92V19h-4.32v-4.2l-1.98.6V19h-3.15v1.92h3.15v9.09c0 3.6 2.25 4.59 6.3 3.99v-1.74c-2.91.12-4.32.33-4.32-2.25v-9.09h4.32zM225.176 22.93c0-1.62 1.59-2.37 3.15-2.37 1.44 0 2.97.57 3.6 2.1l1.65-.96c-.87-1.86-2.79-3.06-5.25-3.06-3 0-5.13 1.89-5.13 4.29 0 5.52 8.76 3.39 8.76 7.11 0 1.77-1.68 2.4-3.45 2.4-2.01 0-3.57-.99-4.11-2.52l-1.68.99c.75 1.92 2.79 3.45 5.79 3.45 3.21 0 5.43-1.77 5.43-4.32 0-5.52-8.76-3.39-8.76-7.11zM244.603 20.92V19h-4.32v-4.2l-1.98.6V19h-3.15v1.92h3.15v9.09c0 3.6 2.25 4.59 6.3 3.99v-1.74c-2.91.12-4.32.33-4.32-2.25v-9.09h4.32zM249.883 21.49V19h-1.98v15h1.98v-8.34c0-3.72 2.34-4.98 4.74-4.98v-1.92c-1.92 0-3.69.63-4.74 2.73zM263.358 18.64c-4.65 0-7.83 3.45-7.83 7.86 0 4.53 3.24 7.86 7.98 7.86 3.03 0 5.34-1.41 6.6-3.45l-1.74-1.02c-.81 1.44-2.46 2.55-4.83 2.55-3.18 0-5.55-1.89-5.97-4.95h13.17c.03-.3.06-.63.06-.93 0-4.11-2.85-7.92-7.44-7.92zm0 1.92c2.58 0 4.98 1.71 5.4 5.01h-11.19c.39-2.94 2.64-5.01 5.79-5.01zM286.848 19v2.94c-1.26-2.01-3.39-3.3-6.06-3.3-4.23 0-7.74 3.42-7.74 7.86s3.51 7.86 7.74 7.86c2.67 0 4.8-1.29 6.06-3.3V34h1.98V19h-1.98zm-5.91 13.44c-3.33 0-5.91-2.61-5.91-5.94 0-3.33 2.58-5.94 5.91-5.94s5.91 2.61 5.91 5.94c0 3.33-2.58 5.94-5.91 5.94zM309.01 18.64c-1.92 0-3.75.87-4.86 2.73-.84-1.74-2.46-2.73-4.56-2.73-1.8 0-3.42.72-4.59 2.55V19h-1.98v15H295v-8.31c0-3.72 2.16-5.13 4.32-5.13 2.13 0 3.51 1.41 3.51 4.08V34h1.98v-8.31c0-3.72 1.86-5.13 4.17-5.13 2.13 0 3.66 1.41 3.66 4.08V34h1.98v-9.36c0-3.75-2.31-6-5.61-6z"
                          fill="currentColor"></path>
                      <path
                          d="M11.395 44.428C4.557 40.198 0 32.632 0 24 0 10.745 10.745 0 24 0a23.891 23.891 0 0113.997 4.502c-.2 17.907-11.097 33.245-26.602 39.926z"
                          fill="#6875F5"></path>
                      <path
                          d="M14.134 45.885A23.914 23.914 0 0024 48c13.255 0 24-10.745 24-24 0-3.516-.756-6.856-2.115-9.866-4.659 15.143-16.608 27.092-31.75 31.751z"
                          fill="#6875F5"></path>
                    </svg>
                  </div>
                  <div class="mt-8 text-2xl dark:text-gray-200"> Welcome to your Jetstream
                    application!
                  </div>
                  <div class="mt-6 text-gray-500 dark:text-gray-400"> Laravel Jetstream provides a
                    beautiful, robust starting point for your next Laravel application. Laravel
                    is designed to help you build your application using a development
                    environment that is simple, powerful, and enjoyable. We believe you should
                    love expressing your creativity through programming, so we have spent time
                    carefully crafting the Laravel ecosystem to be a breath of fresh air. We
                    hope you love it.
                  </div>
                </div>
                <div class="grid grid-cols-1 bg-gray-200 bg-opacity-25 dark:bg-gray-800 md:grid-cols-2">
                  <div class="p-6">
                    <div class="flex items-center">
                      <svg fill="none" stroke="currentColor"
                           stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                           viewBox="0 0 24 24" class="w-8 h-8 text-gray-400 dark:text-gray-200">
                        <path
                            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253">
                        </path>
                      </svg>
                      <div
                          class="ml-4 text-lg font-semibold leading-7 text-gray-600 dark:text-gray-200">
                        <a href="https://laravel.com/docs">Documentation</a>
                      </div>
                    </div>
                    <div class="ml-12">
                      <div class="mt-2 text-sm text-gray-500 dark:text-gray-400"> Laravel has
                        wonderful documentation covering every aspect of the framework.
                        Whether you're new to the framework or have previous experience, we
                        recommend reading all of the documentation from beginning to end.
                      </div>
                      <a href="https://laravel.com/docs">
                        <div
                            class="flex items-center mt-3 text-sm font-semibold text-indigo-700 dark:text-indigo-400 hover:underline">
                          <div>Explore the documentation</div>
                          <div class="ml-1 text-indigo-500">
                            <svg viewBox="0 0 20 20"
                                 fill="currentColor" class="w-4 h-4">
                              <path fill-rule="evenodd"
                                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                    clip-rule="evenodd"></path>
                            </svg>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div
                      class="p-6 border-t border-gray-200 dark:border-gray-700 md:border-t-0 md:border-l">
                    <div class="flex items-center">
                      <svg fill="none" stroke="currentColor"
                           stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                           viewBox="0 0 24 24" class="w-8 h-8 text-gray-400 dark:text-gray-200">
                        <path
                            d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z">
                        </path>
                        <path d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      </svg>
                      <div
                          class="ml-4 text-lg font-semibold leading-7 text-gray-600 dark:text-gray-200">
                        <a href="https://laracasts.com">Laracasts</a>
                      </div>
                    </div>
                    <div class="ml-12">
                      <div class="mt-2 text-sm text-gray-500 dark:text-gray-400"> Laracasts
                        offers thousands of video tutorials on Laravel, PHP, and JavaScript
                        development. Check them out, see for yourself, and massively level
                        up your development skills in the process.
                      </div>
                      <a
                          href="https://laracasts.com">
                        <div
                            class="flex items-center mt-3 text-sm font-semibold text-indigo-700 dark:text-indigo-400 hover:underline">
                          <div>Start watching Laracasts</div>
                          <div class="ml-1 text-indigo-500">
                            <svg viewBox="0 0 20 20"
                                 fill="currentColor" class="w-4 h-4">
                              <path fill-rule="evenodd"
                                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                    clip-rule="evenodd"></path>
                            </svg>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div class="p-6 border-t border-gray-200 dark:border-gray-700">
                    <div class="flex items-center">
                      <svg fill="none" stroke="currentColor"
                           stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                           viewBox="0 0 24 24" class="w-8 h-8 text-gray-400 dark:text-gray-200">
                        <path
                            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z">
                        </path>
                      </svg>
                      <div
                          class="ml-4 text-lg font-semibold leading-7 text-gray-600 dark:text-gray-200">
                        <a href="https://tailwindcss.com/">Tailwind</a>
                      </div>
                    </div>
                    <div class="ml-12">
                      <div class="mt-2 text-sm text-gray-500 dark:text-gray-400"> Laravel
                        Jetstream is built with Tailwind, an amazing utility first CSS
                        framework that doesn't get in your way. You'll be amazed how easily
                        you can build and maintain fresh, modern designs with this wonderful
                        framework at your fingertips.
                      </div>
                    </div>
                  </div>
                  <div class="p-6 border-t border-gray-200 dark:border-gray-700 md:border-l">
                    <div class="flex items-center">
                      <svg fill="none" stroke="currentColor"
                           stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                           viewBox="0 0 24 24" class="w-8 h-8 text-gray-400 dark:text-gray-200">
                        <path
                            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z">
                        </path>
                      </svg>
                      <div
                          class="ml-4 text-lg font-semibold leading-7 text-gray-600 dark:text-gray-200">
                        Authentication
                      </div>
                    </div>
                    <div class="ml-12">
                      <div class="mt-2 text-sm text-gray-500 dark:text-gray-400">
                        Authentication and registration views are included with Laravel
                        Jetstream, as well as support for user email verification and
                        resetting forgotten passwords. So, you're free to get started what
                        matters most: building your application.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<!--https://tailwindcomponents.com/component/jetstream-welcome-page-->
<script>
export default {
  name: "JetStreamWelcomePage",
  data() {
    return {
      darkMode: true
    }
  },
}
</script>

<style scoped>

</style>
