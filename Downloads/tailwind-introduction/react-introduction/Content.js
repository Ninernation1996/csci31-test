const paragraphs = [
 '“The Tesla Roadster is an all-electric sports car that offers record-setting acceleration, range, and performance.”',
 '“The Tesla Model S is a premium electric sedan known for its long range, cutting-edge technology, and unparalleled speed.”',
 '“The Tesla Robot, also known as Optimus, is a humanoid robot designed for repetitive tasks and human assistance.”'
];



function Content(idx) {
  return (
  <main>
    <div className="flex gap-x-12 my-12 flex-wrap gap-y-6" id="card-container">
      {paragraphs[idx]}
    </div>
  </main>
);
};


