export function validateProductPayload(body) {
  if (!body || typeof body !== "object") {
    return { error: "Invalid product data." };
  }

  const title = typeof body.title === "string" ? body.title.trim() : "";
  const description =
    typeof body.description === "string" ? body.description.trim() : "";
  const price = Number(body.price);
  const categoryId = Number(body.categoryId);
  const images = Array.isArray(body.images)
    ? body.images.filter((image) => typeof image === "string" && image.trim())
    : [];

  if (!title) {
    return { error: "Product title is required." };
  }

  if (!Number.isFinite(price) || price <= 0) {
    return { error: "Price must be a positive number." };
  }

  if (!description) {
    return { error: "Description is required." };
  }

  if (!Number.isInteger(categoryId) || categoryId <= 0) {
    return { error: "A valid category is required." };
  }

  return {
    data: {
      title,
      price,
      description,
      categoryId,
      images:
        images.length > 0
          ? images.map((image) => image.trim())
          : ["https://placehold.co/600x400"],
    },
  };
}
