(function(A){function n(n){for(var o,g,s=n[0],i=n[1],r=n[2],c=0,a=[];c<s.length;c++)g=s[c],Object.prototype.hasOwnProperty.call(C,g)&&C[g]&&a.push(C[g][0]),C[g]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(A[o]=i[o]);l&&l(n);while(a.length)a.shift()();return e.push.apply(e,r||[]),t()}function t(){for(var A,n=0;n<e.length;n++){for(var t=e[n],o=!0,s=1;s<t.length;s++){var i=t[s];0!==C[i]&&(o=!1)}o&&(e.splice(n--,1),A=g(g.s=t[0]))}return A}var o={},C={app:0},e=[];function g(n){if(o[n])return o[n].exports;var t=o[n]={i:n,l:!1,exports:{}};return A[n].call(t.exports,t,t.exports,g),t.l=!0,t.exports}g.m=A,g.c=o,g.d=function(A,n,t){g.o(A,n)||Object.defineProperty(A,n,{enumerable:!0,get:t})},g.r=function(A){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(A,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(A,"__esModule",{value:!0})},g.t=function(A,n){if(1&n&&(A=g(A)),8&n)return A;if(4&n&&"object"===typeof A&&A&&A.__esModule)return A;var t=Object.create(null);if(g.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:A}),2&n&&"string"!=typeof A)for(var o in A)g.d(t,o,function(n){return A[n]}.bind(null,o));return t},g.n=function(A){var n=A&&A.__esModule?function(){return A["default"]}:function(){return A};return g.d(n,"a",n),n},g.o=function(A,n){return Object.prototype.hasOwnProperty.call(A,n)},g.p="/matics/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],i=s.push.bind(s);s.push=n,s=s.slice();for(var r=0;r<s.length;r++)n(s[r]);var l=i;e.push([0,"chunk-vendors"]),t()})({0:function(A,n,t){A.exports=t("56d7")},"56d7":function(A,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var o=t("2b0e"),C=function(){var A=this,n=A.$createElement,o=A._self._c||n;return o("div",{staticClass:"min-h-screen max-h-full bg-custom-background",on:{click:function(n){A.isFlagOpen=!1}}},[o("div",{staticClass:"container mx-auto py-16"},[o("div",{staticClass:"flex flex-col justify-center items-center"},[o("span",{staticClass:"text-6xl text-white"},[A._v("Matics")]),o("span",{staticClass:"text-green-500 pb-4"},[A._v("Mager Ngetics")]),o("div",{staticClass:"flex flex-col w-10/12 lg:w-1/2"},[o("textarea",{directives:[{name:"model",rawName:"v-model",value:A.note,expression:"note"}],ref:"noteref",staticClass:"\n            rounded-2xl\n            bg-custom-field\n            py-3\n            shadow-custom\n            text-sm\n            resize-none\n            border-none\n            focus:ring-transparent\n            font-mono\n          ",attrs:{rows:"14"},domProps:{value:A.note},on:{input:function(n){n.target.composing||(A.note=n.target.value)}}}),o("div",{staticClass:"px-2"},[o("button",{staticClass:"\n              hidden\n              lg:block\n              w-full\n              text-white\n              font-bold\n              lg:mt-3\n              py-2\n              rounded-md\n            ",class:A.isListening?["bg-red-500","hover:bg-red-400"]:["bg-green-500","hover:bg-green-400"],on:{click:A.onListen}},[A._v(" "+A._s(A.isListening?"Stop":"Start")+" ")]),o("div",{staticClass:"flex flex-col lg:flex-row lg:space-x-2 lg:pt-2"},[o("div",{staticClass:"flex flex-row space-x-2 py-2 lg:py-0"},[o("div",{staticClass:"relative"},[o("button",{staticClass:"\n                    relative\n                    flex\n                    z-10\n                    bg-custom-field\n                    p-2\n                    focus:outline-none\n                  ",class:1==A.isFlagOpen?["rounded-t-md"]:["rounded-md"],on:{click:function(n){n.stopPropagation(),0==A.isListening&&(A.isFlagOpen=!A.isFlagOpen)}}},[o("div",{staticClass:"w-6 h-6"},["id-ID"==A.lang?o("img",{attrs:{src:t("c5d4"),alt:"",srcset:""}}):A._e(),"en-US"==A.lang?o("img",{attrs:{src:t("a396"),alt:"",srcset:""}}):A._e()]),o("svg",{staticClass:"h-5 w-5 text-gray-800",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"}},[o("path",{attrs:{"fill-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","clip-rule":"evenodd"}})])]),1==A.isFlagOpen?o("div",{staticClass:"\n                    absolute\n                    pt-1\n                    w-full\n                    bg-custom-field\n                    z-20\n                    rounded-b-md\n                    space-y-1\n                  "},[o("hr"),o("div",{staticClass:"\n                      flex flex-row\n                      px-1\n                      border-r-4\n                      bg-custom-field\n                      hover:border-green-500\n                    ",on:{click:function(n){return A.changeLang("id-ID")}}},[o("img",{staticClass:"w-6 h-6",attrs:{src:t("c5d4"),alt:"",srcset:""}}),o("span",{staticClass:"pl-1"},[A._v("ID")])]),o("hr"),o("div",{staticClass:"\n                      flex flex-row\n                      px-1\n                      border-r-4\n                      bg-custom-field\n                      hover:border-green-500\n                    ",on:{click:function(n){return A.changeLang("en-US")}}},[o("img",{staticClass:"w-6 h-6",attrs:{src:t("a396"),alt:"",srcset:""}}),o("span",{staticClass:"pl-1"},[A._v("EN")])]),o("hr",{staticClass:"invisible"})]):A._e()]),o("button",{staticClass:"\n                  font-bold\n                  py-2\n                  rounded-md\n                  bg-custom-field\n                  justify-center\n                  w-full\n                  lg:min-w-max lg:px-2\n                ",on:{click:A.onCopy}},[A._v(" Copy Text ")])]),o("button",{staticClass:"\n                lg:hidden lg:mb-0\n                mb-2\n                block\n                w-full\n                text-white\n                font-bold\n                py-2\n                rounded-md\n              ",class:A.isListening?["bg-red-500","hover:bg-red-400"]:["bg-green-500","hover:bg-green-400"],on:{click:A.onListen}},[A._v(" "+A._s(A.isListening?"Stop":"Start")+" ")]),o("button",{staticClass:"\n                w-full\n                text-custom-field\n                font-bold\n                py-2\n                rounded-md\n                bg-red-500\n              ",on:{click:function(n){A.note=""}}},[A._v(" Clear Text ")])])])]),o("span",{staticClass:"fixed bottom-0 text-custom-field"},[A._v("Copyright @2021 RDanang")])])])])},e=[],g={name:"App",data:function(){return{isListening:!1,isFlagOpen:!1,lang:"id-ID",note:"",recognition:null}},mounted:function(){this.config()},methods:{config:function(){var A=window.SpeechRecognition||window.webkitSpeechRecognition;this.recognition=new A,this.recognition.lang="id-ID",this.recognition.continuous=!0,this.recognition.interimResults=!0,this.recognition.onresult=this.bindResult},changeLang:function(A){this.lang=A,this.recognition.lang=A},onListen:function(){0==this.isListening?(this.recognition.start(),this.isListening=!0):(this.recognition.stop(),this.isListening=!1)},bindResult:function(A){for(var n=A.resultIndex;n<A.results.length;++n)A.results[n].isFinal&&(this.note+=A.results[n][0].transcript),console.log(A.results[n][0].transcript);this.recognition.onend=function(){this.isListening=!1},this.recognition.onerror=function(A){console.log(A)}},onCopy:function(){this.$refs.noteref.select(),document.execCommand("copy"),this.clearSelection(),this.$toasted.success("Coppied to Clipboard!")},clearSelection:function(){window.getSelection?window.getSelection().removeAllRanges():document.selection&&document.selection.empty()}}},s=g,i=t("2877"),r=Object(i["a"])(s,C,e,!1,null,"27f2cd25",null),l=r.exports,c=t("2f62");o["a"].use(c["a"]);var a=new c["a"].Store({state:{},mutations:{},actions:{},modules:{}}),u=(t("b972"),t("a65d")),Q=t.n(u),k={position:"bottom-right",duration:"1000"};o["a"].config.productionTip=!1,o["a"].use(Q.a,k),new o["a"]({store:a,render:function(A){return A(l)}}).$mount("#app")},a396:function(A,n,t){A.exports=t.p+"img/us.a8eb3787.png"},c5d4:function(A,n){A.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEwAACxMBAJqcGAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAA7fSURBVHic7d1fiKX3XcfxzzOZTbO7SbcGmm7zx26hSCK1W62miZFWSIjQQtoLUUEvit7Ey4CoILhQkGqhIUKLCLV4UUFDiI2hq9GKRqIX0aS2qZaWxOaPu9lus0mbsJvJzu48Xsxs3DT7Z2bOM/lzPq8XzM2c8/zO9+73Ps9zznOGcRwDAHRZeL0HAABeewIAAAoJAAAoJAAAoJAAAIBCAgAACgkAACgkAACgkAAAgEICAAAKCQAAKCQAAKCQAACAQgIAAAoJAAAoJAAAoJAAAIBCAgAACgkAACgkAACgkAAAgEICAAAKCQAAKCQAAKCQAACAQgIAAAoJAAAoJAAAoJAAAIBCAgAACgkAACgkAACgkAAAgEICAAAKCQAAKCQAAKCQAACAQgIAAAoJAAAoJAAAoJAAAIBCAgAACgkAACgkAACgkAAAgEICAAAKCQAAKCQAAKCQAACAQgIAAAoJAAAoJAAAoJAAAIBCAgAACgkAACgkAACgkAAAgEICAAAKCQAAKCQAAKCQAACAQgIAAAoJAAAoJAAAoJAAAIBCAgAACgkAACgkAACgkAAAgEICAAAKCQAAKCQAAKCQAACAQgIAAAoJAAAoJAAAoNDilIsNw/C+JDcn2ZPk8rW/K5Lsnvq1AGBOnUhyKMmBJAfX/h5P8vfjOH59qhcZxnHc/MHDsC3Jh5Pcsvb3ronmAgBe7Ykkf7P2d/84jsubXWhTATAMw0KSTyT5ZFbf4QMAr60DSX4/yZ+P47iy0YM3HADDMHwkyR8lee9GXwwAmNw3kvzOOI77N3LQugNgGIZ3JPlikps2PhsAsMW+kuTXxnH87nqevK4AGIbhJ5Pck+Sq2WYDALbQU0k+No7jV8/3xPN+DXAYhl9M8kBs/gDwRndVkgfW9u5zOmcADMPwW0nuTLJjosEAgK21I8mda3v4WZ31EsBaPdyZZJh+NgBgi41Jfmkcx7vO9OAZA2Dtmv8D8c4fAN7MjiX5uTN9JuBVAbD2af9/j2v+ADAPnkryMz/87YAzfQbgi7H5A8C8uCqre/srvCIA1m7y43v+ADBfblrb41/28iWAtdv7fi3u8AcA8+gbSfaeum3w6WcAPhGbPwDMq/dmda9PsnYGYO1X/b4TP+wDAPPsQJJ3j+O4fOoMwIdj8weAeXdFVvf8LK7945apX+HGS3flg2+7OB94687svXhHdlxw3rsOA8BcOn5yJd/+3rGs5/f3XlpZybeXlvLNpaU88uKLefDo0anHuSXJV05dAng8ybumWPWqiy7MZ6/Zkxsv3TXFcgAwF/73+0s5cnR5w8c9ePRo/vDQoXx3eePHnsUT4zjuGZK8L6uf/p/ZLW//kfzpj787lyxeMMVyADA3lpZX8q3Dm3s3f3RlJX/w9NO5/4UXphpn70KSm6dY6aqLLrT5A8BZXLRtIdsu2NzP6+xcWMjvvfOdece2bVONc/NCkj1TrPTZa/bY/AHgHC55y+L5n3QWOxcW8ru7d081yp6FJJfPusqNl+5yzR8AzmPnhbO9Ub52585cu3PnFKNcPkkAfPBtF08wCwDMt8VNXgI43U9s3z7BJKsBMPP3/z/w1klqBADm2uLC7AFwzUUXTTBJrlhIMvMFhb0X75hgFgCYb1MEwI9NEwC7F/L/NwPatO1u8gMA5zf7/p+3DBMskizauQGgkAAAgEICAAAKCQAAKCQAAKCQAACAQgIAAAoJAAAoJAAAoJAAAIBCAgAACgkAACgkAACgkAAAgEICAAAKCQAAKCQAAKCQAACAQgIAAAoJAAAoJAAAoJAAAIBCAgAACgkAACgkAACgkAAAgEICAAAKCQAAKCQAAKCQAACAQgIAAAoJAAAoJAAAoJAAAIBCAgAACgkAACgkAACgkAAAgEICAAAKCQAAKCQAAKCQAACAQgIAAAoJAAAoJAAAoJAAAIBCAgAACgkAACgkAACgkAAAgEICAAAKCQAAKCQAAKCQAACAQgIAAAoJAAAoJAAAoJAAAIBCAgAACgkAACgkAACgkAAAgEICAAAKCQAAKCQAAKCQAACAQgIAAAoJAAAoJAAAoJAAAIBCAgAACgkAACgkAACgkAAAgEICAAAKCQAAKCQAAKCQAACAQgIAAAoJAAAoJAAAoJAAAIBCAgAACgkAACgkAACgkAAAgEICAAAKCQAAKCQAAKCQAACAQgIAAAoJAAAoJAAAoJAAAIBCAgAACgkAACgkAACgkAAAgEICAAAKCQAAKCQAAKCQAACAQgIAAAoJAAAoJAAAoJAAAIBCAgAACgkAACgkAACgkAAAgEICAAAKCQAAKCQAAKCQAACAQgIAAAoJAAAoJAAAoJAAAIBCAgAACgkAACgkAACgkAAAgEICAAAKCQAAKCQAAKCQAACAQgIAAAoJAAAoJAAAoJAAAIBCAgAACgkAACgkAACgkAAAgEICAAAKCQAAKCQAAKCQAACAQgIAAAoJAAAoJAAAoJAAAIBCAgAACi1Oscg9h5/Ljgu0BACcy4mVlRx4/qWZ1lgax0lmGZJMsxIA8KbhbTsAFBIAAFBIAABAIQEAAIUEAAAUEgAAUEgAAEAhAQAAhQQAABQSAABQSAAAQCEBAACFBAAAFBIAAFBIAABAocUpFrn++uuzuDjJUgAwt1bGMUsvHZ9pjZMnT+Y/H35o5lmGJOOsixw8eDC7du2aeRgAmGfLJ07mO08fnmmNF55/Ph+69qdmnsUlAAAoJAAAoJAAAIBCAgAACgkAACgkAACgkAAAgEICAAAKCQAAKCQAAKCQAACAQgIAAAoJAAAoJAAAoJAAAIBCAgAACgkAACgkAACgkAAAgEICAAAKCQAAKCQAAKCQAACAQgIAAAoJAAAoJAAAoJAAAIBCAgAACgkAACgkAACgkAAAgEICAAAKCQAAKCQAAKCQAACAQgIAAAoJAAAoJAAAoJAAAIBCAgAACgkAACgkAACgkAAAgEICAAAKCQAAKCQAAKCQAACAQgIAAAoJAAAoJAAAoJAAAIBCAgAACgkAACgkAACgkAAAgEICAAAKCQAAKCQAAKCQAACAQgIAAAoJAAAoJAAAoJAAAIBCAgAACgkAACgkAACgkAAAgEICAAAKCQAAKCQAAKCQAACAQgIAAAoJAAAoJAAAoJAAAIBCAgAACgkAACgkAACgkAAAgEICAAAKCQAAKCQAAKCQAACAQgIAAAoJAAAoJAAAoJAAAIBCAgAACgkAACgkAACgkAAAgEICAAAKCQAAKCQAAKCQAACAQgIAAAoJAAAoJAAAoJAAAIBCAgAACgkAACgkAACgkAAAgEICAAAKCQAAKCQAAKCQAACAQgIAAAoJAAAoJAAAoJAAAIBCAgAACgkAACgkAACgkAAAgEICAAAKCQAAKCQAAKCQAACAQgIAAAoJAAAoJAAAoJAAAIBCAgAACgkAACgkAACgkAAAgEICAAAKCQAAKCQAAKCQAACAQgIAAAoJAAAoJAAAoJAAAIBCAgAACgkAACgkAACgkAAAgEICAAAKCQAAKCQAAKCQAACAQgIAAAotJHl21kUee+yxCUYBgPm2Mq7MvMZTTz4xwSR5diHJwVlXeeihhyaYBQDm28mTswfAfz3y9QkmyUEBAACvkZMrUwTAIxNMshoAB2ZdZf/+/XnmmWcmmAcA5tfx5RMzHf/cs8/m/n/6xylGOTDJGYAjR47ktttum2AeAJhfR5demun4T31yX77/3HNTjHJwIcmDU6x0991356677ppiKQCYOydXVrJ0fHnTx9+3/8v5h7/726nGefCCJE8muS3JtllXu/fee3Ps2LHccMMNWVxcnHk6AJgXLxx7MUdf3PgZgOPHj+dzd9ye2z/9qYzjOMUox5LcOozjmGEYvpTkY1OsmiRXX3119u3bl+uuuy6XXXbZVMsCwJvSOCaPHzqc5RMn133MkSPP5GsPP5zP/fHt+Z9HH51ynHvGcfz4qQD49SR/NuXqp1x55ZXZu3dvtm/fvhXLA8Ab3vHlE3lpeX2n/5eWlvKtb/53Dj399FaN8xvjOH7hVABcltVvAzhvDwDz60SSK8ZxPLyQJOM4Hk7y+dd3JgBgi31+bc/PcOoDBcMw7E7yaJKdr+NgAMDWOJrkPeM4HkpO+zGgtX985vWaCgDYUp85tfknp50BSJJhGC7J6lkAH90HgPlxOKvv/l849Y9X/Bzw2gO3Jpnki4YAwOtuTHLr6Zt/8kMBkCTjOP51kn2v1VQAwJbat7a3v8JwtrsKDcPwl0l+eaunAgC2zF+N4/grZ3rgXAGwPcm/JPnpLRwMANga/5HkQ+M4vnimB191CeCUtQNuSnLfFg0GAGyN+5LcdLbNPzlHACTJOI4/SPLRJHdMPBgAsDXuSPLRtT38rM56CeBVT1z9vYA/SXLh7LMBABM7nuQ3x3H8wnqefM4zAKdbW/D9Se7Z5GAAwNa4J8n717v5Jxs4A/CKg4bhZ5N8OskNGz4YAJjKvyb57XEc/22jB24qAF4+eBg+kuRXs/o5gV2bXggAWK8fJPlykr8Yx3H/ZheZKQBeXmQYtiX5+SQfT/ILSX40ybaZFwYAlpM8mdVP9n8pyT+P47g866KTBMCrFh2GIcnbk1ye5IokuyMIAGA9lpMcSnIgycEk3xu3YLPekgAAAN7Y1v0tAABgfggAACgkAACgkAAAgEICAAAKCQAAKCQAAKCQAACAQgIAAAoJAAAoJAAAoJAAAIBCAgAACgkAACgkAACgkAAAgEICAAAKCQAAKCQAAKCQAACAQgIAAAoJAAAoJAAAoJAAAIBCAgAACgkAACgkAACgkAAAgEICAAAKCQAAKCQAAKCQAACAQgIAAAoJAAAoJAAAoJAAAIBCAgAACgkAACgkAACgkAAAgEICAAAKCQAAKCQAAKCQAACAQgIAAAoJAAAoJAAAoJAAAIBCAgAACgkAACgkAACgkAAAgEICAAAKCQAAKCQAAKCQAACAQgIAAAoJAAAoJAAAoJAAAIBCAgAACgkAACgkAACgkAAAgEICAAAKCQAAKCQAAKCQAACAQgIAAAoJAAAoJAAAoJAAAIBCAgAACgkAACgkAACg0P8BjnkdS51xFowAAAAASUVORK5CYII="}});
//# sourceMappingURL=app.1525f224.js.map