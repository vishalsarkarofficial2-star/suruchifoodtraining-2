import {
  Course,
  Workshop,
  GalleryItem,
  StudentCreation,
  VideoItem,
  Testimonial,
  BlogPost,
  FAQItem,
  ContactInfo,
  TrainerInfo,
} from '../types';

export const INITIAL_TRAINER: TrainerInfo = {
  name: 'Chef / Culinary Trainer at Suruchi',
  title: 'Lead Culinary Instructor & Founder',
  photo: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=800&auto=format&fit=crop&q=80',
  bio: 'At Suruchi Food Training, cooking is taught not as an abstract science, but as a practical, joyous life skill and entrepreneurial craft. With years of hands-on training experience guiding homemakers, enthusiastic youth, and aspiring food business owners, our studio focuses on tactile experience—measuring spices by aroma, mastering flame control, and creating consistently delicious dishes.',
  trainingPhilosophy: 'We believe you cannot learn authentic cooking by only watching videos. You learn when your hands knead the dough, adjust the flame, balance the salt, and see the gravy achieve its rich glaze.',
  experienceSummary: 'Practical culinary training mentor specializing in authentic Bengali culinary heritage, pan-Indian delicacies, commercial bakery arts, and cloud kitchen preparation techniques.',
  approach: [
    'Individual attention with small, focused student batches',
    'Clear breakdown of flavor chemistry and spice tempering (tadka / chhonk / phoron)',
    'Zero guesswork: precise weight measurements alongside intuitive sensory cooking',
    'Practical commercial insights for students planning home food businesses'
  ],
  message: 'Welcome to Suruchi Food Training. Whether you are stepping into a kitchen for the first time or planning to launch your own food brand, our doors are open to guide you step-by-step.'
};

