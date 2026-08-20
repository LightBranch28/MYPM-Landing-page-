import { ChevronDown } from 'lucide-react'

const questions = [
  {
    question: 'What is MYPM?',
    answer: 'MYPM (My Project Manager) is an intelligent project execution platform designed to help people and organisations plan, manage, track, and deliver real-world projects. It helps turn a project into actionable stages, dependencies, resources, and execution guidance.',
  },
  {
    question: 'Who is MYPM for?',
    answer: 'MYPM is designed for anyone taking a project from an idea to completion, including individuals, entrepreneurs, businesses, contractors, project teams, organisations, and professionals managing projects of different sizes and complexity.',
  },
  {
    question: 'Is MYPM an AI project manager?',
    answer: 'Yes. AI is at the core of MYPM. It is being developed as an intelligent project-management companion that can understand your project, guide execution, identify potential issues, and support better decisions.',
  },
  {
    question: 'Is MYPM a to-do app?',
    answer: 'No. To-do apps help you remember tasks. MYPM is designed to help you execute projects by connecting objectives, stages, dependencies, people, resources, timelines, budgets, and decisions.',
  },
  {
    question: 'How is MYPM different from other project-management apps?',
    answer: 'Traditional tools help you organise tasks, timelines, and teams. MYPM is being built to go further by helping you understand the project, turn objectives into an actionable execution structure, manage dependencies and resources, track progress, and keep decisions anchored to real context.',
  },
  {
    question: 'What types of projects can MYPM manage?',
    answer: 'MYPM is being designed for a wide range of real-world projects, including construction projects, business launches, events, creative projects, technology projects, personal projects, and organisational initiatives.',
  },
  {
    question: 'Is MYPM currently available?',
    answer: 'MYPM is currently in development. We are building and testing the core product and preparing it for its first users. Join the early-access list to receive updates about development and the upcoming launch.',
  },
  {
    question: 'When will MYPM launch?',
    answer: 'MYPM is under development, and the public launch date will be announced as development progresses. Join the early-access list to be among the first to receive launch updates.',
  },
  {
    question: 'Will there be a free plan?',
    answer: 'Yes. MYPM is planned to offer a free entry-level experience alongside paid plans for users and organisations that need more advanced capabilities. Specific features and pricing will be announced closer to launch.',
  },
  {
    question: 'Can businesses use MYPM?',
    answer: 'Yes. MYPM is being designed for both individuals and organisations. Businesses will be able to structure projects, coordinate teams, monitor progress, manage resources, and gain greater visibility into project execution.',
  },
  {
    question: 'How does MYPM use AI?',
    answer: 'MYPM uses AI to help transform project information into an actionable execution structure. The goal is for users to describe what they want to accomplish while MYPM helps translate that objective into stages, tasks, dependencies, timelines, resources, and execution guidance.',
  },
  {
    question: 'How can I join the early-access list?',
    answer: "Sign up through the MYPM early-access form on the website. You will receive updates about the product, development milestones, and launch opportunities.",
  },
  {
    question: 'How can I become a partner or investor?',
    answer: 'We are open to conversations with strategic partners, technology collaborators, and investors who believe in the future of intelligent project execution. Contact our team through the partnership or investment enquiry form. Investment opportunities are subject to discussion and formal due diligence.',
  },
]

function FAQ() {
  return (
    <section className="landing-section faq-section" id="faq" aria-labelledby="faq-title">
      <div className="section-inner faq-layout">
        <div className="section-heading align-left faq-intro">
          <p className="eyebrow">Frequently asked questions</p>
          <h2 id="faq-title">Everything you need to know about MYPM.</h2>
          <p>Still curious about the product, its direction, or who it is built for? Start here.</p>
        </div>

        <div className="faq-list">
          {questions.map(({ question, answer }, index) => (
            <details key={question} className="faq-item" open={index === 0}>
              <summary>
                <span>{question}</span>
                <ChevronDown size={19} aria-hidden="true" />
              </summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
