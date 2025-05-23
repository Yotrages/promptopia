import Link from "next/link";
import React from "react";

const Form = ({ type, post, setpost, submitting, handleSubmit }) => {
  return (
    <section className="w-full max-w-full flex-start flex-col">
      <h1 className="head_text text-left">
        <span className="blue_gradient">{type} Post </span>
      </h1>
      <p className="desc text-left max-w-md">
        {type} and share amazing propmts with the world and let your imagination
        run wild with any AI-powered platform.
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism"
      >
        <label htmlFor="">
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Your AI Prompt
          </span>
          <textarea
          value={post.prompt}
          onChange={(e) => setpost({ ...post, prompt: e.target.value })}
          placeholder="Write your text here..."
          required
          className="form_textarea"
        ></textarea>
        </label>
       

        <label htmlFor="">
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Tag {` `}
            <span className="font-normal">(#product, #webdevelopment, #idea)</span>
          </span>
          <input
          value={post.tag}
          onChange={(e) => setpost({ ...post, tag: e.target.value })}
          placeholder="#tag"
          required
          className="form_input"
        ></input>
        </label>

        <div className="flex-end mx-3 mb-5 gap-4">
        <Link href='/' className="text-gray-500"> Cancel </Link>
        </div>

        <button type="submit"
        disabled={submitting}
        className="px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white">
        {submitting ? `${type}...` : type}
        </button>
      </form>
    </section>
  );
};

export default Form;