export const INITIAL_COURSES: Course[] = [
  {
    id: 'bengali-cuisine-mastery',
    title: 'Authentic Bengali Cuisine & Festive Delicacies',
    category: 'Bengali Cuisine',
    shortDescription: 'Master traditional Bengali culinary classics with authentic spices, mustard tempering, slow braising, and festive recipes.',
    image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=800&auto=format&fit=crop&q=80',
    trainingMode: 'Hands-on Offline',
    duration: '2 Weeks (6 Intensive Sessions)',
    fee: '₹6,500',
    originalFee: '₹8,000',
    skillLevel: 'Beginner Friendly',
    upcomingBatch: 'Starting Next Monday',
    whatYouWillLearn: [
      'Understanding Panch Phoron, Radhuni, and traditional Bengali spice ratios',
      'The art of slow-cooked Kosha Mangsho with rich, glossy gravy',
      'Fish selection, gentle pan-searing, and mastering Shorshe Ilish / Machher Jhol',
      'Classic vegetarian marvels: Dhokar Dalna, Shukto, and Chhanar Dalna',
      'Sweet Basanti Pulao and authentic tomato-khejur chutney'
    ],
    recipesCovered: [
      'Authentic Kolkata Kosha Mangsho',
      'Shorshe Bata Machher Jhol',
      'Traditional Shukto with Bori',
      'Dhokar Dalna from scratch',
      'Basanti Pulao & Luchi',
      'Aam Kashundi Machh',
      'Tomato Khejur Chutney'
    ],
    whoShouldJoin: [
      'Home cooks who want to master authentic traditional flavors',
      'Newlyweds and beginners wanting structured Bengali cooking skills',
      'Catering and cloud-kitchen entrepreneurs wanting heritage recipes'
    ],
    classSchedule: 'Mon, Wed, Fri | 11:00 AM – 2:00 PM',
    materialsRequired: 'All fresh ingredients, tools, aprons, and recipe guides are fully provided by Suruchi Food Training.',
    certificateProvided: true,
    certificateDetails: 'Certificate of Practical Culinary Completion awarded upon finishing all sessions.',
    featured: true
  },
  {
    id: 'pan-indian-restaurant-cooking',
    title: 'Restaurant-Style Indian Gravies & North Indian Cooking',
    category: 'Indian Cooking',
    shortDescription: 'Learn commercial and restaurant-style mother gravies, tandoor-style breads on home tawa, and aromatic dum biryanis.',
    image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&auto=format&fit=crop&q=80',
    trainingMode: 'Hands-on Offline',
    duration: '10 Days (Hands-on Practice)',
    fee: '₹7,200',
    originalFee: '₹9,000',
    skillLevel: 'All Levels',
    upcomingBatch: 'Batch 1: 1st Week of Month | Batch 2: 3rd Week',
    whatYouWillLearn: [
      'The 4 foundational mother gravies (Makhani, Onion-Tomato, White Cashew, and Spinach gravy)',
      'Flavor layering, deglazing, and commercial dhungar (coal smoking) method',
      'Making soft Garlic Naan, Laccha Paratha, and Kulchas without tandoor',
      'Slow-dum Hyderabadi & Kolkata style Biryani with fragrant rice layering'
    ],
    recipesCovered: [
      'Rich Butter Chicken & Paneer Butter Masala',
      'Creamy Dal Makhani (24-hr slow-cook simulation)',
      'Kadhai Paneer & Murgh Handi',
      'Restaurant Malai Kofta',
      'Authentic Dum Biryani with Burani Raita',
      'Restaurant Style Tandoori Roti & Garlic Naan'
    ],
    whoShouldJoin: [
      'Food lovers seeking to recreate dining-out restaurant flavor at home',
      'Cloud kitchen founders and takeaway kitchen staff'
    ],
    classSchedule: 'Tue, Thu, Sat | 2:30 PM – 5:30 PM',
    materialsRequired: 'All spices, dairy, meats/vegetables and commercial workstation equipment provided.',
    certificateProvided: true,
    certificateDetails: 'Certificate of Professional Indian Cooking Completion provided.',
    featured: true
  },
  {
    id: 'baking-and-cake-making',
    title: 'Professional Cake Making, Baking & Modern Decorating',
    category: 'Cake Making',
    shortDescription: 'From soft sponge baking to sharp chocolate ganache edges, buttercream florals, and fondant art for celebrations.',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&auto=format&fit=crop&q=80',
    trainingMode: 'Hands-on Offline',
    duration: '5 Days Intensive Workshop',
    fee: '₹5,800',
    originalFee: '₹7,500',
    skillLevel: 'Beginner Friendly',
    upcomingBatch: 'Upcoming Weekend Batch Available',
    whatYouWillLearn: [
      'Eggless and with-egg sponge baking with consistent moisture and rise',
      'Leveling, torting, sugar soaking, and crumb-coating techniques',
      'Silky Swiss Meringue Buttercream and Whipped Cream temperature stability',
      'Sharp edges ganache coating for tropical climates',
      'Nozzle piping: rosettes, borders, leaves, and palette knife painting'
    ],
    recipesCovered: [
      'Signature Dutch Truffle Chocolate Cake',
      'Classic Vanilla Berry Sponge with Fresh Compote',
      'Red Velvet with Cream Cheese Frosting',
      'Pineapple Gateau with Mirror Glaze',
      'Bento Mini Celebration Cakes',
      'Fudgy Chocolate Brownies'
    ],
    whoShouldJoin: [
      'Aspiring home bakers starting custom cake businesses',
      'Baking hobbyists wanting to stop depending on ready-made premixes'
    ],
    classSchedule: 'Daily 10:30 AM – 3:30 PM (5 Days)',
    materialsRequired: 'Baking tins, turntable, spatulas, nozzles, and packaging boxes provided. Students take their created cakes home!',
    certificateProvided: true,
    certificateDetails: 'Suruchi Food Training Certificate in Practical Cake Art & Baking.',
    featured: true
  },
  {
    id: 'artisan-bakery-breads',
    title: 'Artisan Bakery, Breads, Cookies & Pastries',
    category: 'Bakery & Baking',
    shortDescription: 'Learn gluten development, yeast fermentation, laminations, tea-time cakes, cookies, and crusty bread crafting.',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&auto=format&fit=crop&q=80',
    trainingMode: 'Hands-on Offline',
    duration: '4 Days Intensive',
    fee: '₹5,200',
    skillLevel: 'All Levels',
    upcomingBatch: 'Starting Next Month 5th',
    whatYouWillLearn: [
      'Understanding flour types, hydration percentages, and proofing temperatures',
      'Kneading techniques: slap and fold, windowpane test verification',
      'Herb-infused olive oil Focaccia and soft braided milk bread',
      'Crispy bakery-style butter cookies and shortbread',
      'Flaky puff pastry sheets from scratch'
    ],
    recipesCovered: [
      'Rustic Rosemary & Tomato Focaccia',
      'Soft Japanese-style Hokkaido Milk Bread',
      'Garlic Stuffed Pull-Apart Bread',
      'Bakery Nan Khatai & Danish Butter Cookies',
      'Puff Veg & Chicken Patties'
    ],
    whoShouldJoin: [
      'Bread lovers who want healthy, additive-free bakery items at home',
      'Entrepreneurs planning a specialized bakery or cafe menu'
    ],
    classSchedule: 'Mon to Thu | 11:00 AM – 3:00 PM',
    materialsRequired: 'Baking ovens, proofing boxes, flours, and yeast strains supplied.',
    certificateProvided: true,
    featured: false
  },
  {
    id: 'snacks-and-street-food',
    title: 'Kolkata & Pan-Indian Street Food & Evening Snacks',
    category: 'Snacks & Fast Food',
    shortDescription: 'Learn the secret spice blends of street food legends: egg rolls, crispy chops, samosa pastry, and chatpati chaats.',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&auto=format&fit=crop&q=80',
    trainingMode: 'Hands-on Offline',
    duration: '3 Days Fast-Track',
    fee: '₹4,500',
    skillLevel: 'Beginner Friendly',
    upcomingBatch: 'Weekend Special (Sat & Sun)',
    whatYouWillLearn: [
      'Flaky paratha rolling for authentic street egg & chicken rolls',
      'Making Kolkata beetroot-peanut vegetable chops and fish fry with kashundi',
      'Secret phuchka (golgappa) water blends: spicy khatta, sweet tamarind, and jeera',
      'Crispy samosa (singara) crust with spiced potato-cauliflower stuffing'
    ],
    recipesCovered: [
      'Kolkata Style Kathi Rolls (Paneer / Egg / Chicken)',
      'Crispy Bhetki Fish Fry with Mustard Dip',
      'Traditional Singara (Bengali Samosa)',
      'Dahi Phuchka & Papdi Chaat',
      'Darjeeling Style Steamed & Fried Momos with Red Chilly Dip'
    ],
    whoShouldJoin: [
      'Snack bar and quick-service kiosk owners',
      'Home cooks hosting parties and festive gatherings'
    ],
    classSchedule: 'Friday to Sunday | 3:00 PM – 6:30 PM',
    materialsRequired: 'All ingredients, fry stations, and wrapping papers provided.',
    certificateProvided: false,
    certificateDetails: 'Attendance verification certificate available upon request.',
    featured: false
  },
  {
    id: 'indo-chinese-wok-cooking',
    title: 'Commercial Indo-Chinese & Asian Wok Cooking',
    category: 'Chinese / Indo-Chinese',
    shortDescription: 'Master wok hei (breath of the wok), velvety sauces, crispy battering, and high-heat stir frying that tastes like your favorite takeaway.',
    image: 'https://images.unsplash.com/photo-1541544741938-0af808871cc0?w=800&auto=format&fit=crop&q=80',
    trainingMode: 'Hands-on Offline',
    duration: '3 Days Intensive',
    fee: '₹4,200',
    skillLevel: 'Beginner Friendly',
    upcomingBatch: 'Seats Filling Fast for Next Friday',
    whatYouWillLearn: [
      'Sauce balancing: dark soy, chili paste, vinegar, and aromatics',
      'Velveting meats and cornstarch batter ratios for crisp exterior',
      'Preventing soggy noodles: boiling, oiling, and wok-tossing secrets',
      'Thick vs light gravies for restaurant presentation'
    ],
    recipesCovered: [
      'Chilli Chicken (Dry & Gravy)',
      'Kolkata Style Hakka Noodles',
      'Veg Manchurian in Hot Garlic Sauce',
      'Schezwan Fried Rice with Homemade Schezwan Chutney',
      'Crispy Honey Chilli Potatoes',
      'Sweet Corn & Manchow Soup'
    ],
    whoShouldJoin: [
      'Takeaway owners, cloud kitchens, and Chinese food enthusiasts'
    ],
    classSchedule: 'Wednesday to Friday | 2:00 PM – 5:00 PM',
    materialsRequired: 'Commercial wok burners, heavy iron woks, and Asian sauces provided.',
    certificateProvided: true,
    featured: false
  },
  {
    id: 'royal-indian-sweets-desserts',
    title: 'Traditional Bengali Sweets (Mishthi) & Royal Desserts',
    category: 'Desserts & Sweets',
    shortDescription: 'Learn delicate chhana kneading, sugar syrup densities, and royal Indian sweets without chemical additives.',
    image: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?w=800&auto=format&fit=crop&q=80',
    trainingMode: 'Hands-on Offline',
    duration: '4 Days Workshop',
    fee: '₹5,500',
    skillLevel: 'All Levels',
    upcomingBatch: 'Mid-Month Batch Opening',
    whatYouWillLearn: [
      'Curdling milk to achieve soft, moist chhana (paneer curd)',
      'Kneading techniques to avoid cracked sweets',
      'Mastering syrup stages: 1-tar, 2-tar, and boiling consistency',
      'Traditional Sandesh flavoring (Nolen Gur, Kesar, Cardamom, Mango)'
    ],
    recipesCovered: [
      'Spongy Bengali Rosogolla',
      'Nolen Gurer Kacha Golla Sandesh',
      'Soft Gulab Jamun & Kala Jamun',
      'Kesar Kaju Katli (Nut paste grinding & cooking)',
      'Slow-simmered Laccha Rabri',
      'Shahi Tukda with Saffron Cream'
    ],
    whoShouldJoin: [
      'Sweet lovers who want pure, hygienic festive sweets at home',
      'Commercial sweet makers wanting standard consistent batches'
    ],
    classSchedule: 'Mon to Thu | 10:30 AM – 2:00 PM',
    materialsRequired: 'Pure cow milk, saffron, cardamom, molds, and packing boxes provided.',
    certificateProvided: true,
    featured: false
  },
  {
    id: 'food-business-and-cloud-kitchen',
    title: 'Food Business, Cloud Kitchen & Menu Costing Program',
    category: 'Food Business Training',
    shortDescription: 'Comprehensive training for aspiring food entrepreneurs: menu planning, food costing, batch kitchen prep, packaging, and branding.',
    image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&auto=format&fit=crop&q=80',
    trainingMode: 'Hybrid (Offline + Online)',
    duration: '1 Week (Intensive Strategy + Practical Cooking)',
    fee: '₹9,500',
    originalFee: '₹12,000',
    skillLevel: 'Professional / Entrepreneur',
    upcomingBatch: 'Limited Seats: Starts 10th of Next Month',
    whatYouWillLearn: [
      'Menu engineering: high-margin, low-wastage recipes for cloud kitchens',
      'Food costing formula: raw material cost, overheads, and pricing multipliers',
      'Kitchen workflow setup: prep stations, refrigeration, and ticket speed',
      'Packaging selection: heat-sealed, leakproof, and delivery-resistant containers',
      'FSSAI licensing fundamentals and basic brand positioning on Swiggy/Zomato'
    ],
    recipesCovered: [
      'Prep-ahead combo meal curries and biryani bases',
      'Thali planning with 40-day rotating menu system',
      'Standardized batch marinades for immediate orders',
      'Longer shelf-life baked items and snack packaging'
    ],
    whoShouldJoin: [
      'Aspiring cloud kitchen owners, tiffin service providers, home bakers, and food kiosk founders'
    ],
    classSchedule: 'Mon to Sat | 10:00 AM – 4:00 PM',
    materialsRequired: 'Includes Costing Spreadsheet Templates, Supplier Contact Guide, and Recipe Standardization Dossier.',
    certificateProvided: true,
    certificateDetails: 'Professional Food Business Leadership Certificate from Suruchi Food Training.',
    featured: true
  }
];

