import React, { useState, useEffect } from 'react';
import { 
  Users, 
  Heart, 
  UserPlus, 
  Calendar, 
  Phone, 
  MapPin, 
  Mail, 
  Search,
  Star,
  LogOut,
  Home,
  Settings,
  Eye,
  ChevronLeft,
  ChevronRight,
  Globe,
  UserCheck,
  CreditCard,
  Camera,
  MessageCircle
} from 'lucide-react';

// Language content
const content = {
  en: {
    // Navigation
    orgName: "Sri Chaudeswari Amman Narpani Mandram",
    tagline: "Serving the Kannada Devanga Community Since 2013",
    home: "Home",
    matchedMembers: "Matched Members",
    activeMembers: "Active Members", 
    membership: "Membership",
    memories: "Memories",
    contactUs: "Contact Us",
    login: "Login",
    register: "Register",
    dashboard: "Dashboard",
    search: "Search",
    profile: "Profile",
    admin: "Admin",
    logout: "Logout",
    
    // Home page
    heroTitle: "Sri Chaudeswari Amman Narpani Mandram",
    heroSubtitle: "Bringing together hearts and souls in the sacred bond of marriage, guided by tradition and blessed by divine grace.",
    
    // Statistics
    totalMembers: "Total Members",
    successfulMatches: "Successful Matches", 
    onlineRegistrations: "Online Registrations",
    weeklyVisitors: "Weekly Visitors",
    
    // Wedding slideshow
    weddingMomentsTitle: "Blessed Wedding Moments",
    weddingMomentsSubtitle: "Witness the joy and divine blessings of matrimonial celebrations from our community",
    weddingCaption1: "Beautiful Hindu Bride's Henna-Adorned Hands",
    weddingCaption2: "Bride with Traditional Wedding Offerings", 
    weddingCaption3: "Sacred Wedding Rituals - Blessing Ceremony",
    
    // About
    aboutTitle: "About Our Service",
    aboutText1: "Established in 2013, Sri Chaudeswari Amman Narpani Mandram has been a beacon of hope for the Kannada Devanga community, facilitating meaningful connections and blessed unions. Our dedicated team of 15+ volunteers works tirelessly to ensure every member finds their perfect life partner.",
    aboutText2: "Through our partnership with Sri Vijayalakshmi Mahal, we provide a free venue for community gatherings and matrimonial events, making our services accessible to all members of our beloved community.",
    
    // Services
    servicesTitle: "Our Services",
    profileReg: "Profile Registration",
    weeklyMeetings: "Weekly Meetings", 
    swayamvaramEvents: "Swayamvaram Events",
    onlineReg: "Online Registration: ₹1,500",
    offlineReg: "Offline Registration: ₹250",
    validity: "6-month validity period",
    profileMgmt: "Complete profile management",
    meetingDays: "Every Friday & New Moon Days",
    meetingTime: "Timing: 9:30 AM - 2:30 PM",
    weeklyVisitorsCount: "300-400 visitors weekly",
    consultations: "Personal consultations available",
    quarterlyEvents: "Quarterly events",
    eventSchedule: "First Sunday of Jan, Apr, Jul, Sep",
    partnerSelection: "Life partner selection festival",
    traditionalCeremony: "Traditional ceremony",
    
    // Contact
    contactTitle: "Contact Us",
    phoneNumbers: "Phone Numbers",
    address: "Address",
    trustWebsite: "Trust Website",
    
    // Login
    welcomeBack: "Welcome Back",
    signInText: "Sign in to your account",
    emailMobile: "Email / Mobile",
    password: "Password",
    signIn: "Sign In",
    demoAccess: "Demo Access: Use any credentials",
    adminAccess: "Admin Access: admin@test.com",
    backToHome: "Back to Home"
  },
  ta: {
    // Navigation
    orgName: "ஸ்ரீ சௌடேஸ்வரி அம்மன் நற்பணி மண்டபம்",
    tagline: "2013 முதல் கன்னட தேவாங்க சமுதாயத்திற்கு சேவை செய்கிறோம்",
    home: "முகப்பு",
    matchedMembers: "பொருந்திய உறுப்பினர்கள்",
    activeMembers: "செயல்பாட்டு உறுப்பினர்கள்",
    membership: "உறுப்பினர்", 
    memories: "நினைவுகள்",
    contactUs: "தொடர்பு கொள்ளுங்கள்",
    login: "உள்நுழைய",
    register: "பதிவு",
    dashboard: "கட்டுப்பாட்டு பலகை",
    search: "தேடல்",
    profile: "சுயவிவரம்",
    admin: "நிர்வாகம்",
    logout: "வெளியேறு",
    
    // Home page
    heroTitle: "ஸ்ரீ சௌடேஸ்வரி அம்மன் நற்பணி மண்டபம்",
    heroSubtitle: "பாரம்பரியத்தால் வழிநடத்தப்படும் மற்றும் தெய்வீக அருளால் ஆசீர்வதிக்கப்பட்ட திருமணத்தின் புனித பந்தத்தில் இதயங்களையும் ஆன்மாக்களையும் ஒன்றிணைக்கிறது.",
    
    // Statistics
    totalMembers: "மொத்த உறுப்பினர்கள்",
    successfulMatches: "வெற்றிகரமான இணைப்புகள்",
    onlineRegistrations: "ஆன்லைன் பதிவுகள்", 
    weeklyVisitors: "வார பார்வையாளர்கள்",
    
    // Wedding slideshow
    weddingMomentsTitle: "ஆசீர்வதிக்கப்பட்ட திருமண தருணங்கள்",
    weddingMomentsSubtitle: "எங்கள் சமுதாயத்தின் திருமண கொண்டாட்டங்களின் மகிழ்ச்சி மற்றும் தெய்வீக ஆசீர்வாதங்களைக் காணுங்கள்",
    weddingCaption1: "அழகான இந்து மணப்பெண்ணின் மெஹந்தி அலங்கரித்த கைகள்",
    weddingCaption2: "பாரம்பரிய திருமண காணிக்கைகளுடன் மணப்பெண்",
    weddingCaption3: "புனித திருமண சடங்குகள் - ஆசீர்வாத விழா",
    
    // About
    aboutTitle: "எங்கள் சேவை பற்றி",
    aboutText1: "2013 இல் நிறுவப்பட்ட ஸ்ரீ சௌடேஸ்வரி அம்மன் நற்பணி மண்டபம் கன்னட தேவாங்க சமுதாயத்திற்கு நம்பிக்கையின் கலங்கரை விளக்காக இருந்து, அர்த்தமுள்ள தொடர்புகள் மற்றும் ஆசீர்வதிக்கப்பட்ட இணைப்புகளை எளிதாக்குகிறது. எங்கள் அர்ப்பணிப்புள்ள 15+ தன்னார்வலர்கள் குழு ஒவ்வொரு உறுப்பினரும் தங்கள் சரியான வாழ்க்கைத் துணையைக் கண்டறிவதை உறுதிசெய்ய அயராது உழைக்கிறது.",
    aboutText2: "ஸ்ரீ விஜயலட்சுமி மஹாலுடனான எங்கள் கூட்டாண்மை மூலம், சமுதாய கூட்டங்கள் மற்றும் திருமண நிகழ்வுகளுக்கு இலவச இடத்தை வழங்குகிறோம், எங்கள் அன்பான சமுதாயத்தின் அனைத்து உறுப்பினர்களுக்கும் எங்கள் சேவைகளை அணுகக்கூடியதாக மாற்றுகிறோம்.",
    
    // Services
    servicesTitle: "எங்கள் சேவைகள்",
    profileReg: "சுயவிவர பதிவு",
    weeklyMeetings: "வாராந்திர கூட்டங்கள்",
    swayamvaramEvents: "சுயம்வரம் நிகழ்வுகள்",
    onlineReg: "ஆன்லைன் பதிவு: ₹1,500",
    offlineReg: "ஆஃப்லைன் பதிவு: ₹250", 
    validity: "6-மாத செல்லுபடியாகும் காலம்",
    profileMgmt: "முழுமையான சுயவிவர மேலாண்மை",
    meetingDays: "ஒவ்வொரு வெள்ளி மற்றும் அமாவாசை நாட்கள்",
    meetingTime: "நேரம்: காலை 9:30 - மதியம் 2:30",
    weeklyVisitorsCount: "வாரத்திற்கு 300-400 பார்வையாளர்கள்",
    consultations: "தனிப்பட்ட ஆலோசனைகள் கிடைக்கும்",
    quarterlyEvents: "காலாண்டு நிகழ்வுகள்",
    eventSchedule: "ஜனவரி, ஏப்ரல், ஜூலை, செப்டம்பர் முதல் ஞாயிறு",
    partnerSelection: "வாழ்க்கைத் துணை தேர்வு விழா",
    traditionalCeremony: "பாரம்பரிய விழா",
    
    // Contact
    contactTitle: "எங்களை தொடர்பு கொள்ளுங்கள்",
    phoneNumbers: "தொலைபேசி எண்கள்",
    address: "முகவரி",
    trustWebsite: "அறக்கட்டளை இணையதளம்",
    
    // Login
    welcomeBack: "மீண்டும் வரவேற்கிறோம்",
    signInText: "உங்கள் கணக்கில் உள்நுழையவும்",
    emailMobile: "மின்னஞ்சல் / மொபைல்",
    password: "கடவுச்சொல்",
    signIn: "உள்நுழைய",
    demoAccess: "டெமோ அணுகல்: ஏதேனும் சான்றுகளைப் பயன்படுத்தவும்",
    adminAccess: "நிர்வாக அணுகல்: admin@test.com",
    backToHome: "முகப்புக்கு திரும்பு"
  }
};

