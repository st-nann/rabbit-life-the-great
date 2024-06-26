import type { AppProps } from "next/app"
import { NextUIProvider } from "@nextui-org/react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { fontSans, fontMono, fontRoboto } from "@/config/fonts"
import { useRouter } from 'next/router'
import { store } from "@/redux/store"
import { Provider } from "react-redux"
import { NextPageContext } from "next"
import "@/styles/globals.css"

App.getInitialProps = async ({ query }: NextPageContext) => {
  return { query }
}

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()

  return (
    <NextUIProvider navigate={router.push}>
      <NextThemesProvider attribute="class" defaultTheme="light">
        <Provider store={store}>
          <Component {...pageProps} className={fonts.roboto} />
        </Provider>
      </NextThemesProvider>
    </NextUIProvider>
  )
}

export const fonts = {
  // sans: fontSans.style.fontFamily,
  // mono: fontMono.style.fontFamily,
  roboto: fontRoboto.style.fontFamily,
}
