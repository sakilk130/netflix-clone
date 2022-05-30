import Jumbotron from "./components/Jumbotron";
import jumboData from "./fixtures/jumbo.json";
interface IJumboData {
  id: number;
  title: string;
  subTitle: string;
  image: string;
  alt: string;
  direction?: string;
}
function App() {
  return (
    <Jumbotron.Container>
      {jumboData?.map((jumbo: IJumboData) => (
        <Jumbotron key={jumbo?.id} direction={jumbo?.direction}>
          <Jumbotron.Pane>
            <Jumbotron.Title>{jumbo?.title}</Jumbotron.Title>
            <Jumbotron.SubTitle>{jumbo?.subTitle}</Jumbotron.SubTitle>
          </Jumbotron.Pane>
          <Jumbotron.Pane>
            <Jumbotron.Image src={jumbo?.image} alt={jumbo?.alt}/>
          </Jumbotron.Pane>
        </Jumbotron>
      ))}
    </Jumbotron.Container>
  );
}

export default App;
