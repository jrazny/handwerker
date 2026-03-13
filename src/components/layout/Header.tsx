import { useState, useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';
import { Phone, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from '@/components/ui/sheet';
import { config } from '@/lib/config';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  
  useEffect(() => {
    return scrollY.on('change', (latest) => {
      setIsScrolled(latest > 20);
    });
  }, [scrollY]);

  return (
    <>
      {config.features.notdienst_banner && (
        <div className="bg-red-600 text-white text-sm py-2 px-4 flex items-center justify-center font-medium z-50 relative">
          <motion.div 
            className="w-2 h-2 rounded-full bg-white mr-2"
            animate={{ scale: [1, 1.5, 1], opacity: [1, 0.7, 1] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          />
          <span>24h Notdienst: <a href={`tel:${config.company.phoneEmergency}`} className="hover:underline">{config.company.phoneEmergency}</a></span>
        </div>
      )}
      
      <motion.header 
        className={`sticky top-0 z-40 w-full transition-colors duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md' : 'bg-white'}`}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between h-20 px-4 md:px-8">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 group">
            <span className="text-2xl font-bold tracking-tight text-primary group-hover:text-primary-light transition-colors">
              {config.company.name}
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {config.navigation.map((item) => (
              <a 
                key={item.href} 
                href={item.href}
                className="text-sm font-medium text-slate-700 hover:text-primary transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <a href={`tel:${config.company.phone}`} className="flex items-center gap-2 text-sm font-medium text-slate-700 hover:text-primary transition-colors">
              <Phone className="w-4 h-4" />
              <span>{config.company.phone}</span>
            </a>
            <Button asChild className="bg-accent hover:bg-accent-light text-white rounded-md">
              <a href="/kontakt">Anfrage stellen</a>
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-primary hover:bg-primary-lighter rounded-md">
                  <Menu className="w-6 h-6" />
                  <span className="sr-only">Menü öffnen</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-white border-l border-slate-200">
                <SheetTitle className="text-left text-xl font-bold text-primary mb-6">Menü</SheetTitle>
                <SheetDescription className="sr-only">Navigation für die Website</SheetDescription>
                
                <nav className="flex flex-col gap-4 mt-8">
                  {config.navigation.map((item) => (
                    <a 
                      key={item.href} 
                      href={item.href}
                      className="text-lg font-medium text-slate-800 hover:text-primary transition-colors py-2 border-b border-slate-100"
                    >
                      {item.label}
                    </a>
                  ))}
                </nav>

                <div className="mt-8 flex flex-col gap-4">
                  <a href={`tel:${config.company.phone}`} className="flex items-center gap-3 text-lg font-medium text-slate-800 py-2">
                    <Phone className="w-5 h-5 text-primary" />
                    <span>{config.company.phone}</span>
                  </a>
                  <Button asChild className="w-full bg-accent hover:bg-accent-light text-white rounded-md mt-4">
                    <a href="/kontakt">Anfrage stellen</a>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </motion.header>
    </>
  );
}
