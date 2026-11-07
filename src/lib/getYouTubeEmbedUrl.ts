export function getYouTubeEmbedUrl(url: string): string | null {
    try {
        const parsed = new URL(url);
        const host = parsed.hostname.toLowerCase();

        let videoId: string | null = null;

        if (host === "youtu.be" || host === "www.youtu.be") {
            videoId = parsed.pathname.split("/")[1];
        } else if (
            host === "youtube.com" ||
            host === "www.youtube.com" ||
            host === "m.youtube.com"
        ) {
            if (parsed.pathname === "/watch") {
                videoId = parsed.searchParams.get("v");
            } else if (
                parsed.pathname.startsWith("/shorts/") ||
                parsed.pathname.startsWith("/embed/")
            ) {
                videoId = parsed.pathname.split("/")[2];
            }
        }

        if (!videoId || !/^[a-zA-Z0-9_-]{11}$/.test(videoId)) {
            return null;
        }

        return `https://www.youtube-nocookie.com/embed/${videoId}`;
    } catch {
        return null;
    }
}