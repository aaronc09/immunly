import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { AuthProvider } from './context/AuthContext';
import { ProgressProvider } from './context/ProgressContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import StreakSaver from './components/StreakSaver';
import IntroVideo from './components/IntroVideo';
import WelcomeIntro from './components/WelcomeIntro';
import PageTransition from './components/PageTransition';
import CookieConsent from './components/CookieConsent';
import HomePage from './pages/HomePage';
import CoursesPage from './pages/CoursesPage';
import ModulePage from './pages/ModulePage';
import LessonPage from './pages/LessonPage';
import ProgressPage from './pages/ProgressPage';
import LoginPage from './pages/LoginPage';
import ContactPage from './pages/ContactPage';
import ReferencePage from './pages/ReferencePage';

export default function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <AuthProvider>
          <ProgressProvider>
            <WelcomeIntro />
            <IntroVideo />
            <Navbar />
            <StreakSaver />
            <PageTransition>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/courses" element={<CoursesPage />} />
                <Route path="/module/:moduleId" element={<ModulePage />} />
                <Route path="/module/:moduleId/lesson/:lessonId" element={<LessonPage />} />
                <Route path="/reference" element={<ReferencePage />} />
                <Route path="/progress" element={<ProgressPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/contact" element={<ContactPage />} />
                {/* Catch-all */}
                <Route path="*" element={<HomePage />} />
              </Routes>
            </PageTransition>
            <Footer />
            <CookieConsent />
          </ProgressProvider>
        </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}
