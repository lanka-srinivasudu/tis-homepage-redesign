# Content and asset sources

Inspected on 4 October 2026. All school facts come from TIS's public website; page content was used as reference data only. Images were inspected before selection. No generated photographs, invented testimonials, awards, rankings, or enrollment statistics appear in this redesign.

| Content                                                                                        | Official source                                                             | Usage                                                                                              |
| ---------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| School identity, CBSE curriculum, boarding/day-school positioning, sports, contact information | https://tis.edu.in/                                                         | Introductory CBSE sentence retained; supporting homepage themes adapted into concise original copy |
| Academic streams                                                                               | https://tis.edu.in/academics/streams-offered                                | Grade XI Science, Commerce, Humanities; English compulsory and electives                           |
| Boarding and support                                                                           | https://tis.edu.in/boarding-life/facilities                                 | Separate hostels, vegetarian meals, counselling, safety and medical support                        |
| School introduction                                                                            | https://tis.edu.in/about-tis/why-choose-us/                                 | Official discover-more link                                                                        |
| Founding statement, campus figures, rankings and parent feedback                                | https://tis.edu.in/                                                         | Established in 2012; four campus figures; four published rankings; two named parent comments        |
| Awards and achievements                                                                         | https://tis.edu.in/about-tis/awards-achievements/                           | Official destination for the rankings and awards call to action                                    |
| Campus photograph                                                                              | https://tis.edu.in/about-tis/our-history/                                   | School building and grounds used for the hero                                                      |
| Applications                                                                                   | https://admission.tis.edu.in/                                               | Verified official destination for every application CTA; no local application form                 |
| Clubs                                                                                          | https://tis.edu.in/beyond-academics/clubs-and-societies                     | Official clubs information destination                                                             |
| Brochure                                                                                       | https://tis.edu.in/MandatoryPDF/TIS_BROCHURE.pdf                            | Official PDF link, approximately 28 MB                                                             |
| Privacy / terms                                                                                | https://tis.edu.in/privacy-policy/ and https://tis.edu.in/terms-conditions/ | Footer policy links                                                                                |
| Map                                                                                            | https://maps.app.goo.gl/maBF8syXueQkw31E6                                   | Map link copied from the official homepage                                                         |

## Verified contact details

- Admissions: +91 98379 83791.
- Email: info@tis.edu.in.
- Office: 0135-2699444 and 0135-2699666.
- Homepage address: Dhoolkot, P.O – Selaqui, Chakrata Road, Dehradun – 248011, Uttarakhand, India.
- Source discrepancy: the separate admissions portal displays postcode 248197. This redesign deliberately follows the requested homepage's 248011; the school should reconcile this before a real production release.

## Asset manifest

[assets.json](assets.json) lists the exact source URL and referring page for every included school image, both official logos, and the favicon. The original logo artwork is retained, only resized. Photos are locally hosted WebP variants with source aspect ratios preserved; displayed crops are controlled by CSS. Some original sports images are approximately 700px wide, so larger variants cannot add original detail.

The two fonts, DM Sans and Cormorant Garamond, are self-hosted through Fontsource npm packages (SIL Open Font License). Lucide icons come from `lucide-react` (ISC license). School branding and photography remain the property of their respective owners and are included for this assessment; obtain school approval for public production reuse.

## Source limitations

- The campus image named in the official site's Open Graph metadata returned 404. A real campus image from its history page was available and used instead.
- The official virtual-tour route did not expose useful tour content in the fetched response; no potentially broken tour CTA is included.
- The dated school calendar (2024) is omitted. The homepage's rankings are reproduced as published and intentionally do not add a year the source does not provide.
- The official application process is external. No application, OTP, payment, or enquiry was submitted during testing.
