import type { AppProps } from 'next/app'
import Layout from "@/components/layout";
import {Container} from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
export default function App({ Component, pageProps }: AppProps) {
  return <Layout>
      <Container>
        <CssBaseline/>
        <Component {...pageProps} />
      </Container>
  </Layout>
}
