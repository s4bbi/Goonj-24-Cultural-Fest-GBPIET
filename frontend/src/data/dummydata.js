import img1 from "../assets/Images/Dramaflict_planet.webp";
import img2 from "../assets/Images/Fusion_Planet.webp";
import img3 from "../assets/Images/Flashmob_Planet.webp";
import skitImage from "../assets/Images/EventImages/drama.webp";
import mimeAct from "../assets/Images/EventImages/mime-act.webp";
import nukkad from "../assets/Images/EventImages/nukkad-naatak.webp";
import sanskriti from "../assets/Images/EventImages/sanskriti.webp";
import solo_folk from "../assets/Images/EventImages/solo-folk.webp";
import hop_notch_solo from "../assets/Images/EventImages/hop-notch-solo.webp";
import alfaaz from "../assets/Images/EventImages/alfaaz-e-kalam.webp";
import battle_bands from "../assets/Images/EventImages/battle-of-bands.webp";
import classical from "../assets/Images/EventImages/classical.webp";
import clickfest from "../assets/Images/EventImages/clickfest.webp";
import dance_battle from "../assets/Images/EventImages/dance-battle.webp";
import debate from "../assets/Images/EventImages/debate.webp";
import dress_to_impress from "../assets/Images/EventImages/dress-to-impress.webp";
import extempore from "../assets/Images/EventImages/extempore.webp";
import frame from "../assets/Images/EventImages/frame-by-frame.webp";
import goonj_movie from "../assets/Images/EventImages/goonj-movie.webp";
import hop_notch_group from "../assets/Images/EventImages/hop-notch-group.webp";
import light_painting from "../assets/Images/EventImages/light-painting.webp";
import mr_miss_goonj from "../assets/Images/EventImages/mr-and-miss-goonj.webp";
import singing from "../assets/Images/EventImages/singing.webp";
import qawalli from "../assets/Images/EventImages/qawalli.webp";
import reel_mania from "../assets/Images/EventImages/reel-mania.webp";
import standup from "../assets/Images/EventImages/standup-comedy.webp";
import treasure_hunt from "../assets/Images/EventImages/treasure-hunt.webp";
import oppo from "../assets/Images/EventImages/oppo.webp";
import open_mic from "../assets/Images/EventImages/open-mic.webp";
import esport from "../assets/Images/EventImages/e-sports.webp";
import step_up from "../assets/Images/EventImages/step-up.webp";
import ggt from "../assets/Images/EventImages/ggt.webp";
import technicalquiz from "../assets/Images/EventImages/technical-quiz.webp";
import projectexhibition from "../assets/Images/EventImages/project-exhibition.webp";
import bridgeit from "../assets/Images/EventImages/bridge-it.webp";
import ideathon from "../assets/Images/EventImages/ideathon.webp";

const eventRulebook =
  "https://drive.google.com/file/d/1WypdhllDNpWP9isluPgxV5N6uoftvcZv/view?usp=sharing";
