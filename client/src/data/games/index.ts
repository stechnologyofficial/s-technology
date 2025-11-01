export interface Game {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  genre: string[];
  status: "live" | "prototype" | "deprecated";
  screenshot: string; // Google Drive thumbnail ID
  icon: string; // Google Drive thumbnail ID
  youtubeUrl?: string;
  playStoreUrl?: string;
  githubUrl?: string;
  technologies?: Array<{
    name: string;
    description: string;
    color: 'red' | 'blue' | 'green' | 'purple';
  }>;
  images?: string[]; // Google Drive IDs for screenshots
}

export const publishedGames: Game[] = [
  {
    id: "merge-character",
    title: "Merge Character: Mini Game",
    shortDescription: "Combine heroes, level up, and create the ultimate team!",
    description: "⚔️ Merge Character - Combine heroes, level up, and create the ultimate team! 💪\n\n🚀 Unlock upgrades to boost production and rise to the top. 🏆\n\n🔥 Challenge other players to prove your strategy and power in this fast-paced hero fusion game.\n\nHero Creator is an innovative and captivating hero fusion game that keeps players engaged with its fast-paced mechanics and strategic gameplay. As the game's protagonist, you have access to 20 slots where heroes are automatically produced every 5 seconds. Your mission is to combine heroes of the same level to create more powerful versions and gradually build a formidable team of champions. 💥",
    genre: ["Unity", "C#", "Mobile Game", "Strategy"],
    status: "live",
    screenshot: "1DZBTvNFwT7H-KAmcZ2QMdv0iQnw0AfFF",
    icon: "1zzuS03C-kmQy_I5lbZPxyYxdrvZbhavH",
    youtubeUrl: "https://www.youtube.com/watch?v=MfWBFS5QBY4",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.DagmaGameStudio.MergeBuildProject&pli=1",
    technologies: [
      { name: "AdMob", description: "Google AdMob integration for monetization through banner and interstitial ads", color: "red" },
      { name: "Unity Analytics", description: "Player behavior tracking and game performance analytics", color: "green" }
    ],
    images: [
      "1VrSUHxk1tLEdzipRMtCyTFd8TGDRnLdU",
      "1e6aH7IWRKUIlKYkbEt9js5wxksUHBSxM",
      "1gdMb0s1kiYzTkpCi5Mb5cnPTmwnMdyHt",
      "1YY-BPiiwPE0ZVR8pIQr00RegW-Ob-WmC",
      "1JiQhIoFaBhhZe6Asg_11O_1zBOiLiZMu"
    ]
  },
  {
    id: "litlestars-wonderland",
    title: "Litlestars Wonderland: Cow Game",
    shortDescription: "Experience the joy of taking care of adorable babies, collecting stars, and popping balloons!",
    description: "🍼 Welcome to our exciting game collection! Experience the joy of taking care of adorable babies, collecting stars, popping balloons, and immersing yourself in the life of a cow ✨\n\n🐄 With three engaging mini-games featuring our lovable cow, including cow racing, tractor driving, and airplane piloting, there's never a dull moment 🚜✈️\n\n🎮 Game Features:\n🔊 Animal sound recognition challenges\n🧹 House cleaning mini-games\n🎯 Interactive learning sessions where you identify objects based on their sounds\n🌟 Star collection and balloon popping activities\n🚜 Exciting cow racing adventures\n✈️ Airplane piloting experiences\n\n🎈 Whether you're a kid or an adult, this game has something for everyone!\n\n🌟 Get ready for endless fun and learning in one action-packed game! 🎈🔊",
    genre: ["Unity", "C#", "Kids Game", "Educational"],
    status: "live",
    screenshot: "1XQZJmrSs3dElFnmzT-t1p6AvIfloogr_",
    icon: "1Mb4fCOs4u08p4tpazjm0niYJfYAEAcFM",
    youtubeUrl: "https://www.youtube.com/watch?v=7Ml3lawpCRQ",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.DagmaGameStudio.LittleStarsWonderLand",
    technologies: [
      { name: "Unity Ads", description: "Unity Ads monetization system for rewarded and interstitial advertisements", color: "purple" },
      { name: "Unity Analytics", description: "Player behavior analysis and educational game performance metrics", color: "green" }
    ],
    images: [
      "1iPhgCsJdagmE-W9HKR67CFYS77dy-EbL",
      "1Q6PAR3zuYO_3TJDqRkfjlbLB64pTpQn3",
      "1qprzXxAYgwgzo9-mosyMPtVKp8AsxMbP",
      "18I5u7ysdJmRToMR8r1qCGDLHdKKxbYE0",
      "1nogNsN5jGbkehSkB2bU2hykiid4lLCwa",
      "1AZjpWxlD7n9DvHRs7Cdy5tR096GoK1va"
    ]
  },
  {
    id: "merge-of-dagma",
    title: "Merge Of Dagma",
    shortDescription: "Legendary Character Fusion Game! Exciting character merging game set in the World of Dagma universe!",
    description: "📜 Merge Of Dagma - Legendary Character Fusion Game! ⚔️🔥\n\n🌟 Merge Of Dagma is an exciting character merging game set in the World of Dagma universe! Create your own heroes, combine their powers, and embark on an epic adventure with legendary warriors! 🏆💥\n\n⚔️ How to Play?\n🔹 Drag and merge two characters of the same level to unlock more powerful warriors!\n🔹 Discover warriors, mages, assassins, and legendary creatures from different classes! 🧙‍♂️👹\n🔹 Strengthen your army and upgrade your heroes with spells and equipment! ✨\n🔹 Fight monsters in PvE quests or challenge powerful boss enemies! 🏹🐉\n\n🔥 Features:\n✅ Addictive character merging mechanics!\n✅ Dozens of unique heroes with special abilities!\n✅ Adventure in the mystical MMORPG world of World of Dagma!\n✅ Level up, unlock new regions, and collect legendary warriors!\n✅ Immersive RPG experience with stunning visuals and sound effects!\n\n⚡ Merge your warriors, unlock legendary powers, and build the ultimate army in Merge Of Dagma! 🏰👑",
    genre: ["Unity", "C#", "RPG", "Fantasy"],
    status: "live",
    screenshot: "1znhoM5ej5OYwp-6D4aEBrYaIky2QoBBN",
    icon: "1iPsaRFUBIYpynQaVNO0es6BUYozyr5Mo",
    youtubeUrl: "https://www.youtube.com/watch?v=78BFGB8LJVg",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.DagmaGameStudio.MergeOfDagma",
    technologies: [
      { name: "Google Ads", description: "Google Ads integration for revenue generation and user acquisition", color: "blue" },
      { name: "Unity Analytics", description: "Comprehensive analytics for player engagement and retention tracking", color: "green" }
    ],
    images: [
      "14bOnjsuk9WRfRDqppxEOiHSXO38TCBYC",
      "1JfDoamChbArAvNrxag4eu3lsLs4oq9pr",
      "1BDJ2n_yJ2HsPEFrAo3y3BRQKnIW_I6jg",
      "1RO8nMmplbAf7EJhCBiyS2tgvQMM-hpnc",
      "1MBdytEkNykAYsXmLv-x5DNvFfhb8-ozw"
    ]
  },
  {
    id: "colorful-playland",
    title: "Colorful Playland: Baby Game",
    shortDescription: "Vibrant and exciting experience with interactive mini-games for children!",
    description: "🎮 Colorful Playland - Baby Game offers a vibrant and exciting experience filled with carefully designed interactive mini-games for children! 🎈\n\n🌈 In this fun world, kids of all ages will discover many unique mini-games such as balloon popping 🎈, star popping ⭐, corn peeling 🌽, and a cow game 🐮. The game is designed to help improve hand-eye coordination, enhance motor skills, and support learning through play.\n\n🎯 Features:\n🎈 Variety of Mini-Games: Enjoy balloon popping, star popping, corn peeling, cow game, and more!\n📚 Educational & Fun: Combines learning with entertainment to support cognitive and motor development.\n🎨 Vibrant Graphics & Sound Effects: Engaging, colorful graphics and cheerful music capture children's attention.\n🎮 Easy Gameplay: Simple and intuitive controls make it easy for every child to play.\n🛡️ Safe Content: Developed specifically for children, offering content that parents can trust.\n\n🌟 Why Choose Colorful Playland?\nThis game not only delivers fun but also enhances problem-solving skills, creativity, and concentration. The points and rewards earned during play help track progress and boost motivation.\n\n🚀 Download now to experience this unique blend of fun, adventure, and learning, and add a splash of color to your child's development! 🎉",
    genre: ["Unity", "C#", "Kids Game", "Educational"],
    status: "live",
    screenshot: "1rVaBvll-y_zMjUUPjVzbJ-0AhFzkUoeD",
    icon: "1XJYOG2IGrJ281QdtNR1-oYQQVBUbLKWF",
    youtubeUrl: "https://www.youtube.com/watch?v=yDs5ZuWxQ8Q",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.DagmaGameStudio.ColorFulPlayland",
    technologies: [
      { name: "Unity Ads", description: "Unity Ads integration for child-safe monetization in educational games", color: "purple" },
      { name: "Unity Analytics", description: "Educational game analytics for tracking learning progress and engagement", color: "green" }
    ],
    images: [
      "15MKKXwS_9szgnQtaFke4DLDO5IsYBON0",
      "1nRIF69FU1d-sRjBKyRjEFbgyPU6abk68",
      "1B8KuZJvLqXauA8ZHQuRz_1pbDdJCbOBV",
      "1B9MHFuLUVoL4ti66LxccJAaCwLT1IU3j",
      "1bxjSIkznUDVSTFQnVpslUeMqIQ575Gvw",
      "13OT8BbkHicElWoqUpwOSn5iWUZr056oI"
    ]
  },
  {
    id: "merge-2048-extreme",
    title: "Merge 2048: Extreme 2048",
    shortDescription: "Addictive puzzle game filled with strategy and intelligence!",
    description: "🧠 2048 Extreme - An Addictive Puzzle Game Filled with Strategy and Intelligence! 🧩\n\n🔢 2048 Extreme takes the classic 2048 game to a new level of excitement and fun! Easy to learn but hard to master, this addictive puzzle game challenges you to merge numbers to reach 2048. Test your strategic thinking and quick decision-making skills to enhance your mental abilities.\n\n🎯 Features:\n👥 User-friendly interface\n🌟 Addictive game mechanics\n🚀 Different difficulty levels\n🏆 Global leaderboards\n🎁 Daily rewards and achievements\n\nPerfect for players of all ages, 2048 Extreme is an ideal way to spend your free time in a fun and mentally stimulating way! 📈\n\n🌟 Why 2048 Extreme?\n✅ Easy to play, but hard to master\n✅ Intelligence-boosting and strategy-focused\n✅ Opportunity to compete on global leaderboards\n✅ Addictive and fun gaming experience\n\n⚠️ Note: This game has been deprecated and is no longer available on app stores.\n\n💡 This project showcases our expertise in puzzle game development and number-based game mechanics!",
    genre: ["Unity", "C#", "Puzzle", "Strategy"],
    status: "deprecated",
    screenshot: "1dzxfq1WZ5x4bSSZxp9rJLzNXTQguSVnF",
    icon: "1BEgdbQjKZxJz5TMQS4z-py2NWbSqE5up",
    youtubeUrl: "https://www.youtube.com/watch?v=9RyYegfkkTY",
    images: [
      "1KEnvJqer3YSA6Es04a5A_6r83d69_Moq",
      "1MBfGZUjEHM7c20j9oSmc-TGT2MucxRR7",
      "1O-tgkEXVTa890mEvV-z0Qq32cl_hm3wI",
      "11Sy2zhMy6JhYJO0GJ4-t-3yU__oon0D5",
      "1wvaKIKOd3ErkCiJGQR4wy0GOe2Ea5CIg"
    ]
  }
];

