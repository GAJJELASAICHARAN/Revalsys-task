/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    // Ensures Turbopack treats this project as the workspace root,
    // even if other lockfiles exist elsewhere on the machine.
    root: process.cwd(),
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
