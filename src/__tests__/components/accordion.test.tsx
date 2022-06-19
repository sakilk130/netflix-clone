import { fireEvent, render } from "@testing-library/react";
import { Accordion } from "../../components";
import { IFaqsData } from "../../containers/faqs";
import faqsData from "../../fixtures/faqs.json";

describe("<Accordion />", () => {
  it("renders the <Accordion /> with a populated data", () => {
    const { container, getByText } = render(
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
      </Accordion>
    );

    expect(getByText("Frequently Asked Questions")).toBeTruthy();
    expect(getByText("What is Netflix?")).toBeTruthy();
    expect(getByText("How much does Netflix cost?")).toBeTruthy();
    expect(getByText("Where can I watch?")).toBeTruthy();
    expect(getByText("How do I cancel?")).toBeTruthy();
    expect(getByText("What can I watch on Netflix?")).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });

  it("opens and closes the <Accordion /> component", () => {
    const { container, queryByText } = render(
      <Accordion>
        <Accordion.Title>Frequently Asked Questions</Accordion.Title>
        <Accordion.Frame>
          {faqsData.map((item) => (
            <Accordion.Item key={item.id}>
              <Accordion.Header>{item.header}</Accordion.Header>
              <Accordion.Body data-testid="accordion-body">
                {item.body}
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion.Frame>
      </Accordion>
    );

    const whatIsNetflixBodyText =
      "Netflix has an extensive library of feature films, documentaries, TV programmes, anime, award-winning Netflix originals, and more. Watch as much as you want, any time you want.";

    // expect(queryByText(whatIsNetflixBodyText)).toBeFalsy();
    fireEvent.click(queryByText("What can I watch on Netflix?"));
    expect(queryByText(whatIsNetflixBodyText)).toBeTruthy();

    fireEvent.click(queryByText("What can I watch on Netflix?"));
    // expect(queryByText(whatIsNetflixBodyText)).toBeFalsy();
    expect(container.firstChild).toMatchSnapshot();
  });
});
