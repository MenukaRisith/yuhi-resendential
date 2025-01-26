import { motion } from 'framer-motion';
import Navbar from '../components/NavBar';
import HeroSection from '../components/HeroSection';
import AboutSection from '~/components/AboutSection';
import ServicesSection from '~/components/ServicesSection';
import ProjectsSection from '~/components/ProjectSection';
import ContactSection from '~/components/ContactSection';
import Footer from '~/components/FooterSection';

const HomePage = () => {
  // Animation Variants
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 }, // Initially hidden with slight vertical offset
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' }, // Smooth transition
    },
  };

  const heroVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, ease: 'easeOut' },
    },
  };

  return (
    <div className="min-h-screen bg-[#F2F5F3] font-[poppins]">
      <Navbar />
      <main>
        {/* Animated Hero Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={heroVariants}
        >
          <HeroSection />
        </motion.div>

        {/* Animated Sections */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
        >
          <AboutSection />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
        >
          <ServicesSection />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
        >
          <ProjectsSection />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
        >
          <ContactSection />
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
