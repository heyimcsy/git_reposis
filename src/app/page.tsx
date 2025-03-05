'use client'
import styles from "./page.module.css";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import GetData from "@/components/getData";
import Search from "@/components/search";

export default function Home() {
    const queryClient:QueryClient = new QueryClient();

  return (
      <QueryClientProvider client={queryClient}>
          {/*<div className={styles.page}>*/}
          <div style={{width: '100%', height: '100%'}}>
              <div>
                <h1> HOME</h1>
                  <Search/>
                  <GetData/>
              </div>
              <footer className={styles.footer}>

              </footer>
          </div>

      </QueryClientProvider>
  );
}
