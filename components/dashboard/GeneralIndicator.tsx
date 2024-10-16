"use client";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
const accordionStyles = "flex  justify-between gap-10 py-2 border-2 px-6 ";
const commentStyles = "flex-1 text-start";
const thStyles = "flex-1 text-start";

const GeneralIndicator = () => {
  return (
    <div className="  mt-10 ">
      <h1 className="font-bold text-2xl"> Departmental Weekly Reports</h1>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Emergency Department(ED)</AccordionTrigger>
          <AccordionContent>
            <div className="w-full">
              <table>
                <thead>
                  <tr className={accordionStyles}>
                    <th className={thStyles}>Indicator</th>
                    <th className={`${thStyles} hidden md:block`}>Value</th>
                    <th className={commentStyles}>Comment</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className={accordionStyles}>
                    <td className="flex-1">ED wait time</td>
                    <td className="flex-1 hidden md:block">13hrs</td>
                    <td className={commentStyles}>Fair</td>
                  </tr>
                  <tr className={accordionStyles}>
                    <td className="flex-1">Total patients</td>
                    <td className="flex-1 hidden md:block">120</td>
                    <td className={commentStyles}>Low</td>
                  </tr>
                  <tr className={accordionStyles}>
                    <td className="flex-1">Average length of stay(ALOS)</td>
                    <td className="flex-1 hidden md:block">12hrs</td>
                    <td className={commentStyles}>Fair</td>
                  </tr>{" "}
                  <tr className={accordionStyles}>
                    <td className="flex-1">Left without seen</td>
                    <td className="flex-1 hidden md:block">5</td>
                    <td className={commentStyles}>High</td>
                  </tr>{" "}
                  <tr className={accordionStyles}>
                    <td className="flex-1">Triage time</td>
                    <td className="flex-1 hidden md:block">1hr</td>
                    <td className={commentStyles}>Fair</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Inpatient Department</AccordionTrigger>
          <AccordionContent>
            <div className="w-full">
              <table>
                <thead>
                  <tr className={accordionStyles}>
                    <th className={thStyles}>Indicator</th>
                    <th className={`${thStyles} hidden md:block`}>Value</th>

                    <th className={commentStyles}>Comment</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className={accordionStyles}>
                    <td className=" flex-1">Bed occupancy rate</td>
                    <td className=" flex-1 hidden md:block">5</td>
                    <td className={commentStyles}>under utilized</td>
                  </tr>
                  <tr className={accordionStyles}>
                    <td className=" flex-1">Average length of stay(ALOS)</td>
                    <td className=" flex-1 hidden md:block">23rs</td>
                    <td className={commentStyles}>High</td>
                  </tr>
                  <tr className={accordionStyles}>
                    <td className=" flex-1">Readmission rate</td>
                    <td className=" flex-1 hidden md:block">2</td>
                    <td className={commentStyles}>Low</td>
                  </tr>{" "}
                  <tr className={accordionStyles}>
                    <td className=" flex-1">Discharge rate</td>
                    <td className=" flex-1 hidden md:block">5</td>
                    <td className={commentStyles}>Low</td>
                  </tr>{" "}
                  <tr className={accordionStyles}>
                    <td className=" flex-1">
                      Average patient satisafaction score
                    </td>
                    <td className=" flex-1 hidden md:block">10.5</td>
                    <td className={commentStyles}>Poor</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Surgery Department</AccordionTrigger>
          <AccordionContent>
            <div className="w-full">
              <table>
                <thead>
                  <tr className={accordionStyles}>
                    <th className={thStyles}>Indicator</th>
                    <th className={`${thStyles} hidden md:block`}>Value</th>
                    <th className={commentStyles}>Comment</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className={accordionStyles}>
                    <td className="flex-1">Surgery schedule adherence</td>
                    <td className="flex-1 hidden md:block">0.7</td>
                    <td className={commentStyles}>Poor</td>
                  </tr>
                  <tr className={accordionStyles}>
                    <td className="flex-1">Operation room utilization</td>
                    <td className="flex-1 hidden md:block">12 max</td>
                    <td className={commentStyles}>Under utilized</td>
                  </tr>
                  <tr className={accordionStyles}>
                    <td className="flex-1">Case cancellation rate</td>
                    <td className="flex-1 hidden md:block">0.4</td>
                    <td className={commentStyles}>Satisfactory</td>
                  </tr>{" "}
                  <tr className={accordionStyles}>
                    <td className="flex-1">Patient wait time</td>
                    <td className="flex-1 hidden md:block">5hrs max</td>
                    <td className={commentStyles}>Fair</td>
                  </tr>{" "}
                  <tr className={accordionStyles}>
                    <td className="flex-1">Surgical site infection rate</td>
                    <td className="flex-1 hidden md:block">0.7</td>
                    <td className={commentStyles}>Satisfactory</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>
            Intensive care Unit Department(ICU)
          </AccordionTrigger>
          <AccordionContent>
            <div className="w-full">
              <table>
                <thead>
                  <tr className={accordionStyles}>
                    <th className={thStyles}>Indicator</th>
                    <th className={`${thStyles} hidden md:block`}>Value</th>
                    <th className={commentStyles}>Comment</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className={accordionStyles}>
                    <td className="flex-1">ICU bed occupancy rate</td>
                    <td className="flex-1 hidden md:block">78%</td>
                    <td className={commentStyles}>Over utilized</td>
                  </tr>
                  <tr className={accordionStyles}>
                    <td className="flex-1">Ventilator utilization</td>
                    <td className="flex-1 hidden md:block">15 max</td>
                    <td className={commentStyles}>over stretched</td>
                  </tr>
                  <tr className={accordionStyles}>
                    <td className="flex-1">Mortality rate</td>
                    <td className="flex-1 hidden md:block">Over utilized</td>
                    <td className={commentStyles}>low</td>
                  </tr>{" "}
                  <tr className={accordionStyles}>
                    <td className="flex-1">Medication turnaround time</td>
                    <td className="flex-1 hidden md:block">Over utilized</td>
                    <td className={commentStyles}>Satisfactory</td>
                  </tr>{" "}
                  <tr className={accordionStyles}>
                    <td className="flex-1">Patient satisfaction score </td>
                    <td className="flex-1 hidden md:block">1.56</td>
                    <td className={commentStyles}>Fair</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger>Pharmacy Department</AccordionTrigger>
          <AccordionContent>
            <div className="w-full">
              <table>
                <thead>
                  <tr className={accordionStyles}>
                    <th className={thStyles}>Indicator</th>
                    <th className={`${thStyles} hidden md:block`}>Value</th>
                    <th className={commentStyles}>Comment</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className={accordionStyles}>
                    <td className="flex-1">Medication error rate</td>
                    <td className="flex-1 hidden md:block">40%</td>
                    <td className={commentStyles}>Fair</td>
                  </tr>
                  <tr className={accordionStyles}>
                    <td className="flex-1">Prescription fill rate</td>
                    <td className="flex-1 hidden md:block">14.6%</td>
                    <td className={commentStyles}>Poor</td>
                  </tr>
                  <tr className={accordionStyles}>
                    <td className="flex-1">Medication turn around time</td>
                    <td className="flex-1 hidden md:block">4hrs</td>
                    <td className={commentStyles}>low</td>
                  </tr>{" "}
                  <tr className={accordionStyles}>
                    <td className="flex-1">Inventory levels</td>
                    <td className="flex-1 hidden md:block">1.05</td>
                    <td className={commentStyles}>Low</td>
                  </tr>{" "}
                  <tr className={accordionStyles}>
                    <td className="flex-1">Patient satisfaction score </td>
                    <td className="flex-1 hidden md:block">10.6</td>
                    <td className={commentStyles}>Fair</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-6">
          <AccordionTrigger>Laboratory Department</AccordionTrigger>
          <AccordionContent>
            <div className="w-full">
              <table>
                <thead>
                  <tr className={accordionStyles}>
                    <th className={thStyles}>Indicator</th>
                    <th className={`${thStyles} hidden md:block`}>Value</th>
                    <th className={commentStyles}>Comment</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className={accordionStyles}>
                    <td className="flex-1">Test turnaround time</td>
                    <td className="flex-1 hidden md:block">6hrs</td>
                    <td className={commentStyles}>High</td>
                  </tr>
                  <tr className={accordionStyles}>
                    <td className="flex-1">Test volume</td>
                    <td className="flex-1 hidden md:block">15</td>
                    <td className={commentStyles}>Poor</td>
                  </tr>
                  <tr className={accordionStyles}>
                    <td className="flex-1">Error rate</td>
                    <td className="flex-1 hidden md:block">4.3%</td>
                    <td className={commentStyles}>low</td>
                  </tr>{" "}
                  <tr className={accordionStyles}>
                    <td className="flex-1">Result delivery time</td>
                    <td className="flex-1 hidden md:block">2hrs max</td>
                    <td className={commentStyles}>Satisfactory</td>
                  </tr>{" "}
                  <tr className={accordionStyles}>
                    <td className="flex-1">Patient satisfaction score </td>
                    <td className="flex-1 hidden md:block">3.56</td>
                    <td className={commentStyles}>low</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-7">
          <AccordionTrigger>Radiology Department</AccordionTrigger>
          <AccordionContent>
            <div className="w-full">
              <table>
                <thead>
                  <tr className={accordionStyles}>
                    <th className={thStyles}>Indicator</th>
                    <th className={`${thStyles} hidden md:block`}>Value</th>
                    <th className={commentStyles}>Comment</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className={accordionStyles}>
                    <td className="flex-1">Exam volume</td>
                    <td className="flex-1 hidden md:block">78</td>
                    <td className={commentStyles}>High</td>
                  </tr>
                  <tr className={accordionStyles}>
                    <td className="flex-1">Report turnaround time</td>
                    <td className="flex-1 hidden md:block">12hr max</td>
                    <td className={commentStyles}>Poor</td>
                  </tr>
                  <tr className={accordionStyles}>
                    <td className="flex-1">Image quality score</td>
                    <td className="flex-1 hidden md:block">0.54</td>
                    <td className={commentStyles}>low</td>
                  </tr>{" "}
                  <tr className={accordionStyles}>
                    <td className="flex-1">Radiation exposure level</td>
                    <td className="flex-1 hidden md:block ">0.2</td>
                    <td className={commentStyles}>Satisfactory</td>
                  </tr>{" "}
                  <tr className={accordionStyles}>
                    <td className="flex-1">Patient satisfaction score </td>
                    <td className="flex-1 hidden md:block">0.56</td>
                    <td className={commentStyles}>Poor</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-8">
          <AccordionTrigger>Outpatient Department</AccordionTrigger>
          <AccordionContent>
            <div className="w-full">
              <table>
                <thead>
                  <tr className={accordionStyles}>
                    <th className={thStyles}>Indicator</th>
                    <th className={`${thStyles} hidden md:block`}>Value</th>
                    <th className={commentStyles}>Comment</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className={accordionStyles}>
                    <td className="flex-1">Appointment no-show rate</td>
                    <td className="flex-1 hidden md:block">7%</td>
                    <td className={commentStyles}>Low</td>
                  </tr>
                  <tr className={accordionStyles}>
                    <td className="flex-1">Patient wait time</td>
                    <td className="flex-1 hidden md:block">2hr max</td>
                    <td className={commentStyles}>Satisfactory</td>
                  </tr>
                  <tr className={accordionStyles}>
                    <td className="flex-1">Visit volume</td>
                    <td className="flex-1 hidden md:block">5.54</td>
                    <td className={commentStyles}>Moderate</td>
                  </tr>{" "}
                  <tr className={accordionStyles}>
                    <td className="flex-1">Revenue generated</td>
                    <td className="flex-1 hidden md:block">$ 25,769</td>
                    <td className={commentStyles}>Satisfactory</td>
                  </tr>{" "}
                  <tr className={accordionStyles}>
                    <td className="flex-1">Patient satisfaction score </td>
                    <td className="flex-1 hidden md:block">7.56</td>
                    <td className={commentStyles}>Poor</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-9">
          <AccordionTrigger>Finance Department</AccordionTrigger>
          <AccordionContent>
            <div className="w-full">
              <table>
                <thead>
                  <tr className={accordionStyles}>
                    <th className={thStyles}>Indicator</th>
                    <th className={`${thStyles} hidden md:block`}>Value</th>
                    <th className={commentStyles}>Comment</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className={accordionStyles}>
                    <td className="flex-1">Revenue growth</td>
                    <td className="flex-1 hidden md:block">69%</td>
                    <td className={commentStyles}>High</td>
                  </tr>
                  <tr className={accordionStyles}>
                    <td className="flex-1">Expense ratio</td>
                    <td className="flex-1 hidden md:block">12:6</td>
                    <td className={commentStyles}>Moderate</td>
                  </tr>
                  <tr className={accordionStyles}>
                    <td className="flex-1">Overhead cost ratio</td>
                    <td className="flex-1 hidden md:block">10:6</td>
                    <td className={commentStyles}>High</td>
                  </tr>{" "}
                  <tr className={accordionStyles}>
                    <td className="flex-1">Bad debth Percentage</td>
                    <td className="flex-1 hidden md:block">12.7%</td>
                    <td className={commentStyles}>Low</td>
                  </tr>{" "}
                  <tr className={accordionStyles}>
                    <td className="flex-1">Operating margin </td>
                    <td className="flex-1 hidden md:block">0.96</td>
                    <td className={commentStyles}>Fair</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default GeneralIndicator;
