type Translation = {
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
      }
    }
  };
};

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
      startButton: "Begin met Leren",
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
        'Patient Journey': 'The patient journey through the healthcare process',
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
    }
  },
}; 