export const INITIAL_WORKSHOPS: Workshop[] = [
  {
    id: 'ws-dum-biryani',
    name: 'Weekend Masterclass: Slow Dum Biryani & Kolkata Chaap',
    category: 'Indian Cooking',
    date: 'Upcoming Saturday',
    time: '11:00 AM – 4:00 PM',
    location: 'Suruchi Food Training Studio (Centrally Located)',
    isOnline: false,
    availableSeats: 4,
    totalSeats: 12,
    price: '₹1,800',
    trainer: 'Lead Culinary Instructor',
    registrationDeadline: '2 Days Before Event',
    limitedSeats: true,
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800&auto=format&fit=crop&q=80',
    description: 'Learn the genuine secrets of royal dum cooking, saffron milk infusing, potato pre-cooking, and restaurant-quality chicken chaap.'
  },
  {
    id: 'ws-eggless-tea-cakes',
    name: 'Sunday Hands-on: Eggless Tea Cakes & Fudgy Brownies',
    category: 'Bakery & Baking',
    date: 'Upcoming Sunday',
    time: '12:00 PM – 4:30 PM',
    location: 'Suruchi Food Training Studio',
    isOnline: false,
    availableSeats: 3,
    totalSeats: 10,
    price: '₹1,500',
    trainer: 'Lead Baking Instructor',
    registrationDeadline: 'Friday Evening',
    limitedSeats: true,
    image: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=800&auto=format&fit=crop&q=80',
    description: 'Bake 4 different moist tea cakes (Mawa cake, Tutti Frutti, Choco Walnut, Lemon Drizzle) with complete recipe dossier.'
  },
  {
    id: 'ws-bengali-bhog',
    name: 'Festive Bengali Feast Masterclass (Khichuri, Labra & Chutney)',
    category: 'Bengali Cuisine',
    date: 'Next Weekend',
    time: '10:30 AM – 3:30 PM',
    location: 'Suruchi Food Training Studio',
    isOnline: false,
    availableSeats: 6,
    totalSeats: 14,
    price: '₹1,650',
    trainer: 'Traditional Cuisine Mentor',
    registrationDeadline: '3 Days Ahead',
    limitedSeats: false,
    image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=800&auto=format&fit=crop&q=80',
    description: 'Recreate temple-style Bhog Khichuri with roasted moong dal, rich mixed vegetable Labra, Beguni, and Anaras chutney.'
  }
];

