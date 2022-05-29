import { Container } from '@mui/material'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import NavBar from '../components/NavBar'
import HeroSection from '../components/Hero'
export default function Home() {
  return (
    <Container sx={{mt:3}}>
      <NavBar />
      <HeroSection />
    </Container>
  )
}
