import create from "zustand";

const useStore = create((set) => ({
  data: [],
  loading: true,
  error: null,
  fetchData: async () => {
    try {
      const response = await fetch(
        "https://test-api-py77dwlbxa-df.a.run.app/data"
      );
      const result = await response.json();
      set({ data: result, loading: false });
    } catch (error) {
      set({ error: "Error fetching data", loading: false });
      console.error("Error fetching data:", error);
    }
  },
}));

export default useStore;
