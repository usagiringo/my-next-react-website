import React from 'react'
import Container from 'components/container'
import Meta from 'components/meta'
import Hero from 'components/hero'

export default function Home() {
  return (
    <Container>
      <Meta />
      <Hero title="MOMO" subtitle="もものぺーじ" imageOn />
    </Container>
  )
}