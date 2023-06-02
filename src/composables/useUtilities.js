export function useUtilities() {
  const getInitials = (name) => {
    const words = name.split(" ");
    return words[0][0] + words[1][0];
  };

  return {
    getInitials,
  };
}
