'use client'
import styles from "./page.module.css";
import {useState} from "react";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {ReactQueryDevtoolsPanel} from "@tanstack/react-query-devtools";
import GetData from "@/components/getData";

export default function Home() {
    const [open, setOpen] = useState<boolean>(false)
    const queryClient:QueryClient = new QueryClient();

  return (
      <QueryClientProvider client={queryClient}>
          {/*<div className={styles.page}>*/}
          <div style={{width: '100%', height: '100%'}}>
              <div>
                <h1> HOME</h1>
                  <GetData/>
              </div>
              <footer className={styles.footer}>
                  <button
                      onClick={() => setOpen(!open)}
                  >{`${open ? 'Close' : 'Open'} the devtools panel`}</button>
                  {open && <ReactQueryDevtoolsPanel onClose={() => setOpen(false)} />}
              </footer>
          </div>

      </QueryClientProvider>
  );
}