export const data = [
  {
    id: 1,
    name: "HEADGEAR SAGA",
    img: img1,
    Event: [
      {
        id: 101,
        name: "DRAMA OR SKIT",
        img: skitImage,
        description:
          "A type of drama conflict in which members of each team will showcase their play based on the theme.",
        guidelines: [
          "6 to 8 members are allowed for each team. If members less or exceeds points deduction will be there",
          "The content should be socially relevant and suitable for performance",
          "No obscene i.e. targeting any religion should be there else it can lead to disqualification",
          "Use of props are allowed",
          "Arrangement of props and outfits will be done by the team itself",
          "To enhance or highlight the drama use of music (instruments, singing) is allowed",
          "The drama should not exceed more than 4 minutes and 1 minute for stage clearance will be given",
          "If time exceeded points deduction will be there",
          "(If there is technical fault, extra time will be given accordingly.)",
        ],
        Rulebook: eventRulebook,
        interCollege: true,
        judging:
          "Audience impact + representation + expressions + theme & dialogue execution + costume.",
        coordinator: "Pallavi Pathak",
        email: "p26alla02vi@gmail.com",
        phone: "",
      },
      {
        id: 102,
        name: "MIME ACT",
        img: mimeAct,
        description:
          "Unique clothes, lot’s of white make-up but not making sound? If so? The act is MIME! Somebody said “actions speak louder than words” it’s time to make it real!",
        guidelines: [
          "5 to 10 members are allowed in each team, less or exceeding the given limit will lead to points deduction,",
          "No act shall contain any offensive, obscene, disrespectful actions or gestures else will lead to point deduction or even disqualification,",
          "Time limit for the act is minimum 3 minutes and maximum 4 minutes. 1 minute for stage clearance will be given to each team,",
          "Lip sync and dialogues are prohibited,",
          "Exceeding will lead to points deduction,",
          "(If there is technical fault, extra time will be given accordingly.)",
        ],
        Rulebook: eventRulebook,
        interCollege: true,
        judging:
          "Audience impact + representation + facial expressions + theme execution + overall performance.",
        coordinator: "Vidhi Nabiyal",
        email: "vidhinabiyal@gmail.com",
        phone: "",
      },
      {
        id: 408,
        name: "MONO ACT",
        img: mimeAct,
        description:
          "Unique clothes, lot’s of white make-up but not making sound? If so? The act is MIME! Somebody said “actions speak louder than words” it’s time to make it real!",
        guidelines: [
          "Only one entry is allowed per branch.  The performance should not exceed 3-4 minutes, else points deduction will be done.",
          "Use of props are allowed and arrangement of props and outfits must be done by the team itself.",
          "Dress up must be in good taste and no vulgarity is allowed.",
        ],
        Rulebook: eventRulebook,
        interCollege: true,
        judging:
          "Audience impact + representation + facial expressions + theme and dialogue execution .",
        coordinator: "Vidhi Nabiyal",
        email: "vidhinabiyal@gmail.com",
        phone: "",
      },
      {
        id: 103,
        name: "NUKKAD NATAK",
        img: nukkad,
        description:
          "Let’s get together to show everyone the teamwork & create awareness in society. Each branch will present a nukkad natak based on the following themes:",
        topics: [
          "रोजगार - युवा आकांक्षाओं की लड़ाई (Employment – The battle for youth aspirations)",
          "लोकतंत्र की शक्ति - बदलाव के लिए वोट करें (Power of democracy – Vote for change)",
          "साइबर अपराध के खिलाफ – डिजिटल दुनिया में लड़ाई (Against Cybercrime – The Battle in the Digital World)",
          "प्रौद्योगिकी का अंधाधुंध उपयोग – सोचें, समझें, अपनाएं (Blind Use of Technology – Think, Understand, Adopt)",
          "हरित प्रौद्योगिकी - पर्यावरण के लिए एक नया मार्ग (Green Technology – A New Path for Environment)",
          "डेटा सुरक्षा - हमारी पहचान, हमारी जिम्मेदारी (Data Security – Our Identity, Our Responsibility)",
          "देशी प्रौद्योगिकी - आत्मनिर्भर भारत के लिए (Indigenous Technology – The Rhythm of Self-Reliant India)",
          "The topics of nukkad will be given to each branch through chit system for fair play.",
        ],
        Rulebook: eventRulebook,
        guidelines: [
          "Teams must consist of a minimum of 6 and maximum of 12 participants,",
          "Each performance gets a time limit of 5-7 minutes,",
          "Stage clearance time should not exceed more than 1 minute,",
          "Limited props are allowed. Teams must bring their own props, and they should be easily manageable on an outdoor stage,",
          "Costumes should be arranged by the teams,",
          "Performances should be acoustically driven, and the use of microphones is not allowed.",
        ],
        interCollege: true,
        judging:
          "representation + expressions + theme execution + coordination + overall performance.",
        coordinator: "Rashmi Rawat",
        email: "rawatrashmi162@gmail.com",
        phone: "",
      },
    ],
  },
  {
    id: 2,
    name: "FOOTLOOSE",
    img: img2,
    Event: [
      {
        id: 201,
        name: "SANSKRITI [Theme – Folk (group)]",
        img: sanskriti,
        description: "Transcend the terrestrial!",
        topics: [],
        guidelines: [
          "The teams will choose a state and present their folk dance forms,",
          "At least 5 to 10 members should be present in the team,",
          "Use of props is allowed according to the chosen theme,",
          "The performance should not exceed 6-8 minutes and 2 minutes for stage clearance will be given, else points deduction will be done,",
          "The outfits according to the given theme will be arranged by the team itself,",
          "Dress up must be in good taste,",
          "Songs should be submitted to the core committee a day prior to the event (details and format will be shared).",
          " (if there is technical fault , extra time will be given accordingly.) ",
        ],
        Rulebook: eventRulebook,
        interCollege: true,
        judging:
          "representation + audience impact + expressions + stage coverage + theme execution + coordination + team work + overall performance.",
        coordinator: "Prajjwal Chauhan",
        email: "prajjwal1120@gmail.com",
        phone: "+91 8755293708",
      },
      {
        id: 202,
        name: "HOP NOTCH [Theme – Western/Freestyle]",
        img: hop_notch_group,
        description: "Let’s dance to the best!",
        topics: [],
        guidelines: [
          "At least 5 to 10 members should be present in the team for group dance,",
          "Use of props is allowed. NO obscene acts should be done in the performance,",
          "The performance should not exceed 6-8 minutes and 2 minutes for stage clearance will be given, else points deduction will be done,",
          "The outfits accordingly will be arranged by the team itself,",
          "Dress up must be in good taste and no vulgarity is allowed,",
          "Songs should be submitted to the core committee a day prior to the event (details and format will be shared),",
          "(If there is technical fault, extra time will be given accordingly.)",
        ],
        Rulebook: eventRulebook,
        interCollege: true,
        judging:
          "representation + Audience impact + expressions + theme execution + coordination + stage coverage + overall performance.",
        coordinator: "Akshit Anand",
        email: "akshitanand121@gmail.com",
        phone: "8979095390",
      },

      {
        id: 203,
        name: "CLASSICAL (SOLO)",
        img: classical,
        description: "Dance with your heart!",
        topics: [],
        guidelines: [
          "The performance should not exceed more than 4 minutes and 1 minute for stage clearance will be given, else points deduction will be done,",
          "The outfits accordingly will be arranged by the team itself,",
          "Dress up must be in good taste and no vulgarity is allowed,",
          "Songs should be submitted to the core committee a day prior to the event (details and format will be shared),",
          "(If there is technical fault, extra time will be given accordingly.)",
        ],
        Rulebook: eventRulebook,
        interCollege: true,
        judging:
          "Audience impact + facial expressions + execution + stage coverage + outfit + overall performance.",
        coordinator: "Akansha Rawat",
        email: "akanshaar3256@gmail.com",
        phone: "",
      },
    ],
  },
  {
    id: 3,
    name: "FOOTLOOSE",
    img: img1,
    Event: [
      {
        id: 301,
        name: "Solo (Folk Theme) - Only For GBPIET",
        img: solo_folk,
        description: "Breaking barriers on stage!",
        topics: [],
        guidelines: [
          "Only one entry is allowed per branch.",
          "Participants must dress up in the cultural attire based on the state folk they are choosing. Use of props is allowed",
          "Outfits will be arranged by the team itself",
          "The performance should not exceed 3-5 minutes and 1 minute for stage clearance is given",
          "Exceeding the performance time limit will lead to point deduction",
        ],
        Rulebook: eventRulebook,
        interCollege: false,
        judging:
          "Audience impact + themed outfit + facial expressions + theme + execution + stage coverage + overall performance.",
        coordinator: "Ramneet Kaur",
        email: "ramneetkaur0028@gmail.com",
        phone: "",
      },
      {
        id: 302,
        name: "Hop Notch Western (Solo)",
        img: hop_notch_solo,
        description: "Let’s dance to the beats!",
        topics: [],
        guidelines: [
          "The performance should not exceed 3-5 minutes, with 1 minute allocated for stage clearance.",
          "Team members will arrange outfits themselves.",
          "The use of traditional and ethnic forms is prohibited.",
          "No obscenity or vulgarity is allowed.",
          "Exceeding the performance time limit will result in point deduction.",
          "Songs will be submitted to the core committee a day prior to the event.",
          "(If there is a technical fault, extra time will be given.)",
        ],
        Rulebook: eventRulebook,
        interCollege: true,
        judging:
          "Audience impact + themed outfit + facial expressions + theme + execution + stage coverage + overall performance.",
        coordinator: "Akshit Anand",
        email: "akshitanand121@gmail.com",
        phone: "8979095390",
      },
    ],
  },
  {
    id: 4,
    name: "FLASHMOB",
    img: img3,
    Event: [
      {
        id: 401,
        name: "Dress to Impress [Theme – Cosplaying (Bollywood / Indian Mythology )]",
        img: dress_to_impress,
        description: "Make your fashion statement!",
        topics: [],
        guidelines: [
          "The participants must make handmade outfits. Dressing could vary according to individual choice, but must be handmade.",
          "Dress up must be in good taste and no vulgarity is allowed. ",
          "2 entries either co-ed , boy-boy or girl-girl is allowed.",
          "The event will be kick off with ramp followed by the talent show (dance, act or other talents)",
          "The duration will be of 3-5 minutes per participant.",
          "Songs should be submitted to the core committee a day prior to the event (details and format will be shared).",
          "(if there is technical fault, extra time will be given accordingly.)",
        ],
        Rulebook: eventRulebook,
        interCollege: true,
        judging:
          "Audience impact + ramp + themed outfit + facial expressions + theme execution + fluency + overall performance.",
        coordinator: "Ragini Bisht",
        email: "raginibisht987@gmail.com",
        phone: "",
      },

      {
        id: 402,
        name: "MR & MISS GOONJ - Only For GBPIET",
        img: mr_miss_goonj,
        description:
          "For the first time ever someone will take the title of Mr. & miss goonj! Starting off with the ramp walk followed by talent round and quiz round to determine the ultimate king and queen of GOONJ 2K24",
        topics: [],
        guidelines: [
          "The event will kick off with a ramp walk and introductory round where participants will give their introduction followed by the talent show round showing off their talents to grab the audience’s attention and a final quiz round.",
          "One boy & one girl entry is allowed per branch.",
          "Participants have to create a unique tagline.",
          "Dress up must be in good taste and no vulgarity is allowed.",
          "Songs should be submitted to the core committee a day prior to the event (details and format will be shared).",
          "If there is a technical fault, extra time will be given accordingly.",
          "Each participant is required to dress according to the respective state theme given to their branch and perform their best shot accordingly.",
        ],
        Rulebook: eventRulebook,
        interCollege: false,
        judging:
          "dressing sense + appearance + ramp + confidence + facial  expressions + fluency + overall performance",
        coordinator: "Prabhleen Kaur (prabhleenk350@gmail.com)",
        email: "Ashutosh Rana (9118798461)",
        phone: "",
      },
    ],
  },
  {
    id: 6,
    name: "OPPO ",
    img: img3,
    Event: [
      {
        id: 601,
        name: "OPPO - Only For GBPIET",
        img: oppo,
        description: "Breaking barriers on stage!",
        topics: [],
        guidelines: [
          "Only one pair entry is allowed per branch. ",
          "Participants must dress up in the opposite gender’s aƫtire and perform a dance accordingly to the given theme.Use of props is allowed.",
          "The performance should not exceed 3-5 minutes and 1 minute for stage clearance will be given. Exceeding the performance limit will lead to points deduction.",
          "Participants are encouraged to showcase creativity in their gender swapped attire.",
          "Dress up must be in good taste and no vulgarity is allowed.",
          "Songs should be submitted to the core committee a day prior to the event (details and format will be shared).",
          "There is no specific theme in accordance to oppo performance.",
        ],
        Rulebook: eventRulebook,
        interCollege: false,
        judging:
          "Audience impact + ramp + themed outfit + facial expressions + theme execution + fluency + overall performance.",
        coordinator: "Prabhleen Kaur (prabhleenk350@gmail.com)",
        email: "Drona Chamoli (9045118831)",
        phone: "",
      },
    ],
  },

  {
    id: 7,
    name: "BATTLES",
    img: img1,
    Event: [
      {
        id: 701,
        name: "CHOREOGRAPHY SHOWDOWN - Only For GBPIET",
        img: dance_battle,
        description:
          "Ready to show off your groovy moves? Here is the freestyle tadka where you compete with yourself and give the best version of yourself.",
        topics: [],
        guidelines: [
          "Participants can be of any gender and are allowed to enter per branch.",
          "They will receive their songs one hour prior to the event, and within that hour, they must prepare their choreography.",
          "Each participant will perform their choreography individually for 2 minutes in the first round.",
          "Only three participants will qualify for the final showdown after the first round.",
          "The song for the final showdown will be provided by the core committee present at the event for fair play.",
          "The ultimate winner will be determined through a battle between the top three participants.",
        ],
        Rulebook: eventRulebook,
        interCollege: false,
        judging:
          "choreography + confidence + coordination (group, duo, trio) + cheering impact + overall performance.,",
        coordinator: "Kriti Uniyal (kritiuniyal28@gmail.com)",
        email: "Ashlesh Ranjan (+91 941115530)",
        phone: "",
      },
      {
        id: 702,
        name: "BATTLE OF BANDS",
        img: battle_bands,
        description:
          "“Words make you think.. Those who wish to sing always find a song”.",
        topics: [],
        guidelines: [
          "Minimum number of participants in one group :- 2.",
          "Only one entry from each college.",
          "Each Band will be given 15 minutes with 10 minutes of setup.",
          "Performance should not exceed allotted time. ",
          "Every 2 minutes after 15 minutes will have one mark deducted from the band’s score. ",
          "Bands will be judged based on number of metrics such as technique, arrangement, crowd response and uniqueness.",
          "Dress up must be in good taste and no vulgarity is allowed.",
          "Songs should be submitted to the core committee a day prior to the event (details and format will be shared).",
          "if there is technical fault, extra time will be given accordingly.",
        ],
        Rulebook: eventRulebook,
        interCollege: true,
        judging: "technique + arrangement + crowd response + uniqueness,",
        coordinator: "Ravi Nailwal(9837989785)",
        email: "Shaurya ghildiyal (9084995860)",
        phone: "Rudrax (74578 87515)",
      },
    ],
  },

  {
    id: 8,
    name: "MELODY MANIA",
    img: img1,
    Event: [
      {
        id: 801,
        name: "QAWALLI - Only For GBPIET",
        img: qawalli,
        decription: "",
        topics: [],
        guidelines: [
          "The performance should not exceed 5-8 minutes and 1 minute for stage clearance will be given. Exceeding the performance limit will lead to points deduction.",
          "All the instruments required will be provided by the GOONJ team.",
          "Minimum number of participants in one group :- 8. ",
          "Maximum number of participants in one group :- 10.",
        ],
        Rulebook: eventRulebook,
        interCollege: false,
        judging:
          "Audience impact + themed outfit + facial expressions + theme + execution + stage coverage + overall performance.",
        coordinator: "Ravi Nailwal (9837989785)",
        email: "Aditya Nautiyal (8630742193)",
        phone: "",
      },
      {
        id: 802,
        name: "Solo Singing",
        img: singing,
        decription: "Breaking barriers on stage!",
        topics: [],
        guidelines: [
          "Time duration should not exceed 3 minutes and 1 minute for stage clearance will be given. Exceeding will lead to points deduction. ",
          " The teams can choose their songs accordingly.",
          "  Use of KAROKE is allowed."
        ],
        Rulebook: eventRulebook,
        interCollege: true,
        judging:
          "Uniformity  + vocal strength.",
        coordinator: "Ravi Nailwal(9837989785)",
        email: "Shaurya ghildiyal (9084995860)",
        phone: "Rudrax (74578 87515)",
      },
    ],
  },

  {
    id: 9,
    name: "LITERATURE EVENTS",
    img: img2,
    Event: [
      {
        id: 901,
        name: "DEBATE",
        img: debate,
        description:
          "Enter the hallowed halls of democracy at GOONJ for the Youth Parliament—an intellectual arena where youth voices resonate with revolutionary fervor. With arguments poised and chairs awaiting the leaders of tomorrow, are you ready to shape the future through debate and discourse? Join us at the epicenter of discussion—the Youth Parliament!.                                                                                                             This Event will be conducted offline as well as online. Student want to attend the event online via Google Meet or participate here in college",
        topics: [],
        guidelines: [
          "Each team will be given 5+1 minutes to speak.",
          "Negative marking will be done for over-exceeding time.",
          "The questioning will be restricted to 1 minute, and the response should be completed in the next 2 minutes.",
          "A slip of paper bearing only the key points is permitted.",
        ],
        Rulebook:
          "https://drive.google.com/file/d/1pfUn5WNsFIlfw31kL_IHgQmPyxdAckxT/view?usp=sharing",
        interCollege: true,
        judging:
          "Knowledge + content + critical thinking + rebuttal skills + time management.",
        coordinator: "Akshita Rajbhar (8630009246)",
        email: "Harsh Gupta (8126568879)",
        phone: "",
        registerLink: "https://forms.gle/MQuhSM8KqUC8YpsY7",
        subRuleBook:
          "https://drive.google.com/file/d/1pfUn5WNsFIlfw31kL_IHgQmPyxdAckxT/view?usp=sharing",
      },
      {
        id: 902,
        name: "EXTEMPORE",
        img: extempore,
        description:
          "An impromptu amalgamation of thoughts culminating into a self-composed speech, the topic for which one receives then and there. Extempore speech is typically used to gain a deeper knowledge of a participant’s many points, but it also comes with a lot of problems. No prior preparation for which is permissible.                                         This Event will be conducted offline as well as online. Student want to attend the event online via Google Meet or participate here in college",
        topics: [],
        guidelines: [
          "Each participant will draw a random slip to get a topic.",
          "2 minutes timing for evaluation of the topic will be provided to the participant.",
          "The participant must speak on the topic for at least 3 minutes.",
        ],
        Rulebook:
          "https://drive.google.com/file/d/1pfUn5WNsFIlfw31kL_IHgQmPyxdAckxT/view?usp=sharing",
        interCollege: true,
        judging: "Knowledge + content + critical thinking + management.",
        coordinator: "Akshita Rajbhar (8630009246)",
        email: "Harsh Gupta (8126568879)",
        phone: "",
        registerLink: "https://forms.gle/MQuhSM8KqUC8YpsY7",
        subRuleBook:
          "https://drive.google.com/file/d/1pfUn5WNsFIlfw31kL_IHgQmPyxdAckxT/view?usp=sharing",
      },
      {
        id: 903,
        name: "KAVIKRAM",
        img: alfaaz,
        description:
          "Grab a pen and paper, drop into an ocean of words, and  compose a symphony of thoughts and emotions. Whether  you're an experienced poet or just discovering the power of words, Alfaaz-e-Kalam is your chance to shine. Unleash  your inner poet, share your poetry, and participate in an  exciting event. Come join us for a lyrical celebration in  which each phrase represents a step towards poetic  excellence.",
        topics: [],
        guidelines: [
          "Mode of language: Hindi.",
          "All entries should be original, and plagiarism will result in immediate disqualification.",
          "Submissions should be typed and submitted in PDF format.",
          "There is no specific theme for the competition.",
          "A poem or Shayari should not violate any religion, community, caste, or other aspect of social or cultural sensitivity. The use of any abusive or obscene language is prohibited.",
          "Poetry entries should not exceed 30 lines.",
          "Late submissions will not be considered.",
        ],
        Rulebook:
          "https://drive.google.com/file/d/1pfUn5WNsFIlfw31kL_IHgQmPyxdAckxT/view?usp=sharing",
        interCollege: true,
        judging: "Creativity + Originality + Language proficiency",
        coordinator: "Akshita Rajbhar (8630009246)",
        email: "Harsh Gupta (8126568879)",
        phone: "",
        registerLink: "https://forms.gle/MQuhSM8KqUC8YpsY7",
        subRuleBook:
          "https://drive.google.com/file/d/1pfUn5WNsFIlfw31kL_IHgQmPyxdAckxT/view?usp=sharing",
      },
    ],
  },
  {
    id: 10,
    name: "VIDEO & PHOTOGRAPHY EVENTS (only for GBPIET Students)",
    img: img3,
    Event: [
      {
        id: 1005,
        name: "GOONJ MOVIE - Short Film Competition (Only For GBPIET) ",
        img: goonj_movie,
        description:
          "Get ready for the ultimate adventure as we present 'G Movie,' an electrifying filmography event that transforms our campus into a cinematic playground. Whether you're a budding director, actor, or film enthusiast, this is your chance to make movie magic on our very own campus stage.",
        topics: [],
        guidelines: [
          "Contest will be department wise based on the Goonj 2024 theme: VIKSIT BHARAT 2047",
          "Ensure your movie seamlessly integrates the G Movie theme",
          "Your creation should be an original piece of work",
          "Plagiarism content will lead to disqualification",
          "Entries must be submitted before 29 May by 11:59 PM",
        ],
        Rulebook: eventRulebook,
        interCollege: false,
        judging: "Creativity + Adherence to theme + overall visual impact.",
        coordinator: "Suraj Bhatt",
        email: "",
        phone: "+91 95287 37596",
      },
      {
        id: 1001,
        name: "FRAME BY FRAME - Only For GBPIET",
        img: frame,
        description:
          "Are you ready to embark on a creative adventure like no other? Welcome to 'Frame by Frame' where your imagination takes center stage and every frame is a canvas  for your storytelling magic! We invite you to be a part of this thrilling stop-motion animation challenge that promises to  turn your wildest ideas into animated reality.",
        topics: [],
        guidelines: [
          "Team may consist 2-4 members",
          "Duration of animation upto 1 Minutes",
          "Your creation should be an original piece of work and copyright free",
          "Plagiarism content will lead to disqualification",
          "Teams are not bounded by any animation Technique",
          "Entries must be submitted before 29 May by 11:59 PM",
          "Teams can use audio effects and music in their animation",
          "Each member of the Teams must follow DRISHTIKON Instagram page and submit their entries through collaboration",
        ],
        Rulebook: eventRulebook,
        interCollege: false,
        judging: "Creativity + technical skill + overall impact/ appearance.",
        coordinator: "Uday Chauhan",
        email: "",
        phone: "+91 63974 79434",
      },
      {
        id: 1003,
        name: "LIGHT PAINTING - Only For GBPIET",
        img: light_painting,
        description:
          "Illuminate the Night with Your Light! Get ready to embark on  a luminous journey as we present 'Light Painting,'. Unleash  your creativity, capture the magic of light, and let your  imagination paint the night!",
        topics: [],
        guidelines: [
          "Every individual can participate in the contest",
          "Shutter Speed should be less than 150 sec",
          "Your creation should be an original piece of work",
          "Plagiarism content will lead to disqualification",
          "Each member of the Teams must follow DRISHTIKON Instagram page and submit their entries through collaboration",
          "Entries must be submitted before 29 May by 11:59 PM",
        ],
        Rulebook: eventRulebook,
        interCollege: false,
        judging: "Creativity + Adherence to theme + overall visual impact.",
        coordinator: "Prachi",
        email: "",
        phone: "+91 80066 21568",
      },
    ],
  },
  {
    id: 11,
    name: "MISCELLANEOUS ",
    img: img3,
    Event: [
      {
        id: 400,
        name: "Poster Making",
        img: clickfest,
        description:
        "Welcome to 'Poster Pulse' this is your chance to make art that speaks volumes. With just paper, pens, and passion, turn your thoughts into bold visuals that leave a lasting impact",
        topics: [],
        guidelines: [
          "Participants must bring their own materials. ",
          "Participants will have 1 hour to complete their poster",
          "Posters will become the property of the organizers and may be used for exhibition or promotional purposes",
          "The decision of the judges will be final and binding. ",
        ],
        Rulebook: eventRulebook,
        interCollege: true,
        judging: "Creativity + Relevance  to theme + Originality + Neatness +  Message clarity and overall impact.",
        registerLink: "https://forms.gle/bUyYqrqgpBNg8Wd8A",
        coordinator: "Prachi Bhatt",
        email: "",
        phone: "+91 93503 48377",
      },
      {
        id: 1104,
        name: "Reverse Scavenger Hunt",
        img: treasure_hunt,
        description: "Embrace the journey, embrace the treasure!",
        topics: [],
        guidelines: [
          "The first hint will be given to the teams on the starting line and the other clues will be hidden in the campus. The clues will be connected to each other.",
          "A team must consist of only 5 members.",
          "There is a time limit of one hour. The first one reaches the finish line with all the clue wins!",
          "Teams must hide their chosen object in a designated location on campus.",
          "After hiding the object, each team must create a set of 4 clues. These clues should be logical, relevant to the object, and lead to the next clue or location without being overly cryptic.  Clue Format: Clues can include riddles, puzzles, photographs, or descriptive hints. CLUES WILL BE HIDDEN EARLY IN THE MORNING (AN HOUR PRIOR TO THE EVENT BY EACH TEAM). ",
          " No outside help or technology (e.g., mobile phones, GPS devices) is allowed during the search.",
        ],
        Rulebook: eventRulebook,
        judging: "",
        interCollege: true,
        registerLink: "https://forms.gle/XdSAktFQ1KezDPk6A",
        coordinator: "Prajjwal Chauhan",
        email: "prajjwal1120@gmail.com",
        phone: "+91 8755293708",
      },
    ],
  },
  {
    id: 11,
    name: "TECHNICAL EVENTS",
    img: img2,
    Event: [
      {
        id: 2000,
        name: "Ideathon",
        img: ideathon,
        description:
        " It's time to turn it into a wildfire of innovation! Welcome to 'Ideathon Ignite', where imagination meets impact",
        topics: [],
        guidelines: [
          "Ideas must be original. Plagiarized or previously implemented projects will be disqualified.",
          "Each team must consist of 2 to 4 members.",
          "Ideas must align with one or more of the ideathon themes: Skill Training, Waste to Wealth, Agricultural Waste Management, Rural Energy Solutions, Environmental Sustainability",
          "Pitches can be delivered in English or Hindi, but presentation slides must include English.",
          "Each team must submit a slide deck (max 5 slides) summarizing their idea, including:Problem Statement, Proposed Solution, Social Impact, Technical Feasibility, Implementation Plan",
          "Total Time per Team: 7 Minutes",
          "5 minutes for pitching the idea,2 minutes for Q&A with the judges ",
          "A timer will be displayed during the pitch. Exceeding time limits may result in point deductions.",
        ],
        Rulebook: eventRulebook,
        interCollege: true,
        judging:
          " Relevance to Theme(10 marks) + Innovation & Creativity(10 marks) + Technical Feasibility(10 marks) + Social Impact(10 marks) + Clarity & Presentation(10 marks) + Sustainability & Long-Term Viability(10 marks) + Team Collaboration(10 marks).",
        registerLink: "https://forms.gle/bUyYqrqgpBNg8Wd8A",
        coordinator: "Prachi Bhatt",
        email: "",
        phone: "+91 93503 48377",
      },
      {
        id: 2001,
        name: "Project Exhibition ",
        img: projectexhibition,
        description:
        "Welcome to 'Project Panorama', a showcase where creativity meets craftsmanship! Step into a world where prototypes, models, and passion-powered projects come alive",
        topics: [],
        guidelines: [
          "The Project exhibition is open to teams with a maximum of 3 members and minimum with 2 members. ",
          "Teams must choose a team leader and provide a team name during registrations.A participant can only be a member of one team. ",
          "Participation is free of charge.",
          "Each team is required to bring their own extension boards for smooth supply of power to",
          "Participants are responsible for bringing their own hardware components, development boards and laptops. ",
          "Project built must not be an exact replica of an existing product/project/tool. ",
          "Project can be software only , hardware only or a collaboration of both . ",
          "Teams can take help from Open Source Platforms to build the solution but must not copy the solution/code/idea. ",
          "If a team is found using any unfair means strict action will be taken against them",
        ],
        Rulebook: eventRulebook,
        interCollege: true,
        judging:
          "Originality of the Idea(10 marks)  + Technical Complexity(10 marks)  + Practical Implementation(10 marks) + Visual Presentation & Design(10 marks) +  Clarity of Explanation(10 marks) .",
        registerLink: "https://forms.gle/LqeRz1qhfLh6Wfpp6",
        coordinator: "Tanishka Petwal",
        email: "",
        phone: "+91 96396 47397",
      },
      {
        id: 2002,
        name: "Technical Quiz ",
        img: technicalquiz,
        description:
          "Challenge yourself with our Technical Quiz — a curated set of questions designed to assess and sharpen your knowledge in  technical domains relevant to engineering and technology and more",
        topics: [],
        guidelines: [
          "Each team must consist of a minimum of 2 and a maximum of 3 members.",
          "Limit: A maximum of 3 teams per academic branch are allowed to participate. ",
          "Participants must be current students of GBPIET Pauri and must present a valid college ID at the time of the event.",
          "The quiz will comprise 60 multiple-choice questions (MCQs) covering various technical domains relevant to engineering and technology.",
          "Participants will have 60 minutes to complete the quiz. ",
          "Answers must be marked on the provided answer sheets. ",
          "Each correct answer will award 1 point. There will be no negative marking for incorrect answers. ",
          "Teams must report to the quiz venue at least 15 minutes before the scheduled start time. Late arrivals may lead to disqualification. ",
          "The use of mobile phones, calculators, smartwatches, or any other electronic devices is strictly prohibited during the quiz. ",
          "No external assistance is allowed. Teams found cheating or attempting to cheat will be disqualified immediately.",
        ],
        Rulebook: eventRulebook,
        interCollege: true,
        registerLink: "https://forms.gle/LqeRz1qhfLh6Wfpp6",
        coordinator: "Tanishka Petwal",
        email: "",
        phone: "+91 96396 47397",
      },
      {
        id: 2001,
        name: "Bridge-It",
        img: bridgeit,
        description:
        "Welcome to 'Bridge-It', the ultimate showdown of brains, balance, and balsa wood! Get ready to design, construct, and test your very own bridge",
        topics: [],
        guidelines: [
          "Minimum 2 and maximum 5 members per team ",
          "Open to students of GBPIET and invited institutions ",
          "A maximum of 2 teams per branch are allowed to participate ",
          "Each participant may compete in only one team ",
          "Each team is permitted to use only: Ice-cream sticks, Fevicol or equivalent adhesive (super glue or industrial adhesives are strictly prohibited) ,Transparent tape (colored or opaque tape is not allowed) Painting, coloring, or decorating the structure is not allowed and will lead to disqualification. ",
          "Overlapping of sticks is not allowed(Except for joints).",
          "The bridge must be able to span a gap of 45 cm. ",
          "A hook or loop must be present at the center base of the bridge to suspend weights during testing.",
          "Maximum usage: 250 ice-cream sticks, each no longer than 11 cm. ",
          "This is a single-round offline event.",
          "All participating teams will construct their bridges on-site during the event at GBPIET Pauri during Goonj 2K25. ",
          "Required materials will be provided durimg the event .",
          "Structures will be tested live by the event jury for strength and efficiency.",
        ],
        Rulebook: eventRulebook,
        interCollege: true,
        judging:
          "Efficiency + balance + trusses +  Economical and intelligent use of limited resources + How much weight the bridge can sustain before failure ",
        registerLink: "https://forms.gle/LqeRz1qhfLh6Wfpp6",
        coordinator: "Tanishka Petwal",
        email: "",
        phone: "+91 96396 47397",
      },
    ],
  },
];
