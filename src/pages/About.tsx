import React from 'react'

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#008080] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white sm:text-4xl">
            About AI Tools Catalog
          </h1>
          <p className="mt-4 text-lg text-white/90">
            Your comprehensive guide to the world of AI tools and applications
          </p>
        </div>

        <div className="mt-12 space-y-8">
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold text-white mb-4">Our Mission</h2>
            <p className="text-white/90">
              AI Tools Catalog is dedicated to helping individuals and businesses discover and understand the vast landscape of artificial intelligence tools. We curate and organize AI tools across various categories, making it easier for users to find the right solutions for their needs.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold text-white mb-4">What We Do</h2>
            <ul className="list-disc list-inside space-y-2 text-white/90">
              <li>Curate and categorize AI tools across different domains</li>
              <li>Provide detailed information about each tool's features and capabilities</li>
              <li>Keep our catalog updated with the latest AI innovations</li>
              <li>Help users make informed decisions about AI tool adoption</li>
            </ul>
          </div>

          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold text-white mb-4">Our Values</h2>
            <ul className="list-disc list-inside space-y-2 text-white/90">
              <li>Accuracy and reliability in our tool listings</li>
              <li>User-focused approach to information organization</li>
              <li>Commitment to staying current with AI developments</li>
              <li>Transparency in our curation process</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About 