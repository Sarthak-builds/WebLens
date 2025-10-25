import { create } from 'zustand';
const apikey = import.meta.env.VITE_PAGEINSIGHTS_API_KEY;


export const usePageSpeed = create((set)=>({
    data:{},
    loading: false,
    error: null,
    url:null,
    fetchData : async (URL)=> {
        set({loading:true,
            error:null,
            url:URL
        });
        try {
          const apiUrl = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURI(URL)}&key=${apikey}&category=ACCESSIBILITY&category=BEST_PRACTICES&category=PERFORMANCE&category=SEO`;
          const response = await fetch(apiUrl);
          if (!response.ok) {
            if (response.status === 429) {
          throw new Error('Too many requests. Please try again later.');
        }
            throw new Error(`Sorry :/ (Status: ${response.status}). Please try again later.`);
          }
          const responseData = await response.json();
          set({data : responseData,
            loading: false,
            url: URL
          })
        } catch (error) {
             set({error: `${error.message}Sorry :/ (Status: ${response.status}). Please try again later.`, loading:false})
        }
    }
}))