
import React from 'react'

export default function About() {
  return (
      <div className="py-16 bg-white">
          <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
              <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                  <div className="md:5/12 lg:w-5/12">
                      <img
                          src="https://images.unsplash.com/photo-1542435503-956c469947f6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                          alt="image"
                      />
                  </div>
                  <div className="md:7/12 lg:w-6/12">
                      <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                          How to write a blog
                      </h2>
                      <p className="mt-6 text-gray-600">
                          Creating a blog offers a powerful way to express your talent, share messages, or promote a business. Whether you're passionate about writing, aiming to improve SEO, or using blogging for marketing, a blog can serve various purposes. Platforms like WordPress and Blogger make it easy to start, but maintaining a blog requires dedication and creativity. It's important to stay relevant and selective with topics, especially when aligning them with your goals or audience interests. Blogs can even be used to spread social awareness or complete assignments, making them a flexible tool in the digital age.
                      </p>
                      <p className="mt-4 text-gray-600">
                          To create an effective blog, understand your audience and write engaging content tailored to their interests. Use a matching theme for visual appeal and make your first post and introduction impactful to attract and retain readers.
                      </p>
                  </div>
              </div>
          </div>
      </div>
  );
}