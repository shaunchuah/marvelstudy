import Image from "next/image";
import PublicationCard from "../components/PublicationCard";
import MotionPage from "../components/MotionPage";

export default function Investigators() {
  return (
    <MotionPage>
      <main className="flex flex-col items-center w-full flex-1">
        <section className="px-5 py-6 md:py-12 w-full" id="studydesign">
          <div className="flex flex-col">
            <div className="lg:w-1/2 w-full mb-6">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                Study Design
              </h1>
              <div className="h-1 w-20 bg-[#008000] rounded"></div>
            </div>
          </div>
          <div className="max-w-screen-lg mx-auto py-12">
            <Image
              src="/static/marvel_study_overview.png"
              alt="Marvel Study Design Overview"
              height="650"
              width="1920"
            />
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
              <p>
                MARVEL plans to recruit 250 adult patients. In parallel with our
                paediatric trial MiniMARVEL, this will form the first ever all
                ages IBD trial.
              </p>
            </div>
          </div>
        </section>

        <section className="px-5 py-6 md:py-12 w-full" id="endpoints">
          <div className="flex flex-col">
            <div className="lg:w-1/2 w-full mb-6">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                Endpoints
              </h1>
              <div className="h-1 w-20 bg-[#008000] rounded"></div>
            </div>
          </div>

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
              <ul className="list-disc list-outside pl-4 text-lg">
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
        </section>
        <section className="px-5 py-6 md:py-12 w-full" id="criteria">
          <div className="flex flex-col">
            <div className="lg:w-1/2 w-full mb-6">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                Inclusion &amp; Exclusion Criteria
              </h1>
              <div className="h-1 w-20 bg-[#008000] rounded"></div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="py-4">
              <h2 className="text-xl uppercase tracking-wider font-semibold text-[#008000] mb-2">
                Inclusion
              </h2>
              <ul className="list-disc list-outside pl-4 text-lg">
                <li>Active UC</li>
                <li>&ge;18 years old (miniMARVEL for under 18s)</li>
                <li>Established diagnosis of UC for &ge;3 months</li>
                <li>Able and willing to give informed consent</li>
                <li>
                  Able to take prednisolone at the same time as study
                  drug/placebo
                </li>
                <li>Stable on maintenance dose prior to flare</li>
                <li>5-ASA dose stable for at least 4 weeks</li>
                <li>Thiopurine dose stable for at least 8 weeks</li>
              </ul>
            </div>

            <div className="py-4">
              <h2 className="text-xl uppercase tracking-wider font-semibold text-[#008000] mb-2">
                Exclusion
              </h2>
              <ul className="list-disc list-outside pl-4 text-lg">
                <li>
                  Severe extensive colitis likely to require hospitalisation or
                  surgery
                </li>
                <li>Any previous biologic treatments</li>
                <li>UC confined to proctitis (15cm or less)</li>
                <li>UC with PSC</li>
                <li>Pregnancy</li>
                <li>
                  IV steroids, cyclosporin, mycophenolate or tacrolimus within 8
                  weeks of screening
                </li>
                <li>Proven GI infection</li>
                <li>Known allergy/contraindication to MitoQ</li>
                <li>Currently taking any products containing Coenzyme Q10</li>
                <li>
                  Subjects with current - or recent history of - severe,
                  progressive, or uncontrolled renal, hepatic, haematological,
                  gastrointestinal, metabolic (including uncontrolled
                  hypercholesterolemia), endocrine, pulmonary, cardiac,
                  neurological disease.
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
        </section>

        <section className="w-full" id="science">
          <div className="px-5 py-6 md:py-12">
            <div className="flex flex-col">
              <div className="lg:w-1/2 w-full mb-6">
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                  Scientific Basis
                </h1>
                <div className="h-1 w-20 bg-[#008000] rounded"></div>
              </div>
            </div>

            <PublicationCard
              publicationDate="10 Feb 2022"
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
          </div>
        </section>
        <section className="w-full" id="downloads">
          <div className="px-5 py-6 md:py-12">
            <div className="flex flex-col">
              <div className="lg:w-1/2 w-full mb-6">
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                  Downloads
                </h1>
                <div className="h-1 w-20 bg-[#008000] rounded"></div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </MotionPage>
  );
}