export const INITIAL_GALLERY: GalleryItem[] = [
  {
    id: 'g-1',
    title: 'Rich Chocolate Ganache Cake with Hand Piping',
    category: 'Cakes',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=900&auto=format&fit=crop&q=80',
    description: 'Crafted during the 5-day professional cake decorating workshop.'
  },
  {
    id: 'g-2',
    title: 'Traditional Bengali Shorshe Ilish & Steamed Rice',
    category: 'Bengali Food',
    image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=900&auto=format&fit=crop&q=80',
    description: 'Prepared using stone-ground mustard paste and fresh green chillies.'
  },
  {
    id: 'g-3',
    title: 'Artisan Olive & Herb Focaccia Bread',
    category: 'Bakery',
    image: 'https://images.unsplash.com/photo-1586444248902-2f64eddc13df?w=900&auto=format&fit=crop&q=80',
    description: 'Golden crust with dimpled olive oil crumb baked by bakery students.'
  },
  {
    id: 'g-4',
    title: 'Slow-Cooked Kolkata Kosha Mangsho',
    category: 'Bengali Food',
    image: 'https://images.unsplash.com/photo-1545247181-516773cae754?w=900&auto=format&fit=crop&q=80',
    description: 'Caramelized onion base with aromatic whole garam masala.'
  },
  {
    id: 'g-5',
    title: 'Royal Dum Biryani with Saffron Infusion',
    category: 'Indian Food',
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=900&auto=format&fit=crop&q=80',
    description: 'Sealed with dough for authentic slow dum steaming.'
  },
  {
    id: 'g-6',
    title: 'Restaurant Style Butter Chicken & Naan',
    category: 'Restaurant Style Dishes',
    image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=900&auto=format&fit=crop&q=80',
    description: 'Silky smooth tomato-butter gravy finished with dried fenugreek.'
  },
  {
    id: 'g-7',
    title: 'Crispy Kolkata Fish Fry with Kashundi',
    category: 'Snacks',
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=900&auto=format&fit=crop&q=80',
    description: 'Golden breadcrumb double-coating perfected in our evening snacks module.'
  },
  {
    id: 'g-8',
    title: 'Delicate Bengali Sandesh & Festive Sweets',
    category: 'Desserts',
    image: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?w=900&auto=format&fit=crop&q=80',
    description: 'Hand-molded using fresh chhana and natural date-palm jaggery.'
  },
  {
    id: 'g-9',
    title: 'First-Ever Mirror Glaze Cake by Student Priya',
    category: 'Student Creations',
    image: 'https://images.unsplash.com/photo-1535141192574-5d4897c13136?w=900&auto=format&fit=crop&q=80',
    description: 'Priya achieved this glossy finish on her 4th training session.'
  },
  {
    id: 'g-10',
    title: 'Hot Garlic Hakka Noodles Stir Fry',
    category: 'Restaurant Style Dishes',
    image: 'https://images.unsplash.com/photo-1541544741938-0af808871cc0?w=900&auto=format&fit=crop&q=80',
    description: 'Tossed on commercial high-heat wok with crisp seasonal vegetables.'
  }
];

