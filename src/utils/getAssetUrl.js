// Helper function to get the correct asset URL with base path
export const getAssetUrl = (path) => {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path
  // Add base URL
  return `${import.meta.env.BASE_URL}${cleanPath}`
}
