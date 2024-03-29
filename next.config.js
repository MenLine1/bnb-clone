/** @type {{images: {domains: string[]}, experimental: {appDir: boolean}}} */
const nextConfig = {
    experimental: {
        appDir: true,
    },
    images: {
        domains: [
            "avatars.githubusercontent.com",
            "lh3.googleusercontent.com",
            "res.cloudinary.com"
        ]
    }
}

module.exports = nextConfig;