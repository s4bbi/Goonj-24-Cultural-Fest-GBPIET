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
import frame from "../assets/Images/EventImages/frame-by-frame.png";
import goonj_movie from "../assets/Images/EventImages/goonj-movie.webp";
import hop_notch_group from "../assets/Images/EventImages/hop-notch-group.webp";
import light_painting from "../assets/Images/EventImages/light-painting.png";
import mr_miss_goonj from "../assets/Images/EventImages/mr-and-miss-goonj.webp";
import singing from "../assets/Images/EventImages/singing.webp";
import qawalli from "../assets/Images/EventImages/qawalli.webp";
import reel_mania from "../assets/Images/EventImages/reel-mania.png";
import standup from "../assets/Images/EventImages/standup-comedy.webp";
import treasure_hunt from "../assets/Images/EventImages/treasure-hunt.webp";
import oppo from "../assets/Images/EventImages/oppo.webp";
import open_mic from "../assets/Images/EventImages/open-mic.webp";
import esport from "../assets/Images/EventImages/e-sports.webp";
import step_up from "../assets/Images/EventImages/step-up.webp";
import ggt from "../assets/Images/EventImages/ggt.webp";
import tug_of_war from "../assets/Images/EventImages/tug-of-war.webp";

const eventRulebook =
  "https://drive.google.com/file/d/1WypdhllDNpWP9isluPgxV5N6uoftvcZv/view?usp=sharing";
