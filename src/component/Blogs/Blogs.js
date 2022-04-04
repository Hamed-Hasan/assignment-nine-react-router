import React from 'react';
import './Blogs'
const Blogs = () => {
    return (
        <section class="text-gray-900 body-font bg-slate-700">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col text-center w-full mb-20">
            <h2 class="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">details are described</h2>
            <h1 class="sm:text-3xl text-2xl font-medium title-font  text-white">Context API / Semantic Tag / Inline Inline-Block</h1>
          </div>
          <div class="flex flex-wrap -m-4">
            <div class="p-4 md:w-1/3">
              <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                <div class="flex items-center mb-3">
               
                  <h2 class="text-gray-900 text-lg title-font font-medium">What is context api?</h2>
                </div>
                <div class="flex-grow">
                  <p class="leading-relaxed text-base">Ans: Context is designed to share data that can be considered “global” for a tree of React components, such as the current authenticated user, theme, or preferred language.

Context API is a (kind of) new feature added in version 16.3 of React that allows one to share state across the entire app (or part of it) lightly and with ease.

React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state.
.</p>
                 
                </div>
              </div>
            </div>
            <div class="p-4 md:w-1/3">
              <div class="flex rounded-lg h-full items-center bg-gray-100 p-8 flex-col">
                <div class="flex items-center mb-3">
               
                  <h2 class="text-gray-900 text-lg title-font font-medium">What is Semantic tag?</h2>
                </div>
                <div class="flex-grow">
                  <p class="leading-relaxed text-base">Ans: Semantic elements are one of the most significant introductions in HTML5. In the previous versions of HTML, the generic Div tag with an id or class attribute was used for structuring a web page. For example, for defining sidebars, footers, menu or other structural blocks, the Div tag was used with the corresponding meaning (Div Class="footer"). when developer writing a code for webpage for long time project "Semantic Tag" is very useful part . its helps to easily recognize code for other developer and me.</p>
                
                </div>
              </div>
            </div>
            <div class="p-4 md:w-1/3">
              <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                <div class="flex items-center mb-3">
                 
                  <h2 class="text-gray-900 text-lg title-font font-medium">Display Inline & Inline Block</h2>
                </div>
                <div class="flex-grow">
                  <p class="leading-relaxed text-base">Compared to display: inline, the major difference is that inline-block allows to set a width and height on the element. Also, with display: inline, top and bottom margins & paddings are not respected, and with display: inline-block they are.

Now, the difference between display: inline-block and display: block is that, with display: block, a line break happens after the element, so a block element doesn’t sit next to other elements..</p>
              
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default Blogs;