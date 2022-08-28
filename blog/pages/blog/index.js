import React from 'react'
import Container from 'components/container'
import Meta from 'components/meta'
import Hero from 'components/hero'

export default function Blog() {
  return (
    <Container>
      <Meta pageTitle="Blog" pageDesc="Recent Posts" />
      <Hero title="Blog" subtitle="Recent Posts" />
    </Container>
  )
}