export const data = [
  {
    id: 1,
    name: "DRAMAFLICT",
    img: img1,
    Event: [
      {
        id: 101,
        name: "DRAMA/SKIT",
        img: skitImage,
        description:
          "A type of drama conflict in which members of each team will showcase their play based on the theme.",
        guidelines: [
          "The content should be socially relevant and suitable for performance; no vulgarity or obscenity should be included, as it can lead to disqualification.",
          "The use of props is allowed.",
          "The team will arrange props and outfits themselves.",
          "To enhance or highlight the drama, the use of music (instruments, singing) is allowed.",
          "The drama should not exceed more than 5-7 minutes, and 1 minute will be allocated for stage clearance.",
          "If the time limit is exceeded, points will be deducted.",
          "The minimum number of participants in one group is 6, and the maximum is 12.",
          "(If there is a technical fault, extra time will be given accordingly.)",
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
          "No act shall contain any offensive, obscene, disrespectful actions or gestures else will lead to point deduction or even disqualification",
          "Time limit for the act is between 3 to 4 minutes. 1 minute for stage clearance will be given to each team",
          "Lip sync and dialouges are prohibited",
          " Exceeding the limit of participants and time will lead to points deduction",
          "Minimum number of participants in one group :- 5",
          "Maximum number of participants in one group :- 10",
          "(if there is technical fault, extra time will be given accordingly.)",
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
        id: 103,
        name: "NUKKAD NATAK",
        img: nukkad,
        description:
          "Let’s get together to show everyone the teamwork & create awareness in society. Each branch will present a nukkad natak based on the following themes:",
        topics: [
          "आतंकवाद और समाज : आतंकवाद का समाज पर प्रभाव",
          "स्वच्छता अभि यान : स्वच्छ भारत की ओर",
          "पर्या वरण सरं क्षण : प्रकृति का सरं क्षण, हमारा कर्तव्र्त य,हमारा गौरव",
          "भ्रष्टाचार का खेल : भ्रष्टाचार के खि लाफ लड़ाई",
          "महिला सशक्ति करण : नारी शक्ति की मह ्ता",
          "धर्म और समाज : धर्म का असर, समाज पर क्या असर?",
          "कन्या भ्रणू हत्या : बेटी को जीनेदो",
          "समाज मेंजाति वाद और उसके प्रभाव : जाति वाद का अतं",
          " समाज मेंजाति वाद और उसके प्रभाव : जाति वाद का अतं ",
          "युवा शक्ति : युवाओ  का समर्थन , देश की शक्ति ",
          "विद्या दान : शिक्षा, समाज का उज्जवल भविष्य",
          "लड़कों के साथ यौन उत्पीड़न : चप्पी नहीं, आवाज़ उठाओ",
          " The topics of nukkad will be given to each branch through chit system for fair play.",
        ],
        Rulebook: eventRulebook,
        guidelines: [
          "Minimum number of participants in one group :- 6",
          "Maximum number of participants in one group :- 12",
          " Each performance get a time limit of 5-8 minutes",
          "Stage clearance time should not exceed more than 1 minute",
          "Limited props like clapbox , drum , xylophone , dafli and jaltarang are allowed. Teams must bring their own props, and they should be easily manageable on an outdoor stage. Costumes should be arranged by the teams",
          "Scripts will be submitted to the core committee 5 days before the event",
          "Performances should be acoustically driven, and the use of microphones is not allowed",
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
    name: "FUSION FEVER",
    img: img2,
    Event: [
      {
        id: 201,
        name: "SANSKRITI [Theme – Folk (group)]",
        img: sanskriti,
        description: "Transcend the terrestrial!",
        topics: [],
        guidelines: [
          "The branches will choose a state and present their folk dance forms",
          "Use of props is allowed according to the chosen theme",
          "The performance limit should be minimum 6 minutes and maximum 8 minutes",
          "The outfits according to the given theme will be arranged by team itself",
          "Dress up must be in good taste and no vulgarity is allowed",
          "Songs should be submitted to the core committee a day prior to the event (details and format will be shared)",
          "Exceeding the time limit will lead to point deduction",
          "Minimum number of participants in one group :- 5",
          "Maximum number of participants in one group :- 10",
          "(if there is technical fault, extra time will be given accordingly)",
        ],
        Rulebook: eventRulebook,
        interCollege: true,
        judging:
          "representation + expressions + theme execution + coordination + overall performance.",
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
          "The minimum number of participants in one group is 5, and the maximum is 15.",
          "The use of props is allowed, and no obscenity or vulgarity should be present in the performance.",
          "The use of traditional and ethnic forms is prohibited.",
          "The performance limit for group dances is 6-8 minutes, and for duets, it is 4-5 minutes; exceeding this limit will result in point deduction.",
          "The team will arrange outfits themselves, ensuring they are tasteful and devoid of vulgarity.",
          "Songs should be submitted to the core committee a day prior to the event; details and format will be shared.",
          "(If there is a technical fault, extra time will be given accordingly.)",
        ],
        Rulebook: eventRulebook,
        interCollege: true,
        judging:
          "representation + expressions + theme execution + coordination + overall performance.",
        coordinator: "Akshit Anand",
        email: "akshitanand121@gmail.com",
        phone: "8979095390",
      },

      {
        id: 203,
        name: "CLASSICAL",
        img: classical,
        description: "Dance with your heart!",
        topics: [],
        guidelines: [
          "The performance should not exceed more than 3-4 minutes and 1 minute for stage clearance will be given, else points deduction will be done.",
          "The outfits accordingly will be arranged by the team itself.",
          "Dress up must be in good taste and no vulgarity is allowed.",
          "Songs should be submitted to the core committee a day prior to the event (details and format will be shared).",
          "If there is a technical fault, extra time will be given accordingly.",
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
        name: "Singing",
        img: singing,
        decription: "Breaking barriers on stage!",
        topics: [],
        guidelines: [
          "Time duration should not exceed 6 minutes and 1 minute for stage clearance will be given. Exceeding will lead to points deduction.",
          "Instruments are allowed but karaoke is not allowed.",
          "Solo",
        ],
        Rulebook: eventRulebook,
        interCollege: true,
        judging:
          "Audience impact + themed outfit + facial expressions + theme + execution + stage coverage + overall performance.",
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
    name: "OPEN EVENTS",
    img: img3,
    Event: [
      {
        id: 1002,
        name: "CAMPUS CLICKFEST",
        img: clickfest,
        description:
          "Get ready to unleash your inner photographer and capture the vibrant spirit of our campus in the most epic way  possible! Welcome to 'Campus Clickfest', a photography extravaganza that transforms every corner of our campus  into a canvas of creativity.",
        topics: [],
        guidelines: [
          "Photos submitted must be clicked on the day of the Goonj '24 Fest inside the campus",
          "Every individual can participate in the contest",
          "Your creation should be an original piece of work",
          "Plagiarism content will lead to disqualification",
          "Each individual submitting the entries must follow DRISHTIKON Instagram page and submit their entries through collaboration",
          "Entries must be submitted before 29 May by 11:59 PM",
        ],
        Rulebook: eventRulebook,
        interCollege: true,
        judging: "Creativity + Adherence to theme + overall visual impact.",
        entryfees: "Entry Fees: ₹99",
        registerLink: "https://forms.gle/bUyYqrqgpBNg8Wd8A",
        coordinator: "Prachi Bhatt",
        email: "",
        phone: "+91 93503 48377",
      },
      {
        id: 1004,
        name: "REEL-MANIA",
        img: reel_mania,
        description:
          "Welcome to 'Reel-Mania,' the ultimate reel-making extravaganza where your creative vision transforms into  movie magic. Get ready to shoot the spirit and joy of  “GOONJ” with the seasoning of editing skills.",
        topics: [],
        guidelines: [
          "Every individual can participate in the contest",
          "Ensure your reel seamlessly integrates the Reel Mania theme",
          "Your creation should be an original piece of work",
          "Plagiarism content will lead to disqualification",
          "Entries can either be individual or team",
          "Each individual or team member of the Teams must follow DRISHTIKON Instagram page and submit their entries through collaboration",
          "Entries must be submitted before 29 May by 11:59 PM",
        ],
        Rulebook: eventRulebook,
        interCollege: true,
        judging: "Creativity + Adherence to theme + overall visual impact.",
        entryfees: "Entry Fees: ₹99",
        registerLink: "https://forms.gle/LqeRz1qhfLh6Wfpp6",
        coordinator: "Tanishka Petwal",
        email: "",
        phone: "+91 96396 47397",
      },

      {
        id: 1101,
        name: "Open Mic",
        img: open_mic,
        description: "",
        topics: [],
        guidelines: [
          "Performer will be assigned 1 minute of time without any setup time.",
          "Exceeding the time limit will have one mark deducted from the performer’s score for every extra 5 seconds. ",
          "Participants will be competing in 1v1 format.",
          "Group performance is not allowed. ",
          "Performance will be judged based on technique, arrangement, creativity, crowd response and overall musicality.",
        ],
        Rulebook: eventRulebook,
        judging: "",
        interCollege: true,
        registerLink: "https://forms.gle/LqeRz1qhfLh6Wfpp6",
        entryfees: "Entry Fees: ₹99",
        coordinator: "Gaurav bhatt (9625442127)",
        email: "Rudrax (7457887515)",
        phone: "",
      },
      {
        id: 1102,
        name: "ESPORTS",
        img: esport,
        description:
          "Experience the ultimate showdown of skill and strategy at our eSports event, featuring intense tournaments in BGMI, Freefire, and Valorant.",
        topics: [],
        guidelines: [
          "Introduction of eSports should be changed",
          "This event is open for everyone so there is no limit in participants. Anyone can participate!",
          "Do not violate the community guidelines by foul playing.",
          "If anyone caught cheating, leads to immediate disqualification.",
        ],
        type: [
          {
            name: "Valorant",
            formlink: "https://forms.gle/NH8SED5gHxGhKZxW6",
            coordinator: "Pankaj Raturi - 7668503726",
            subRuleBook:
              "https://docs.google.com/document/d/1bA-YHj-_62NEv6Sn3pUE686bUrc231bhGUqWoZ13Ouo/edit?usp=sharing",
          },
          {
            name: "BGMI",
            formlink: "https://forms.gle/JAVPULZTTjht6c827 ",
            coordinator: "Ravi Nailwal - 9837989785 ",
            subRuleBook:
              "https://docs.google.com/document/d/1DlbCslMfYPzguH2uE32swycuLkD9SQ1NC_tyJBC3L7c/edit?usp=sharing",
          },
          {
            name: "Free Fire",
            formlink: "https://forms.gle/JAVPULZTTjht6c827",
            coordinator: "Akshay Tomar - 84495 51027)",
            subRuleBook:
              "https://docs.google.com/document/d/13Imgk1j0ZbygmnR1vvbEIYNldZF70rAr_FFXwDgDHJ8/edit?usp=sharing",
          },
        ],
        Rulebook: "",
        judging: "",
        interCollege: true,
        registerLink: "",
        entryfees: "",
      },
      {
        id: 1103,
        name: "Standup Comedy",
        img: standup,
        description:
          "Prepare for an evening of laughter and entertainment as comedians take the stage to deliver hilarious anecdotes, witty observations, and uproarious jokes at our Standup Comedy event.",
        topics: [],
        guidelines: [
          "This is an open event so anyone can participate.",
          "There is a time limit of 3 minutes.",
          "Exceeding the time limit will have marks deduction.",
        ],
        Rulebook: eventRulebook,
        judging: "",
        interCollege: true,
        registerLink: "https://forms.gle/LqeRz1qhfLh6Wfpp6",
        entryfees: "Entry Fees: ₹99",
        coordinator: "Neeraj Kandpal",
        email: "",
        phone: "+91 9027855477",
      },

      {
        id: 1104,
        name: "Treasure Hunt",
        img: treasure_hunt,
        description: "Embrace the journey, embrace the treasure!",
        topics: [],
        guidelines: [
          "The first hint will be given to the teams on the starting line and the other clues will be hidden in the campus. The clues will be connected to each other.",
          "A team must consist of only 5 members.",
          "There is a time limit of one hour. The first one reaches the finish line with all the clue wins!",
        ],
        Rulebook: eventRulebook,
        judging: "",
        interCollege: true,
        registerLink: "https://forms.gle/XdSAktFQ1KezDPk6A",
        entryfees: "Entry Fees: ₹400",
        coordinator: "Prajjwal Chauhan",
        email: "prajjwal1120@gmail.com",
        phone: "+91 8755293708",
      },
      {
        id: 1105,
        name: "Step Up",
        img: step_up,
        description:
          "Do you have interest in dance? Then this special event called step up is for you. It’s an open stage for all if you just want to have fun and dance then join this event.",
        topics: [],
        guidelines: [
          "There is no limit to the number of participants, and group, solo, duo, or trio entries are allowed",
          "Each participant must prepare choreography for five songs, each lasting one minute.",
          "Participants will submit their five songs to the core team, and one song will be randomly selected for each battle",
          "The event will proceed in knockout fixtures, with one-on-one battles until only two participants remain.",
          "The ultimate winner of the dance battle will be determined by the last battle conducted",
          "Songs will be played randomly by the core committee present at the site, and opponents will be revealed on the spot.",
        ],
        Rulebook: eventRulebook,
        judging: "",
        interCollege: true,
        registerLink: "https://forms.gle/LqeRz1qhfLh6Wfpp6",
        entryfees: "Entry Fees: ₹99",
        coordinator: "Kriti Uniyal (kritiuniyal28@gmail.com)",
        email: " Ashlesh Ranjan (+91 941115530)",
        phone: "",
      },
      {
        id: 1106,
        name: "Tug of War - Only For GBPIET",
        img: tug_of_war,
        description:
          "Unleash your gaming Prowess, Prizes will be revealed on spot.",
        topics: [],
        guidelines: ["Download the RuleBook for more Information"],
        Rulebook: eventRulebook,
        judging: "",
        interCollege: false,
        entryfees: "Entry Fees: ₹99",
        coordinator: "Prajjwal Chauhan",
        email: "prajjwal1120@gmail.com",
        phone: "+91 8755293708",
      },
      {
        id: 1107,
        name: "Goonj Got Talent",
        img: ggt,
        description: "Talent hits a target no one else can hit!",
        topics: [],
        Rulebook: eventRulebook,
        guidelines: [
          "This is an open event, there is no limit in the number of participants. Group, duet, solo, is allowed",
          "Performer will be assigned min. 2, max. 5 minutes to showcase his/her talent. Exceeding the time limit will lead to point deduction",
          "Performer(s) is/are free to showcase their talent, whether it is a magic trick, singing, standup or dancing etc",
          "Use of props is allowed",
          "No obscene act or vulgarity is allowed",
          "If there will be a song to be played in the background, it should be submitted to the core committee a day prior to the event.",
          "(If there is any technical fault, extra time will be given accordingly)",
        ],
        judging: "",
        interCollege: true,
        registerLink: "https://forms.gle/LqeRz1qhfLh6Wfpp6",
        entryfees: "Entry Fees: ₹99",
        coordinator: "Priyanshu Rana (9548973945)",
        email: "Drona Chamoli (9045118831)",
        phone: "Ramneet Kaur (ramneetkaur0028@gmail.com)",
      },
    ],
  },
];
