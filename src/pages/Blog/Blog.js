import React from "react";

const Blog = () => {
  return (
    <div className="px-4 md:px-28 py-8 space-y-5">

      <div class="card lg:card-side bg-base-100 shadow-xl">
        <div class="card-body">
          <h3 class="card-title">
            How will you improve the performance of a React Application?
          </h3>
          <p>
            <span className="font-bold">Ans:</span>React enables web
            applications to update their user interfaces (UIs) quickly, but that
            does not mean your medium or large React application will perform
            efficiently. Its performance will depend on how you use React when
            building it, and on your understanding of how React operates and the
            process through which components live through the various phases of
            their lifecycle. React offers a lot of performance improvements to a
            web app, and you can achieve these improvements through various
            techniques, features, and tools.
          </p>
        </div>
      </div>

      <div class="card lg:card-side bg-base-100 shadow-xl">
        <div class="card-body">
          <h3 class="card-title">
            What are the different ways to manage a state in a React
            application?
          </h3>
          <p>
            <span className="font-bold">Ans:</span>There are four main types of
            state you need to properly manage in your React apps:
            <ul className="space-y-3">
              <li>
                <span className="font-medium">1. Local state</span>
                Local state is data we manage in one or another component. Local
                state is most often managed in React using the useState hook
              </li>
              <li>
                <span className="font-medium">2. Global state :</span>
                Global state is data we manage across multiple components.
                Global state is necessary when we want to get and update data
                anywhere in our app, or in multiple components at least. A
                common example of global state is authenticated user state. If a
                user is logged into our app, it is necessary to get and change
                their data throughout our application.
              </li>
              <li>
                <span className="font-medium">3. Server state :</span>
                Data that comes from an external server that must be integrated
                with our UI state. Server state is a simple concept, but can be
                hard to manage alongside all of our local and global UI state.
                There are several pieces of state that must be managed every
                time you fetch or update data from an external server, including
                loading and error state. Fortunately there are tools such as SWR
                and React Query that make managing server state much easier.
              </li>
              <li>
                <span className="font-medium">4. URL state :</span>
                Data that exists on our URLs, including the pathname and query
                parameters. URL state is often missing as a category of state,
                but it is an important one. In many cases, a lot of major parts
                of our application rely upon accessing URL state. Try to imagine
                building a blog without being able to fetch a post based off of
                its slug or id that is located in the URL! There are undoubtedly
                more pieces of state that we could identify, but these are the
                major categories worth focusing on for most applications you
                build.
              </li>
            </ul>
          </p>
        </div>
      </div>

      <div class="card lg:card-side bg-base-100 shadow-xl">
        <div class="card-body">
          <h3 class="card-title">
          How does prototypical inheritance work?
          </h3>
          <p>
            <span className="font-bold">Ans:</span>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object.
          </p>
        </div>
      </div>

      <div class="card lg:card-side bg-base-100 shadow-xl">
        <div class="card-body">
          <h3 class="card-title">
          What is a unit test? Why should write unit tests?
          </h3>
          <p>
            <span className="font-bold">Ans:</span>UNIT TESTING is a type of software testing where individual units or components of a software are tested. The purpose is to validate that each unit of the software code performs as expected. Unit Testing is done during the development (coding phase) of an application by the developers. Unit Tests isolate a section of code and verify its correctness. A unit may be an individual function, method, procedure, module, or object.
            <p>Unit testing allows software developers to actually think through the design of the software and what has to be done before they write the code. This can help them to stay focused and can also help them to create much better designs. Testing a code early on can help to define what that piece of code is really responsible for.</p>
          </p>
        </div>
      </div>

      <div class="card lg:card-side bg-base-100 shadow-xl">
        <div class="card-body">
          <h3 class="card-title">
          What is a unit test? Why should write unit tests?
          </h3>
          <p>
            <span className="font-bold">Ans:</span> 
            React probably knows that we should never change or update the state directly. Rather we should always declare a new object const obj = {} and use this.setState obj  and let react handle it, just like I did in the example below. a grip on this matter we first need to know how React lifecycle works.

            the statement that if we mutate the state directly, it will change the reference of the state in the previous virtual DOM as well. So, React won’t be able to see that there is a change of the state and so it won’t be reflected in the original DOM until we reload. The problem is more obvious when we extend a component with React.PureComponent instead of React.component , where React tries to optimize some time by not rendering components if no changes are found.
Also, mutating the state directly can lead to odd bugs and components that are hard to optimize.
          </p>
        </div>
      </div>

    </div>
  );
};

export default Blog;
