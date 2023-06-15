//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";

//core
import "primereact/resources/primereact.min.css";

//icons
// import "primeicons/primeicons.css";
//primeflex
import "/node_modules/primeflex/primeflex.css";

import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect } from "react";
import ProfileLayout from "@/Components/layout/ProfileLayout/ProfileLayout";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  console.log(router.pathname.split("/")[1]);
  const url: string = router.pathname.split("/")[1];

  if (url === "profile") {
    return (
      <ProfileLayout>
        <Component {...pageProps} />
      </ProfileLayout>
    );
  } else {
    return <Component {...pageProps} />;
  }
}
