import { Accordion, OptForm } from "../components";
import faqsData from "../fixtures/faqs.json";

export interface IFaqsData {
  id: number;
  header: string;
  body: string;
}

const FaqsContainer = () => {
  return (
    <Accordion>
      <Accordion.Title>Frequently Asked Questions</Accordion.Title>
      <Accordion.Frame>
        {faqsData?.map((faq: IFaqsData) => (
          <Accordion.Item key={faq?.id}>
            <Accordion.Header>{faq?.header}</Accordion.Header>
            <Accordion.Body>{faq?.body}</Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion.Frame>

      <OptForm>
        <OptForm.Text>
          Ready to watch? Enter your email to create or restart your membership.
        </OptForm.Text>
        <OptForm.Input placeholder="Enter address" />
        <OptForm.Button>Try it now</OptForm.Button>
        <OptForm.Break />
      </OptForm>
    </Accordion>
  );
};

export default FaqsContainer;