// Sample data
const nakshatras = [
  'Ashwini', 'Bharani', 'Krittika', 'Rohini', 'Mrigashira', 'Ardra', 'Punarvasu', 'Pushya',
  'Ashlesha', 'Magha', 'Purva Phalguni', 'Uttara Phalguni', 'Hasta', 'Chitra', 'Swati',
  'Vishakha', 'Anuradha', 'Jyeshtha', 'Mula', 'Purva Ashadha', 'Uttara Ashadha', 'Shravana',
  'Dhanishta', 'Shatabhisha', 'Purva Bhadrapada', 'Uttara Bhadrapada', 'Revati'
];

const rashis = [
  'Mesha', 'Vrishabha', 'Mithuna', 'Karka', 'Simha', 'Kanya',
  'Tula', 'Vrischika', 'Dhanus', 'Makara', 'Kumbha', 'Meena'
];

const sampleProfiles = [
  {
    id: 1,
    name: 'Priya Sharma',
    age: 25,
    gender: 'female',
    height: "5'4\"",
    education: 'B.Tech Computer Science',
    occupation: 'Software Engineer',
    location: 'Bangalore',
    nakshatra: 'Rohini',
    rashi: 'Vrishabha',
    mangalDosha: 'No',
    photo: 'PS'
  },
  {
    id: 2,
    name: 'Rajesh Kumar',
    age: 28,
    gender: 'male',
    height: "5'8\"",
    education: 'MBA Finance',
    occupation: 'Bank Manager',
    location: 'Chennai',
    nakshatra: 'Ashwini',
    rashi: 'Mesha',
    mangalDosha: 'No',
    photo: 'RK'
  },
  {
    id: 3,
    name: 'Kavitha Reddy',
    age: 23,
    gender: 'female',
    height: "5'3\"",
    education: 'M.Sc Mathematics',
    occupation: 'Teacher',
    location: 'Hyderabad',
    nakshatra: 'Swati',
    rashi: 'Tula',
    mangalDosha: 'Yes',
    photo: 'KR'
  },
  {
    id: 4,
    name: 'Arjun Patel',
    age: 30,
    gender: 'male',
    height: "5'10\"",
    education: 'MBBS',
    occupation: 'Doctor',
    location: 'Mumbai',
    nakshatra: 'Hasta',
    rashi: 'Kanya',
    mangalDosha: 'Yes',
    photo: 'AP'
  }
];