export const INITIAL_STUDENT_CREATIONS: StudentCreation[] = [
  {
    id: 'sc-1',
    studentName: 'Pooja Roy',
    dishName: 'Two-Tier Buttercream Floral Birthday Cake',
    courseName: 'Professional Cake Making & Baking',
    photo: 'https://images.unsplash.com/photo-1535141192574-5d4897c13136?w=800&auto=format&fit=crop&q=80',
    comment: 'I was always scared of whipping cream melting in humid weather. The trainer at Suruchi taught us the exact temperature control and piping angle. I took my first commercial order last week!',
    batch: 'Cake Batch 2026'
  },
  {
    id: 'sc-2',
    studentName: 'Anirban Mukherjee',
    dishName: 'Kolkata Dum Biryani & Chicken Chaap Platter',
    courseName: 'Restaurant-Style Indian Gravies & Biryani',
    photo: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800&auto=format&fit=crop&q=80',
    comment: 'The explanation of layering meat, semi-cooked rice, and saffron milk opened my eyes. Everyone at home thought I ordered it from an iconic restaurant!',
    batch: 'Indian Cooking Weekend'
  },
  {
    id: 'sc-3',
    studentName: 'Shreya Sen',
    dishName: 'Authentic Dhokar Dalna with Basanti Pulao',
    courseName: 'Authentic Bengali Cuisine',
    photo: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=800&auto=format&fit=crop&q=80',
    comment: 'Learning how to fry the chana dal cakes without breaking them was my breakthrough. The step-by-step guidance made it so easy.',
    batch: 'Bengali Cuisine Morning Batch'
  },
  {
    id: 'sc-4',
    studentName: 'Rajat Ghosh',
    dishName: 'Honey Chilli Crispy Potato & Hakka Noodles',
    courseName: 'Indo-Chinese Wok Cooking',
    photo: 'https://images.unsplash.com/photo-1541544741938-0af808871cc0?w=800&auto=format&fit=crop&q=80',
    comment: 'Starting my small evening takeaway stall soon. The sauce ratios and fast wok cooking techniques are gold standard.',
    batch: 'Fast-Track Wok Module'
  }
];

