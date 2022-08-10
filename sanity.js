import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const client = sanityClient({
  projectId: process.env.PROJECTID,
  dataset: process.env.DATASET,
  useCdn: true,
  apiVersion: process.env.VERSION,
});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);

export default client;
