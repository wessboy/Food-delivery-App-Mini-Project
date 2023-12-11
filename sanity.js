import {createClient} from "@sanity/client";
//import  {ImageUrlBuilder}  from "@sanity/image-url/lib/types/builder";
import  ImageUrlBuilder  from "@sanity/image-url";

const client = createClient({
  projectId:"nu7k7zp6",
  dataset:"production",
  useCdn: true,
  apiVersion:"2021-10-21",
});

//get the url from the registered images in bd
const builder = ImageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);

export default client;