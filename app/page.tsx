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
      <section className="relative h-[calc(100vh-4rem)] min-h-[500px] sm:min-h-[600px] px-4 sm:px-6 lg:px-8 overflow-hidden flex items-center py-8 sm:py-0">
        {/* Radial gradient background */}
        <div className="absolute inset-0 pointer-events-none z-0 bg-white">
          {/* Main center gradient */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] sm:w-[800px] sm:h-[800px] lg:w-[1200px] lg:h-[1200px] bg-[radial-gradient(circle,rgba(45,212,191,0.25)_0%,rgba(45,212,191,0.1)_30%,rgba(45,212,191,0.05)_50%,transparent_70%)] rounded-full" />
          {/* Top right gradient */}
          <div className="absolute top-[10%] right-[10%] w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px] bg-[radial-gradient(circle,rgba(45,212,191,0.15)_0%,rgba(45,212,191,0.08)_30%,transparent_60%)] rounded-full" />
          {/* Bottom left gradient */}
          <div className="absolute bottom-[15%] left-[8%] w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] lg:w-[450px] lg:h-[450px] bg-[radial-gradient(circle,rgba(45,212,191,0.12)_0%,rgba(45,212,191,0.06)_30%,transparent_60%)] rounded-full" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 sm:mb-8 tracking-tight leading-tight">
              Turn One Piece of Content Into Multiple Social Posts
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl font-medium text-gray-700 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-2">
              Transform your blog posts, newsletters, and long-form content into
              ready-to-post content for Twitter, LinkedIn, and
              Instagram—instantly.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-12 sm:mb-20">
              <Button
                variant="primary"
                href="/create"
                className="text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto"
              >
                Start Creating Posts
              </Button>
              <Button
                variant="secondary"
                onClick={scrollToDemo}
                className="text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto"
              >
                See How It Works
              </Button>
            </div>

            {/* Hero Illustration */}
            <div className="mt-12 sm:mt-20 flex flex-row sm:flex-row justify-center items-center gap-3 sm:gap-6 lg:gap-8">
              <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-4 sm:p-6 lg:p-8 flex flex-col items-center justify-center min-w-[100px] sm:min-w-[140px] lg:min-w-[160px]">
                <div className="bg-gray-50 rounded-xl p-2 sm:p-3 lg:p-4 mb-2 sm:mb-3 lg:mb-4 border border-gray-100">
                  <FileText className="h-6 w-6 sm:h-8 sm:w-8 lg:h-10 lg:w-10 text-teal-400" />
                </div>
                <p className="text-xs sm:text-sm font-semibold text-gray-900 text-center">
                  Your Content
                </p>
              </div>
              <div className="text-teal-400 text-xl sm:text-2xl lg:text-3xl font-bold">
                →
              </div>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 lg:gap-5">
                <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-3 sm:p-4 lg:p-6 flex flex-col items-center justify-center min-w-[80px] sm:min-w-[100px] lg:min-w-[120px]">
                  <div className="bg-gray-50 rounded-xl p-2 sm:p-3 mb-2 sm:mb-3 border border-gray-100">
                    <Twitter className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7 text-teal-400" />
                  </div>
                  <p className="text-xs font-semibold text-gray-900">Twitter</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-3 sm:p-4 lg:p-6 flex flex-col items-center justify-center min-w-[80px] sm:min-w-[100px] lg:min-w-[120px]">
                  <div className="bg-gray-50 rounded-xl p-2 sm:p-3 mb-2 sm:mb-3 border border-gray-100">
                    <Linkedin className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7 text-teal-400" />
                  </div>
                  <p className="text-xs font-semibold text-gray-900">
                    LinkedIn
                  </p>
                </div>
                <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-3 sm:p-4 lg:p-6 flex flex-col items-center justify-center min-w-[80px] sm:min-w-[100px] lg:min-w-[120px]">
                  <div className="bg-gray-50 rounded-xl p-2 sm:p-3 mb-2 sm:mb-3 border border-gray-100">
                    <Instagram className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7 text-teal-400" />
                  </div>
                  <p className="text-xs font-semibold text-gray-900">
                    Instagram
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section
        id="how-it-works"
        className="py-32 sm:py-40 px-4 sm:px-6 lg:px-8 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-20 tracking-tight leading-tight">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {/* Step 1 */}
            <Card className="p-10">
              <div className="text-center">
                <div className="bg-teal-50 rounded-xl p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center border border-teal-100">
                  <FileText className="h-8 w-8 text-teal-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 tracking-tight leading-tight">
                  Paste Your Content
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Add your blog post, newsletter, transcript, or any long-form
                  content
                </p>
              </div>
            </Card>

            {/* Step 2 */}
            <Card className="p-10">
              <div className="text-center">
                <div className="bg-teal-50 rounded-xl p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center border border-teal-100">
                  <Sparkles className="h-8 w-8 text-teal-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 tracking-tight leading-tight">
                  AI Generates Posts
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Our AI creates platform-optimized posts for Twitter, LinkedIn,
                  and Instagram
                </p>
              </div>
            </Card>

            {/* Step 3 */}
            <Card className="p-10">
              <div className="text-center">
                <div className="bg-teal-50 rounded-xl p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center border border-teal-100">
                  <Copy className="h-8 w-8 text-teal-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 tracking-tight leading-tight">
                  Copy & Share
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Copy-paste ready posts. Share across all your social platforms
                  instantly
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 sm:py-40 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-20 tracking-tight leading-tight">
            Why Choose SplitContent
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <Card className="p-6">
              <div className="flex items-start space-x-4">
                <div className="bg-gray-50 rounded-xl p-3 shrink-0 border border-gray-100">
                  <Zap className="h-5 w-5 text-teal-500" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 tracking-tight leading-tight">
                    Instant Generation
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Get all posts in seconds
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start space-x-4">
                <div className="bg-gray-50 rounded-xl p-3 shrink-0 border border-gray-100">
                  <Twitter className="h-5 w-5 text-teal-500" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 tracking-tight leading-tight">
                    Platform Optimized
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Each post tailored for its platform
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start space-x-4">
                <div className="bg-gray-50 rounded-xl p-3 shrink-0 border border-gray-100">
                  <Copy className="h-5 w-5 text-teal-500" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 tracking-tight leading-tight">
                    No Editing Needed
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Copy-paste ready content
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start space-x-4">
                <div className="bg-gray-50 rounded-xl p-3 shrink-0 border border-gray-100">
                  <Lock className="h-5 w-5 text-teal-500" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 tracking-tight leading-tight">
                    Secure & Private
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Your content stays protected
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start space-x-4">
                <div className="bg-gray-50 rounded-xl p-3 shrink-0 border border-gray-100">
                  <BarChart className="h-5 w-5 text-teal-500" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 tracking-tight leading-tight">
                    History Saved
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Access all your past generations
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start space-x-4">
                <div className="bg-gray-50 rounded-xl p-3 shrink-0 border border-gray-100">
                  <Sparkles className="h-5 w-5 text-teal-500" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 tracking-tight leading-tight">
                    AI Powered
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Smart content transformation
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 sm:py-40 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 tracking-tight leading-tight">
            Ready to amplify your content?
          </h2>
          <p className="text-lg font-medium text-gray-700 mb-10 max-w-2xl mx-auto leading-relaxed">
            Start transforming your long-form content into engaging social posts
            today.
          </p>
          <Button
            variant="primary"
            href="/create"
            className="text-lg px-10 py-5"
          >
            Start Creating Posts
          </Button>
        </div>
      </section>
    </>
  );
}
