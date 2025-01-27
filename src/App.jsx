import Header from "./components/Header"
import ContentArea from "./components/ContentArea"
import WelcomeArea from "./components/WelcomeArea"
import Footer from "./components/Footer"


export default function App() {
  return (
    <main>
      <Header />
      <WelcomeArea />
      <ContentArea />
      <Footer />
    </main>
  )
}