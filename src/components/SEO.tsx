import { useEffect } from "react";

interface SEOProps {
    title: string;
    description: string;
    canonical: string;
    image?: string;
    type?: "website" | "article";
}

function SEO({
                 title,
                 description,
                 canonical,
                 image = "/logo.jpg",
                 type = "website",
}: SEOProps) {

    const siteUrl = "https://rjayna.com";
    const fullImageUrl = image.startsWith("http")
        ? image
        : `${siteUrl}${image}`;

    useEffect(() => {
        document.title = title;

        const setMeta = (
            selector: string,
            attribute: "name" | "property",
            value: string,
            content: string
        ) => {
            let element = document.querySelector(selector) as HTMLMetaElement | null;

            if (!element) {
                element = document.createElement("meta");
                element.setAttribute(attribute, value);
                document.head.appendChild(element);
            }

            element.setAttribute("content", content);
        };

        const setCanonical = (url: string) => {
            let canonical = document.querySelector(
                'link[rel="canonical"]'
            ) as HTMLLinkElement | null;

            if (!canonical) {
                canonical = document.createElement("link");
                canonical.setAttribute("rel", "canonical");
                document.head.appendChild(canonical);
            }

            canonical.setAttribute("href", url);
        };

        // Primary SEO
        setMeta('meta[name="description"]', "name", "description", description);
        setMeta('meta[name="robots"]', "name", "robots", "index, follow");
        setMeta('meta[name="author"]', "name", "author", "RJAYNA");

        // Canonical
        setCanonical(canonical);

        // Open Graph
        setMeta('meta[property="og:type"]', "property", "og:type", type);
        setMeta(
            'meta[property="og:site_name"]',
            "property",
            "og:site_name",
            "RJAYNA"
        );
        setMeta(
            'meta[property="og:title"]',
            "property",
            "og:title",
            title
        );
        setMeta(
            'meta[property="og:description"]',
            "property",
            "og:description",
            description
        );
        setMeta(
            'meta[property="og:url"]',
            "property",
            "og:url",
            canonical
        );
        setMeta(
            'meta[property="og:image"]',
            "property",
            "og:image",
            fullImageUrl
        );
        setMeta(
            'meta[property="og:image:alt"]',
            "property",
            "og:image:alt",
            title
        );
        setMeta(
            'meta[property="og:locale"]',
            "property",
            "og:locale",
            "fr_FR"
        );

        // Twitter / X
        setMeta(
            'meta[name="twitter:card"]',
            "name",
            "twitter:card",
            "summary_large_image"
        );
        setMeta(
            'meta[name="twitter:title"]',
            "name",
            "twitter:title",
            title
        );
        setMeta(
            'meta[name="twitter:description"]',
            "name",
            "twitter:description",
            description
        );
        setMeta(
            'meta[name="twitter:image"]',
            "name",
            "twitter:image",
            fullImageUrl
        );
        setMeta(
            'meta[name="twitter:image:alt"]',
            "name",
            "twitter:image:alt",
            title
        );
    }, [title, description, canonical, image, type]);

    return null;
}

export default SEO;