export const INITIAL_VIDEOS: VideoItem[] = [
  {
    id: 'vid-1',
    title: 'How to Get Silky Smooth Gravy Without Overheating Spices',
    category: 'Technique Demo',
    duration: '0:58',
    thumbnail: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&auto=format&fit=crop&q=80',
    type: 'instagram_reel',
    description: 'A quick look at flame regulation and deglazing during our Indian Gravies class. Watch on @suruchifoodtraining!'
  },
  {
    id: 'vid-2',
    title: 'Piping Perfect Buttercream Borders: Hand Posture Guide',
    category: 'Baking Tips',
    duration: '1:15',
    thumbnail: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&auto=format&fit=crop&q=80',
    type: 'instagram_reel',
    description: 'Students practicing consistent pressure on the turntable during cake decoration training.'
  },
  {
    id: 'vid-3',
    title: 'The Art of Panch Phoron Tempering for Bengali Curries',
    category: 'Cuisine Secrets',
    duration: '1:45',
    thumbnail: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=800&auto=format&fit=crop&q=80',
    type: 'youtube',
    description: 'Explaining how cumin, mustard, fenugreek, nigella, and fennel seed bloom in hot mustard oil without burning.'
  }
];

export const INITIAL_TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    studentName: 'Debarati Bhattacharya',
    courseAttended: 'Authentic Bengali Cuisine Mastery',
    rating: 5,
    review: 'What sets Suruchi Food Training apart is the patience of the instructor. We did not just sit and take notes; we cooked everything ourselves. The Kosha Mangsho recipe alone was worth every rupee.',
    photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&auto=format&fit=crop&q=80',
    date: 'February 2026'
  },
  {
    id: 'test-2',
    studentName: 'Suman Roy',
    courseAttended: 'Professional Cake Making & Baking',
    rating: 5,
    review: 'I never thought I could make a birthday cake look bakery-standard at home. Small batch size meant I could ask questions whenever my frosting started slipping. Highly recommended!',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&auto=format&fit=crop&q=80',
    date: 'January 2026'
  },
  {
    id: 'test-3',
    studentName: 'Tanvi Karmakar',
    courseAttended: 'Food Business & Cloud Kitchen Program',
    rating: 5,
    review: 'The costing sheets and workflow planning gave me the confidence to launch my home cloud kitchen. Very practical, realistic advice with zero exaggeration.',
    photo: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=300&auto=format&fit=crop&q=80',
    date: 'Recent Batch'
  }
];

