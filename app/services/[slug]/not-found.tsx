import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Home } from "lucide-react";

export default function ServiceNotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-8">
      <div className="max-w-2xl text-center">
        <h1 className="text-6xl font-black text-gray-900 mb-4">404</h1>
        <h2 className="text-3xl font-bold text-gray-700 mb-4">Service Not Found</h2>
        <p className="text-lg text-gray-600 mb-8">
          The service you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button
            asChild
            className="bg-gradient-to-r from-teal-600 to-cyan-500 hover:from-teal-700 hover:to-cyan-600 text-white rounded-full px-8 py-6 font-bold"
          >
            <Link href="/services">
              <ArrowLeft className="mr-2 w-5 h-5" />
              View All Services
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="rounded-full px-8 py-6 font-bold"
          >
            <Link href="/">
              <Home className="mr-2 w-5 h-5" />
              Go Home
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
