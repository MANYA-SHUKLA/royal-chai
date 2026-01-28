import Header from '@/components/Header';
import Hero from '@/components/Hero';
import StorySection from '@/components/StorySection';
import EmailSignup from '@/components/EmailSignup';
import Footer from '@/components/Footer';
import FloatingOrnaments from '@/components/FloatingOrnaments';
export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <FloatingOrnaments />
      <Header />
      <Hero />
      <StorySection />
      <EmailSignup />
      <Footer />
    </main>
  );
}