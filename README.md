# MelbJS WebAssembly Presentation
Demo Code for An Intro to WebAssembly

Get the prototype polyfill for WebAssembly from the polyfill-prototype-1 repo from the WebAssembly org (https://github.com/WebAssembly/polyfill-prototype-1)

Build the tools as per instructions for the polyfill. The pack-asmjs exe can be used to convert asm.js code to prototype WebAssembly format.

Load wasm.html with the polyfill libraries in the same directory to used the polyfill to decode euclidean.wasm.


## WebAssembly prototype interpreter text format

euclidean-text.wasm is the euclidean module written in the text format from https://github.com/WebAssembly/spec/ml-proto. It can be run using the interpreter from that repo. 