const getWeddingImages = (language) => [
  {
    src: '/images/close-up-hindu-bride-s-hands-covered-with-henna-tattoos.jpg',
    caption: content[language].weddingCaption1,
    alt: 'Close-up of Hindu bride hands covered with henna tattoos'
  },
  {
    src: '/images/indian-woman-holding-tray.jpg',
    caption: content[language].weddingCaption2,
    alt: 'Indian woman holding traditional wedding tray'
  },
  {
    src: '/images/old-man-pours-something-hands-indian-woman-dressed.jpg',
    caption: content[language].weddingCaption3,
    alt: 'Traditional wedding blessing ritual ceremony'
  }
];

// Wedding Slideshow Component
const WeddingSlideshow = ({ language }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const weddingImages = getWeddingImages(language);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % weddingImages.length);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(timer);
  }, [weddingImages.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % weddingImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + weddingImages.length) % weddingImages.length);
  };

  return (
    <div className="relative w-full h-96 md:h-[500px] lg:h-[600px] rounded-lg overflow-hidden shadow-lg mb-8">
      <div className="relative h-full">
        {weddingImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-500 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <p className="text-white text-lg font-semibold drop-shadow-lg">
                {image.caption}
              </p>
            </div>
          </div>
        ))}
      </div>
      
      {/* Navigation buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
      
      {/* Slide indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {weddingImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

// Compatibility calculation function (36-point system)
const calculateCompatibility = (profile1, profile2) => {
  let score = 0;

  // Nakshatra compatibility (8 points)
  const nakIndex1 = nakshatras.indexOf(profile1.nakshatra);
  const nakIndex2 = nakshatras.indexOf(profile2.nakshatra);
  const nakDistance = Math.abs(nakIndex1 - nakIndex2);
  if (nakDistance <= 3 || nakDistance >= 24) score += 8;
  else if (nakDistance <= 6 || nakDistance >= 21) score += 6;
  else if (nakDistance <= 9 || nakDistance >= 18) score += 4;
  else score += 2;

  // Rashi compatibility (7 points)
  const rashiIndex1 = rashis.indexOf(profile1.rashi);
  const rashiIndex2 = rashis.indexOf(profile2.rashi);
  const rashiDistance = Math.abs(rashiIndex1 - rashiIndex2);
  if (rashiDistance === 6) score += 7; // Opposite signs are compatible
  else if ([3, 9].includes(rashiDistance)) score += 5;
  else if ([2, 4, 8, 10].includes(rashiDistance)) score += 3;
  else score += 1;

  // Age compatibility (5 points)
  const ageDiff = Math.abs(profile1.age - profile2.age);
  if (ageDiff <= 2) score += 5;
  else if (ageDiff <= 5) score += 4;
  else if (ageDiff <= 8) score += 2;
  else score += 1;

  // Education compatibility (5 points)
  if (profile1.education === profile2.education) score += 5;
  else if (profile1.education.includes('B.') && profile2.education.includes('B.')) score += 4;
  else if (profile1.education.includes('M.') && profile2.education.includes('M.')) score += 4;
  else score += 2;

  // Location proximity (3 points)
  if (profile1.location === profile2.location) score += 3;
  else if (['Bangalore', 'Chennai'].includes(profile1.location) && ['Bangalore', 'Chennai'].includes(profile2.location)) score += 2;
  else score += 1;

  // Mangal Dosha matching (8 points)
  if (profile1.mangalDosha === profile2.mangalDosha) score += 8;
  else score += 2;

  return Math.round((score / 36) * 100);
};

// Navigation Component
const Navbar = ({ currentView, setCurrentView, user, setUser, language, setLanguage }) => {
  const t = content[language];
  
  return (
    <nav className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-3 shadow-lg">
      <div className="container mx-auto px-4">
        {/* Top row with language toggle and login */}
        <div className="flex justify-between items-center mb-3">
          <div className="flex items-center space-x-3">
            <button
              onClick={() => setLanguage(language === 'en' ? 'ta' : 'en')}
              className="flex items-center space-x-2 bg-blue-700 hover:bg-blue-600 px-2 py-1 rounded text-xs transition-colors"
            >
              <Globe className="w-3 h-3" />
              <span className="text-xs">{language === 'en' ? 'தமிழ்' : 'English'}</span>
            </button>
          </div>
          <div className="flex items-center space-x-3">
            {!user ? (
              <button 
                onClick={() => setCurrentView('login')}
                className="bg-white text-blue-600 px-3 py-1 rounded text-sm font-semibold hover:bg-blue-50 transition-colors"
              >
                {t.login} / {t.register}
              </button>
            ) : (
              <div className="flex items-center space-x-3">
                <span className="text-blue-100 text-sm">Welcome, {user.name}</span>
                <button 
                  onClick={() => { setUser(null); setCurrentView('home'); }}
                  className="px-2 py-1 rounded hover:bg-blue-700 transition-colors text-xs"
                >
                  <LogOut className="w-3 h-3 inline mr-1" />
                  {t.logout}
                </button>
              </div>
            )}
          </div>
        </div>
        
        {/* Main navigation */}
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <img 
              src="/images/sri-chaudeswari-amman.jpeg" 
              alt="Sri Chaudeswari Amman" 
              className="w-10 h-10 rounded-full object-cover border-2 border-blue-200"
            />
            <div>
              <h1 className="text-lg font-bold">{t.orgName}</h1>
              <p className="text-blue-100 text-xs">{t.tagline}</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <button 
              onClick={() => setCurrentView('home')}
              className={`px-2 py-1.5 rounded text-xs transition-colors ${currentView === 'home' ? 'bg-white text-blue-600' : 'hover:bg-blue-700'}`}
            >
              <Home className="w-3 h-3 inline mr-1" />
              {t.home}
            </button>
            
            <button 
              onClick={() => setCurrentView('matchedMembers')}
              className={`px-2 py-1.5 rounded text-xs transition-colors ${currentView === 'matchedMembers' ? 'bg-white text-blue-600' : 'hover:bg-blue-700'}`}
            >
              <UserCheck className="w-3 h-3 inline mr-1" />
              {language === 'en' ? 'Matches' : 'பொருத்த'}
            </button>
            
            <button 
              onClick={() => setCurrentView('activeMembers')}
              className={`px-2 py-1.5 rounded text-xs transition-colors ${currentView === 'activeMembers' ? 'bg-white text-blue-600' : 'hover:bg-blue-700'}`}
            >
              <Users className="w-3 h-3 inline mr-1" />
              {language === 'en' ? 'Members' : 'உறுப்பினர்கள்'}
            </button>
            
            <button 
              onClick={() => setCurrentView('membership')}
              className={`px-2 py-1.5 rounded text-xs transition-colors ${currentView === 'membership' ? 'bg-white text-blue-600' : 'hover:bg-blue-700'}`}
            >
              <CreditCard className="w-3 h-3 inline mr-1" />
              {language === 'en' ? 'Plans' : 'திட்டங்கள்'}
            </button>
            
            <button 
              onClick={() => setCurrentView('memories')}
              className={`px-2 py-1.5 rounded text-xs transition-colors ${currentView === 'memories' ? 'bg-white text-blue-600' : 'hover:bg-blue-700'}`}
            >
              <Camera className="w-3 h-3 inline mr-1" />
              {language === 'en' ? 'Memories' : 'நினைவுகள்'}
            </button>
            
            <button 
              onClick={() => setCurrentView('contactUs')}
              className={`px-2 py-1.5 rounded text-xs transition-colors ${currentView === 'contactUs' ? 'bg-white text-blue-600' : 'hover:bg-blue-700'}`}
            >
              <MessageCircle className="w-3 h-3 inline mr-1" />
              {language === 'en' ? 'Contact' : 'தொடர்பு'}
            </button>
            
            {user && (
              <>
                <button 
                  onClick={() => setCurrentView('dashboard')}
                  className={`px-2 py-1.5 rounded text-xs transition-colors ${currentView === 'dashboard' ? 'bg-white text-blue-600' : 'hover:bg-blue-700'}`}
                >
                  Dashboard
                </button>
                <button 
                  onClick={() => setCurrentView('search')}
                  className={`px-2 py-1.5 rounded text-xs transition-colors ${currentView === 'search' ? 'bg-white text-blue-600' : 'hover:bg-blue-700'}`}
                >
                  <Search className="w-3 h-3 inline mr-1" />
                  Search
                </button>
                {user.email === 'admin@test.com' && (
                  <button className="px-2 py-1.5 rounded hover:bg-blue-700 transition-colors text-xs">
                    <Settings className="w-3 h-3 inline mr-1" />
                    Admin
                  </button>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

// Home Page Component
const HomePage = ({ language }) => {
  const t = content[language];
  
  return (
    <>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
          <div className="container mx-auto text-center px-4">
            <img 
              src="/images/sri-chaudeswari-amman.jpeg" 
              alt="Sri Chaudeswari Amman" 
              className="w-24 h-24 mx-auto mb-6 rounded-full object-cover border-4 border-blue-200 shadow-lg"
            />
            <h1 className="text-5xl font-bold mb-4">{t.heroTitle}</h1>
            <p className="text-2xl mb-8 text-blue-100">{t.tagline}</p>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed">
              {t.heroSubtitle}
            </p>
          </div>
        </section>

        {/* Wedding Slideshow Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">{t.weddingMomentsTitle}</h2>
            <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              {t.weddingMomentsSubtitle}
            </p>
            <div className="max-w-6xl mx-auto">
              <WeddingSlideshow language={language} />
            </div>
          </div>
        </section>

        {/* Statistics Dashboard */}
        <section className="py-16 bg-blue-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border-t-4 border-blue-500">
                <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-gray-800">2,847</h3>
                <p className="text-gray-600">{t.totalMembers}</p>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border-t-4 border-blue-600">
                <Heart className="w-12 h-12 text-blue-700 mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-gray-800">342</h3>
                <p className="text-gray-600">{t.successfulMatches}</p>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border-t-4 border-blue-500">
                <UserPlus className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-gray-800">1,890</h3>
                <p className="text-gray-600">{t.onlineRegistrations}</p>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border-t-4 border-blue-600">
                <Eye className="w-12 h-12 text-blue-700 mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-gray-800">350</h3>
                <p className="text-gray-600">{t.weeklyVisitors}</p>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-gray-800 mb-8">{t.aboutTitle}</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                {t.aboutText1}
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                {t.aboutText2}
              </p>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">{t.servicesTitle}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <UserPlus className="w-12 h-12 text-blue-600 mb-6" />
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{t.profileReg}</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>{t.onlineReg}</li>
                  <li>{t.offlineReg}</li>
                  <li>{t.validity}</li>
                  <li>{t.profileMgmt}</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <Calendar className="w-12 h-12 text-blue-600 mb-6" />
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{t.weeklyMeetings}</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>{t.meetingDays}</li>
                  <li>{t.meetingTime}</li>
                  <li>{t.weeklyVisitorsCount}</li>
                  <li>{t.consultations}</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <Heart className="w-12 h-12 text-blue-600 mb-6" />
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{t.swayamvaramEvents}</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>{t.quarterlyEvents}</li>
                  <li>{t.eventSchedule}</li>
                  <li>{t.partnerSelection}</li>
                  <li>{t.traditionalCeremony}</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Swayamvaram Detail Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-8">Swayamvaram - Life Partner Selection Festival</h2>
            <p className="text-xl max-w-4xl mx-auto leading-relaxed mb-8">
              Our traditional Swayamvaram events are conducted quarterly, providing a sacred and auspicious environment 
              for prospective brides and grooms to meet and connect. These events follow ancient traditions while 
              incorporating modern sensibilities, ensuring comfort and respect for all participants.
            </p>
            <div className="text-lg">
              <p className="mb-4">Schedule: {t.eventSchedule}</p>
              <p>Venue: Sri Vijayalakshmi Mahal</p>
            </div>
          </div>
        </section>

        {/* Annadhanam Section */}
        <section className="py-16 bg-blue-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-8">Daily Annadhanam Service</h2>
            <p className="text-xl text-gray-700 mb-6">
              As part of our commitment to serve the community, we provide daily Annadhanam (free meals) 
              at Sri Vijayalakshmi Mahal.
            </p>
            <div className="text-lg text-gray-700">
              <p className="mb-2">Daily Service at 1:00 PM</p>
              <p>Sri Vijayalakshmi Mahal</p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-gray-800 text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">{t.contactTitle}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <Phone className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-4">{t.phoneNumbers}</h3>
                <p className="text-gray-300">93452 40133</p>
                <p className="text-gray-300">98942 78185</p>
              </div>
              <div className="text-center">
                <MapPin className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-4">{t.address}</h3>
                <p className="text-gray-300">Seelanayakanpatti Bypass</p>
                <p className="text-gray-300">Salem - 636 201</p>
              </div>
              <div className="text-center">
                <Mail className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-4">{t.trustWebsite}</h3>
                <p className="text-blue-400 hover:text-blue-300 cursor-pointer">www.asvlct.org</p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-8">
          <div className="container mx-auto px-4 text-center">
            <img 
              src="/images/sri-chaudeswari-amman.jpeg" 
              alt="Sri Chaudeswari Amman" 
              className="w-16 h-16 mx-auto mb-4 rounded-full object-cover border-2 border-blue-200"
            />
            <p className="text-gray-400">© 2024 Sri Chaudeswari Amman Narpani Mandram. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  );
};

// Login Page Component
const LoginPage = ({ setUser, setCurrentView }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleLogin = () => {
    // Demo login - any credentials work
    if (formData.email && formData.password) {
      const userData = {
        email: formData.email,
        name: formData.email === 'admin@test.com' ? 'Administrator' : 'Demo User',
        isAdmin: formData.email === 'admin@test.com'
      };
      setUser(userData);
      setCurrentView('dashboard');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full mx-4">
        <div className="text-center mb-8">
          <img 
            src="/images/sri-chaudeswari-amman.jpeg" 
            alt="Sri Chaudeswari Amman" 
            className="w-20 h-20 mx-auto mb-4 rounded-full object-cover border-3 border-blue-200 shadow-lg"
          />
          <h2 className="text-3xl font-bold text-gray-800">Welcome Back</h2>
          <p className="text-gray-600">Sign in to your account</p>
        </div>
        
        <div className="space-y-6">
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Email / Mobile</label>
            <input
              type="text"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email or mobile number"
            />
          </div>
          
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Password</label>
            <input
              type="password"
              value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
            />
          </div>
          
          <button
            onClick={handleLogin}
            className="w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-900 transition-colors"
          >
            Sign In
          </button>
          
          <div className="text-center text-gray-600">
            <p className="text-sm">Demo Access: Use any credentials</p>
            <p className="text-sm">Admin Access: admin@test.com</p>
          </div>
          
          <button
            onClick={() => setCurrentView('home')}
            className="w-full border border-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

// Dashboard Component
const Dashboard = ({ user }) => {
  const userProfile = sampleProfiles[0]; // Demo user profile
  const compatibleMatches = sampleProfiles.slice(1).map(profile => ({
    ...profile,
    compatibility: calculateCompatibility(userProfile, profile)
  })).sort((a, b) => b.compatibility - a.compatibility);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="container mx-auto">
        {/* Welcome Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 rounded-lg shadow-lg mb-8">
          <h1 className="text-4xl font-bold mb-2">Welcome, {user.name}!</h1>
          <p className="text-xl text-blue-100">Find your perfect life partner with divine blessings</p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center">
              <Users className="w-12 h-12 text-blue-600 mr-4" />
              <div>
                <h3 className="text-2xl font-bold text-gray-800">156</h3>
                <p className="text-gray-600">Profile Views</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center">
              <Heart className="w-12 h-12 text-red-600 mr-4" />
              <div>
                <h3 className="text-2xl font-bold text-gray-800">23</h3>
                <p className="text-gray-600">Interests Received</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center">
              <Star className="w-12 h-12 text-yellow-600 mr-4" />
              <div>
                <h3 className="text-2xl font-bold text-gray-800">12</h3>
                <p className="text-gray-600">Shortlisted</p>
              </div>
            </div>
          </div>
        </div>

        {/* Compatible Matches */}
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Compatible Matches</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {compatibleMatches.map(profile => (
              <div key={profile.id} className="border border-gray-200 p-6 rounded-lg hover:shadow-lg transition-shadow">
                <div className="text-center mb-4">
                  <div className="text-6xl mb-2">{profile.photo}</div>
                  <h3 className="text-xl font-bold text-gray-800">{profile.name}</h3>
                  <div className="flex items-center justify-center mt-2">
                    <Star className="w-5 h-5 text-yellow-500 mr-1" />
                    <span className="text-lg font-semibold text-green-600">{profile.compatibility}% Match</span>
                  </div>
                </div>
                <div className="space-y-2 text-sm text-gray-700">
                  <p><strong>Age:</strong> {profile.age} years</p>
                  <p><strong>Height:</strong> {profile.height}</p>
                  <p><strong>Education:</strong> {profile.education}</p>
                  <p><strong>Occupation:</strong> {profile.occupation}</p>
                  <p><strong>Location:</strong> {profile.location}</p>
                  <p><strong>Nakshatra:</strong> {profile.nakshatra}</p>
                  <p><strong>Rashi:</strong> {profile.rashi}</p>
                </div>
                <button className="w-full mt-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-900 transition-colors">
                  Express Interest
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Search Page Component
const SearchPage = () => {
  const [filters, setFilters] = useState({
    ageMin: 18,
    ageMax: 40,
    nakshatra: '',
    rashi: '',
    education: '',
    location: '',
    mangalDosha: ''
  });

  const [searchResults, setSearchResults] = useState(sampleProfiles);
  const userProfile = sampleProfiles[0]; // Demo user for compatibility calculation

  const handleSearch = () => {
    let filtered = sampleProfiles.filter(profile => {
      return profile.age >= filters.ageMin && 
             profile.age <= filters.ageMax &&
             (filters.nakshatra === '' || profile.nakshatra === filters.nakshatra) &&
             (filters.rashi === '' || profile.rashi === filters.rashi) &&
             (filters.education === '' || profile.education.includes(filters.education)) &&
             (filters.location === '' || profile.location.includes(filters.location)) &&
             (filters.mangalDosha === '' || profile.mangalDosha === filters.mangalDosha);
    });

    // Add compatibility scores
    filtered = filtered.map(profile => ({
      ...profile,
      compatibility: calculateCompatibility(userProfile, profile)
    }));

    setSearchResults(filtered);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Search Profiles</h1>
        
        {/* Search Filters */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Age Range</label>
              <div className="flex space-x-2">
                <select 
                  value={filters.ageMin}
                  onChange={(e) => setFilters({...filters, ageMin: parseInt(e.target.value)})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {Array.from({length: 23}, (_, i) => i + 18).map(age => (
                    <option key={age} value={age}>{age}</option>
                  ))}
                </select>
                <select 
                  value={filters.ageMax}
                  onChange={(e) => setFilters({...filters, ageMax: parseInt(e.target.value)})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {Array.from({length: 23}, (_, i) => i + 18).map(age => (
                    <option key={age} value={age}>{age}</option>
                  ))}
                </select>
              </div>
            </div>
            
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Nakshatra</label>
              <select 
                value={filters.nakshatra}
                onChange={(e) => setFilters({...filters, nakshatra: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">All Nakshatras</option>
                {nakshatras.map(nak => (
                  <option key={nak} value={nak}>{nak}</option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Rashi</label>
              <select 
                value={filters.rashi}
                onChange={(e) => setFilters({...filters, rashi: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">All Rashis</option>
                {rashis.map(rashi => (
                  <option key={rashi} value={rashi}>{rashi}</option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Education</label>
              <select 
                value={filters.education}
                onChange={(e) => setFilters({...filters, education: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">All Education</option>
                <option value="B.">Bachelor's Degree</option>
                <option value="M.">Master's Degree</option>
                <option value="MBBS">MBBS</option>
                <option value="MBA">MBA</option>
              </select>
            </div>
            
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Location</label>
              <input
                type="text"
                value={filters.location}
                onChange={(e) => setFilters({...filters, location: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter city"
              />
            </div>
            
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Mangal Dosha</label>
              <select 
                value={filters.mangalDosha}
                onChange={(e) => setFilters({...filters, mangalDosha: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Any</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
          </div>
          
          <button
            onClick={handleSearch}
            className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-900 transition-colors flex items-center"
          >
            <Search className="w-5 h-5 mr-2" />
            Search Profiles
          </button>
        </div>

        {/* Search Results */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Search Results ({searchResults.length} profiles found)</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {searchResults.map(profile => (
              <div key={profile.id} className="border border-gray-200 p-6 rounded-lg hover:shadow-lg transition-shadow">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-blue-500 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-2">
                    {profile.photo}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">{profile.name}</h3>
                  {profile.compatibility && (
                    <div className="flex items-center justify-center mt-2">
                      <Star className="w-5 h-5 text-yellow-500 mr-1" />
                      <span className="text-lg font-semibold text-green-600">{profile.compatibility}% Match</span>
                    </div>
                  )}
                </div>
                <div className="space-y-2 text-sm text-gray-700 mb-4">
                  <p><strong>Age:</strong> {profile.age} years</p>
                  <p><strong>Height:</strong> {profile.height}</p>
                  <p><strong>Education:</strong> {profile.education}</p>
                  <p><strong>Occupation:</strong> {profile.occupation}</p>
                  <p><strong>Location:</strong> {profile.location}</p>
                  <p><strong>Nakshatra:</strong> {profile.nakshatra}</p>
                  <p><strong>Rashi:</strong> {profile.rashi}</p>
                  <p><strong>Mangal Dosha:</strong> {profile.mangalDosha}</p>
                </div>
                <button className="w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-900 transition-colors">
                  Express Interest
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// New Page Components
const MatchedMembersPage = ({ language }) => {
  const t = content[language];
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">{t.matchedMembers}</h1>
        <div className="bg-white p-8 rounded-lg shadow-md text-center">
          <UserCheck className="w-16 h-16 text-blue-600 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Successful Matches</h2>
          <p className="text-gray-600">View profiles of successfully matched members and their testimonials.</p>
        </div>
      </div>
    </div>
  );
};

const ActiveMembersPage = ({ language }) => {
  const t = content[language];
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">{t.activeMembers}</h1>
        <div className="bg-white p-8 rounded-lg shadow-md text-center">
          <Users className="w-16 h-16 text-blue-600 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Active Community Members</h2>
          <p className="text-gray-600">Browse through profiles of active members looking for their life partners.</p>
        </div>
      </div>
    </div>
  );
};

const MembershipPage = ({ language }) => {
  const t = content[language];
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">{t.membership}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <CreditCard className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Online Membership</h3>
            <p className="text-3xl font-bold text-blue-600 mb-4">₹1,500</p>
            <ul className="text-gray-700 space-y-2">
              <li>6-month validity</li>
              <li>Online profile management</li>
              <li>Digital compatibility matching</li>
              <li>Email support</li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <UserPlus className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Offline Membership</h3>
            <p className="text-3xl font-bold text-blue-600 mb-4">₹250</p>
            <ul className="text-gray-700 space-y-2">
              <li>6-month validity</li>
              <li>In-person meetings</li>
              <li>Traditional matching</li>
              <li>Phone support</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

const MemoriesPage = ({ language }) => {
  const t = content[language];
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">{t.memories}</h1>
        <div className="bg-white p-8 rounded-lg shadow-md text-center">
          <Camera className="w-16 h-16 text-blue-600 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Wedding Gallery</h2>
          <p className="text-gray-600 mb-6">Cherished moments from our community weddings and celebrations.</p>
          <div className="max-w-6xl mx-auto">
            <WeddingSlideshow language={language} />
          </div>
        </div>
      </div>
    </div>
  );
};

const ContactUsPage = ({ language }) => {
  const t = content[language];
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">{t.contactTitle}</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <Phone className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-4">{t.phoneNumbers}</h3>
            <p className="text-gray-700">93452 40133</p>
            <p className="text-gray-700">98942 78185</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <MapPin className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-4">{t.address}</h3>
            <p className="text-gray-700">Seelanayakanpatti Bypass</p>
            <p className="text-gray-700">Salem - 636 201</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <Mail className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-4">{t.trustWebsite}</h3>
            <p className="text-blue-600 hover:text-blue-500 cursor-pointer">www.asvlct.org</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main App Component
function App() {
  const [currentView, setCurrentView] = useState('home');
  const [user, setUser] = useState(null);
  const [language, setLanguage] = useState('en');

  const renderCurrentView = () => {
    switch (currentView) {
      case 'login':
        return <LoginPage setUser={setUser} setCurrentView={setCurrentView} language={language} />;
      case 'dashboard':
        return <Dashboard user={user} language={language} />;
      case 'search':
        return <SearchPage language={language} />;
      case 'matchedMembers':
        return <MatchedMembersPage language={language} />;
      case 'activeMembers':
        return <ActiveMembersPage language={language} />;
      case 'membership':
        return <MembershipPage language={language} />;
      case 'memories':
        return <MemoriesPage language={language} />;
      case 'contactUs':
        return <ContactUsPage language={language} />;
      default:
        return <HomePage language={language} />;
    }
  };

  return (
    <div className="App">
      <Navbar 
        currentView={currentView} 
        setCurrentView={setCurrentView} 
        user={user} 
        setUser={setUser}
        language={language}
        setLanguage={setLanguage}
      />
      {renderCurrentView()}
    </div>
  );
}

export default App;
