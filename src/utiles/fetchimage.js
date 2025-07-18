// utils/fetchImageById.js
export const fetchimage = async (id) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_WORDPRESS_API}/wp-json/custom/v1/elementor-page/${id}`);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch image with ID ${id}`);
    }

    const object = await response.json();
    console.log("data  ;",object)
    
    return object.data.sections || null;
    
  } catch (error) {
    console.error(`Error fetching image with ID ${id}:`, error);
    return null;
  }
};
