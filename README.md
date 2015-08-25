# MelbJS WebAssembly Presentation
Demo Code for An Intro to WebAssembly

Get the prototype polyfill for WebAssembly from the polyfill-prototype-1 repo from the WebAssembly org (https://github.com/WebAssembly/polyfill-prototype-1)

Build the tools as per instructions for the polyfill. The pack-asmjs exe can be used to convert asm.js code to prototype WebAssembly format.

Load wasm.html with the polyfill libraries in the same directory to used the polyfill to decode euclidean-polyfill.wasm.


## WebAssembly prototype interpreter text format

euclidean.wasm is the euclidean module written in the text format from https://github.com/WebAssembly/spec/ml-proto. It can be run using the interpreter from my fork of that repo, which adds sqrt for floats: https://github.com/d3spis3d/spec.
