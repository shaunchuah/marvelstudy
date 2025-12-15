import Image from "next/image";
import PublicationCard from "../components/PublicationCard";
import MotionPage from "../components/MotionPage";
import SectionHeader from "../components/SectionHeader";
import SectionWrapper from "../components/SectionWrapper";

export default function Investigators() {
  return (
    <MotionPage>
      <main className="flex flex-col w-full">
        <SectionWrapper id="design">
          <SectionHeader title="Study Design" />
          <div className="max-w-screen-lg mx-auto py-12">
            <Image
              src="/static/marvel_study_overview_2025.png"
              alt="Marvel Study Design Overview"
              height="574"
              width="1499"
              style={{
                maxWidth: "100%",
                height: "auto",
              }}
            />
            <div className="flex flex-row-reverse">
              <a
                href="/static/marvel_study_overview_2025.png"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#008000] text-gray-600 text-sm flex gap-1 flex-row"
              >
                Full Size Image
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Download Full Size Image</title>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  ></path>
                </svg>
              </a>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-4">
            <div className="border rounded p-4">
              <h2 className="text-xl uppercase tracking-wider font-semibold text-[#008000] mb-2">
                Design
              </h2>
              <p>
                MARVEL is a randomised, double-blind, multi-centre trial in
                patients with a moderate flare of ulcerative colitis.
              </p>
            </div>
            <div className="border rounded p-4">
              <h2 className="text-xl uppercase tracking-wider font-semibold text-[#008000] mb-2">
                Aims
              </h2>
              <p>
                MARVEL aims to test the validity of mitochondrial antioxidant
                therapy in the context of a UC flare.
              </p>
            </div>
            <div className="border rounded p-4">
              <h2 className="text-xl uppercase tracking-wider font-semibold text-[#008000] mb-2">
                Setting
              </h2>
              <p>
                MARVEL will initially open in Edinburgh, Glasgow and Dundee with
                a plan for 20 sites in total across the UK.
              </p>
            </div>
            <div className="border rounded p-4">
              <h2 className="text-xl uppercase tracking-wider font-semibold text-[#008000] mb-2">
                Population
              </h2>
              <p>MARVEL plans to recruit 250 adult patients.</p>
            </div>
          </div>
        </SectionWrapper>

        <SectionWrapper id="endpoints">
          <SectionHeader title="Endpoints" />
          <div className="grid md:grid-cols-2 gap-8">
            <div className="py-4">
              <h2 className="text-xl uppercase tracking-wider font-semibold text-[#008000] mb-2">
                Primary
              </h2>
              <ul>
                <li>
                  <h3 className="text-lg font-bold">
                    Clinical Response at Week 12
                  </h3>
                  <p>
                    A decrease from baseline Mayo Score of at least 3 points and
                    at least 30%, with accompanying decrease in the subscore for
                    rectal bleeding of at least 1 point or an absolute subscore
                    of rectal bleeding of 0 or 1.
                  </p>
                </li>
              </ul>
            </div>
            <div className="py-4">
              <h2 className="text-xl uppercase tracking-wider font-semibold text-[#008000] mb-2">
                Secondary
              </h2>
              <ul className="list-disc list-outside ml-4 pl-4 text-lg">
                <li>Clinical remission at week 12</li>
                <li>Clinical response and remission at week 24</li>
                <li>Mucosal healing</li>
                <li>Normalization of faecal calprotectin</li>
                <li>Normalization of faecal haemoglobin</li>
                <li>Treatment escalation rates</li>
                <li>Colectomy rates</li>
                <li>Adverse event rates</li>
                <li>Drug concentration analyses</li>
              </ul>
            </div>
          </div>
        </SectionWrapper>
        <SectionWrapper id="criteria">
          <SectionHeader title="Inclusion &amp; Exclusion Criteria" />

          <div className="grid md:grid-cols-2 gap-8">
            <div className="py-4 max-w-prose">
              <h2 className="text-xl uppercase tracking-wider font-semibold text-[#008000] mb-2">
                Inclusion
              </h2>
              <ul className="list-disc list-outside ml-4 pl-4 text-base">
                <li>
                  Active UC (Mayo of score 6 or greater with endoscopy subscore
                  of 2 or more)
                </li>
                <li>&ge;16 years old</li>
                <li>
                  Confirmed diagnosis of UC based on histology and endoscopic
                  evidence
                </li>
                <li>
                  Clinical evidence* of UC for more than 3 months prior to
                  screening. * this includes clinical evaluation by an
                  investigator from previous evidence of IBD based on
                  documentation, treatment and clinical history of the patient
                </li>
                <li>
                  Patients currently on or previously treated with advanced
                  therapies are permitted if patients flare whilst on these
                  treatments and require oral Prednisolone therapy. However,
                  patients on &gt;2 advanced therapies within last 2 years are
                  excluded (see also exclusion criteria)
                </li>
                <li>
                  Subjects currently receiving the following treatment for UC
                  are eligible providing they have been on stable dose for
                  designated period of time:
                  <ul className="list-disc list-outside ml-4 pl-4">
                    <li>
                      Oral 5-ASA or sulfasalazine stable dose for at least 4
                      weeks prior to inclusion and during the study period.
                      Maintenance oral 5-ASA range of doses includes Mezavant
                      1.2 to 2.4g/day; Pentasa 1 to 2g/day; and Asacol 1.2 to
                      2.4g/day. Treatment oral 5-ASA range of disease includes
                      Mezavant 2.4 to 4.8g/day; Pentasa 2 to 4g/day; and Asacol
                      2.4 to 4.8g/day. Dose escalation (either patient or
                      clinician-initiated) within this range in these 2 groups
                      is acceptable and is considered stable within 4 weeks of
                      screening
                    </li>
                    <li>
                      Azathioprine, 6-mercaptopurine stable dose for 8 weeks
                      prior to screening
                    </li>
                    <li>
                      Advanced therapies (e.g. infliximab, adalimumab,
                      certolizumab, vedolizumab, ustekinumab, Risankizumab,
                      figoltinib, tofactinib and Upadacitinib) for UC, stably
                      maintained for 8 weeks with no dose escalation, at any
                      dose prior to screening
                    </li>
                    <li>
                      Topical treatment (5-ASA or steroid based) for active UC
                      flare including suppository and enema for a week prior to
                      screening
                    </li>
                  </ul>
                </li>
                <li>
                  Previous treatment with oral Budesonide (e.g. Cortiment and
                  Clipper) is permitted if subjects are deemed to have
                  inadequate clinical response by PI’s clinical judgement
                </li>
                <li>
                  Previous treatment with oral Prednisolone is permitted if
                  subjects have been in clinical remission and not on this
                  treatment for &gt;3 months prior to screening
                </li>
                <li>
                  Previous immunosuppressive treatments (e.g. cyclosporine,
                  mycophenolate, or tacrolimus) are permitted if subjects have
                  been in clinical remission and not on these treatments for
                  &gt;1 year prior to screening
                </li>
                <li>
                  Previous intravenous corticosteroids for treatment of colitis
                  is permitted if subjects have been in clinical remission and
                  not on these treatments for &gt;1 year prior to screening
                </li>
                <li>Able and willing to give informed consent</li>
              </ul>
            </div>

            <div className="py-4 max-w-prose">
              <h2 className="text-xl uppercase tracking-wider font-semibold text-[#008000] mb-2">
                Exclusion
              </h2>
              <ul className="list-disc list-outside ml-4 pl-4 text-base">
                <li>
                  Severe extensive colitis as evidenced by:
                  <ul className="list-disc list-outside ml-4 pl-4">
                    <li>
                      Physician judgement that the subject is likely to require
                      hospitalisation for medical care or surgical intervention
                      of any kind for UC (e.g. colectomy) within 12 weeks of
                      baseline
                    </li>
                    <li>
                      Evidence of fulminant colitis, toxic megacolon or recent
                      history of toxic megacolon within the last 6 months; or
                      bowel perforation
                    </li>
                    <li>
                      Evidence of acute severe UC fulfilling Truelove and Witts
                      Criteria (&gt;6 bloody stools/day with evidence of any of
                      these features: tachycardia [&gt;90bpm], fever
                      [&gt;37.8C], anaemia [Hb &lt;10.5g/dl], low albumin
                      [&lt;30g/l])
                    </li>
                  </ul>
                </li>
                <li>
                  Subjects on &gt;2 advanced therapies within last 2 years prior
                  to screening (e.g. if subject had been treated with anti-TNF,
                  anti-IL23; and is currently on JAK-inhibitor and then presents
                  with a flare of UC is excluded)
                </li>
                <li>UC confined to proctitis (15cm or less)</li>
                <li>UC with Primary Sclerosing Cholangitis (PSC)</li>
                <li>
                  Diagnosis of Crohn&apos;s disease or indeterminate colitis
                </li>
                <li>
                  Pregnancy (Current or attempting to become pregnant during
                  trial period) or breastfeeding
                </li>
                <li>
                  Subjects with current - or recent history of - severe,
                  progressive, or uncontrolled renal, hepatic, haematological,
                  gastrointestinal, metabolic (including uncontrolled
                  hypercholesterolemia), endocrine, pulmonary, cardiac,
                  neurological disease
                </li>
                <li>
                  Subjects who have positive stool examinations for enteric
                  pathogens or Clostridium difficile toxin at screening
                </li>
                <li>Subjects with a known allergy/contraindication to MitoQ</li>
                <li>
                  Subjects currently taking any products containing Mitoquinol
                  mesylate (Coenzyme Q10) or any products containing Coenzyme
                  derivatives such as Coenzyme A (CoA, SCoA, CoASH). If subjects
                  are on these products, they can enter the trial after a 7-day
                  washout period
                </li>
                <li>
                  Subjects with current barriers in language or communication
                  that in the judgement of local PI will impede the completion
                  of the trial.
                </li>
                <li>
                  A history of overdose or suicide, or significant active mental
                  health problems.
                </li>
              </ul>
            </div>
          </div>
        </SectionWrapper>

        <SectionWrapper id="science">
          <SectionHeader title="Scientific Basis" />
          <PublicationCard
            publicationDate="10 February 2022"
            journal="Annual Review of Physiology"
            authors="Gwo-Tzer Ho, Arianne L. Theiss"
            title="Mitochondria and Inflammatory Bowel Diseases: Toward a Stratified Therapeutic Intervention
            Annual Review of Physiology"
            externalLink="https://doi.org/10.1146/annurev-physiol-060821-083306"
          />
          <PublicationCard
            publicationDate="12 November 2020"
            journal="Immunotherapy Advances"
            authors="Emily Gwyer Findlay, Greg Sutton, Gwo-Tzer Ho, BSI Inflammation Affinity Group Trialswatch Team"
            title="The MARVEL trial: a phase 2b randomised placebo-controlled trial of oral MitoQ in moderate ulcerative colitis"
            externalLink="https://academic.oup.com/immunotherapyadv/article/1/1/ltaa002/5985574"
          />
          <PublicationCard
            publicationDate="3 January 2019"
            journal="Nature Communications"
            authors="Yael Haberman, Rebekah Karns, Phillip J. Dexheimer, Melanie Schirmer, Judith Somekh, Ingrid Jurickova, Tzipi Braun, Elizabeth Novak, Laura Bauman, Margaret H. Collins, Angela Mo, Michael J. Rosen, Erin Bonkowski, Nathan Gotman, Alison Marquis, Mason Nistel, Paul A. Rufo, Susan S. Baker, Cary G. Sauer, James Markowitz, Marian D. Pfefferkorn, Joel R. Rosh, Brendan M. Boyle, David R. Mack, Robert N. Baldassano, Sapana Shah, Neal S. Leleiko, Melvin B. Heyman, Anne M. Grifiths, Ashish S. Patel, Joshua D. Noe, Bruce J. Aronow, Subra Kugathasan, Thomas D. Walters, Greg Gibson, Sonia Davis Thomas, Kevin Mollen, Shai Shen-Orr, Curtis Huttenhower, Ramnik J. Xavier, Jeffrey S. Hyams & Lee A. Denson."
            title="Ulcerative colitis mucosal transcriptomes reveal mitochondriopathy and personalized mechanisms underlying disease severity and treatment response"
            externalLink="https://www.nature.com/articles/s41467-018-07841-3"
          />
        </SectionWrapper>
      </main>
    </MotionPage>
  );
}
