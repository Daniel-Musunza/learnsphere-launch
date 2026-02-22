import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BookOpen, 
  Users, 
  Clock, 
  Award, 
  Star, 
  ChevronRight, 
  Menu, 
  X, 
  CheckCircle2, 
  PlayCircle,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ArrowRight,
  TrendingUp,
  Globe,
  Zap
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Toaster, toast } from 'sonner';

// --- Components ---

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Courses', href: '#courses' },
    { name: 'Features', href: '#features' },
    { name: 'Pricing', href: '#pricing' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-primary p-1.5 rounded-lg">
            <BookOpen className="h-6 w-6 text-white" />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">LearnSphere</span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">
              {link.name}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Button variant="ghost" size="sm">Log in</Button>
          <Button size="sm" className="rounded-full px-6">Sign Up</Button>
        </div>

        <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b overflow-hidden"
          >
            <div className="flex flex-col p-4 gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-base font-medium text-slate-600 py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <hr />
              <div className="flex flex-col gap-2 pt-2">
                <Button variant="outline" className="w-full">Log in</Button>
                <Button className="w-full">Sign Up</Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full -z-10 bg-[radial-gradient(circle_at_top_right,rgba(124,58,237,0.05),transparent_40%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.05),transparent_40%)]" />
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20 border-none px-4 py-1 text-sm font-semibold">
              <Zap className="w-3.5 h-3.5 mr-2 inline" /> Over 10,000 students enrolled
            </Badge>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight text-slate-900 mb-6">
              Unlock Your Potential with <span className="text-primary">Expert-Led</span> Online Courses
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-lg">
              Master new skills, advance your career, and explore your passions with our comprehensive library of industry-standard courses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="rounded-full px-8 text-lg h-14 group" onClick={() => toast.success('Redirecting to enrollment...')}>
                Start Learning Today
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="rounded-full px-8 text-lg h-14">
                Browse Courses
              </Button>
            </div>
            
            <div className="mt-10 flex items-center gap-6">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                    <img 
                      src={`https://storage.googleapis.com/dala-prod-public-storage/generated-images/02670eb1-83ac-4d68-89a7-ae6f252ee74c/avatar-${i === 4 ? 3 : (i % 3) + 1}-3825745a-1771772999188.webp`} 
                      alt="Student" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="text-sm font-medium text-slate-600">
                <span className="text-slate-900 font-bold">4.9/5</span> from 2k+ reviews
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 w-full aspect-square md:aspect-auto">
              <img 
                src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/02670eb1-83ac-4d68-89a7-ae6f252ee74c/hero-illustration-e98a47aa-1771773005072.webp" 
                alt="Online Learning Illustration" 
                className="w-full h-auto rounded-3xl"
              />
            </div>
            {/* Floating UI Elements */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="absolute -top-6 -left-6 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3 z-20 hidden md:flex"
            >
              <div className="bg-green-100 p-2 rounded-lg text-green-600">
                <CheckCircle2 className="h-6 w-6" />
              </div>
              <div>
                <p className="text-xs text-slate-400 font-medium">Completed</p>
                <p className="text-sm font-bold text-slate-800">20+ Certificates</p>
              </div>
            </motion.div>
            
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3 z-20 hidden md:flex"
            >
              <div className="bg-blue-100 p-2 rounded-lg text-blue-600">
                <PlayCircle className="h-6 w-6" />
              </div>
              <div>
                <p className="text-xs text-slate-400 font-medium">Streaming Now</p>
                <p className="text-sm font-bold text-slate-800">Live Workshop</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Features = () => {
  const features = [
    {
      icon: <Users className="h-6 w-6" />,
      title: "Expert Instructors",
      description: "Learn from industry professionals with years of real-world experience and passion for teaching.",
      color: "bg-blue-500"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Flexible Schedule",
      description: "Study at your own pace. Access our platform anytime, anywhere, on any device that suits you.",
      color: "bg-purple-500"
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Official Certificates",
      description: "Earn recognized certificates upon course completion to showcase your achievements.",
      color: "bg-orange-500"
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Lifetime Access",
      description: "Buy once and enjoy lifetime access to course materials and future updates forever.",
      color: "bg-green-500"
    }
  ];

  return (
    <section id="features" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Why Choose LearnSphere?</h2>
          <p className="text-slate-600">We provide the best tools and resources to help you achieve your learning goals effectively.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <Card className="border-none shadow-sm hover:shadow-md transition-shadow h-full">
                <CardHeader>
                  <div className={`w-12 h-12 rounded-xl ${feature.color} flex items-center justify-center text-white mb-2`}>
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-500 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const PopularCourses = () => {
  const courses = [
    {
      id: 1,
      title: "Ultimate Web Development Bootcamp",
      instructor: "Alex Johnson",
      rating: 4.9,
      students: "12,450",
      price: "$89.99",
      image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/02670eb1-83ac-4d68-89a7-ae6f252ee74c/course-web-dev-e29fef7f-1771772998828.webp",
      badge: "Best Seller"
    },
    {
      id: 2,
      title: "Digital Marketing Mastery 2024",
      instructor: "Sarah Williams",
      rating: 4.8,
      students: "8,920",
      price: "$69.99",
      image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/02670eb1-83ac-4d68-89a7-ae6f252ee74c/course-marketing-59711f72-1771772999002.webp",
      badge: "Popular"
    },
    {
      id: 3,
      title: "UI/UX Design with Figma",
      instructor: "Michael Chen",
      rating: 4.7,
      students: "5,600",
      price: "$79.99",
      image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/02670eb1-83ac-4d68-89a7-ae6f252ee74c/course-design-87c32faf-1771773005461.webp",
      badge: "New"
    },
    {
      id: 4,
      title: "Business Leadership Strategy",
      instructor: "David Miller",
      rating: 4.9,
      students: "3,200",
      price: "$99.99",
      image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/02670eb1-83ac-4d68-89a7-ae6f252ee74c/course-business-e837f2d3-1771772999436.webp",
      badge: "Featured"
    },
    {
      id: 5,
      title: "Data Science & Machine Learning",
      instructor: "Emily Blunt",
      rating: 4.8,
      students: "15,800",
      price: "$129.99",
      image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/02670eb1-83ac-4d68-89a7-ae6f252ee74c/course-data-science-89535965-1771772998936.webp",
      badge: "Hot"
    },
    {
      id: 6,
      title: "Professional Photography Guide",
      instructor: "Robert Pattison",
      rating: 4.6,
      students: "2,100",
      price: "$59.99",
      image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/02670eb1-83ac-4d68-89a7-ae6f252ee74c/course-photography-361b8120-1771773003693.webp",
      badge: "Top Rated"
    }
  ];

  return (
    <section id="courses" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Popular Courses</h2>
            <p className="text-slate-600">Discover top-rated courses that thousands of students are using to advance their careers.</p>
          </div>
          <Button variant="outline" className="hidden md:flex">View All Courses</Button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, idx) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <Card className="group overflow-hidden border-slate-200 hover:border-primary/50 transition-all">
                <div className="relative overflow-hidden h-48">
                  <img 
                    src={course.image} 
                    alt={course.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <Badge className="absolute top-4 left-4 bg-white/90 text-primary border-none hover:bg-white">
                    {course.badge}
                  </Badge>
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl line-clamp-1">{course.title}</CardTitle>
                  <p className="text-sm text-slate-500">by {course.instructor}</p>
                </CardHeader>
                <CardContent className="pb-4">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center text-yellow-500">
                      <Star className="h-4 w-4 fill-current" />
                      <span className="ml-1 text-sm font-bold text-slate-900">{course.rating}</span>
                    </div>
                    <div className="flex items-center text-slate-400 text-sm">
                      <Users className="h-4 w-4 mr-1" />
                      {course.students}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">{course.price}</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" variant="outline" onClick={() => toast.success(`Enrolled in ${course.title}!`)}>
                    Enroll Now
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-10 md:hidden flex justify-center">
          <Button variant="outline">View All Courses</Button>
        </div>
      </div>
    </section>
  );
};

const HowItWorks = () => {
  const steps = [
    {
      title: "Sign Up",
      description: "Create your free account and profile in minutes to join our global learning community.",
      icon: <Users className="h-8 w-8 text-primary" />
    },
    {
      title: "Choose a Course",
      description: "Browse thousands of courses across various categories and find the one that fits your goals.",
      icon: <BookOpen className="h-8 w-8 text-primary" />
    },
    {
      title: "Start Learning",
      description: "Access your lessons immediately and start your journey with expert guidance and support.",
      icon: <PlayCircle className="h-8 w-8 text-primary" />
    }
  ];

  return (
    <section className="py-20 bg-primary/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">How It Works</h2>
          <p className="text-slate-600">Start your learning journey in three simple steps and transform your future.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 relative">
          {/* Connector line for desktop */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-primary/10 -z-10" />
          
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="flex flex-col items-center text-center bg-white p-8 rounded-2xl shadow-sm"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 ring-8 ring-primary/5">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
              <p className="text-slate-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Jenkins",
      role: "Front-end Developer",
      content: "The web development bootcamp changed my life. Within 3 months of finishing, I landed my first job at a top tech company.",
      rating: 5,
      avatar: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/02670eb1-83ac-4d68-89a7-ae6f252ee74c/avatar-1-3825745a-1771772999188.webp"
    },
    {
      name: "Mark Thompson",
      role: "Graphic Designer",
      content: "I've taken many online courses, but LearnSphere stands out. The instructors are genuinely engaged and the content is practical.",
      rating: 5,
      avatar: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/02670eb1-83ac-4d68-89a7-ae6f252ee74c/avatar-2-b3252c98-1771773006814.webp"
    },
    {
      name: "Elena Rodriguez",
      role: "Business Analyst",
      content: "The flexible schedule allowed me to upskill while working full-time. The certificates are definitely a great addition to my LinkedIn.",
      rating: 4,
      avatar: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/02670eb1-83ac-4d68-89a7-ae6f252ee74c/avatar-3-2b6126b2-1771773006320.webp"
    }
  ];

  return (
    <section className="py-20 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">What Our Students Say</h2>
          <p className="text-slate-600">Hear from thousands of successful students who have transformed their careers with us.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`h-4 w-4 ${i < t.rating ? 'fill-yellow-400 text-yellow-400' : 'text-slate-200'}`} />
                ))}
              </div>
              <p className="text-slate-600 mb-8 italic">"{t.content}"</p>
              <div className="flex items-center gap-4">
                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <h4 className="font-bold text-slate-900">{t.name}</h4>
                  <p className="text-xs text-slate-500">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Pricing = () => {
  const plans = [
    {
      name: "Basic",
      price: "$29",
      description: "Perfect for casual learners wanting to explore new hobbies.",
      features: ["10 Courses access", "24/7 Community support", "Mobile access", "Course completion certificates"],
      recommended: false,
      cta: "Get Started"
    },
    {
      name: "Pro",
      price: "$59",
      description: "Ideal for professionals looking to advance their skillsets.",
      features: ["All Courses access", "Direct instructor Q&A", "Career coaching", "Exclusive workshops", "Priority support"],
      recommended: true,
      cta: "Try Pro Free"
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "Solution for teams and large organizations.",
      features: ["Unlimited access", "Admin dashboard", "Team analytics", "Dedicated account manager", "Custom branding"],
      recommended: false,
      cta: "Contact Sales"
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Flexible Pricing Plans</h2>
          <p className="text-slate-600">Choose the plan that fits your needs and budget. No hidden fees.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`relative bg-white rounded-3xl p-8 border ${plan.recommended ? 'border-primary shadow-xl scale-105 z-10' : 'border-slate-200'}`}
            >
              {plan.recommended && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-bold">
                  Recommended
                </div>
              )}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-4xl font-bold text-slate-900">{plan.price}</span>
                  {plan.price !== "Custom" && <span className="text-slate-500">/month</span>}
                </div>
                <p className="text-slate-500 text-sm">{plan.description}</p>
              </div>
              <div className="space-y-4 mb-8">
                {plan.features.map((feature, fIdx) => (
                  <div key={fIdx} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm text-slate-600">{feature}</span>
                  </div>
                ))}
              </div>
              <Button 
                variant={plan.recommended ? "default" : "outline"} 
                className="w-full rounded-xl py-6"
                onClick={() => toast.success(`Selected ${plan.name} plan!`)}
              >
                {plan.cta}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTASection = () => {
  return (
    <section className="py-20 bg-slate-900 text-white overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600 rounded-full blur-[120px]" />
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Start Your Journey?</h2>
          <p className="text-slate-400 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            Join over 100,000+ students already learning on LearnSphere. Unlock premium features and expert mentorship today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100 rounded-full px-10 h-14 text-lg">
              Join Now for Free
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 rounded-full px-10 h-14 text-lg">
              View All Courses
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-50 pt-20 pb-10 border-t border-slate-200">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-16">
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-primary p-1.5 rounded-lg">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-slate-900">LearnSphere</span>
            </div>
            <p className="text-slate-500 mb-8 max-w-xs">
              Empowering learners worldwide through high-quality, accessible, and expert-led online education.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 hover:bg-primary hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 hover:bg-primary hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 hover:bg-primary hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 hover:bg-primary hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6">Platform</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-slate-500 hover:text-primary transition-colors">Browse Courses</a></li>
              <li><a href="#" className="text-slate-500 hover:text-primary transition-colors">Learning Paths</a></li>
              <li><a href="#" className="text-slate-500 hover:text-primary transition-colors">Certification</a></li>
              <li><a href="#" className="text-slate-500 hover:text-primary transition-colors">Pricing</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6">Company</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-slate-500 hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="text-slate-500 hover:text-primary transition-colors">Careers</a></li>
              <li><a href="#" className="text-slate-500 hover:text-primary transition-colors">Blog</a></li>
              <li><a href="#" className="text-slate-500 hover:text-primary transition-colors">Press</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6">Support</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-slate-500 hover:text-primary transition-colors">Help Center</a></li>
              <li><a href="#" className="text-slate-500 hover:text-primary transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-slate-500 hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-slate-500 hover:text-primary transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© 2024 LearnSphere Inc. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-primary transition-colors">English (US)</a>
            <a href="#" className="hover:text-primary transition-colors">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <Toaster position="top-center" richColors />
      <Header />
      <main>
        <Hero />
        <Features />
        <PopularCourses />
        <HowItWorks />
        <Testimonials />
        <Pricing />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}