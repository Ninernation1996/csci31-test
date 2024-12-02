





const cards = [
  {
    title: 'The Tesla Roadster',
    img: "img/teslaroadster.jpg",
    paragraph: 0,
    tags: 0 
  },
  {
    title: 'The Tesla Model S',
    img: "img/teslamodel3.jpg",
    paragraph: 1,
    tags: 1 
  },
  {
    title: 'The Tesla Robot',
    img: "img/teslarobot.jpg",
    paragraph: 2,
    tags: 2 
  }
];

function Main() {
  return (
    <main>
      <div className="flex gap-x-12 my-12 flex-wrap gap-y-6" id="card-container">
        {cards.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            image={card.img}
            paragraph={card.paragraph}
            tags={card.tags}
          />
        ))}
      </div>
      <MainFlex> 
         <FlexOne>
          <span>#Elon-Musk</span>
        </FlexOne>
        <FlexTwo>
          <span>#Future</span>
        </FlexTwo>
        <FlexThree>
          <span>#Self-Driving</span>
        </FlexThree>

      </MainFlex>
      
      
      
    </main>
  );
}

