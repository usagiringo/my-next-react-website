import Header from 'components/header'
import Footer from 'components/footer'
import Container from './container'

export default function Layout({ children }) {
  return (
    <>
      <Header />

      <main>
        <Container>
          {children}
        </Container>
      </main>
      
      <Footer />
    </>
  )
}