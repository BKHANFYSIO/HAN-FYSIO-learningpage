interface Translation {
  hero: {
    title: string;
    changeTheWay: string;
    weLearn: string;
    subtitle: string;
    welcomeText: string;
    startButton: string;
  };
  themes: {
    descriptions: {
      [key: string]: string;
    };
  };
  learningStrategies: {
    title: string;
    subtitle: string;
    brainTitle: string;
    brainDescription: string;
    strategies: {
      title: string;
      items: {
        [key: string]: {
          title: string;
          description: string;
        }
      }
    }
  };
  returnToPerformance: {
    title: string;
    subtitle: string;
    intro: string;
    topics: {
      [key: string]: {
        title: string;
        description: string;
        learningGoals: string[];
      };
    };
  };
  fitInTheHood: {
    title: string;
    subtitle: string;
    intro: string;
    topics: {
      [key: string]: {
        title: string;
        description: string;
        learningGoals: string[];
      };
    };
  };
  learn2Move: {
    title: string;
    subtitle: string;
    intro: string;
    topics: {
      [key: string]: {
        title: string;
        description: string;
        learningGoals: string[];
      };
    };
  };
  choose2Move: {
    title: string;
    subtitle: string;
    intro: string;
    topics: {
      [key: string]: {
        title: string;
        description: string;
        learningGoals: string[];
      };
    };
  };
  stayAtWork: {
    title: string;
    subtitle: string;
    intro: string;
    topics: {
      [key: string]: {
        title: string;
        description: string;
        learningGoals: string[];
      };
    };
  };
  explorePain: {
    title: string;
    subtitle: string;
    intro: string;
    topics: {
      [key: string]: {
        title: string;
        description: string;
        learningGoals: string[];
      };
    };
  };
  patientJourney: {
    title: string;
    subtitle: string;
    intro: string;
    topics: {
      [key: string]: {
        title: string;
        description: string;
        learningGoals: string[];
      };
    };
  };
}

type Translations = {
  [key: string]: Translation;
};