export const prototypeGames: Game[] = [
  {
    id: "angry-birds",
    title: "Angry Birds Clone: Prototype",
    shortDescription: "Classic physics-based puzzle game with evolution feature!",
    description: "🐦 Angry Birds Clone - Classic physics-based puzzle game with innovative evolution mechanics! 🧬\n\n🎯 Launch birds with precision, destroy pig structures, and discover the revolutionary bird evolution system!\n\n🎮 Classic Gameplay:\n🎯 Slingshot Mechanics: Aim and launch birds with realistic physics\n🏗️ Structure Destruction: Destroy wooden, stone, and glass structures\n🐷 Target Elimination: Defeat all pigs to complete levels\n⭐ Star Rating System: Achieve perfect scores with strategic gameplay\n🎨 Authentic Design: Faithful recreation of the original Angry Birds experience\n\n🧬 Evolution Feature (NEW!):\n🔬 Bird Fusion: Combine two different bird types to create evolved species\n⚡ Enhanced Powers: Evolved birds possess combined abilities of their parent birds\n🌟 Unique Abilities: Each evolution creates birds with new, powerful special attacks\n🧪 Experimentation: Discover different evolution combinations and their effects\n🚀 Strategic Depth: Plan your bird usage to maximize evolution potential\n\n🔧 Technical Features:\n⚙️ Realistic Physics: Accurate projectile motion and collision detection\n💥 Destruction System: Dynamic structure collapse with realistic debris\n🎵 Audio Design: Authentic sound effects and satisfying destruction audio\n📱 Touch Controls: Intuitive slingshot controls optimized for mobile\n\n🧬 This project demonstrates expertise in physics simulation, game mechanics innovation, and creative feature development!",
    genre: ["Unity", "C#", "Physics", "Puzzle", "Evolution"],
    status: "prototype",
    screenshot: "1iBtFzXubNVNd8VHIre_WEz_O1u_GLbR4",
    icon: "",
    youtubeUrl: "https://www.youtube.com/watch?v=Giu_rjbjDlw",
    githubUrl: "https://github.com/salihbaglan/Angry-Birds",
    images: [
      "1WdAHvihKUgd0KpZfOGGqmUgNRvHLfNQf",
      "1kbzsI47G7TJeRTmWq4ZUO5_LGZLTStJz",
      "1acJNsS_g7-eq_I5VBQbClmqSuoFy6m-M",
      "1HWZB4kE2rtNfCOEg0onnFG8ALwTn9YjW",
      "1pCzYojL-671437a1WLvWFhoRTmtXEAa3",
      "1BcTHWpT0w9rY1iXS0-tDzE0Jub7o-N7_"
    ]
  },
  {
    id: "bomberman-multiplayer",
    title: "Bomberman Multiplayer: Prototype",
    shortDescription: "Classic bomberman game with online multiplayer support!",
    description: "💣 Bomberman Multiplayer - Classic bomberman game reimagined with modern online multiplayer technology! 🎮\n\n🌐 Experience the nostalgic gameplay of Bomberman with real-time multiplayer support, featuring advanced networking capabilities and seamless online gameplay!\n\n🎮 Prototype Features:\n💣 Classic Bomberman Gameplay: Place bombs, destroy walls, and eliminate opponents\n🌐 Real-time Multiplayer: Online multiplayer support using Photon networking\n🎮 Lobby System: Create and join game rooms with friends\n💬 Chat Functionality: In-game chat system for player communication\n🎯 Playable State: Fully functional gameplay mechanics ready for testing\n\n🔧 Technical Implementation:\nPhoton PUN2: Real-time multiplayer networking for seamless online gameplay\nPlayFab: Backend services for player authentication and game data management\nUnity Networking: Optimized network synchronization for smooth multiplayer experience\n\n🎮 Current Status:\nThe prototype is in a playable state with core features implemented including lobby system, chat functionality, and multiplayer gameplay mechanics. Players can join rooms, communicate, and engage in classic Bomberman battles online.\n\n💣 This project demonstrates expertise in multiplayer game development, network programming, and real-time synchronization systems!",
    genre: ["Unity", "C#", "Photon", "PlayFab", "Multiplayer"],
    status: "prototype",
    screenshot: "1Be9hKSrKLHYh6XOOzXXXFgoE1mn2qa5a",
    icon: "",
    youtubeUrl: "https://www.youtube.com/watch?v=vt9rt8RrzRc",
    images: [
      "1spi4TmowC06bzNKUrAXHs56vSZGv2D2J",
      "1U-d1om7EGx7yplVNnkQ_2TKDB7bPufMQ",
      "18cm1SjxxIA06AIPCKuYZRLA_l4PsD2mF",
      "1SBjnUN3BhtxoLU0J8XfwzVCY98IDs0z-"
    ]
  },
  {
    id: "bullet-rush",
    title: "Bullet Rush: Prototype",
    shortDescription: "Top-down action-arcade game with fast-paced gameplay!",
    description: "🎯 Bullet Rush - Top-down action-arcade game with fast-paced gameplay and simple mechanics! 🔫\n\n🚁 Survive enemy waves, reach the helicopter, and complete challenging levels in this mobile-based action experience!\n\n🎮 Gameplay Mechanics:\n🎯 Objective: Destroy enemy waves to complete levels and reach the helicopter at the end\n🕹️ Controls: Drag your finger on screen to move character - automatic shooting system\n🔫 Auto-Fire: Character shoots automatically, you only control movement and direction\n💣 Power-ups: Speed boost, explosion effects, and various enhancements\n🏆 Combo System: Eliminate multiple enemies quickly to increase your score\n\n👾 Enemies & Threats:\n🌊 Wave System: Creature-like enemies come in waves\n⚡ Contact Damage: Enemies reduce health when they touch the character\n📈 Progressive Difficulty: Enemies become faster and more numerous over time\n\n🚁 Level Completion:\nEach level ends with reaching a helicopter for escape, similar to classic arcade games. The game features intuitive one-finger controls perfect for mobile gaming.\n\n🎮 This hyper-casual game demonstrates expertise in mobile game mechanics, touch controls, and engaging arcade-style gameplay!",
    genre: ["Unity", "C#", "Mobile", "Action", "Arcade"],
    status: "prototype",
    screenshot: "1smEnQ-fnmC8jYTo4cO-tZywIX1x5672f",
    icon: "",
    youtubeUrl: "https://www.youtube.com/watch?v=T_5RMIl44g0",
    githubUrl: "https://github.com/salihbaglan/Bullet-Rush-Hyper-Casual-",
    images: [
      "1jNHzASOBmmdKFZfA0wQRICsy_Uk5FrPm",
      "1xV7DtpkL0qGvbqtT6S_IE8kDgz8VMkIn",
      "1ARAAY_noLSVGXvlDD5UibyfqHryYQT48",
      "1qJ8tbDnFc1B_mknvF_L2Xhj6X6ygN6b0",
      "1heUrZluYflmC6YlMvXTnmyil-8PtmlIM"
    ]
  },
  {
    id: "helix-jump",
    title: "Helix Jump Clone: Prototype",
    shortDescription: "Addictive spiral tower jumping game with smooth physics!",
    description: "🌀 Helix Jump Clone - Addictive spiral tower jumping game with smooth physics and colorful visuals! 🎯\n\n⚡ Navigate through rotating helix platforms, avoid obstacles, and reach the bottom in this engaging casual game!\n\n🎮 Gameplay Mechanics:\n🌀 Spiral Navigation: Guide the ball through rotating helix tower structures\n🎯 Objective: Reach the bottom of the tower by passing through platform gaps\n🚫 Obstacle Avoidance: Avoid colored platform sections that cause game over\n⚡ Momentum System: Build speed by consecutive successful jumps\n🎨 Visual Feedback: Satisfying particle effects and smooth animations\n\n🕹️ Controls & Features:\n👆 One-Touch Control: Simple tap and hold to rotate the helix tower\n🎵 Audio Design: Satisfying sound effects for jumps and collisions\n🌈 Colorful Design: Vibrant colors and smooth gradient backgrounds\n📱 Mobile Optimized: Perfect for quick gaming sessions on mobile devices\n\n🏆 Technical Highlights:\n⚙️ Physics System: Realistic ball physics with gravity and bounce mechanics\n🔄 Rotation Mechanics: Smooth helix rotation with touch input responsiveness\n🎨 Procedural Generation: Dynamic platform layouts for varied gameplay\n\n🎯 Game Features:\nThis clone captures the addictive essence of the original Helix Jump with smooth controls, satisfying physics, and engaging visual design. Perfect example of hyper-casual game development.\n\n🌀 Demonstrates expertise in physics-based gameplay, touch controls, and casual game mechanics that keep players engaged!",
    genre: ["Unity", "C#", "Mobile", "Casual", "Physics"],
    status: "prototype",
    screenshot: "1FL5uaPsuaZFWmDPh7bBpZ7fMzM6TWQyT",
    icon: "",
    youtubeUrl: "https://youtu.be/WbDiuX99ASg",
    githubUrl: "https://github.com/salihbaglan/Helix-Jump/tree/main",
    images: [
      "1T3zkWkpK2tyrzFybxJbcradDP1rQUQuU",
      "1wjO6wRKOwcQLuOsD8Xml6ePlUtlmNQvS",
      "1unAjRI8EvrPvap4BdhhL0MAWgO0Jt4_o",
      "1Fb88WL5u1B1O0i-GgDvCA_9k3lJpWgZQ",
      "1UtgnMVLyBksi2jTW8orZ0_wpVWlsSHhI"
    ]
  },
  {
    id: "count-masters",
    title: "Count Masters Clone: Prototype",
    shortDescription: "Hyper-casual crowd running game with strategic gate mechanics!",
    description: "🧍‍♂️ Count Masters Clone - Hyper-casual crowd running game with strategic gate mechanics! 🚪\n\n⚡ Build your stickman army, make strategic choices, and defeat enemies in epic battles!\n\n🎮 Game Type & Features:\n🎯 Hyper-Casual: Easy to learn, quick to play, perfect for mobile gaming\n🏃‍♂️ Running & Strategy: Combines endless running with strategic decision making\n🧍‍♂️ Character Start: Begin with a single stickman character\n🎯 Objective: Collect as many \"people\" as possible to build your army\n\n🚪 Gate Mechanics:\n➕ Mathematical Gates: Pass through gates with numbers and operations (+50, x2, -30)\n📈 Army Growth: Your crowd grows or shrinks based on gate choices\n🧠 Strategic Decisions: Choose the most advantageous gates for maximum army size\n⚡ Quick Thinking: Make fast decisions - sometimes +50 is better than x2!\n\n⚔️ Combat & Obstacles:\n🗡️ Enemy Battles: Automatic combat where numbers determine victory\n🏰 Boss Fights: Epic end-level battles requiring large armies\n⚠️ Obstacles: Spikes, rotating blades, falling platforms reduce your crowd\n🛡️ Survival Strategy: Balance risk vs reward when choosing paths\n\n🎨 Visual & Technical:\n🌈 Colorful Graphics: Vibrant visuals with smooth animations\n📱 Mobile Optimized: Perfect touch controls for mobile devices\n🎵 Engaging Audio: Satisfying sound effects for crowd growth and battles\n\n🏆 This clone demonstrates expertise in hyper-casual game mechanics, crowd simulation, and strategic gameplay elements!",
    genre: ["Unity", "C#", "Mobile", "Hyper-Casual", "Strategy"],
    status: "prototype",
    screenshot: "1Worl3-fEFlD6fD9PAkUEIid94-yl2Asy",
    icon: "",
    githubUrl: "https://github.com/salihbaglan/Count-Master-Hyper-Casual-",
    images: [
      "1AKtOplVCU5skDTJFUG5sPe-MT9HffsH9",
      "1KYgT__rY8qX0ynCAz84gZaApAdn8fb5M"
    ]
  }
];

export const allGames: Game[] = [...publishedGames, ...prototypeGames];

