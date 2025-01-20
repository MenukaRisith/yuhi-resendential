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

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <HeroSection />
        {/* Animated Image */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
          className="w-full flex justify-center mb-12 px-4"
        >
          <img
            className="w-full max-w-6xl h-auto object-cover rounded-xl sm:rounded-2xl lg:rounded-3xl"
            src="/images/bg-1.png"
            alt="Design Concept of the Most Outstanding Mansion in Dubai"
          />
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
