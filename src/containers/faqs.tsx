import { Accordion } from "../components";
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
      {faqsData?.map((faq: IFaqsData) => (
        <Accordion.Item key={faq?.id}>
          <Accordion.Header>{faq?.header}</Accordion.Header>
          <Accordion.Body>{faq?.body}</Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  );
};

export default FaqsContainer;
