import React from 'react';
import { Chrono } from 'react-chrono';



export default function Experience() {
  // Check if window is defined before rendering Chrono component
  const isBrowser = typeof window !== 'undefined';

  // Items for Chrono component
  const items = [
    {
      title: "Dec 2023 - Jan 2024",
      cardTitle: "AI Software Engineer Intern @ Marcopolo Holidays – Sharjah, UAE.",
      cardSubtitle: "Automated the process of storing flight ticket information with python scripts to parse emails and extract information. Built a REST API using Node and Express to receive the information from the database. Designed a Frontend dashboard visualize the data through charts and tables.",
    },
    {
      title: "June 2023 – July 2023",
      cardTitle: "Software Developer Intern @ Infibeam – Dubai, UAE.",
      cardSubtitle: "Implemented Several React UI components for ecommerce websites. Implemented shopping cart feature to ease customers to add, remove items from their cart (Redux, Redux-saga). Debugged existing features to make them more efficient.",
    },
    {
      title: "May 2022 – Aug 2022",
      cardTitle: "Web Developer Freelancer @ OGS & CHEMICALS FZC – Sharjah, UAE.",
      cardSubtitle: "Remodeled the existing website to make it more responsive, animated, and user friendly. Worked with technologies like HTML, CSS, React Js, Bootstrap, and Javascript.",
    },
    {
      title: "June 2021 - Aug 2021",
      cardTitle: "Intern",
      cardSubtitle: "Global Piping Material FZCO – Jebel Ali, UAE.",
      cardDetailedText: "Worked with Microsoft Excel to generate Purchase Orders and Sales Invoices.",
    }
  ];

  return (
    <>
      <h1 className="text-4xl max-w-[1450px] text-white font-bold mb-4 mx-auto p-8">Experience</h1>
      <div className='flex items-center justify-center flex-col max-w-[2150px]'>
        {/* Render Chrono component only if window is defined */}
        {isBrowser && (
          <Chrono
            lineColor="#F7AB0A"
            items={items}
            mode="VERTICAL_ALTERNATING"
            hideControls={true}
            slideShow
            slideItemDuration={4500}
            cardWidth={600}
          />
        )}
      </div>
    </>
  );
}