export const INITIAL_BLOGS: BlogPost[] = [
  {
    id: 'bengali-panch-phoron-guide',
    title: 'The Alchemy of Panch Phoron: Mastering Bengal’s Five-Spice Blend',
    slug: 'the-alchemy-of-panch-phoron',
    category: 'Cooking Tips',
    featuredImage: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=900&auto=format&fit=crop&q=80',
    author: 'Suruchi Culinary Team',
    date: 'March 14, 2026',
    readTime: '4 min read',
    summary: 'Why the ratio of fenugreek to fennel can make or break your curry, and the exact temperature mustard oil must reach before tempering.',
    content: [
      'Panch Phoron is one of the most distinctive spice combinations in Indian culinary heritage. Unlike garam masala or curry powders, it is traditionally left whole rather than ground into powder.',
      'The blend consists of equal parts cumin seeds (jeera), brown mustard seeds (shorshe), nigella seeds (kalo jeere), and fennel seeds (mouri), with a carefully reduced ratio of fenugreek seeds (methi) to prevent bitterness.',
      'The golden rule of tempering: mustard oil must reach its smoking point first, then be allowed to cool slightly before the seeds are added. If the oil is cold, the seeds become chewy; if the oil is smoking hot, the fenugreek burns in two seconds and ruins the dish.',
      'In our practical training sessions, students practice this olfactory cue: listening for the rhythmic pop of the mustard seeds and smelling the sweet aromatic bloom of the fennel.'
    ],
    tags: ['Bengali Cuisine', 'Spice Tempering', 'Culinary Secrets']
  },
  {
    id: 'fluffy-sponge-cake-secrets',
    title: '5 Reasons Your Cake Sinks in the Middle (And How to Fix It)',
    slug: 'why-cake-sinks-in-middle',
    category: 'Baking Tips',
    featuredImage: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=900&auto=format&fit=crop&q=80',
    author: 'Suruchi Baking Faculty',
    date: 'February 28, 2026',
    readTime: '5 min read',
    summary: 'Stop guessing why your sponge deflates after coming out of the oven. Master leavening balance and oven heat circulation.',
    content: [
      'Few things are more frustrating for a beginner baker than watching a beautifully domed cake sink into a crater as it cools.',
      'Reason 1: Too much chemical leavener. Excess baking powder creates large air pockets that burst before the gluten network can stabilize.',
      'Reason 2: Opening the oven door too early. A rush of cold air during the first 65% of baking time collapses the fragile protein structure.',
      'Reason 3: Inaccurate oven temperatures. Most home ovens run 15-20°C hotter or cooler than their dial indicates. A standalone oven thermometer is your best investment.',
      'In our 5-day professional baking workshop, we break down these fundamentals hands-on so every student leaves with predictable, repeatable results.'
    ],
    tags: ['Baking', 'Cake Making', 'Troubleshooting']
  },
  {
    id: 'starting-cloud-kitchen-home',
    title: 'How to Calculate Recipe Costing for a Home Food Business',
    slug: 'recipe-costing-for-home-food-business',
    category: 'Food Business Tips',
    featuredImage: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=900&auto=format&fit=crop&q=80',
    author: 'Suruchi Entrepreneurship Wing',
    date: 'January 19, 2026',
    readTime: '6 min read',
    summary: 'A simple mathematical formula for pricing home-cooked food so you actually make a profit after packaging and delivery cuts.',
    content: [
      'Many passionate home cooks start selling biryanis or customized cakes, only to realize months later that they are working 14 hours a day with barely any net income.',
      'The mistake is calculating only raw ingredient costs (flour, chicken, oil) while ignoring hidden consumables like gas, electricity, butter paper, delivery tape, and cleaning sanitizer.',
      'The Golden Multiplier: As a starting benchmark, Raw Material Cost (Food Cost) should never exceed 28% to 32% of your final selling price. Packaging typically accounts for 8% to 10%, platform commissions take 18% to 25%, leaving room for your actual labor and profit.',
      'We provide our business students with structured spreadsheet models to plug in daily wholesale market prices and instantly know their minimum viable selling price.'
    ],
    tags: ['Cloud Kitchen', 'Costing', 'Home Business']
  }
];

