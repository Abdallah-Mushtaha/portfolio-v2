import { createClient } from "next-sanity";
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
    projectId: "dl4o9j19",
    dataset: "production",
    apiVersion: "2025-10-19",
    useCdn: true,
});
const builder = imageUrlBuilder(client);

export function urlFor(source) {
    return builder.image(source);
}