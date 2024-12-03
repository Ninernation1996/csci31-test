import Card from "./Card";
import MainFlex from "./Flex";
import { FlexOne, FlexTwo, FlexThree } from "./Flex";






const cards = [
  {
    title: 'The Tesla Roadster',
    img: "./teslaroadster.jpg",
    paragraph: 0,
    tags: 0
  },
  {
    title: 'The Tesla Model S',
    img: "./teslamodel3.jpg",
    paragraph: 1,
    tags: 1
  },
  {
    title: 'The Tesla Robot',
    img: "/teslarobot.jpg",
    paragraph: 2,
    tags: 2
  }
];

function Main() {
  return (
    <main>
      <div className="flex gap-x-12 my-12 flex-wrap gap-y-6" id="card-container">
        {cards.map((card, index) => (
          <div key={index}>
            <Card
              title={card.title}
              image={card.img}
              paragraph={card.paragraph}
              tags={card.tags}
            />
          </div>
        ))}
      </div>
      <MainFlex classNames="main-flex" children={undefined}>
         <FlexOne children={undefined} classNames={undefined}>
          <span>#Elon-Musk</span>
        </FlexOne>
        <FlexTwo children={undefined} classNames={undefined}>
          <span>#Future</span>
        </FlexTwo>
        <FlexThree children={undefined} classNames={undefined}>
          <span>#Self-Driving</span>
        </FlexThree>

      </MainFlex>



    </main>
  );
}
export default Main;

