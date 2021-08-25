<template>
  <div
    class="min-h-screen max-h-full bg-custom-background"
    @click="isFlagOpen = false"
  >
    <div class="container mx-auto py-16">
      <div class="flex flex-col justify-center items-center">
        <span class="text-6xl text-white">Matics</span>
        <span class="text-green-500 pb-4">Mager Ngetics</span>
        <div class="flex flex-col w-1/2">
          <textarea
            ref="noteref"
            v-model="note"
            rows="14"
            class="
              rounded-2xl
              bg-custom-field
              py-3
              shadow-custom
              text-sm
              resize-none
              border-none
              focus:ring-transparent
              font-mono
            "
          >
          </textarea>
          <div class="px-2 pt-3">
            <button
              class="w-full text-white font-bold py-2 rounded-md"
              :class="
                isListening
                  ? ['bg-red-500', 'hover:bg-red-400']
                  : ['bg-green-500', 'hover:bg-green-400']
              "
              @click="onListen"
            >
              {{ isListening ? "Stop" : "Start" }}
            </button>
          </div>
          <div class="flex flex-col lg:flex-row lg:space-x-2 px-2 lg:pt-2">
            <div class="flex flex-row space-x-2 py-2 lg:py-0 max-w-full">
              <div class="relative">
                <button
                  @click.stop="
                    isListening == false ? (isFlagOpen = !isFlagOpen) : ''
                  "
                  class="
                    relative
                    flex
                    z-10
                    bg-custom-field
                    p-2
                    focus:outline-none
                  "
                  :class="
                    isFlagOpen == true ? ['rounded-t-md'] : ['rounded-md']
                  "
                >
                  <div class="w-6 h-6">
                    <img
                      v-if="lang == 'id-ID'"
                      src="@/assets/flags/id.png"
                      alt=""
                      srcset=""
                    />
                    <img
                      v-if="lang == 'en-US'"
                      src="@/assets/flags/us.png"
                      alt=""
                      srcset=""
                    />
                  </div>
                  <svg
                    class="h-5 w-5 text-gray-800"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>

                <div
                  v-if="isFlagOpen == true"
                  class="
                    absolute
                    pt-1
                    w-full
                    bg-custom-field
                    z-20
                    rounded-b-md
                    space-y-1
                  "
                >
                  <hr />
                  <div
                    @click="changeLang('id-ID')"
                    class="
                      flex flex-row
                      px-1
                      border-r-4
                      bg-custom-field
                      hover:border-green-500
                    "
                  >
                    <img
                      src="@/assets/flags/id.png"
                      alt=""
                      srcset=""
                      class="w-6 h-6"
                    />
                    <span class="pl-1">ID</span>
                  </div>
                  <hr />
                  <div
                    @click="changeLang('en-US')"
                    class="
                      flex flex-row
                      px-1
                      border-r-4
                      bg-custom-field
                      hover:border-green-500
                    "
                  >
                    <img
                      src="@/assets/flags/us.png"
                      alt=""
                      srcset=""
                      class="w-6 h-6"
                    />
                    <span class="pl-1">EN</span>
                  </div>
                  <hr class="invisible" />
                </div>
              </div>

              <button
                @click="onCopy"
                class="
                  flex
                  min-w-max
                  flex-grow
                  font-bold
                  py-2
                  px-5
                  rounded-md
                  bg-custom-field
                "
              >
                Copy Text
              </button>
            </div>
            <button
              class="
                w-full
                text-custom-field
                font-bold
                py-2
                rounded-md
                bg-red-500
              "
              @click="note = ''"
            >
              Clear Text
            </button>
          </div>
        </div>
        <span class="fixed bottom-0 text-custom-field"
          >Copyright @2021 RDanang</span
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      isListening: false,
      isFlagOpen: false,
      lang: "id-ID",
      note: "",
      recognition: null,
    };
  },
  mounted() {
    this.config();
  },
  methods: {
    config() {
      let SpeechRecognition =
        window.SpeechRecognition || window.webkitSpeechRecognition;
      this.recognition = new SpeechRecognition();
      this.recognition.lang = "id-ID";
      this.recognition.continuous = true;
      this.recognition.interimResults = true;
      this.recognition.onresult = this.bindResult;
    },

    changeLang(lang) {
      this.lang = lang;
      this.recognition.lang = lang;
    },

    onListen() {
      if (this.isListening == false) {
        this.recognition.start();
        this.isListening = true;
      } else {
        this.recognition.stop();
        this.isListening = false;
      }
    },

    bindResult(event) {
      // event is a SpeechRecognitionEvent object.
      // It holds all the lines we have captured so far.
      // We only need the current one.
      // let current = event.resultIndex;
      // Get a transcript of what was said.
      // let transcript = event.results[current][0].transcript;
      // this.note += transcript;

      // Loop through the results from the speech recognition object.
      for (let i = event.resultIndex; i < event.results.length; ++i) {
        // If the result item is Final, add it to Final Transcript, Else add it to Interim transcript
        if (event.results[i].isFinal) {
          this.note += event.results[i][0].transcript;
        }
        console.log(event.results[i][0].transcript);
      }

      this.recognition.onend = function () {
        this.isListening = false;
      };

      this.recognition.onerror = function (event) {
        console.log(event);
      };
    },

    onCopy() {
      this.$refs.noteref.select();
      document.execCommand("copy");
      this.clearSelection();
      this.$toasted.success("Coppied to Clipboard!");
    },

    clearSelection() {
      if (window.getSelection) {
        window.getSelection().removeAllRanges();
      } else if (document.selection) {
        document.selection.empty();
      }
    },
  },
};
</script>

<style scoped></style>
