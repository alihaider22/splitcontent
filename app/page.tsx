"use client";

import Button from "@/components/Button";
import Card from "@/components/Card";
import {
  FileText,
  Sparkles,
  Copy,
  Zap,
  Lock,
  BarChart,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";

export default function Page() {
  const scrollToDemo = () => {
    const element = document.getElementById("how-it-works");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Hero Section */}
      <section className="flex-1 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Turn One Piece of Content Into Multiple Social Posts
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto">
              Transform your blog posts, newsletters, and long-form content into
              ready-to-post content for Twitter, LinkedIn, and
              Instagram—instantly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button variant="primary" href="/create">
                Start Creating Posts
              </Button>
              <Button variant="secondary" onClick={scrollToDemo}>
                See How It Works
              </Button>
            </div>

            {/* Hero Illustration */}
            <div className="mt-16 flex justify-center items-center space-x-8 sm:space-x-12">
              <div className="flex flex-col items-center">
                <div className="bg-blue-100 rounded-lg p-6 mb-4">
                  <FileText className="h-12 w-12 text-blue-600" />
                </div>
                <p className="text-sm text-gray-600">Your Content</p>
              </div>
              <div className="text-blue-600 text-2xl font-bold">→</div>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                <div className="flex flex-col items-center">
                  <div className="bg-blue-100 rounded-lg p-4 mb-2">
                    <Twitter className="h-8 w-8 text-blue-600" />
                  </div>
                  <p className="text-xs text-gray-600">Twitter</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="bg-blue-100 rounded-lg p-4 mb-2">
                    <Linkedin className="h-8 w-8 text-blue-600" />
                  </div>
                  <p className="text-xs text-gray-600">LinkedIn</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="bg-blue-100 rounded-lg p-4 mb-2">
                    <Instagram className="h-8 w-8 text-blue-600" />
                  </div>
                  <p className="text-xs text-gray-600">Instagram</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section
        id="how-it-works"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-white"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-16">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <Card>
              <div className="text-center">
                <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <FileText className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Paste Your Content
                </h3>
                <p className="text-gray-600">
                  Add your blog post, newsletter, transcript, or any long-form
                  content
                </p>
              </div>
            </Card>

            {/* Step 2 */}
            <Card>
              <div className="text-center">
                <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Sparkles className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  AI Generates Posts
                </h3>
                <p className="text-gray-600">
                  Our AI creates platform-optimized posts for Twitter, LinkedIn,
                  and Instagram
                </p>
              </div>
            </Card>

            {/* Step 3 */}
            <Card>
              <div className="text-center">
                <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Copy className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Copy & Share
                </h3>
                <p className="text-gray-600">
                  Copy-paste ready posts. Share across all your social platforms
                  instantly
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-16">
            Why Choose SplitContent
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 rounded-lg p-3 shrink-0">
                  <Zap className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Instant Generation
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Get all posts in seconds
                  </p>
                </div>
              </div>
            </Card>

            <Card>
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 rounded-lg p-3 shrink-0">
                  <Twitter className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Platform Optimized
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Each post tailored for its platform
                  </p>
                </div>
              </div>
            </Card>

            <Card>
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 rounded-lg p-3 shrink-0">
                  <Copy className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    No Editing Needed
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Copy-paste ready content
                  </p>
                </div>
              </div>
            </Card>

            <Card>
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 rounded-lg p-3 shrink-0">
                  <Lock className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Secure & Private
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Your content stays protected
                  </p>
                </div>
              </div>
            </Card>

            <Card>
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 rounded-lg p-3 shrink-0">
                  <BarChart className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    History Saved
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Access all your past generations
                  </p>
                </div>
              </div>
            </Card>

            <Card>
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 rounded-lg p-3 shrink-0">
                  <Sparkles className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    AI Powered
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Smart content transformation
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
            Ready to amplify your content?
          </h2>
          <Button
            variant="primary"
            href="/create"
            className="text-lg px-8 py-4"
          >
            Start Creating Posts
          </Button>
        </div>
      </section>
    </>
  );
}
