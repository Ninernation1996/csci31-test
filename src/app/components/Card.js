import Content from './Content';
import Tags from './Pill';

function Card({ title, image, paragraph, tags }) {
  const para = Content(paragraph);
  const tag = Tags(tags);
  return (
    <div className="flex-grow w-96 bg-stone-50 flex flex-col rounded-lg hover:scale-105 transition-all shadow-lg">
      <img
        className="rounded-t-lg"
        src={image}
        alt={title}
      />
      <div className="flex flex-col gap-y-4 px-8 py-6">
        <h2 className="text-xl font-bold">{title}</h2>
        {typeof para === 'string' ? <p>{para}</p> : para}
        <div className="flex gap-x-4">
          {tag}
        </div>



      </div>
    </div>
  );
}
export default Card;