export const INITIAL_FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'Who can join the cooking classes at Suruchi Food Training?',
    answer: 'Our training programs are designed for complete beginners, homemakers, working professionals, college students, hobbyists, and aspiring food entrepreneurs. No previous cooking experience is required—we teach step-by-step from foundational kitchen safety to advanced techniques.'
  },
  {
    id: 'faq-2',
    question: 'Are the classes suitable for complete beginners?',
    answer: 'Yes, absolutely! We specifically structure our classes so beginners feel comfortable and confident. The trainer demonstrates every step, breaks down the reasoning behind each technique, and supervises as you practice hands-on.'
  },
  {
    id: 'faq-3',
    question: 'Are ingredients and tools provided, or do I need to bring them?',
    answer: 'All fresh ingredients, quality spices, dairy/meats, cooking workstations, professional cookware, aprons, and recipe handouts are fully provided by Suruchi Food Training. You do not need to bring raw materials.'
  },
  {
    id: 'faq-4',
    question: 'Is the training conducted offline or online?',
    answer: 'We prioritize hands-on offline training at our equipped cooking studio because cooking is best learned through aroma, touch, and direct flame control. However, we also provide live online interactive sessions and hybrid modules for students outside the city.'
  },
  {
    id: 'faq-5',
    question: 'What is the batch size for practical training?',
    answer: 'We maintain small, focused batches (usually 6 to 12 students depending on the module) to guarantee that every individual gets hands-on kitchen workstation time and direct guidance from the trainer.'
  },
  {
    id: 'faq-6',
    question: 'Do you provide a certificate upon course completion?',
    answer: 'Certificates are awarded for designated comprehensive training programs and workshops upon full attendance and practical evaluation. The certificate status for each specific course is clearly indicated on the course details page.'
  },
  {
    id: 'faq-7',
    question: 'Can I take home the food or baked items I make?',
    answer: 'Yes! In our baking, cake making, and specialty workshops, students take home their freshly baked creations to share with family and friends.'
  },
  {
    id: 'faq-8',
    question: 'How do I register or reserve a seat for an upcoming batch?',
    answer: 'You can submit the online enquiry form on this website, click the "Book a Training" button, or message us directly on WhatsApp. Our coordinator will share the available batch slots, fee details, and registration confirmation.'
  },
  {
    id: 'faq-9',
    question: 'Do you offer customized private or one-on-one training sessions?',
    answer: 'Yes, customized one-on-one sessions are available for home cooks planning to relocate abroad, or entrepreneurs wanting focused training for their specific restaurant or cloud kitchen menu.'
  },
  {
    id: 'faq-10',
    question: 'What payment methods are accepted?',
    answer: 'We accept UPI (Google Pay, PhonePe, Paytm), Net Banking, Credit/Debit Cards, and Cash at our training center office prior to batch commencement.'
  }
];

export const INITIAL_CONTACT_INFO: ContactInfo = {
  phone: '+91 98300 12345',
  whatsapp: '+919830012345',
  email: 'suruchifoodtraining@gmail.com',
  address: 'Suruchi Food Training Studio, Central Culinary Hub',
  landmark: 'Near Metro Station / Main Market Junction',
  city: 'Kolkata',
  state: 'West Bengal',
  pincode: '700001',
  googleMapsUrl: 'https://maps.google.com/?q=Kolkata+West+Bengal+India',
  googleMapsEmbedQuery: 'Kolkata, West Bengal, India',
  instagramHandle: '@suruchifoodtraining',
  instagramUrl: 'https://www.instagram.com/suruchifoodtraining',
  facebookUrl: 'https://www.facebook.com/suruchifoodtraining',
  youtubeUrl: 'https://www.youtube.com/@suruchifoodtraining',
  businessHours: 'Monday – Saturday: 10:00 AM – 6:30 PM (Sunday by appointment)',
  classTimings: 'Morning Batches: 10:30 AM – 1:30 PM | Afternoon Batches: 2:30 PM – 5:30 PM'
};
