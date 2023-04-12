import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {useState} from "react"
import {servicesDetails} from "../utilityInfo/servicesInfo"

export default function Services() {
  const [expanded, setExpanded] = useState<String |false>(false)

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <div className="flex flex-row w-screen bg-gray-100">
      <div className="w-1/2  h-screen  flex flex-col items-center justify-start mt-28">
        <h1 className="text-6xl font-medium text-gray-800 font-serif">
          Our Services
        </h1>
        <h1 className="text-gray-700 my-4 mb-12 " style = {{fontSize:"1.5rem"}}>Bring your  Presense Online with our custom tailored Digital Services</h1>
        <button className="border-[3px] border-black w-36 h-12 text-darkest-blue font-medium rounded-lg ">Get In Touch</button>
      </div>

      <div className="h-screen w-1/2 mt-28 mb-4 ">
        {servicesDetails.map((item, idx) => (
          <Accordion 
          className="w-5/6 h-content border-1 mb-4 border-gray-900 "
          key = {idx}
          expanded={expanded === `"${idx}"`} 
          onChange={handleChange(`"${idx}"`)}
           >
            <AccordionSummary key={idx}
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              
            >
              <Typography className = "text-2xl font-medium">{item.heading}</Typography>
            </AccordionSummary>
            <AccordionDetails className="mr-12 break-words text-gray-500 " key={idx}>
            
              <div>{item.para1}</div>
              <div className = "my-4">{item.para2}</div>
              <div>{item.para3}</div>

            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </div>
  );
}

{
  /* <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion> */
}