export const translations: Translations = {
  nl: {
    hero: {
      title: "LATEN WE",
      changeTheWay: "DE MANIER",
      weLearn: "VAN LEREN VERANDEREN",
      subtitle: "Fysiotherapie Leerplatform",
      welcomeText: "Welkom bij het HAN Fysiotherapie Leerplatform",
      startButton: "Hoe leren werkt",
    },
    themes: {
      descriptions: {
        'Return-2-Performance': 'Leer over revalidatie en terugkeer naar sport',
        'Fit in the Hood': 'Fysiotherapie interventies in de gemeenschap',
        'Learn-2-Move': 'Bewegingsanalyse en interventie',
        'Choose-2-Move': 'Patiëntgerichte besluitvorming',
        'Stay@Work': 'Bedrijfsgezondheidszorg en ergonomie',
        'Explore Pain': 'Pijn begrijpen en behandelen',
        'Patient Journey': 'De reis van de patiënt door het zorgproces',
      },
    },
    learningStrategies: {
      title: "LEERSTRATEGIEËN",
      subtitle: "Effectieve technieken om je studie te verbeteren",
      brainTitle: "Hoe het brein werkt",
      brainDescription: "Het menselijk brein slaat informatie op door verbindingen tussen neuronen te vormen. Herhaling en actieve verwerking van informatie versterken deze verbindingen. Door verschillende leerstrategieën te combineren, kan je informatie beter onthouden en toepassen.",
      strategies: {
        title: "Effectieve Leerstrategieën",
        items: {
          "reading": {
            title: "Lezen",
            description: "Actief lezen door vooraf vragen te stellen en tijdens het lezen regelmatig te pauzeren om informatie te verwerken."
          },
          "highlighting": {
            title: "Arceren",
            description: "Markeer belangrijke informatie, maar beperk je tot maximaal 10% van de tekst om selectief te blijven."
          },
          "summarizing": {
            title: "Samenvatten",
            description: "Maak beknopte samenvattingen in je eigen woorden om begrip te verdiepen en hoofdpunten te identificeren."
          },
          "retrieval": {
            title: "Retrieval Practice",
            description: "Test jezelf regelmatig door informatie actief op te halen uit je geheugen, wat effectiever is dan passief herlezen."
          },
          "spaced": {
            title: "Spaced Repetition",
            description: "Spreid je studie over tijd in plaats van te stampen, met toenemende intervallen tussen herhalingen."
          },
          "interleaving": {
            title: "Interleaving",
            description: "Wissel tussen verschillende onderwerpen of vaardigheden tijdens het studeren om dieper begrip te ontwikkelen."
          },
          "mindmapping": {
            title: "Mind Mapping",
            description: "Visualiseer informatie en verbindingen met diagrammen om complexe concepten te begrijpen."
          },
          "teaching": {
            title: "Onderwijzen",
            description: "Leg concepten uit aan anderen om hiaten in je kennis te identificeren en begrip te verdiepen."
          }
        }
      }
    },
    returnToPerformance: {
      title: "RETURN-2-PERFORMANCE",
      subtitle: "Revalidatie en terugkeer naar sport",
      intro: "Leer hoe je sporters effectief begeleidt in hun revalidatieproces en terugkeer naar sport. Met de juiste kennis en technieken kun je het herstel optimaliseren en blessures voorkomen.",
      topics: {
        "bindweefselherstel": {
          title: "Bindweefselherstel",
          description: "Het begrijpen van de biologische processen van bindweefselherstel is essentieel voor het ontwikkelen van effectieve revalidatieprogramma's. Leer over de verschillende fasen van herstel en hoe je interventies hierop kunt afstemmen.",
          learningGoals: [
            "De fasen van bindweefselherstel kunnen beschrijven",
            "Biologische markers herkennen voor elke fase van herstel",
            "Belasting kunnen aanpassen aan de herstelfase",
            "Evidence-based interventies kunnen toepassen voor optimaal herstel"
          ]
        },
        "trainingsleer": {
          title: "Trainingsleer",
          description: "Trainingsleer vormt de basis voor het opbouwen van belasting tijdens revalidatie. Leer hoe je trainingsschema's kunt ontwikkelen die progressief opbouwen en aansluiten bij de individuele behoefte van de patiënt.",
          learningGoals: [
            "Begrijpen van trainingsprincipes zoals supercompensatie",
            "Belasting en belastbaarheid kunnen meten en monitoren",
            "Progressieve trainingsschema's kunnen opstellen",
            "Sport-specifieke trainingscomponenten kunnen integreren in revalidatie"
          ]
        }
      }
    },
    fitInTheHood: {
      title: "FIT IN THE HOOD",
      subtitle: "Fysiotherapie interventies in de gemeenschap",
      intro: "Ontdek hoe je fysiotherapie kunt inzetten in wijken en gemeenschappen. Leer interventies ontwikkelen die aansluiten bij de behoeften van diverse bevolkingsgroepen en bijdragen aan een gezondere leefomgeving.",
      topics: {
        "wijkgericht": {
          title: "Wijkgericht werken",
          description: "Leer hoe je als fysiotherapeut impact kunt maken op wijkniveau. Ontdek methoden om gezondheidsbehoeften in kaart te brengen en interventies te ontwikkelen die aansluiten bij de specifieke context van een wijk.",
          learningGoals: [
            "Gezondheidsbehoeften van een wijk in kaart kunnen brengen",
            "Samenwerkingsverbanden kunnen opzetten met lokale organisaties",
            "Wijkgerichte preventieve interventies kunnen ontwikkelen",
            "De effectiviteit van wijkgerichte interventies kunnen evalueren"
          ]
        },
        "preventie": {
          title: "Preventie & gezondheidsbevordering",
          description: "Preventie en gezondheidsbevordering vormen een belangrijk onderdeel van wijkgerichte fysiotherapie. Leer hoe je gemeenschappen kunt ondersteunen bij het bevorderen van een gezonde leefstijl.",
          learningGoals: [
            "Preventieve programma's kunnen ontwikkelen voor verschillende doelgroepen",
            "Gezondheidsvoorlichting kunnen geven op gemeenschapsniveau",
            "Beweegprogramma's kunnen opzetten die aansluiten bij de lokale context",
            "Gedragsveranderingstechnieken kunnen toepassen bij groepsinterventies"
          ]
        }
      }
    },
    learn2Move: {
      title: "LEARN-2-MOVE",
      subtitle: "Bewegingsanalyse en interventie",
      intro: "Verdiep je in de analyse van menselijke beweging en leer hoe je effectieve interventies kunt ontwikkelen om de bewegingskwaliteit te verbeteren. Met gedegen kennis van bewegingsanalyse kun je gerichte behandelingen bieden aan patiënten met bewegingsproblemen.",
      topics: {
        "bewegingsanalyse": {
          title: "Bewegingsanalyse",
          description: "Leer verschillende methoden voor het analyseren van menselijke beweging, van observationele analyse tot geavanceerde meettechnieken. Ontdek hoe je bewegingspatronen kunt beoordelen en afwijkingen kunt identificeren.",
          learningGoals: [
            "Observationele bewegingsanalyse kunnen uitvoeren",
            "Meetinstrumenten voor bewegingsanalyse kunnen toepassen",
            "Afwijkende bewegingspatronen kunnen herkennen en analyseren",
            "Resultaten van bewegingsanalyse kunnen interpreteren en vertalen naar behandeldoelen"
          ]
        },
        "interventies": {
          title: "Bewegingsinterventies",
          description: "Op basis van bewegingsanalyse kun je gerichte interventies ontwikkelen. Leer verschillende behandelmethoden om de bewegingskwaliteit te verbeteren en functionaliteit te herstellen.",
          learningGoals: [
            "Interventies kunnen selecteren op basis van bewegingsanalyse",
            "Oefentherapie kunnen aanpassen aan specifieke bewegingsproblemen",
            "Motorisch leren kunnen toepassen in de behandeling",
            "Behandelresultaten kunnen evalueren met behulp van bewegingsanalyse"
          ]
        }
      }
    },
    choose2Move: {
      title: "CHOOSE-2-MOVE",
      subtitle: "Patiëntgerichte besluitvorming",
      intro: "Ontdek hoe je patiënten effectief kunt betrekken bij beslissingen over hun behandeling. Leer hoe je shared decision making kunt toepassen in de fysiotherapeutische praktijk om betere behandelresultaten en hogere patiënttevredenheid te behalen.",
      topics: {
        "sharedDecision": {
          title: "Shared Decision Making",
          description: "Shared decision making is een benadering waarbij zorgverlener en patiënt samen beslissingen nemen over de behandeling. Leer hoe je dit principe kunt toepassen in de fysiotherapie om patiënten meer regie te geven over hun eigen herstelproces.",
          learningGoals: [
            "De principes van shared decision making kunnen uitleggen",
            "Technieken voor effectieve communicatie kunnen toepassen",
            "Patiëntvoorkeuren kunnen integreren in het klinisch redeneerproces",
            "Gezamenlijke besluitvorming kunnen faciliteren in verschillende klinische contexten"
          ]
        },
        "patientEmpowerment": {
          title: "Patiënt Empowerment",
          description: "Patiënt empowerment gaat over het versterken van de zelfredzaamheid en autonomie van patiënten. Leer hoe je patiënten kunt ondersteunen om actieve deelnemers te worden in hun eigen zorgproces.",
          learningGoals: [
            "Strategieën voor patiënt empowerment kunnen toepassen",
            "Zelfmanagement kunnen bevorderen bij verschillende patiëntgroepen",
            "Gezondheidsvaardigheden van patiënten kunnen versterken",
            "De impact van empowerment op behandelresultaten kunnen evalueren"
          ]
        }
      }
    },
    stayAtWork: {
      title: "STAY@WORK",
      subtitle: "Bedrijfsgezondheidszorg en ergonomie",
      intro: "Leer hoe je als fysiotherapeut kunt bijdragen aan gezonde werkomgevingen en duurzame inzetbaarheid van werknemers. Verdiep je in ergonomie, werkgerelateerde aandoeningen en interventies gericht op preventie en re-integratie.",
      topics: {
        "ergonomie": {
          title: "Ergonomie",
          description: "Ergonomie richt zich op het optimaliseren van de werkomgeving om gezondheid, veiligheid en productiviteit te bevorderen. Leer hoe je werkplekanalyses kunt uitvoeren en ergonomische interventies kunt implementeren.",
          learningGoals: [
            "Werkplekanalyses kunnen uitvoeren",
            "Ergonomische risicofactoren kunnen identificeren",
            "Advies kunnen geven over werkplekaanpassingen",
            "Effectiviteit van ergonomische interventies kunnen evalueren"
          ]
        },
        "duurzameInzetbaarheid": {
          title: "Duurzame Inzetbaarheid",
          description: "Duurzame inzetbaarheid betreft het vermogen van werknemers om gezond en productief te blijven gedurende hun loopbaan. Leer hoe je interventies kunt ontwikkelen die bijdragen aan het behoud van werkvermogen.",
          learningGoals: [
            "Factoren die duurzame inzetbaarheid beïnvloeden kunnen analyseren",
            "Preventieve interventies kunnen ontwikkelen voor verschillende beroepsgroepen",
            "Re-integratietrajecten kunnen begeleiden",
            "Samenwerken met werkgevers en andere stakeholders in bedrijfsgezondheidszorg"
          ]
        }
      }
    },
    explorePain: {
      title: "EXPLORE PAIN",
      subtitle: "Pijn begrijpen en behandelen",
      intro: "Verdiep je in de complexe wereld van pijn en pijnbehandeling. Leer over moderne pijnwetenschap, biopsychosociale modellen en evidence-based interventies voor patiënten met acute en chronische pijn.",
      topics: {
        "pijnwetenschap": {
          title: "Pijnwetenschap",
          description: "De wetenschap van pijn heeft grote ontwikkelingen doorgemaakt in de afgelopen decennia. Leer over de nieuwste inzichten in pijnmechanismen en de neurobiologische basis van verschillende pijntypen.",
          learningGoals: [
            "De neurobiologische mechanismen van pijn kunnen verklaren",
            "Verschillende typen pijn kunnen herkennen en classificeren",
            "Inzicht hebben in de factoren die pijnervaring beïnvloeden",
            "Moderne pijnmodellen kunnen toepassen in de klinische praktijk"
          ]
        },
        "pijnbehandeling": {
          title: "Pijnbehandeling",
          description: "Effectieve pijnbehandeling vereist een multimodale aanpak gericht op het individu. Leer over evidence-based interventies en hoe je deze kunt toepassen binnen een biopsychosociaal kader.",
          learningGoals: [
            "Een gepersonaliseerd pijnbehandelplan kunnen ontwikkelen",
            "Gedragsmatige interventies voor pijnmanagement kunnen toepassen",
            "Educatie over pijn kunnen geven aan patiënten",
            "De effectiviteit van pijninterventies kunnen evalueren"
          ]
        }
      }
    },
    patientJourney: {
      title: "PATIENT JOURNEY",
      subtitle: "De reis van de patiënt door het zorgproces",
      intro: "Volg de reis van de patiënt door het zorglandschap en ontdek hoe je als fysiotherapeut kunt bijdragen aan een positieve patiëntervaring. Leer over patiëntgerichte zorg, transities in de zorg en interdisciplinaire samenwerking.",
      topics: {
        "patientExperience": {
          title: "Patiëntervaring",
          description: "De ervaring van patiënten heeft grote invloed op behandeluitkomsten en therapietrouw. Leer hoe je de patiëntervaring kunt optimaliseren en een therapeutische relatie kunt opbouwen gebaseerd op vertrouwen en samenwerking.",
          learningGoals: [
            "Factoren die patiëntervaring beïnvloeden kunnen identificeren",
            "Communicatietechnieken kunnen toepassen die patiëntgerichte zorg bevorderen",
            "Patiëntfeedback kunnen verzamelen en gebruiken voor kwaliteitsverbetering",
            "Een therapeutische omgeving kunnen creëren die herstel bevordert"
          ]
        },
        "zorgcontinuiteit": {
          title: "Zorgcontinuïteit",
          description: "Continuïteit van zorg is essentieel voor effectieve behandeltrajecten. Leer hoe je kunt samenwerken met andere zorgprofessionals en naadloze transities kunt faciliteren tussen verschillende zorgfasen.",
          learningGoals: [
            "Kritische momenten in het zorgpad kunnen identificeren",
            "Effectief kunnen communiceren met andere zorgverleners",
            "Zorgplannen kunnen ontwikkelen die continuïteit waarborgen",
            "Interdisciplinaire samenwerking kunnen bevorderen rondom complexe zorgvragen"
          ]
        }
      }
    }
  },
  en: {
    hero: {
      title: "LET'S CHANGE",
      changeTheWay: "THE WAY",
      weLearn: "WE LEARN",
      subtitle: "Physiotherapy Learning Platform",
      welcomeText: "Welcome to the HAN Physiotherapy Learning Platform",
      startButton: "Start Learning",
    },
    themes: {
      descriptions: {
        'Return-2-Performance': 'Learn about rehabilitation and return to sports',
        'Fit in the Hood': 'Community-based physiotherapy interventions',
        'Learn-2-Move': 'Movement analysis and intervention',
        'Choose-2-Move': 'Patient-centered decision making',
        'Stay@Work': 'Occupational health and ergonomics',
        'Explore Pain': 'Understanding and treating pain',
        'Patient Journey': 'The patient\'s journey through the healthcare process',
      },
    },
    learningStrategies: {
      title: "LEARNING STRATEGIES",
      subtitle: "Effective techniques to enhance your studies",
      brainTitle: "How the Brain Works",
      brainDescription: "The human brain stores information by forming connections between neurons. Repetition and active processing of information strengthen these connections. By combining different learning strategies, you can better remember and apply information.",
      strategies: {
        title: "Effective Learning Strategies",
        items: {
          "reading": {
            title: "Reading",
            description: "Active reading by asking questions beforehand and regularly pausing while reading to process information."
          },
          "highlighting": {
            title: "Highlighting",
            description: "Mark important information, but limit yourself to a maximum of 10% of the text to remain selective."
          },
          "summarizing": {
            title: "Summarizing",
            description: "Create concise summaries in your own words to deepen understanding and identify main points."
          },
          "retrieval": {
            title: "Retrieval Practice",
            description: "Test yourself regularly by actively retrieving information from memory, which is more effective than passive rereading."
          },
          "spaced": {
            title: "Spaced Repetition",
            description: "Spread your study over time instead of cramming, with increasing intervals between repetitions."
          },
          "interleaving": {
            title: "Interleaving",
            description: "Switch between different topics or skills during study to develop deeper understanding."
          },
          "mindmapping": {
            title: "Mind Mapping",
            description: "Visualize information and connections with diagrams to understand complex concepts."
          },
          "teaching": {
            title: "Teaching",
            description: "Explain concepts to others to identify gaps in your knowledge and deepen understanding."
          }
        }
      }
    },
    returnToPerformance: {
      title: "RETURN-2-PERFORMANCE",
      subtitle: "Rehabilitation and return to sports",
      intro: "Learn how to effectively guide athletes through their rehabilitation process and return to sports. With the right knowledge and techniques, you can optimize recovery and prevent injuries.",
      topics: {
        "bindweefselherstel": {
          title: "Connective Tissue Healing",
          description: "Understanding the biological processes of connective tissue healing is essential for developing effective rehabilitation programs. Learn about the different phases of healing and how to tailor interventions accordingly.",
          learningGoals: [
            "Describe the phases of connective tissue healing",
            "Recognize biological markers for each phase of healing",
            "Adjust load according to the healing phase",
            "Apply evidence-based interventions for optimal healing"
          ]
        },
        "trainingsleer": {
          title: "Training Science",
          description: "Training science forms the basis for building load during rehabilitation. Learn how to develop training schedules that progressively build up and meet the individual needs of the patient.",
          learningGoals: [
            "Understand training principles such as supercompensation",
            "Measure and monitor load and load capacity",
            "Create progressive training schedules",
            "Integrate sport-specific training components into rehabilitation"
          ]
        }
      }
    },
    fitInTheHood: {
      title: "FIT IN THE HOOD",
      subtitle: "Community-based physiotherapy interventions",
      intro: "Discover how to implement physiotherapy in neighborhoods and communities. Learn to develop interventions that meet the needs of diverse populations and contribute to a healthier living environment.",
      topics: {
        "wijkgericht": {
          title: "Community-Focused Work",
          description: "Learn how to make an impact as a physiotherapist at the community level. Discover methods to map health needs and develop interventions that fit the specific context of a neighborhood.",
          learningGoals: [
            "Map health needs of a community",
            "Establish collaborations with local organizations",
            "Develop community-oriented preventive interventions",
            "Evaluate the effectiveness of community-based interventions"
          ]
        },
        "preventie": {
          title: "Prevention & Health Promotion",
          description: "Prevention and health promotion are important aspects of community-based physiotherapy. Learn how to support communities in promoting a healthy lifestyle.",
          learningGoals: [
            "Develop preventive programs for different target groups",
            "Provide health education at the community level",
            "Set up exercise programs that fit the local context",
            "Apply behavior change techniques in group interventions"
          ]
        }
      }
    },
    learn2Move: {
      title: "LEARN-2-MOVE",
      subtitle: "Movement analysis and intervention",
      intro: "Delve into the analysis of human movement and learn how to develop effective interventions to improve movement quality. With solid knowledge of movement analysis, you can provide targeted treatments for patients with movement problems.",
      topics: {
        "bewegingsanalyse": {
          title: "Movement Analysis",
          description: "Learn various methods for analyzing human movement, from observational analysis to advanced measurement techniques. Discover how to assess movement patterns and identify deviations.",
          learningGoals: [
            "Perform observational movement analysis",
            "Apply measurement tools for movement analysis",
            "Recognize and analyze abnormal movement patterns",
            "Interpret results of movement analysis and translate them into treatment goals"
          ]
        },
        "interventies": {
          title: "Movement Interventions",
          description: "Based on movement analysis, you can develop targeted interventions. Learn different treatment methods to improve movement quality and restore functionality.",
          learningGoals: [
            "Select interventions based on movement analysis",
            "Adapt exercise therapy to specific movement problems",
            "Apply motor learning in treatment",
            "Evaluate treatment results using movement analysis"
          ]
        }
      }
    },
    choose2Move: {
      title: "CHOOSE-2-MOVE",
      subtitle: "Patient-centered decision making",
      intro: "Discover how to effectively involve patients in decisions about their treatment. Learn how to apply shared decision making in physiotherapy practice to achieve better treatment outcomes and higher patient satisfaction.",
      topics: {
        "sharedDecision": {
          title: "Shared Decision Making",
          description: "Shared decision making is an approach where healthcare provider and patient make decisions about treatment together. Learn how to apply this principle in physiotherapy to give patients more control over their own recovery process.",
          learningGoals: [
            "Explain the principles of shared decision making",
            "Apply techniques for effective communication",
            "Integrate patient preferences into the clinical reasoning process",
            "Facilitate joint decision making in different clinical contexts"
          ]
        },
        "patientEmpowerment": {
          title: "Patient Empowerment",
          description: "Patient empowerment is about strengthening patients' self-reliance and autonomy. Learn how to support patients to become active participants in their own care process.",
          learningGoals: [
            "Apply strategies for patient empowerment",
            "Promote self-management in different patient groups",
            "Strengthen patients' health literacy",
            "Evaluate the impact of empowerment on treatment outcomes"
          ]
        }
      }
    },
    stayAtWork: {
      title: "STAY@WORK",
      subtitle: "Occupational health and ergonomics",
      intro: "Learn how physiotherapists can contribute to healthy work environments and sustainable employability of workers. Deepen your knowledge of ergonomics, work-related disorders, and interventions focused on prevention and reintegration.",
      topics: {
        "ergonomie": {
          title: "Ergonomics",
          description: "Ergonomics focuses on optimizing the work environment to promote health, safety, and productivity. Learn how to conduct workplace analyses and implement ergonomic interventions.",
          learningGoals: [
            "Conduct workplace analyses",
            "Identify ergonomic risk factors",
            "Provide advice on workplace adjustments",
            "Evaluate effectiveness of ergonomic interventions"
          ]
        },
        "duurzameInzetbaarheid": {
          title: "Sustainable Employability",
          description: "Sustainable employability concerns the ability of workers to remain healthy and productive throughout their career. Learn how to develop interventions that contribute to maintaining work ability.",
          learningGoals: [
            "Analyze factors that influence sustainable employability",
            "Develop preventive interventions for different occupational groups",
            "Guide reintegration processes",
            "Collaborate with employers and other stakeholders in occupational healthcare"
          ]
        }
      }
    },
    explorePain: {
      title: "EXPLORE PAIN",
      subtitle: "Understanding and treating pain",
      intro: "Delve into the complex world of pain and pain management. Learn about modern pain science, biopsychosocial models, and evidence-based interventions for patients with acute and chronic pain.",
      topics: {
        "pijnwetenschap": {
          title: "Pain Science",
          description: "The science of pain has undergone major developments in recent decades. Learn about the latest insights into pain mechanisms and the neurobiological basis of different pain types.",
          learningGoals: [
            "Explain the neurobiological mechanisms of pain",
            "Recognize and classify different types of pain",
            "Understand factors that influence pain experience",
            "Apply modern pain models in clinical practice"
          ]
        },
        "pijnbehandeling": {
          title: "Pain Management",
          description: "Effective pain management requires a multimodal approach focused on the individual. Learn about evidence-based interventions and how to apply them within a biopsychosocial framework.",
          learningGoals: [
            "Develop a personalized pain management plan",
            "Apply behavioral interventions for pain management",
            "Provide education about pain to patients",
            "Evaluate the effectiveness of pain interventions"
          ]
        }
      }
    },
    patientJourney: {
      title: "PATIENT JOURNEY",
      subtitle: "The patient's journey through the healthcare process",
      intro: "Follow the patient's journey through the healthcare landscape and discover how physiotherapists can contribute to a positive patient experience. Learn about patient-centered care, transitions in care, and interdisciplinary collaboration.",
      topics: {
        "patientExperience": {
          title: "Patient Experience",
          description: "The experience of patients has a major influence on treatment outcomes and therapy adherence. Learn how to optimize the patient experience and build a therapeutic relationship based on trust and collaboration.",
          learningGoals: [
            "Identify factors that influence patient experience",
            "Apply communication techniques that promote patient-centered care",
            "Collect and use patient feedback for quality improvement",
            "Create a therapeutic environment that promotes recovery"
          ]
        },
        "zorgcontinuiteit": {
          title: "Continuity of Care",
          description: "Continuity of care is essential for effective treatment trajectories. Learn how to collaborate with other healthcare professionals and facilitate seamless transitions between different phases of care.",
          learningGoals: [
            "Identify critical moments in the care pathway",
            "Communicate effectively with other healthcare providers",
            "Develop care plans that ensure continuity",
            "Promote interdisciplinary collaboration around complex care needs"
          ]
        }
      }
    }
  },
  de: {
    hero: {
      title: "LASST UNS",
      changeTheWay: "DIE ART",
      weLearn: "DES LERNENS ÄNDERN",
      subtitle: "Physiotherapie-Lernplattform",
      welcomeText: "Willkommen auf der HAN Physiotherapie-Lernplattform",
      startButton: "Jetzt Lernen",
    },
    themes: {
      descriptions: {
        'Return-2-Performance': 'Lernen Sie über Rehabilitation und Rückkehr zum Sport',
        'Fit in the Hood': 'Gemeindebasierte Physiotherapie-Interventionen',
        'Learn-2-Move': 'Bewegungsanalyse und Intervention',
        'Choose-2-Move': 'Patientenzentrierte Entscheidungsfindung',
        'Stay@Work': 'Betriebliche Gesundheit und Ergonomie',
        'Explore Pain': 'Schmerz verstehen und behandeln',
        'Patient Journey': 'Die Reise des Patienten durch das Gesundheitswesen',
      },
    },
    learningStrategies: {
      title: "LERNSTRATEGIEN",
      subtitle: "Effektive Techniken zur Verbesserung deines Studiums",
      brainTitle: "Wie das Gehirn funktioniert",
      brainDescription: "Das menschliche Gehirn speichert Informationen, indem es Verbindungen zwischen Neuronen bildet. Wiederholung und aktive Verarbeitung von Informationen stärken diese Verbindungen. Durch die Kombination verschiedener Lernstrategien kannst du Informationen besser behalten und anwenden.",
      strategies: {
        title: "Effektive Lernstrategien",
        items: {
          "reading": {
            title: "Lesen",
            description: "Aktives Lesen durch das Stellen von Fragen im Vorfeld und regelmäßige Pausen beim Lesen zur Informationsverarbeitung."
          },
          "highlighting": {
            title: "Markieren",
            description: "Wichtige Informationen markieren, aber auf maximal 10% des Textes beschränken, um selektiv zu bleiben."
          },
          "summarizing": {
            title: "Zusammenfassen",
            description: "Erstelle prägnante Zusammenfassungen in eigenen Worten, um das Verständnis zu vertiefen und Hauptpunkte zu identifizieren."
          },
          "retrieval": {
            title: "Retrieval Practice",
            description: "Teste dich regelmäßig, indem du Informationen aktiv aus dem Gedächtnis abrufst, was effektiver ist als passives Wiederlesen."
          },
          "spaced": {
            title: "Spaced Repetition",
            description: "Verteile dein Lernen über die Zeit, anstatt zu pauken, mit zunehmenden Intervallen zwischen den Wiederholungen."
          },
          "interleaving": {
            title: "Interleaving",
            description: "Wechsle zwischen verschiedenen Themen oder Fähigkeiten während des Lernens, um ein tieferes Verständnis zu entwickeln."
          },
          "mindmapping": {
            title: "Mind Mapping",
            description: "Visualisiere Informationen und Zusammenhänge mit Diagrammen, um komplexe Konzepte zu verstehen."
          },
          "teaching": {
            title: "Lehren",
            description: "Erkläre Konzepte anderen, um Lücken in deinem Wissen zu identifizieren und dein Verständnis zu vertiefen."
          }
        }
      }
    },
    returnToPerformance: {
      title: "RETURN-2-PERFORMANCE",
      subtitle: "Rehabilitation und Rückkehr zum Sport",
      intro: "Lernen Sie, wie Sie Sportler effektiv durch ihren Rehabilitationsprozess und die Rückkehr zum Sport begleiten. Mit dem richtigen Wissen und den richtigen Techniken können Sie die Genesung optimieren und Verletzungen vorbeugen.",
      topics: {
        "bindweefselherstel": {
          title: "Bindegewebeheilung",
          description: "Das Verständnis der biologischen Prozesse der Bindegewebeheilung ist für die Entwicklung effektiver Rehabilitationsprogramme unerlässlich. Erfahren Sie mehr über die verschiedenen Phasen der Heilung und wie Sie Interventionen entsprechend anpassen können.",
          learningGoals: [
            "Die Phasen der Bindegewebeheilung beschreiben können",
            "Biologische Marker für jede Heilungsphase erkennen",
            "Belastung an die Heilungsphase anpassen können",
            "Evidenzbasierte Interventionen für optimale Heilung anwenden können"
          ]
        },
        "trainingsleer": {
          title: "Trainingswissenschaft",
          description: "Die Trainingswissenschaft bildet die Grundlage für den Belastungsaufbau während der Rehabilitation. Lernen Sie, wie Sie Trainingspläne entwickeln, die progressiv aufbauen und den individuellen Bedürfnissen des Patienten entsprechen.",
          learningGoals: [
            "Trainingsprinzipien wie Superkompensation verstehen",
            "Belastung und Belastbarkeit messen und überwachen können",
            "Progressive Trainingspläne erstellen können",
            "Sportspezifische Trainingskomponenten in die Rehabilitation integrieren können"
          ]
        }
      }
    },
    fitInTheHood: {
      title: "FIT IN THE HOOD",
      subtitle: "Gemeindebasierte Physiotherapie-Interventionen",
      intro: "Entdecken Sie, wie Sie Physiotherapie in Stadtvierteln und Gemeinden einsetzen können. Lernen Sie, Interventionen zu entwickeln, die den Bedürfnissen verschiedener Bevölkerungsgruppen entsprechen und zu einer gesünderen Lebensumgebung beitragen.",
      topics: {
        "wijkgericht": {
          title: "Gemeindeorientiertes Arbeiten",
          description: "Erfahren Sie, wie Sie als Physiotherapeut auf Gemeindeebene Einfluss nehmen können. Entdecken Sie Methoden zur Erfassung von Gesundheitsbedürfnissen und zur Entwicklung von Interventionen, die dem spezifischen Kontext einer Gemeinde entsprechen.",
          learningGoals: [
            "Gesundheitsbedürfnisse einer Gemeinde erfassen können",
            "Kooperationen mit lokalen Organisationen aufbauen können",
            "Gemeindeorientierte Präventionsmaßnahmen entwickeln können",
            "Die Wirksamkeit gemeindebasierter Interventionen evaluieren können"
          ]
        },
        "preventie": {
          title: "Prävention & Gesundheitsförderung",
          description: "Prävention und Gesundheitsförderung sind wichtige Aspekte der gemeindebasierten Physiotherapie. Lernen Sie, wie Sie Gemeinden bei der Förderung eines gesunden Lebensstils unterstützen können.",
          learningGoals: [
            "Präventionsprogramme für verschiedene Zielgruppen entwickeln können",
            "Gesundheitsaufklärung auf Gemeindeebene anbieten können",
            "Bewegungsprogramme einrichten, die dem lokalen Kontext entsprechen",
            "Techniken zur Verhaltensänderung bei Gruppeninterventionen anwenden können"
          ]
        }
      }
    },
    learn2Move: {
      title: "LEARN-2-MOVE",
      subtitle: "Bewegungsanalyse und Intervention",
      intro: "Vertiefen Sie sich in die Analyse menschlicher Bewegung und lernen Sie, wie Sie effektive Interventionen zur Verbesserung der Bewegungsqualität entwickeln können. Mit fundiertem Wissen über Bewegungsanalyse können Sie gezielte Behandlungen für Patienten mit Bewegungsproblemen anbieten.",
      topics: {
        "bewegingsanalyse": {
          title: "Bewegungsanalyse",
          description: "Lernen Sie verschiedene Methoden zur Analyse menschlicher Bewegung, von der Beobachtungsanalyse bis hin zu fortschrittlichen Messtechniken. Entdecken Sie, wie Sie Bewegungsmuster bewerten und Abweichungen identifizieren können.",
          learningGoals: [
            "Beobachtende Bewegungsanalyse durchführen können",
            "Messinstrumente zur Bewegungsanalyse anwenden können",
            "Abweichende Bewegungsmuster erkennen und analysieren können",
            "Ergebnisse der Bewegungsanalyse interpretieren und in Behandlungsziele umsetzen können"
          ]
        },
        "interventies": {
          title: "Bewegungsinterventionen",
          description: "Auf Basis der Bewegungsanalyse können Sie gezielte Interventionen entwickeln. Lernen Sie verschiedene Behandlungsmethoden zur Verbesserung der Bewegungsqualität und Wiederherstellung der Funktionalität.",
          learningGoals: [
            "Interventionen auf Basis der Bewegungsanalyse auswählen können",
            "Übungstherapie an spezifische Bewegungsprobleme anpassen können",
            "Motorisches Lernen in der Behandlung anwenden können",
            "Behandlungsergebnisse mithilfe der Bewegungsanalyse evaluieren können"
          ]
        }
      }
    },
    choose2Move: {
      title: "CHOOSE-2-MOVE",
      subtitle: "Patientenzentrierte Entscheidungsfindung",
      intro: "Entdecken Sie, wie Sie Patienten effektiv in Entscheidungen über ihre Behandlung einbeziehen können. Lernen Sie, wie Sie gemeinsame Entscheidungsfindung in der physiotherapeutischen Praxis anwenden können, um bessere Behandlungsergebnisse und höhere Patientenzufriedenheit zu erzielen.",
      topics: {
        "sharedDecision": {
          title: "Gemeinsame Entscheidungsfindung",
          description: "Gemeinsame Entscheidungsfindung ist ein Ansatz, bei dem Gesundheitsdienstleister und Patient gemeinsam Entscheidungen über die Behandlung treffen. Lernen Sie, wie Sie dieses Prinzip in der Physiotherapie anwenden können, um Patienten mehr Kontrolle über ihren eigenen Genesungsprozess zu geben.",
          learningGoals: [
            "Die Prinzipien der gemeinsamen Entscheidungsfindung erklären können",
            "Techniken für effektive Kommunikation anwenden können",
            "Patientenpräferenzen in den klinischen Denkprozess integrieren können",
            "Gemeinsame Entscheidungsfindung in verschiedenen klinischen Kontexten ermöglichen können"
          ]
        },
        "patientEmpowerment": {
          title: "Patienten-Empowerment",
          description: "Patienten-Empowerment zielt darauf ab, die Selbständigkeit und Autonomie der Patienten zu stärken. Lernen Sie, wie Sie Patienten unterstützen können, aktive Teilnehmer in ihrem eigenen Pflegeprozess zu werden.",
          learningGoals: [
            "Strategien für Patienten-Empowerment anwenden können",
            "Selbstmanagement bei verschiedenen Patientengruppen fördern können",
            "Die Gesundheitskompetenz der Patienten stärken können",
            "Die Auswirkungen von Empowerment auf Behandlungsergebnisse bewerten können"
          ]
        }
      }
    },
    stayAtWork: {
      title: "STAY@WORK",
      subtitle: "Betriebliche Gesundheit und Ergonomie",
      intro: "Erfahren Sie, wie Physiotherapeuten zu gesunden Arbeitsumgebungen und nachhaltiger Beschäftigungsfähigkeit von Arbeitnehmern beitragen können. Vertiefen Sie Ihr Wissen über Ergonomie, arbeitsbedingte Erkrankungen und Interventionen mit Schwerpunkt auf Prävention und Wiedereingliederung.",
      topics: {
        "ergonomie": {
          title: "Ergonomie",
          description: "Ergonomie konzentriert sich auf die Optimierung der Arbeitsumgebung zur Förderung von Gesundheit, Sicherheit und Produktivität. Lernen Sie, wie Sie Arbeitsplatzanalysen durchführen und ergonomische Interventionen implementieren können.",
          learningGoals: [
            "Arbeitsplatzanalysen durchführen können",
            "Ergonomische Risikofaktoren identifizieren können",
            "Beratung zu Arbeitsplatzanpassungen anbieten können",
            "Wirksamkeit ergonomischer Interventionen bewerten können"
          ]
        },
        "duurzameInzetbaarheid": {
          title: "Nachhaltige Beschäftigungsfähigkeit",
          description: "Nachhaltige Beschäftigungsfähigkeit betrifft die Fähigkeit von Arbeitnehmern, während ihrer gesamten Karriere gesund und produktiv zu bleiben. Lernen Sie, wie Sie Interventionen entwickeln können, die zur Erhaltung der Arbeitsfähigkeit beitragen.",
          learningGoals: [
            "Faktoren analysieren können, die die nachhaltige Beschäftigungsfähigkeit beeinflussen",
            "Präventive Interventionen für verschiedene Berufsgruppen entwickeln können",
            "Wiedereingliederungsprozesse begleiten können",
            "Mit Arbeitgebern und anderen Interessengruppen im Bereich der betrieblichen Gesundheitsversorgung zusammenarbeiten können"
          ]
        }
      }
    },
    explorePain: {
      title: "EXPLORE PAIN",
      subtitle: "Schmerz verstehen und behandeln",
      intro: "Tauchen Sie ein in die komplexe Welt des Schmerzes und der Schmerzbehandlung. Lernen Sie über moderne Schmerzwissenschaft, biopsychosoziale Modelle und evidenzbasierte Interventionen für Patienten mit akuten und chronischen Schmerzen.",
      topics: {
        "pijnwetenschap": {
          title: "Schmerzwissenschaft",
          description: "Die Wissenschaft des Schmerzes hat in den letzten Jahrzehnten große Entwicklungen durchgemacht. Erfahren Sie mehr über die neuesten Erkenntnisse zu Schmerzmechanismen und die neurobiologische Basis verschiedener Schmerztypen.",
          learningGoals: [
            "Die neurobiologischen Mechanismen des Schmerzes erklären können",
            "Verschiedene Arten von Schmerzen erkennen und klassifizieren können",
            "Faktoren verstehen, die das Schmerzerleben beeinflussen",
            "Moderne Schmerzmodelle in der klinischen Praxis anwenden können"
          ]
        },
        "pijnbehandeling": {
          title: "Schmerzmanagement",
          description: "Effektives Schmerzmanagement erfordert einen multimodalen Ansatz, der auf den Einzelnen ausgerichtet ist. Lernen Sie über evidenzbasierte Interventionen und wie Sie diese innerhalb eines biopsychosozialen Rahmens anwenden können.",
          learningGoals: [
            "Einen personalisierten Schmerzmanagementplan entwickeln können",
            "Verhaltensinterventionen für Schmerzmanagement anwenden können",
            "Patienten über Schmerz aufklären können",
            "Die Wirksamkeit von Schmerzinterventionen bewerten können"
          ]
        }
      }
    },
    patientJourney: {
      title: "PATIENT JOURNEY",
      subtitle: "Die Reise des Patienten durch das Gesundheitswesen",
      intro: "Verfolgen Sie die Reise des Patienten durch die Gesundheitslandschaft und entdecken Sie, wie Physiotherapeuten zu einer positiven Patientenerfahrung beitragen können. Lernen Sie über patientenzentrierte Pflege, Übergänge in der Pflege und interdisziplinäre Zusammenarbeit.",
      topics: {
        "patientExperience": {
          title: "Patientenerfahrung",
          description: "Die Erfahrung von Patienten hat einen großen Einfluss auf Behandlungsergebnisse und Therapietreue. Lernen Sie, wie Sie die Patientenerfahrung optimieren und eine therapeutische Beziehung aufbauen können, die auf Vertrauen und Zusammenarbeit basiert.",
          learningGoals: [
            "Faktoren identifizieren können, die die Patientenerfahrung beeinflussen",
            "Kommunikationstechnieken anwenden können, die patientenzentrierte Pflege fördern",
            "Patientenfeedback sammeln und für Qualitätsverbesserungen nutzen können",
            "Eine therapeutische Umgebung schaffen können, die die Genesung fördert"
          ]
        },
        "zorgcontinuiteit": {
          title: "Kontinuität der Versorgung",
          description: "Kontinuität der Versorgung ist wesentlich für effektive Behandlungsverläufe. Lernen Sie, wie Sie mit anderen Gesundheitsfachkräften zusammenarbeiten und nahtlose Übergänge zwischen verschiedenen Pflegephasen erleichtern können.",
          learningGoals: [
            "Kritische Momente im Pflegeweg identifizieren können",
            "Effektiv mit anderen Gesundheitsdienstleistern kommunizieren können",
            "Pflegepläne entwickeln können, die Kontinuität gewährleisten",
            "Interdisziplinäre Zusammenarbeit bei komplexen Pflegebedürfnissen fördern können"
          ]
        }
      }
    }
  },
}; 