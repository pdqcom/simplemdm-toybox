import type { AppProps } from 'next/app'
import Layout from "@/components/layout";
import {Container} from "@mui/material";

export default function App({ Component, pageProps }: AppProps) {
  return <Layout>
    <Container>
      <Component {...pageProps} />
    </Container>
  </Layout>
}
