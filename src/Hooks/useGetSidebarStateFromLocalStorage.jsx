const useGetSidebarStateFromLocalStorage = () => {
  const sidebarDataFromLocalStorage = localStorage.getItem("sidebar");
  return sidebarDataFromLocalStorage ? JSON.parse(sidebarDataFromLocalStorage) : false;
};

export default useGetSidebarStateFromLocalStorage;
