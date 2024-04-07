import { PageInfo } from "@/sanity/typings";

const fetchPageInfo = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/getPageInfo`
    );
    if (!res.ok) {
      throw new Error(`An error occurred: ${res.status}`);
    }
    const data = await res.json();
    const pageInfo: PageInfo = data.pageInfo;
    console.log("fetching", pageInfo);
    return pageInfo;
  } catch (error) {
    console.error("Failed to fetch page info:", error);
    // Hantera felet, t.ex. returnera null eller en standard-sidinfo
    return null;
  }
};
export default fetchPageInfo;
